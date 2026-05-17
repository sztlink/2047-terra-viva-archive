#!/usr/bin/env node
/*
  Render public markdown receipts from demo story packets.

  No AI call, no private corpus, no network, no dependencies.
*/

const fs = require('node:fs');
const path = require('node:path');

const ROOT = __dirname;
const OUT = path.join(ROOT, 'output');
const RECEIPTS = path.join(ROOT, 'receipts');

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function slugStatus(status) {
  return status.replace(/_/g, '-');
}

function storyExcerpt(packet) {
  if (!packet.story?.body || !packet.receipt?.include_story_excerpt) return '';
  const lines = packet.story.body.split('\n').slice(0, 7).join('\n');
  return `\n## Excerpt\n\n\`\`\`txt\n${lines}\n\`\`\`\n`;
}

function sourceSummary(packet) {
  if (!packet.receipt?.include_source_summary || !packet.source_packet?.summary) return '';
  return `\n## Source summary\n\n${packet.source_packet.summary}\n`;
}

function render(packet) {
  return `# ${packet.receipt.public_title}

Status: ${packet.receipt.public_status}  
Packet: \`${packet.packet_id}\`  
Schema: \`${packet.schema_version}\`  
Language: \`${packet.language}\`  
Created: ${packet.created_at}

## Public note

${packet.receipt.public_note}
${sourceSummary(packet)}${storyExcerpt(packet)}
## Score

| Field | Value |
| --- | --- |
| pulse | ${packet.score.pulse} |
| density | ${packet.score.density} |
| line width | ${packet.score.line_width} |
| silence before | ${packet.score.silence_before_seconds}s |
| silence after | ${packet.score.silence_after_seconds}s |

## Inscription

| Field | Value |
| --- | --- |
| mode | ${packet.inscription.mode} |
| printer profile | ${packet.inscription.printer_profile} |
| printable | ${packet.inscription.printable} |
| reason not printable | ${packet.inscription.reason_not_printable ?? 'none'} |

## Ledger

| Field | Value |
| --- | --- |
| event type | ${packet.ledger.event_type} |
| source refs | ${(packet.ledger.source_refs || []).join(', ') || 'none'} |
| story id | ${packet.ledger.story_id ?? 'none'} |
| score id | ${packet.ledger.score_id} |
| inscription id | ${packet.ledger.inscription_id} |
| rights status | ${packet.ledger.rights_status} |
| public receipt | ${packet.ledger.public_receipt} |

## Review

| Field | Value |
| --- | --- |
| human review required | ${packet.review.human_review_required} |
| coauthor review required | ${packet.review.coauthor_review_required} |
| approved for public archive | ${packet.review.approved_for_public_archive} |
| approved for physical print | ${packet.review.approved_for_physical_print} |

${packet.review.notes}
`;
}

function main() {
  ensureDir(RECEIPTS);

  const files = fs.readdirSync(OUT)
    .filter(file => file.endsWith('.demo.json'))
    .sort();

  if (!files.length) {
    console.error('No demo packets found. Run generate-demo-packets.js first.');
    process.exit(1);
  }

  for (const file of files) {
    const packet = JSON.parse(fs.readFileSync(path.join(OUT, file), 'utf8'));
    const receiptFile = `${slugStatus(packet.status)}.receipt.md`;
    fs.writeFileSync(path.join(RECEIPTS, receiptFile), render(packet));
    console.log(`Rendered ${receiptFile}`);
  }
}

main();
