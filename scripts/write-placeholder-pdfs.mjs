import { writeFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const publicDir = join(dirname(fileURLToPath(import.meta.url)), "..", "public");

/** Minimal single-page PDF with one line of Helvetica text */
function minimalPdf(line) {
  let body = "%PDF-1.4\n";
  const offs = [];

  offs.push(Buffer.byteLength(body, "latin1"));
  body += "1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj\n";

  offs.push(Buffer.byteLength(body, "latin1"));
  body += "2 0 obj\n<< /Type /Pages /Kids [3 0 R] /Count 1 >>\nendobj\n";

  offs.push(Buffer.byteLength(body, "latin1"));
  body +=
    "3 0 obj\n<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Contents 4 0 R /Resources << /Font << /F1 5 0 R >> >> >>\nendobj\n";

  const escaped = line.replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)");
  const stream = `BT /F1 18 Tf 72 720 Td (${escaped}) Tj ET`;

  offs.push(Buffer.byteLength(body, "latin1"));
  body += `4 0 obj\n<< /Length ${Buffer.byteLength(stream, "latin1")} >>\nstream\n${stream}\nendstream\nendobj\n`;

  offs.push(Buffer.byteLength(body, "latin1"));
  body +=
    "5 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>\nendobj\n";

  const xrefOffset = Buffer.byteLength(body, "latin1");
  let xref = "xref\n0 6\n0000000000 65535 f \n";
  for (const off of offs) {
    xref += `${String(off).padStart(10, "0")} 00000 n \n`;
  }
  body += xref;
  body += `trailer\n<< /Size 6 /Root 1 0 R >>\nstartxref\n${xrefOffset}\n%%EOF\n`;
  return body;
}

writeFileSync(
  join(publicDir, "resume.pdf"),
  minimalPdf("Placeholder: replace public/resume.pdf with your resume."),
  "latin1"
);
writeFileSync(
  join(publicDir, "cover-letter.pdf"),
  minimalPdf("Placeholder: replace public/cover-letter.pdf with your cover letter."),
  "latin1"
);

console.log("Wrote public/resume.pdf and public/cover-letter.pdf");
