// Getting an access token for the Play Developer API from a Cloudflare
// Worker, with nothing but Web Crypto.
//
// Google's own client libraries assume Node, so the service-account flow is
// done by hand here: build a JWT, sign it RS256 with the service account's
// private key, and trade it for an access token. It is about forty lines and
// avoids pulling a Node-shimmed SDK into a Worker.

export type ServiceAccount = {
  client_email: string;
  private_key: string;
};

const TOKEN_URL = "https://oauth2.googleapis.com/token";
const SCOPE = "https://www.googleapis.com/auth/androidpublisher";

export function base64url(input: ArrayBuffer | string): string {
  const bytes =
    typeof input === "string" ? new TextEncoder().encode(input) : new Uint8Array(input);

  let binary = "";
  for (const byte of bytes) binary += String.fromCharCode(byte);

  return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

/**
 * Service-account JSON stores the key as PEM. Web Crypto wants the raw
 * PKCS#8 bytes, so strip the armour and decode.
 */
export function pemToPkcs8(pem: string): ArrayBuffer {
  const body = pem
    .replace(/-----BEGIN PRIVATE KEY-----/, "")
    .replace(/-----END PRIVATE KEY-----/, "")
    .replace(/\s+/g, "");

  const binary = atob(body);
  const bytes = new Uint8Array(binary.length);
  for (let index = 0; index < binary.length; index += 1) {
    bytes[index] = binary.charCodeAt(index);
  }
  return bytes.buffer;
}

/** Signs the assertion Google's token endpoint expects. */
export async function signJwt(
  account: ServiceAccount,
  now: number = Math.floor(Date.now() / 1000),
): Promise<string> {
  const header = base64url(JSON.stringify({ alg: "RS256", typ: "JWT" }));
  const claims = base64url(
    JSON.stringify({
      iss: account.client_email,
      scope: SCOPE,
      aud: TOKEN_URL,
      iat: now,
      exp: now + 3600,
    }),
  );

  const key = await crypto.subtle.importKey(
    "pkcs8",
    pemToPkcs8(account.private_key),
    { name: "RSASSA-PKCS1-v1_5", hash: "SHA-256" },
    false,
    ["sign"],
  );

  const signature = await crypto.subtle.sign(
    "RSASSA-PKCS1-v1_5",
    key,
    new TextEncoder().encode(`${header}.${claims}`),
  );

  return `${header}.${claims}.${base64url(signature)}`;
}

type CachedToken = { value: string; expiresAt: number };
let cached: CachedToken | null = null;

/**
 * An access token, reused until shortly before it expires. The cache lives
 * in the isolate, so a cold start simply fetches a new one — correct either
 * way, and it keeps us well inside Google's quotas.
 */
export async function accessToken(serviceAccountJson: string): Promise<string> {
  const now = Math.floor(Date.now() / 1000);
  if (cached && cached.expiresAt > now + 60) return cached.value;

  const account = JSON.parse(serviceAccountJson) as ServiceAccount;
  const assertion = await signJwt(account, now);

  const response = await fetch(TOKEN_URL, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
      assertion,
    }),
  });

  if (!response.ok) {
    // Deliberately vague: the body can echo parts of the assertion.
    throw new Error(`token exchange failed with ${response.status}`);
  }

  const body = (await response.json()) as { access_token: string; expires_in: number };
  cached = { value: body.access_token, expiresAt: now + body.expires_in };
  return body.access_token;
}

/** Only for tests: forget the cached token. */
export function resetTokenCache() {
  cached = null;
}
