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
  maintenanceNote: document.querySelector('#maintenanceNote'),
  receiptOut: document.querySelector('#receiptOut'),
  signalPath: document.querySelector('#signalPath')
};

const packet = {
  fonte: {
    id_fonte: 'fonte_demo_2047_0003',
    tipo: 'cluster_publico_ficcional',
    palavras_chave: ['terras raras', 'data centers', 'água', 'lixo eletrônico'],
    limiar: 'aceito apenas como ficção de teste',
    liberacao: 'entrada sintética segura para demonstração pública'
  },
  conto: {
    id_conto: 'conto_demo_2047_0003',
    titulo: 'O Canal de Resfriamento',
    data_ficcional: '13/08/2047',
    corpo: [
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
    ]
  },
  partitura: {
    id_partitura: 'partitura_demo_2047_0003',
    pulso: 'batida mecânica lenta',
    densidade: 'esparsa',
    largura_linha: 72,
    silencio_antes_segundos: 3,
    silencio_depois_segundos: 90
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
    id_impressao: status === 'impressao_simulada_concluida' ? 'imp_demo_2047_0003' : null,
    id_conto: packet.conto.id_conto,
    fontes: [packet.fonte.id_fonte],
    id_partitura: packet.partitura.id_partitura,
    versao_aparato: 'console-do-aparato-prototipo-v0.3',
    estado: status,
    comprovante_publico: true,
    nota: 'Nenhuma impressora física conectada. Simulação pública e segura.'
  };

  els.ledgerOut.textContent = JSON.stringify(ledger, null, 2);
}

function renderScore() {
  els.scorePulse.textContent = packet.partitura.pulso;
  els.scoreDensity.textContent = packet.partitura.densidade;
  els.scoreWidth.textContent = `${packet.partitura.largura_linha} caracteres`;
  els.scoreSilenceBefore.textContent = `${packet.partitura.silencio_antes_segundos}s`;
  els.scoreSilenceAfter.textContent = `${packet.partitura.silencio_depois_segundos}s`;
  els.pulseNeedle.style.left = '36%';
}

function renderReceipt(status) {
  els.receiptOut.textContent = [
    'COMPROVANTE DO APARATO 2047',
    `ESTADO: ${status}`,
    `FONTE: ${packet.fonte.id_fonte}`,
    `CONTO: ${packet.conto.id_conto}`,
    `PARTITURA: ${packet.partitura.id_partitura}`,
    `DATA FICCIONAL: ${packet.conto.data_ficcional}`,
    'MODO: SIMULAÇÃO DE INSCRIÇÃO',
    'TIPO: CONTO DE CALIBRAÇÃO',
    'LIBERAÇÃO: ENTRADA SINTÉTICA PÚBLICA',
    'NOTA: NENHUMA IMPRESSORA FÍSICA CONECTADA'
  ].join('\n');
}

function resetConsole() {
  setState('IDLE');
  setButtons(false);
  eventCount = 0;
  els.thresholdCell.textContent = 'aguardando ciclo';
  els.chSource.textContent = 'em espera';
  els.chVoice.textContent = 'em espera';
  els.chConstraint.textContent = 'em espera';
  els.chPaper.textContent = 'em espera';
  els.channels.forEach(el => el.classList.remove('active'));
  els.storyOut.textContent = 'nota de operação:\ncarregue um pacote de fonte para iniciar o ciclo de escrita.';
  els.scorePulse.textContent = '-';
  els.scoreDensity.textContent = '-';
  els.scoreWidth.textContent = '-';
  els.scoreSilenceBefore.textContent = '-';
  els.scoreSilenceAfter.textContent = '-';
  els.pulseNeedle.style.left = '0%';
  els.printerOnline.textContent = 'NÃO';
  els.paperFeed.textContent = 'PRONTO';
  els.lineCount.textContent = '0';
  els.faultState.textContent = 'NENHUMA';
  els.paper.textContent = '';
  els.ledgerTrace.textContent = '';
  els.maintenanceNote.textContent = 'Nenhuma intervenção necessária.';
  els.signalPath.setAttribute('d', tracePaths.idle);
  renderLedger('repouso');
  els.receiptOut.textContent = 'COMPROVANTE DO APARATO 2047\nESTADO: AGUARDANDO\nAPENAS DADOS PÚBLICOS';
}

async function runCycle() {
  if (running) return;
  setButtons(true);
  resetConsole();
  setButtons(true);

  setState('LISTENING');
  els.signalPath.setAttribute('d', tracePaths.active);
  logEvent('ESCUTA', 'traço de fonte aberto');
  await sleep(700);

  setState('INGESTING');
  setChannel('source', 'aceita');
  els.thresholdCell.textContent = packet.fonte.limiar;
  logEvent('ENTRADA', 'pacote sintético aceito');
  renderLedger('fonte_digerida');
  await sleep(800);

  setState('WRITING');
  setChannel('voice', 'ficção situada, demonstração pública');
  setChannel('constraint', 'conto curto, sem fonte privada');
  els.storyOut.textContent = `CONTO DE CALIBRAÇÃO\nmaterial ficcional sintético\n\n${packet.conto.titulo}\n${packet.conto.data_ficcional}\n\nescrevendo...`;
  logEvent('ESCRITA', 'canais do conto sincronizados');
  await sleep(900);

  els.storyOut.textContent = `CONTO DE CALIBRAÇÃO\nmaterial ficcional sintético\n\n${packet.conto.titulo}\n${packet.conto.data_ficcional}\n\n${packet.conto.corpo.join('\n')}`;
  await sleep(700);

  setState('SCORING');
  setChannel('paper', '72 caracteres por linha');
  renderScore();
  logEvent('PARTITURA', 'cadência calibrada');
  renderLedger('partitura_pronta');
  await sleep(900);

  setState('PRINTING');
  els.printerOnline.textContent = 'SIM';
  els.paperFeed.textContent = 'AVANÇANDO';
  els.faultState.textContent = 'NENHUMA';
  els.paper.textContent = '';
  logEvent('INSCRIÇÃO', 'simulação de impressão iniciada');
  for (let i = 0; i < packet.conto.corpo.length; i++) {
    const line = packet.conto.corpo[i];
    const span = document.createElement('span');
    span.className = 'line';
    span.textContent = line || ' ';
    els.paper.appendChild(span);
    els.lineCount.textContent = String(i + 1);
    await sleep(line ? 300 : 680);
  }

  setState('SILENCE');
  els.paperFeed.textContent = 'SUSPENSO';
  logEvent('SILÊNCIO', '90 segundos representados no comprovante');
  await sleep(900);

  setState('ARCHIVED');
  els.paperFeed.textContent = 'PRONTO';
  renderLedger('impressao_simulada_concluida');
  renderReceipt('IMPRESSÃO SIMULADA CONCLUÍDA');
  logEvent('ARQUIVO', 'comprovante público gerado');
  setButtons(false);
}

function triggerRefusal() {
  if (running) return;
  resetConsole();
  setState('REFUSAL');
  els.signalPath.setAttribute('d', tracePaths.refusal);
  els.thresholdCell.textContent = 'recusado';
  els.faultState.textContent = 'RECUSA';
  els.maintenanceNote.textContent = 'Recusa acionada: o pacote é tratado como privado, incerto ou inadequado para impressão pública.';
  els.storyOut.textContent = 'NOTA DE RECUSA\n\nNenhum conto foi gerado.\nO aparato entrou em silêncio em vez de produzir certeza ornamental.';
  logEvent('RECUSA', 'impressão recusada antes da escrita');
  renderLedger('recusado');
  renderReceipt('RECUSADO ANTES DA IMPRESSÃO');
}

function triggerFault() {
  if (running) return;
  resetConsole();
  setState('FAULT');
  els.signalPath.setAttribute('d', tracePaths.fault);
  els.printerOnline.textContent = 'NÃO';
  els.paperFeed.textContent = 'PRESO';
  els.faultState.textContent = 'CAMINHO DO PAPEL';
  els.maintenanceNote.textContent = 'Falha acionada: caminho do papel interrompido. Registrar falha, pausar ciclo, solicitar manutenção.';
  els.paper.textContent = '*** FALHA DA IMPRESSORA ***\nCAMINHO DO PAPEL INTERROMPIDO\nNENHUM CONTO IMPRESSO';
  logEvent('FALHA', 'caminho do papel interrompido');
  renderLedger('falha_impressora');
  renderReceipt('FALHA, SEM IMPRESSÃO');
}

els.runBtn.addEventListener('click', runCycle);
els.refusalBtn.addEventListener('click', triggerRefusal);
els.faultBtn.addEventListener('click', triggerFault);
els.resetBtn.addEventListener('click', resetConsole);

resetConsole();
