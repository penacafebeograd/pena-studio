// The JWT path is the only cryptography here and the only part that fails
// silently if it is wrong — a bad signature comes back from Google as a flat
// "invalid_grant" with no hint. So sign a real assertion with a real RSA key
// and verify it independently, without touching the network.

import assert from "node:assert/strict";
import { generateKeyPairSync, createVerify } from "node:crypto";
import test from "node:test";

import { base64url, pemToPkcs8, signJwt } from "../src/google-auth.ts";

function makeServiceAccount() {
  const { privateKey, publicKey } = generateKeyPairSync("rsa", {
    modulusLength: 2048,
    privateKeyEncoding: { type: "pkcs8", format: "pem" },
    publicKeyEncoding: { type: "spki", format: "pem" },
  });

  return {
    account: {
      client_email: "balkan-echo@example.iam.gserviceaccount.com",
      private_key: privateKey,
    },
    publicKey,
  };
}

test("base64url leaves no characters that need escaping in a URL", () => {
  // 0xFB 0xFF encodes to "+/8" in standard base64 — both of the characters
  // base64url has to replace.
  const encoded = base64url(new Uint8Array([0xfb, 0xff, 0x00]).buffer);
  assert.equal(encoded.includes("+"), false);
  assert.equal(encoded.includes("/"), false);
  assert.equal(encoded.includes("="), false);
});

test("pemToPkcs8 strips the armour and decodes to DER", () => {
  const { account } = makeServiceAccount();
  const bytes = new Uint8Array(pemToPkcs8(account.private_key));

  // Every DER SEQUENCE starts 0x30, and a 2048-bit PKCS#8 key is ~1.2 kB.
  assert.equal(bytes[0], 0x30);
  assert.ok(bytes.length > 1000, `unexpected key length ${bytes.length}`);
});

test("signJwt produces an assertion Google can verify", async () => {
  const { account, publicKey } = makeServiceAccount();
  const now = 1_760_000_000;

  const jwt = await signJwt(account, now);
  const [header, claims, signature] = jwt.split(".");
  assert.equal(jwt.split(".").length, 3);

  const decode = (part: string) =>
    JSON.parse(Buffer.from(part, "base64url").toString("utf8"));

  assert.deepEqual(decode(header), { alg: "RS256", typ: "JWT" });
  assert.deepEqual(decode(claims), {
    iss: account.client_email,
    scope: "https://www.googleapis.com/auth/androidpublisher",
    aud: "https://oauth2.googleapis.com/token",
    iat: now,
    exp: now + 3600,
  });

  // The actual point: does RS256 verification pass?
  const verifier = createVerify("RSA-SHA256");
  verifier.update(`${header}.${claims}`);
  assert.equal(
    verifier.verify(publicKey, Buffer.from(signature, "base64url")),
    true,
    "signature did not verify against the matching public key",
  );
});

test("a signature does not verify against a different key", async () => {
  const { account } = makeServiceAccount();
  const { publicKey: otherKey } = makeServiceAccount();

  const jwt = await signJwt(account, 1_760_000_000);
  const [header, claims, signature] = jwt.split(".");

  const verifier = createVerify("RSA-SHA256");
  verifier.update(`${header}.${claims}`);
  assert.equal(verifier.verify(otherKey, Buffer.from(signature, "base64url")), false);
});
