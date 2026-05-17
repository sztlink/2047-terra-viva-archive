#!/usr/bin/env node
/*
  Lightweight story packet validator.

  No external dependencies. This validates the public demo packets against the
  conceptual contract in 02-generative-system/story-packet-schema.md.
*/

const fs = require('node:fs');
const path = require('node:path');

const ROOT = __dirname;
const OUT = path.join(ROOT, 'output');
const ALLOWED_STATUS = new Set(['story_ready', 'refusal', 'fault', 'silence']);
const REQUIRED_TOP = [
  'packet_id',
  'schema_version',
  'status',
  'language',
  'created_at',
  'apparatus_context',
  'score',
  'inscription',
  'ledger',
  'receipt',
  'review'
];

function isObject(value) {
  return value !== null && typeof value === 'object' && !Array.isArray(value);
}

function fail(errors, field, message) {
  errors.push(`${field}: ${message}`);
}

function requireObject(errors, packet, field) {
  if (!isObject(packet[field])) fail(errors, field, 'required object missing');
}

function validatePacket(packet) {
  const errors = [];

  if (!isObject(packet)) return ['packet is not an object'];

  for (const field of REQUIRED_TOP) {
    if (!(field in packet)) fail(errors, field, 'required field missing');
  }

  if (packet.schema_version !== '2047-story-packet-v0.1') {
    fail(errors, 'schema_version', 'must be 2047-story-packet-v0.1');
  }

  if (!ALLOWED_STATUS.has(packet.status)) {
    fail(errors, 'status', `must be one of ${[...ALLOWED_STATUS].join(', ')}`);
  }

  if (packet.language !== 'pt-BR') {
    fail(errors, 'language', 'must be pt-BR');
  }

  requireObject(errors, packet, 'apparatus_context');
  requireObject(errors, packet, 'score');
  requireObject(errors, packet, 'inscription');
  requireObject(errors, packet, 'ledger');
  requireObject(errors, packet, 'receipt');
  requireObject(errors, packet, 'review');

  if (packet.status === 'story_ready') {
    requireObject(errors, packet, 'source_packet');
    requireObject(errors, packet, 'story');
    if (isObject(packet.story)) {
      if (packet.story.type !== 'conto_de_calibracao') fail(errors, 'story.type', 'must be conto_de_calibracao');
      if (packet.story.final_artwork_claim !== false) fail(errors, 'story.final_artwork_claim', 'must be false');
      if (!packet.story.body) fail(errors, 'story.body', 'required for story_ready');
    }
    if (packet.inscription?.printable !== true) fail(errors, 'inscription.printable', 'must be true for story_ready demo');
  }

  if (packet.status === 'refusal') {
    if (packet.story !== null) fail(errors, 'story', 'must be null for refusal demo');
    if (packet.inscription?.printable !== false) fail(errors, 'inscription.printable', 'must be false for refusal');
    if (packet.ledger?.event_type !== 'refusal') fail(errors, 'ledger.event_type', 'must be refusal');
  }

  if (packet.status === 'fault') {
    if (packet.story !== null) fail(errors, 'story', 'must be null for fault');
    if (packet.inscription?.printable !== false) fail(errors, 'inscription.printable', 'must be false for fault');
    if (packet.ledger?.event_type !== 'fault') fail(errors, 'ledger.event_type', 'must be fault');
  }

  if (packet.status === 'silence') {
    if (packet.story !== null) fail(errors, 'story', 'must be null for silence');
    if (packet.inscription?.printable !== false) fail(errors, 'inscription.printable', 'must be false for silence');
    if (packet.ledger?.event_type !== 'silence') fail(errors, 'ledger.event_type', 'must be silence');
  }

  if (packet.receipt?.safe_to_publish !== true) {
    fail(errors, 'receipt.safe_to_publish', 'demo packets must be public-safe');
  }

  if (packet.ledger?.public_receipt !== true) {
    fail(errors, 'ledger.public_receipt', 'demo packets must produce public receipt');
  }

  if (packet.review?.approved_for_physical_print !== false) {
    fail(errors, 'review.approved_for_physical_print', 'demo packets are not approved for physical print');
  }

  return errors;
}

function main() {
  const files = fs.readdirSync(OUT)
    .filter(file => file.endsWith('.demo.json'))
    .sort();

  if (!files.length) {
    console.error('No demo packets found. Run generate-demo-packets.js first.');
    process.exit(1);
  }

  let totalErrors = 0;

  for (const file of files) {
    const packet = JSON.parse(fs.readFileSync(path.join(OUT, file), 'utf8'));
    const errors = validatePacket(packet);
    if (errors.length) {
      totalErrors += errors.length;
      console.error(`FAIL ${file}`);
      for (const error of errors) console.error(`  - ${error}`);
    } else {
      console.log(`PASS ${file}`);
    }
  }

  if (totalErrors) process.exit(1);
}

main();
