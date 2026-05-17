const els = {
  runBtn: document.querySelector('#runBtn'),
  refusalBtn: document.querySelector('#refusalBtn'),
  faultBtn: document.querySelector('#faultBtn'),
  resetBtn: document.querySelector('#resetBtn'),
  states: [...document.querySelectorAll('.state')],
  channels: [...document.querySelectorAll('.channel')],
  thresholdCell: document.querySelector('#thresholdCell'),
  chSource: document.querySelector('#chSource'),
  chVoice: document.querySelector('#chVoice'),
  chConstraint: document.querySelector('#chConstraint'),
  chPaper: document.querySelector('#chPaper'),
  storyOut: document.querySelector('#storyOut'),
  scorePulse: document.querySelector('#scorePulse'),
  scoreDensity: document.querySelector('#scoreDensity'),
  scoreWidth: document.querySelector('#scoreWidth'),
  scoreSilenceBefore: document.querySelector('#scoreSilenceBefore'),
  scoreSilenceAfter: document.querySelector('#scoreSilenceAfter'),
  pulseNeedle: document.querySelector('#pulseNeedle'),
  printerOnline: document.querySelector('#printerOnline'),
  paperFeed: document.querySelector('#paperFeed'),
  lineCount: document.querySelector('#lineCount'),
  faultState: document.querySelector('#faultState'),
  paper: document.querySelector('#paper'),
  ledgerTrace: document.querySelector('#ledgerTrace'),
  ledgerOut: document.querySelector('#ledgerOut'),
  troubleRows: document.querySelector('#troubleRows'),
  maintenanceNote: document.querySelector('#maintenanceNote'),
  receiptOut: document.querySelector('#receiptOut'),
  signalPath: document.querySelector('#signalPath')
};

const packet = {
  source: {
    source_id: 'src_demo_2047_0002',
    source_type: 'fictional_public_signal_cluster',
    keywords: ['rare earths', 'data centers', 'water', 'e-waste'],
    threshold: 'accepted for fiction only',
    clearance: 'public-safe synthetic input'
  },
  story: {
    story_id: 'story_demo_2047_0002',
    title: 'The Cooling Canal',
    fictional_date: '2047-08-13',
    body: [
      'The canal had no name in the municipal archive.',
      'It appeared only as a blue line beside the data center,',
      'thin as a vein, obedient as a cable.',
      '',
      'Every morning, children counted the dead fish by model number.',
      'Some had silver scales. Some had inventory tags.',
      'One carried a memory module in its mouth.',
      '',
      'The printer in the guardhouse recorded each specimen slowly.',
      'Not as disaster. Not as miracle.',
      'As maintenance.'
    ]
  },
  score: {
    score_id: 'score_demo_2047_0002',
    pulse: 'slow mechanical strike',
    density: 'sparse',
    line_width: 72,
    silence_before_seconds: 3,
    silence_after_seconds: 90
  }
};

const tracePaths = {
  idle: 'M0 120 C35 110, 54 60, 90 78 S145 130, 190 90 S260 40, 315 84 S390 135, 450 72 S500 92, 520 66',
  active: 'M0 132 C42 50, 72 152, 114 70 S190 42, 232 110 S288 150, 330 62 S410 45, 452 112 S492 142, 520 88',
  refusal: 'M0 94 C90 94, 130 94, 210 94 S330 94, 420 94 S490 94, 520 94',
  fault: 'M0 150 L48 32 L96 150 L144 32 L192 150 L240 32 L288 150 L336 32 L384 150 L432 32 L480 150 L520 70'
};

let running = false;
let eventCount = 0;

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function setButtons(disabled) {
  running = disabled;
  els.runBtn.disabled = disabled;
  els.refusalBtn.disabled = disabled;
  els.faultBtn.disabled = disabled;
}

function setState(state) {
  els.states.forEach(el => {
    const match = el.dataset.state === state;
    el.classList.toggle('active', match);
    el.classList.toggle('fault', state === 'FAULT');
    el.classList.toggle('refusal', state === 'REFUSAL');
  });
}

function setChannel(name, label) {
  els.channels.forEach(el => el.classList.toggle('active', el.dataset.channel === name));
  if (name === 'source') els.chSource.textContent = label;
  if (name === 'voice') els.chVoice.textContent = label;
  if (name === 'constraint') els.chConstraint.textContent = label;
  if (name === 'paper') els.chPaper.textContent = label;
}

function logEvent(label, detail) {
  eventCount += 1;
  const row = document.createElement('div');
  row.className = 'ledgerEvent';
  row.innerHTML = `<strong>${String(eventCount).padStart(3, '0')}</strong><span>${label}: ${detail}</span>`;
  els.ledgerTrace.prepend(row);
}

function renderLedger(status) {
  const ledger = {
    print_id: status === 'simulated_print_complete' ? 'prt_demo_2047_0002' : null,
    story_id: packet.story.story_id,
    source_refs: [packet.source.source_id],
    score_id: packet.score.score_id,
    apparatus_version: 'apparatus-console-prototype-v0.2',
    status,
    public_receipt: true,
    note: 'No physical printer connected. Public-safe terminal-style simulation only.'
  };

  els.ledgerOut.textContent = JSON.stringify(ledger, null, 2);
}

function renderScore() {
  els.scorePulse.textContent = packet.score.pulse;
  els.scoreDensity.textContent = packet.score.density;
  els.scoreWidth.textContent = `${packet.score.line_width} chars`;
  els.scoreSilenceBefore.textContent = `${packet.score.silence_before_seconds}s`;
  els.scoreSilenceAfter.textContent = `${packet.score.silence_after_seconds}s`;
  els.pulseNeedle.style.left = '36%';
}

function renderReceipt(status) {
  els.receiptOut.textContent = [
    '2047 APPARATUS RECEIPT',
    `STATUS: ${status}`,
    `SOURCE: ${packet.source.source_id}`,
    `STORY: ${packet.story.story_id}`,
    `SCORE: ${packet.score.score_id}`,
    `FICTIONAL DATE: ${packet.story.fictional_date}`,
    'MODE: TERMINAL PRINT SIMULATION',
    'CLEARANCE: PUBLIC-SAFE SYNTHETIC INPUT',
    'NOTE: NO PHYSICAL PRINTER CONNECTED'
  ].join('\n');
}

function resetConsole() {
  setState('IDLE');
  setButtons(false);
  eventCount = 0;
  els.thresholdCell.textContent = 'awaiting run';
  els.chSource.textContent = 'standby';
  els.chVoice.textContent = 'standby';
  els.chConstraint.textContent = 'standby';
  els.chPaper.textContent = 'standby';
  els.channels.forEach(el => el.classList.remove('active'));
  els.storyOut.textContent = 'operator note:\nload source packet to begin writing cycle.';
  els.scorePulse.textContent = '-';
  els.scoreDensity.textContent = '-';
  els.scoreWidth.textContent = '-';
  els.scoreSilenceBefore.textContent = '-';
  els.scoreSilenceAfter.textContent = '-';
  els.pulseNeedle.style.left = '0%';
  els.printerOnline.textContent = 'NO';
  els.paperFeed.textContent = 'READY';
  els.lineCount.textContent = '0';
  els.faultState.textContent = 'NONE';
  els.paper.textContent = '';
  els.ledgerTrace.textContent = '';
  els.maintenanceNote.textContent = 'No intervention required.';
  els.signalPath.setAttribute('d', tracePaths.idle);
  renderLedger('idle');
  els.receiptOut.textContent = '2047 APPARATUS RECEIPT\nSTATUS: WAITING\nPUBLIC DATA ONLY';
}

async function runCycle() {
  if (running) return;
  setButtons(true);
  resetConsole();
  setButtons(true);

  setState('LISTENING');
  els.signalPath.setAttribute('d', tracePaths.active);
  logEvent('LISTENING', 'source trace opened');
  await sleep(700);

  setState('INGESTING');
  setChannel('source', 'accepted');
  els.thresholdCell.textContent = packet.source.threshold;
  logEvent('INGESTING', 'synthetic packet accepted');
  renderLedger('source_ingested');
  await sleep(800);

  setState('WRITING');
  setChannel('voice', 'situated fiction, public demo');
  setChannel('constraint', 'short story, no private source');
  els.storyOut.textContent = `${packet.story.title}\n${packet.story.fictional_date}\n\nwriting...`;
  logEvent('WRITING', 'story channels synchronized');
  await sleep(900);

  els.storyOut.textContent = `${packet.story.title}\n${packet.story.fictional_date}\n\n${packet.story.body.join('\n')}`;
  await sleep(700);

  setState('SCORING');
  setChannel('paper', '72 character line width');
  renderScore();
  logEvent('SCORING', 'cadence calibrated');
  renderLedger('score_ready');
  await sleep(900);

  setState('PRINTING');
  els.printerOnline.textContent = 'YES';
  els.paperFeed.textContent = 'ADVANCING';
  els.faultState.textContent = 'NONE';
  els.paper.textContent = '';
  logEvent('PRINTING', 'terminal print simulation started');
  for (let i = 0; i < packet.story.body.length; i++) {
    const line = packet.story.body[i];
    const span = document.createElement('span');
    span.className = 'line';
    span.textContent = line || ' ';
    els.paper.appendChild(span);
    els.lineCount.textContent = String(i + 1);
    await sleep(line ? 300 : 680);
  }

  setState('SILENCE');
  els.paperFeed.textContent = 'HOLDING';
  logEvent('SILENCE', '90 second silence represented as receipt field');
  await sleep(900);

  setState('ARCHIVED');
  els.paperFeed.textContent = 'READY';
  renderLedger('simulated_print_complete');
  renderReceipt('SIMULATED PRINT COMPLETE');
  logEvent('ARCHIVED', 'public receipt generated');
  setButtons(false);
}

function triggerRefusal() {
  if (running) return;
  resetConsole();
  setState('REFUSAL');
  els.signalPath.setAttribute('d', tracePaths.refusal);
  els.thresholdCell.textContent = 'rejected';
  els.faultState.textContent = 'REFUSAL';
  els.maintenanceNote.textContent = 'Refusal triggered: packet is treated as private, unclear, or ethically unsuitable for public print.';
  els.storyOut.textContent = 'REFUSAL NOTICE\n\nNo story was generated.\nThe apparatus entered silence instead of producing ornamental certainty.';
  logEvent('REFUSAL', 'print refused before writing');
  renderLedger('refused');
  renderReceipt('REFUSED BEFORE PRINT');
}

function triggerFault() {
  if (running) return;
  resetConsole();
  setState('FAULT');
  els.signalPath.setAttribute('d', tracePaths.fault);
  els.printerOnline.textContent = 'NO';
  els.paperFeed.textContent = 'JAM';
  els.faultState.textContent = 'PAPER PATH';
  els.maintenanceNote.textContent = 'Fault triggered: paper path interrupted. Log fault, pause cycle, request maintenance.';
  els.paper.textContent = '*** PRINTER FAULT ***\nPAPER PATH INTERRUPTED\nNO STORY PRINTED';
  logEvent('FAULT', 'paper path interrupted');
  renderLedger('printer_fault');
  renderReceipt('FAULT, NO PRINT');
}

els.runBtn.addEventListener('click', runCycle);
els.refusalBtn.addEventListener('click', triggerRefusal);
els.faultBtn.addEventListener('click', triggerFault);
els.resetBtn.addEventListener('click', resetConsole);

resetConsole();
