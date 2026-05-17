# Command center design direction

This note defines the visual and interaction direction for the public command center prototype.

The command center is a test surface for the apparatus. It is not a SaaS dashboard, not a generic AI interface, not a production back office, and not the final exhibition interface.

## Working name

Preferred public terms:

- `operator console`
- `apparatus console`
- `archive console`
- `command center prototype`

Avoid using `dashboard` as the main term. Dashboard suggests corporate metrics, SaaS products, and managerial overview. This prototype should feel closer to a machine room, a technical manual, a scored apparatus, and an archive in operation.

## Visual sources

### 1. Existing co-authorial presentation language

The visual language already developed in the internal presentation material is the first anchor.

Because that presentation is not public material in this repository, this file does not reproduce it or describe private institutional contents. The relevant public design lesson is:

- dark field;
- clear editorial hierarchy;
- large conceptual statements;
- technical and archival atmosphere;
- restrained use of color;
- image and text treated as evidence rather than decoration.

### 2. Internet Archive Manuals Plus

The Manuals Plus collection at the Internet Archive is the second anchor.

Reference:

- <https://archive.org/details/manualsplus>
- <https://blog.archive.org/2024/04/24/a-happy-ending-for-some-manual-labor-and-a-call-for-support/>

The collection matters because it contains scanned technical manuals, service documents, equipment documentation, diagrams, control panels, calibration procedures, foldouts, repair logic, and obsolete machine literacy.

The goal is not to imitate old manuals superficially. The goal is to extract a grammar of operation.

## Grammar to extract from manuals

Look for:

- section numbering;
- index structures;
- diagnostic tables;
- calibration tables;
- block diagrams;
- exploded views;
- signal-flow diagrams;
- foldout schematics;
- control panel labels;
- warning boxes;
- fault codes;
- maintenance procedures;
- paper margins;
- registration marks;
- scan shadows;
- typewritten annotations;
- monospaced tabular text;
- low-resolution diagrams;
- physical wear;
- procedural language.

Translate these into interface forms:

| Manual grammar | Console translation |
| --- | --- |
| Calibration table | Sonic score panel |
| Troubleshooting page | Failure and refusal state |
| Block diagram | Source to story to score to print flow |
| Control panel label | Apparatus state label |
| Foldout schematic | System map |
| Service interval | Exhibition runtime log |
| Warning box | Ethical or operational constraint |
| Parts list | Source and ledger inventory |
| Print test sheet | Public receipt |

## Core interface vocabulary

Use apparatus words rather than generic software words.

Preferred:

- `source signal`
- `ingestion`
- `story engine`
- `score`
- `cadence`
- `silence`
- `printer state`
- `paper feed`
- `ledger`
- `receipt`
- `fault`
- `refusal`
- `maintenance`
- `witness`
- `run cycle`
- `apparatus state`

Avoid:

- `analytics`
- `KPIs`
- `insights`
- `users`
- `growth`
- `conversion`
- `AI magic`
- `prompt dashboard`
- `content generation platform`

## States

The console should show machine states clearly.

Suggested states:

- `IDLE`
- `LISTENING`
- `INGESTING`
- `WRITING`
- `SCORING`
- `PRINTING`
- `SILENCE`
- `REFUSAL`
- `FAULT`
- `MAINTENANCE`
- `ARCHIVED`

Each state should have:

- a visible label;
- a timestamp;
- a short explanation;
- a ledger consequence;
- optional sonic or printing consequence.

## Layout principles

1. Time is primary.  
   The console should show an event unfolding, not only a set of metrics.

2. The source must remain accountable.  
   Each generated story should point back to a source packet, even if the public prototype uses fictional data.

3. The story is not the only output.  
   The story, sonic score, printer state, silence, and ledger are all outputs.

4. Failure is a first-class state.  
   Jams, refusals, empty paper, missing source, silence, API failure, and illegible output should be visible.

5. The interface should feel operated, not browsed.  
   Buttons should feel like actions in a machine, not web app affordances.

6. Avoid total transparency theater.  
   Show the apparatus enough to be accountable, but do not expose private process, internal infrastructure, or institutional material.

## Color direction

Base palette:

- dark graphite or green-black field;
- paper warm white;
- aged technical paper beige;
- muted amber for signal and warning;
- muted green for ready or running;
- dull red or rust for fault;
- low-saturation blue only when needed for data or water references.

Avoid:

- neon cyberpunk;
- glassmorphism;
- bright SaaS gradients;
- glossy 3D panels;
- generic terminal green as the whole identity.

## Typography direction

Use a limited system:

- one monospace for operational text, ledgers, codes, state labels;
- one editorial sans or serif for thesis statements and section titles, if needed;
- tabular numbers where possible;
- uppercase only for labels and machine states, not for all text.

The interface should read as a technical document in motion.

## Texture direction

Use texture carefully.

Acceptable:

- subtle paper grain;
- scan edge shadows;
- registration marks;
- light misalignment;
- dot-matrix line rhythm;
- faint rules and grids.

Avoid:

- heavy grunge;
- fake damage;
- retro filters that turn the project into nostalgia;
- ornamental noise unrelated to operation.

## Interaction direction

The prototype should evolve from a single button into a small operator sequence.

Possible controls:

- `Run smoke cycle`
- `Load source packet`
- `Generate story`
- `Calibrate score`
- `Simulate print`
- `Log receipt`
- `Trigger refusal`
- `Trigger fault`
- `Enter silence`

Each control should produce visible consequences in the console.

## Manuals Plus search seeds

Useful Internet Archive searches:

```txt
collection:manualsplus operator manual
collection:manualsplus service manual
collection:manualsplus calibration
collection:manualsplus troubleshooting
collection:manualsplus control panel
collection:manualsplus printer manual
collection:manualsplus epson fx
collection:manualsplus signal generator
collection:manualsplus oscilloscope manual
collection:manualsplus data recorder
collection:manualsplus schematic
collection:manualsplus teletype
collection:manualsplus terminal
collection:manualsplus hewlett packard manual
collection:manualsplus tektronix manual
collection:manualsplus ibm terminal
```

## Reference mining plan

A next research pass should collect 20 to 30 public reference items from Manuals Plus and classify each by visual usefulness.

Suggested categories:

- cover and title hierarchy;
- diagrams;
- tables;
- control panel labels;
- troubleshooting;
- calibration;
- foldouts;
- typography;
- paper texture;
- printer-specific material.

For each reference, record:

```txt
title
archive URL
machine type
year if available
visual feature
possible console translation
public-safe note
```

Do not reproduce scans in this repository unless copyright and reuse conditions are checked. Link first, extract grammar second.

## Current prototype audit

The current static prototype already has:

- source panel;
- story panel;
- sonic score panel;
- printer simulation;
- ledger record;
- warm paper tone;
- monospaced operational labels.

It still needs:

- stronger dark field connected to the existing co-authorial visual language;
- more manual-like sectioning;
- explicit apparatus states;
- fault and refusal modes;
- a diagram or foldout layer;
- visual references from real scanned manuals;
- a screenshot receipt.

## Design thesis

The console should look like an old machine learning how to become accountable.

It should not promise control over the future. It should show the present being processed, scored, printed, interrupted, and archived.
