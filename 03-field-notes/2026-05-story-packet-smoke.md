# Field note: story packet smoke test

Date: 2026-05-17  
Status: public technical receipt  
Prototype: `06-prototypes/story-packets/`

## Purpose

This note records the first public-safe technical smoke test for the Projeto 2047 story packet architecture.

The goal was to turn the conceptual schema into deterministic artifacts that can be validated and rendered without calling an AI model, using a private corpus, accessing the network, or printing.

## Inputs

The smoke test uses only synthetic demo data.

It covers four packet statuses:

- `story_ready`
- `refusal`
- `fault`
- `silence`

## Scripts

```txt
06-prototypes/story-packets/generate-demo-packets.js
06-prototypes/story-packets/validate-demo-packets.js
06-prototypes/story-packets/render-demo-receipts.js
06-prototypes/story-packets/render-inscription-spool.js
06-prototypes/story-packets/run-smoke.js
```

## Generated packets

```txt
06-prototypes/story-packets/output/story-ready.demo.json
06-prototypes/story-packets/output/refusal.demo.json
06-prototypes/story-packets/output/fault.demo.json
06-prototypes/story-packets/output/silence.demo.json
```

## Generated receipts

```txt
06-prototypes/story-packets/receipts/story-ready.receipt.md
06-prototypes/story-packets/receipts/refusal.receipt.md
06-prototypes/story-packets/receipts/fault.receipt.md
06-prototypes/story-packets/receipts/silence.receipt.md
```

## Generated dry-run spool files

```txt
06-prototypes/story-packets/spool/story-ready.spool.txt
06-prototypes/story-packets/spool/refusal.spool.txt
06-prototypes/story-packets/spool/fault.spool.txt
06-prototypes/story-packets/spool/silence.spool.txt
```

These files are inspection artifacts only. They do not send anything to a physical printer.

## Smoke output

```txt
Generated 4 demo packets in output
PASS fault.demo.json
PASS refusal.demo.json
PASS silence.demo.json
PASS story-ready.demo.json
Rendered fault.receipt.md
Rendered refusal.receipt.md
Rendered silence.receipt.md
Rendered story-ready.receipt.md
Rendered fault.spool.txt
Rendered refusal.spool.txt
Rendered silence.spool.txt
Rendered story-ready.spool.txt
Story packet smoke test complete.
```

## What this validates

The test validates that the apparatus can represent:

1. A calibration story ready for simulated inscription.
2. A refusal caused by uncleared private source material.
3. A mechanical fault caused by interrupted paper path.
4. A silence event caused by weak signal.

Each packet includes:

- source or source absence;
- status;
- pt-BR language;
- score;
- inscription instruction;
- ledger fields;
- public receipt;
- review flags.

## What this does not validate

This smoke test does not validate:

- final literary voice;
- model quality;
- RAG retrieval;
- live source ingestion;
- FX-2190 printing;
- co-authorial approval;
- exhibition duration;
- real corpus clearance.

## Public boundary

No private or institutional material is included.

The story text in the demo packet is a `conto de calibração`, a synthetic test specimen, not final artwork.

## Conclusion

The apparatus now has a testable transfer object.

The next technical step is to let Mesa de Inscrição read a packet JSON file instead of relying on hardcoded demo data. That step should wait until interface work resumes.

The next non-interface step is to define runtime requirements for the physical controller.
