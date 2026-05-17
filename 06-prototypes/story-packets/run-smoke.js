#!/usr/bin/env node
/* Run the complete public-safe story packet smoke test. */

const { spawnSync } = require('node:child_process');
const path = require('node:path');

const ROOT = __dirname;

function run(script) {
  const result = spawnSync(process.execPath, [path.join(ROOT, script)], {
    cwd: ROOT,
    stdio: 'inherit'
  });
  if (result.status !== 0) process.exit(result.status);
}

run('generate-demo-packets.js');
run('validate-demo-packets.js');
run('render-demo-receipts.js');

console.log('Story packet smoke test complete.');
