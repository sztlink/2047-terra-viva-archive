#!/usr/bin/env node
/*
  Render printer-safe dry-run TXT spool files from story packets.

  This does not print. It writes text files that can be inspected before any
  future physical printer test.
*/

const fs = require('node:fs');
const path = require('node:path');

const ROOT = __dirname;
const OUT = path.join(ROOT, 'output');
const SPOOL = path.join(ROOT, 'spool');

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function wrapLine(line, width) {
  if (line.length <= width) return [line];
  const words = line.split(/\s+/);
  const out = [];
  let current = '';
  for (const word of words) {
    if (!current) {
      current = word;
    } else if ((current + ' ' + word).length <= width) {
      current += ' ' + word;
    } else {
      out.push(current);
      current = word;
    }
  }
  if (current) out.push(current);
  return out;
}

function wrapText(text, width) {
  return text.split('\n').flatMap(line => line ? wrapLine(line, width) : ['']).join('\n');
}

function renderStory(packet) {
  const width = packet.inscription.line_width || packet.score.line_width || 72;
  const header = [
    'PROJETO 2047 / ARQUIVO TERRA VIVA',
    'CONTO DE CALIBRACAO - MATERIAL FICCIONAL SINTETICO',
    `PACOTE: ${packet.packet_id}`,
    `DATA FICCIONAL: ${packet.story.fictional_date}`,
    `TITULO: ${packet.story.title}`,
    ''.padEnd(Math.min(width, 72), '-')
  ].join('\n');

  const body = wrapText(packet.story.body, width);

  const footer = [
    ''.padEnd(Math.min(width, 72), '-'),
    `SCORE: ${packet.score.pulse} / ${packet.score.density}`,
    `SILENCIO DEPOIS: ${packet.score.silence_after_seconds}s`,
    'NAO E OBRA FINAL. NAO E PROVA FACTUAL.',
    'SIMULACAO PUBLICA. NENHUMA IMPRESSORA FISICA CONECTADA.'
  ].join('\n');

  return `${header}\n\n${body}\n\n${footer}\n`;
}

function renderNoPrint(packet) {
  return [
    'PROJETO 2047 / ARQUIVO TERRA VIVA',
    `EVENTO SEM INSCRICAO NARRATIVA: ${packet.status.toUpperCase()}`,
    `PACOTE: ${packet.packet_id}`,
    `NOTA PUBLICA: ${packet.receipt.public_note}`,
    `MOTIVO: ${packet.inscription.reason_not_printable || 'nao especificado'}`,
    'NENHUM CONTO IMPRESSO.',
    ''
  ].join('\n');
}

function main() {
  ensureDir(SPOOL);

  const files = fs.readdirSync(OUT)
    .filter(file => file.endsWith('.demo.json'))
    .sort();

  if (!files.length) {
    console.error('No demo packets found. Run generate-demo-packets.js first.');
    process.exit(1);
  }

  for (const file of files) {
    const packet = JSON.parse(fs.readFileSync(path.join(OUT, file), 'utf8'));
    const base = file.replace('.demo.json', '.spool.txt');
    const text = packet.status === 'story_ready' ? renderStory(packet) : renderNoPrint(packet);
    fs.writeFileSync(path.join(SPOOL, base), text);
    console.log(`Rendered ${base}`);
  }
}

main();
