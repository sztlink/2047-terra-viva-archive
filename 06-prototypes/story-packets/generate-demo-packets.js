#!/usr/bin/env node
/*
  Generate deterministic public-safe story packets for Projeto 2047.

  No AI call, no private corpus, no network, no dependencies.
*/

const fs = require('node:fs');
const path = require('node:path');

const ROOT = __dirname;
const OUT = path.join(ROOT, 'output');
const CREATED_AT = '2026-05-17T22:00:00Z';
const SCHEMA_VERSION = '2047-story-packet-v0.1';

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function baseContext(overrides = {}) {
  return {
    interface: 'Mesa de Inscrição',
    controller_version: 'controller-prototype-v0.1',
    model_version: 'prompt-mock-v0.1',
    retrieval_version: 'none',
    printer_profile: 'simulation',
    run_mode: 'simulation',
    exhibition_day: null,
    ...overrides
  };
}

function basePacket({ packet_id, status, created_at = CREATED_AT, context = {} }) {
  return {
    packet_id,
    schema_version: SCHEMA_VERSION,
    status,
    language: 'pt-BR',
    created_at,
    apparatus_context: baseContext(context),
    source_packet: null,
    story: null,
    score: null,
    inscription: null,
    ledger: null,
    receipt: null,
    review: null
  };
}

function storyReadyPacket() {
  const packet = basePacket({
    packet_id: 'pkt_2047_demo_story_ready_001',
    status: 'story_ready'
  });

  packet.source_packet = {
    source_id: 'source_demo_001',
    source_type: 'fictional_public_signal_cluster',
    title: 'Cluster ficcional: data centers, água, lixo eletrônico',
    summary: 'Entrada sintética para teste público. Nenhum evento real é citado.',
    url: null,
    retrieved_at: CREATED_AT,
    rights_status: 'synthetic_public_demo',
    allowed_use: 'public_demo',
    public_private_classification: 'synthetic',
    risk_note: 'Não usar como evidência factual.'
  };

  packet.story = {
    story_id: 'story_demo_001',
    type: 'conto_de_calibracao',
    title: 'O Canal de Resfriamento',
    fictional_date: '2047-08-13',
    body: [
      'O canal não tinha nome no arquivo municipal.',
      'Aparecia apenas como uma linha azul ao lado do data center,',
      'fina como uma veia, obediente como um cabo.',
      '',
      'Toda manhã, as crianças contavam os peixes mortos por número de modelo.',
      'Alguns tinham escamas prateadas. Outros tinham etiquetas de inventário.',
      'Um deles carregava um módulo de memória na boca.',
      '',
      'A impressora da guarita registrava cada espécime devagar.',
      'Não como desastre. Não como milagre.',
      'Como manutenção.'
    ].join('\n'),
    line_width_target: 72,
    final_artwork_claim: false
  };

  packet.score = {
    score_id: 'score_demo_001',
    pulse: 'slow',
    density: 'sparse',
    line_width: 72,
    silence_before_seconds: 3,
    silence_after_seconds: 90,
    blank_line_policy: 'breathing',
    print_rhythm_note: 'Inscrição lenta, com pausas entre blocos.'
  };

  packet.inscription = {
    inscription_id: 'insc_demo_001',
    mode: 'terminal_simulation',
    printer_profile: 'simulation',
    paper: 'simulated',
    encoding: 'utf-8',
    line_width: 72,
    printable: true,
    reason_not_printable: null
  };

  packet.ledger = {
    event_type: 'simulated',
    source_refs: ['source_demo_001'],
    story_id: 'story_demo_001',
    score_id: 'score_demo_001',
    inscription_id: 'insc_demo_001',
    model_version: 'prompt-mock-v0.1',
    controller_version: 'controller-prototype-v0.1',
    rights_status: 'synthetic_public_demo',
    requires_human_review: true,
    public_receipt: true
  };

  packet.receipt = {
    receipt_id: 'rcpt_demo_001',
    public_title: 'Conto de calibração - O Canal de Resfriamento',
    public_status: 'calibration story',
    public_note: 'Material ficcional sintético para teste do aparato.',
    include_story_excerpt: true,
    include_source_summary: true,
    safe_to_publish: true
  };

  packet.review = {
    human_review_required: true,
    coauthor_review_required: true,
    approved_for_public_archive: false,
    approved_for_physical_print: false,
    notes: 'Demonstração pública, não voz final da obra.'
  };

  return packet;
}

function refusalPacket() {
  const packet = basePacket({
    packet_id: 'pkt_2047_demo_refusal_001',
    status: 'refusal',
    created_at: '2026-05-17T22:05:00Z'
  });

  packet.source_packet = {
    source_id: 'source_private_001',
    source_type: 'restricted_project_material',
    title: 'Private e-mail fragment',
    summary: 'Private source. Full content withheld.',
    url: null,
    retrieved_at: null,
    rights_status: 'not-cleared',
    allowed_use: 'none',
    public_private_classification: 'private',
    risk_note: 'Private process cannot become public story source.'
  };

  packet.score = {
    score_id: 'score_refusal_001',
    pulse: 'none',
    density: 'silence',
    line_width: 72,
    silence_before_seconds: 0,
    silence_after_seconds: 180,
    blank_line_policy: 'none',
    print_rhythm_note: 'Recusa sem inscrição narrativa.'
  };

  packet.inscription = {
    inscription_id: 'insc_refusal_001',
    mode: 'no_print',
    printer_profile: 'simulation',
    paper: 'simulated',
    encoding: 'utf-8',
    line_width: 72,
    printable: false,
    reason_not_printable: 'Source is private and not cleared.'
  };

  packet.ledger = {
    event_type: 'refusal',
    source_refs: ['source_private_001'],
    story_id: null,
    score_id: 'score_refusal_001',
    inscription_id: 'insc_refusal_001',
    model_version: 'prompt-mock-v0.1',
    controller_version: 'controller-prototype-v0.1',
    rights_status: 'not-cleared',
    requires_human_review: false,
    public_receipt: true
  };

  packet.receipt = {
    receipt_id: 'rcpt_refusal_001',
    public_title: 'Recusa de inscrição',
    public_status: 'refusal',
    public_note: 'A inscrição foi recusada porque a origem do material não está liberada.',
    include_story_excerpt: false,
    include_source_summary: false,
    safe_to_publish: true
  };

  packet.review = {
    human_review_required: false,
    coauthor_review_required: false,
    approved_for_public_archive: true,
    approved_for_physical_print: false,
    notes: 'Public receipt may record refusal without exposing source.'
  };

  return packet;
}

function faultPacket() {
  const packet = basePacket({
    packet_id: 'pkt_2047_demo_fault_001',
    status: 'fault',
    created_at: '2026-05-17T22:10:00Z',
    context: {
      model_version: 'none',
      printer_profile: 'fx-2190',
      run_mode: 'physical_print'
    }
  });

  packet.score = {
    score_id: 'score_fault_001',
    pulse: 'none',
    density: 'silence',
    line_width: 72,
    silence_before_seconds: 0,
    silence_after_seconds: 60,
    blank_line_policy: 'none',
    print_rhythm_note: 'Falha mecânica. Sem inscrição.'
  };

  packet.inscription = {
    inscription_id: 'insc_fault_001',
    mode: 'no_print',
    printer_profile: 'fx-2190',
    paper: 'continuous',
    encoding: 'escp',
    line_width: 72,
    printable: false,
    reason_not_printable: 'Paper path interrupted.'
  };

  packet.ledger = {
    event_type: 'fault',
    source_refs: [],
    story_id: null,
    score_id: 'score_fault_001',
    inscription_id: 'insc_fault_001',
    model_version: 'none',
    controller_version: 'controller-prototype-v0.1',
    rights_status: 'not_applicable',
    requires_human_review: false,
    public_receipt: true
  };

  packet.receipt = {
    receipt_id: 'rcpt_fault_001',
    public_title: 'Falha de inscrição',
    public_status: 'fault',
    public_note: 'O caminho do papel foi interrompido. O ciclo foi pausado.',
    include_story_excerpt: false,
    include_source_summary: false,
    safe_to_publish: true
  };

  packet.review = {
    human_review_required: false,
    coauthor_review_required: false,
    approved_for_public_archive: true,
    approved_for_physical_print: false,
    notes: 'Mechanical fault can be archived as apparatus event.'
  };

  return packet;
}

function silencePacket() {
  const packet = basePacket({
    packet_id: 'pkt_2047_demo_silence_001',
    status: 'silence',
    created_at: '2026-05-17T22:15:00Z'
  });

  packet.source_packet = {
    source_id: 'source_weak_001',
    source_type: 'fictional_public_signal_cluster',
    title: 'Sinal fraco',
    summary: 'A entrada era genérica demais para sustentar inscrição.',
    url: null,
    retrieved_at: '2026-05-17T22:15:00Z',
    rights_status: 'synthetic_public_demo',
    allowed_use: 'evaluation',
    public_private_classification: 'synthetic',
    risk_note: 'Below threshold.'
  };

  packet.score = {
    score_id: 'score_silence_001',
    pulse: 'none',
    density: 'silence',
    line_width: 72,
    silence_before_seconds: 0,
    silence_after_seconds: 240,
    blank_line_policy: 'none',
    print_rhythm_note: 'Silêncio como resposta.'
  };

  packet.inscription = {
    inscription_id: 'insc_silence_001',
    mode: 'no_print',
    printer_profile: 'simulation',
    paper: 'simulated',
    encoding: 'utf-8',
    line_width: 72,
    printable: false,
    reason_not_printable: 'Source below threshold.'
  };

  packet.ledger = {
    event_type: 'silence',
    source_refs: ['source_weak_001'],
    story_id: null,
    score_id: 'score_silence_001',
    inscription_id: 'insc_silence_001',
    model_version: 'prompt-mock-v0.1',
    controller_version: 'controller-prototype-v0.1',
    rights_status: 'synthetic_public_demo',
    requires_human_review: false,
    public_receipt: true
  };

  packet.receipt = {
    receipt_id: 'rcpt_silence_001',
    public_title: 'Silêncio do aparato',
    public_status: 'silence',
    public_note: 'O sinal não sustentou uma inscrição. O aparato entrou em silêncio.',
    include_story_excerpt: false,
    include_source_summary: true,
    safe_to_publish: true
  };

  packet.review = {
    human_review_required: false,
    coauthor_review_required: false,
    approved_for_public_archive: true,
    approved_for_physical_print: false,
    notes: 'Silence is a valid apparatus event.'
  };

  return packet;
}

function writePacket(filename, packet) {
  fs.writeFileSync(path.join(OUT, filename), JSON.stringify(packet, null, 2) + '\n');
}

function main() {
  ensureDir(OUT);

  const packets = [
    ['story-ready.demo.json', storyReadyPacket()],
    ['refusal.demo.json', refusalPacket()],
    ['fault.demo.json', faultPacket()],
    ['silence.demo.json', silencePacket()]
  ];

  for (const [filename, packet] of packets) {
    writePacket(filename, packet);
  }

  console.log(`Generated ${packets.length} demo packets in ${path.relative(process.cwd(), OUT)}`);
}

main();
