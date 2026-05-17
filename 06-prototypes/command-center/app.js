const runBtn = document.querySelector('#runBtn');
const systemDot = document.querySelector('#systemDot');
const systemStatus = document.querySelector('#systemStatus');
const storyOut = document.querySelector('#storyOut');
const paper = document.querySelector('#paper');
const ledgerOut = document.querySelector('#ledgerOut');
const tempo = document.querySelector('#tempo');
const density = document.querySelector('#density');
const lineWidth = document.querySelector('#lineWidth');
const silenceAfter = document.querySelector('#silenceAfter');
const meterFill = document.querySelector('#meterFill');

const packet = {
  source: {
    source_id: 'src_demo_2047_0001',
    source_type: 'fictional_public_signal_cluster',
    retrieved_at: 'demo-run',
    keywords: ['rare earths', 'data centers', 'water', 'e-waste'],
    redaction: 'none',
    note: 'Synthetic input for public command center smoke test.'
  },
  story: {
    story_id: 'story_demo_2047_0001',
    title: 'The Cooling Canal',
    fictional_date: '2047-08-13',
    mode: 'short_story',
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
    score_id: 'score_demo_2047_0001',
    tempo: 'slow',
    density: 'sparse',
    line_width: 72,
    silence_before_seconds: 3,
    silence_after_seconds: 90,
    blank_line_policy: 'breathing',
    repetition: 'none',
    print_mode: 'terminal_simulation'
  }
};

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function setRunning(value, label) {
  runBtn.disabled = value;
  systemDot.classList.toggle('running', value);
  systemStatus.textContent = label;
}

function renderScore(score) {
  tempo.textContent = score.tempo;
  density.textContent = score.density;
  lineWidth.textContent = `${score.line_width} chars`;
  silenceAfter.textContent = `${score.silence_after_seconds}s`;
  meterFill.style.width = score.density === 'sparse' ? '34%' : '68%';
}

function renderLedger(status) {
  const ledger = {
    print_id: 'prt_demo_2047_0001',
    story_id: packet.story.story_id,
    source_refs: [packet.source.source_id],
    mode: packet.story.mode,
    fictional_date: packet.story.fictional_date,
    system_version: 'command-center-prototype-v0.1',
    score: packet.score,
    status,
    public_receipt: true,
    note: 'No physical printer connected. Terminal-style simulation only.'
  };

  ledgerOut.textContent = JSON.stringify(ledger, null, 2);
}

async function runCycle() {
  setRunning(true, 'collecting source');
  storyOut.textContent = 'source accepted\nupdating project memory...';
  paper.textContent = '';
  renderLedger('running');
  renderScore(packet.score);
  await sleep(900);

  setRunning(true, 'writing story');
  storyOut.textContent = `${packet.story.title}\n${packet.story.fictional_date}\n\n${packet.story.body.join('\n')}`;
  await sleep(900);

  setRunning(true, 'calibrating score');
  meterFill.style.width = '52%';
  await sleep(700);
  meterFill.style.width = '34%';
  await sleep(500);

  setRunning(true, 'printing simulation');
  for (const line of packet.story.body) {
    const span = document.createElement('span');
    span.className = 'line';
    span.textContent = line || ' ';
    paper.appendChild(span);
    await sleep(line ? 420 : 900);
  }

  setRunning(true, 'logging');
  renderLedger('simulated_print_complete');
  await sleep(500);

  setRunning(false, 'idle');
}

runBtn.addEventListener('click', runCycle);
renderScore({ tempo: '-', density: '-', line_width: '-', silence_after_seconds: '-' });
renderLedger('idle');
