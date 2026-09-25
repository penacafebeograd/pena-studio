// Fills the brief form's data-endpoint / data-key placeholders in the staged
// homepage from the same secrets the Pena Tools build uses. Both values end
// up public either way (a form-to-email key is designed to be), so this only
// keeps them out of the repository. Unset secrets leave empty attributes,
// and the form then hands enquiries to WhatsApp.
import { readFileSync, writeFileSync } from 'node:fs';

const file = process.argv[2];
const attr = (v = '') =>
  v.trim().replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');

const html = readFileSync(file, 'utf8');
const out = html
  .replaceAll('__FORM_ENDPOINT__', attr(process.env.VITE_FORM_ENDPOINT))
  .replaceAll('__FORM_ACCESS_KEY__', attr(process.env.VITE_FORM_ACCESS_KEY));

if (out.includes('__FORM_')) throw new Error(`unfilled form placeholder in ${file}`);
writeFileSync(file, out);
console.log(
  `${file}: form endpoint ${process.env.VITE_FORM_ENDPOINT ? 'set' : 'not set (WhatsApp fallback)'}`,
);
