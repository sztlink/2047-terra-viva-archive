# Selected reference set

This file selects the first 8 Manuals Plus references for the next visual iteration of the 2047 command center prototype.

Source collection:

- <https://archive.org/details/manualsplus>

Selection criteria:

1. Direct relation to paper, terminals, logging, signal, or operator control.
2. Strong translation potential into concrete UI components.
3. Conceptual fit with a long-duration writing and printing apparatus.
4. Diversity across source, story, score, print, ledger, and maintenance.
5. Public-safe linking without copying scanned pages into this repository.

## The selected 8

### 01. Teletype Corporation AN/FGC-36 Page Teletypewriter Set

Archive URL:

- <https://archive.org/details/manualsplus_09402>

Why selected:

This is the strongest ancestor reference for paper computation. It combines terminal logic, high-speed page printing, operation, maintenance, and parts.

Console translation:

- Printer as paper terminal.
- Paper feed as apparatus state.
- Maintenance as visible part of the work.
- Print event as inscription, not output.

Use for:

- printer simulation panel;
- paper feed and fault states;
- maintenance/refusal pages;
- public proof sheets.

### 02. Tau-Tron MR-1 Data Logging Printer user manual

Archive URL:

- <https://archive.org/details/manualsplus_10500>

Why selected:

The phrase `data logging printer` is almost a direct bridge to the 2047 apparatus. It frames printing as a record of events rather than a publishing endpoint.

Console translation:

- Ledger as printed trace.
- Story as logged event.
- Printer state as recorder state.

Use for:

- ledger record panel;
- print receipt format;
- line counter;
- daily run log.

### 03. Tektronix PI-210 4-Channel Word Generator manual

Archive URL:

- <https://archive.org/details/manualsplus_11219>

Why selected:

A word generator is conceptually close to constrained machine writing. The multi-channel structure also maps well to parallel apparatus lanes.

Console translation:

- Story engine as channelized generator.
- Source, story, score, printer, and ledger as coordinated channels.
- Word generation under constraints, not chatbot output.

Use for:

- story engine panel;
- channel lanes;
- story packet schema;
- generated text state labels.

### 04. Tektronix PI-100A 4-Channel Clock Generator user's reference manual

Archive URL:

- <https://archive.org/details/manualsplus_11225>

Why selected:

The sonic score needs time, pulse, silence, and intervals. A clock generator gives the interface a technical grammar for cadence.

Console translation:

- Silence as timed event.
- Printer cadence as pulse.
- Score values as intervals and channels.

Use for:

- sonic score panel;
- silence timer;
- cadence presets;
- run cycle timing.

### 05. Hewlett-Packard 3562A Dynamic Signal Analyzer user's guide

Archive URL:

- <https://archive.org/details/manualsplus_13158>

Why selected:

The project reads present signals. A dynamic signal analyzer is a strong model for treating sources as measured conditions, not content feeds.

Console translation:

- Source panel as signal analysis.
- Evidence over analytics.
- Trace, noise, threshold, and sampling language.

Use for:

- source signal panel;
- source confidence display;
- live or simulated trace;
- evidence hierarchy.

### 06. Newbury Laboratories Limited 8009 Visual Display Terminal operator instruction manual

Archive URL:

- <https://archive.org/details/manualsplus_11883>

Why selected:

The command center is an operator surface. A visual display terminal operator manual can inform screen hierarchy, instruction language, and mode-based operation.

Console translation:

- Interface as operated terminal.
- Instructions as part of the screen.
- Modes instead of navigation.

Use for:

- global layout;
- operator prompts;
- mode labels;
- screen-state documentation.

### 07. Marconi Instruments TK 1803 Control Panel Instruction Manual

Archive URL:

- <https://archive.org/details/manualsplus_03325>

Why selected:

A control panel manual is the most direct source for apparatus labels, switches, state lights, and grouped controls.

Console translation:

- State strip with machine labels.
- Indicator lights for ready, writing, scoring, printing, fault, silence.
- Physical control logic instead of web buttons.

Use for:

- apparatus state strip;
- control groups;
- indicator labels;
- fault and maintenance UI.

### 08. biomation 8100 Waveform Recorder manual

Archive URL:

- <https://archive.org/details/manualsplus_08089>

Why selected:

A waveform recorder frames the ledger as a recorded trace. This helps avoid making the ledger look like a generic database table.

Console translation:

- Ledger as trace recorder.
- Each run as a waveform-like event.
- Paper archive as stored signal.

Use for:

- ledger recorder panel;
- event trace visualization;
- receipt history;
- archive accumulation display.

## Component mapping

| Console component | Primary reference | Secondary reference |
| --- | --- | --- |
| Apparatus state strip | Marconi TK 1803 Control Panel | Newbury 8009 Visual Display Terminal |
| Source signal trace | HP 3562A Dynamic Signal Analyzer | biomation 8100 Waveform Recorder |
| Story engine | Tektronix PI-210 Word Generator | Newbury 8009 Visual Display Terminal |
| Sonic score | Tektronix PI-100A Clock Generator | Tektronix PI-210 Word Generator |
| Printer feed and fault panel | Teletype AN/FGC-36 | Tau-Tron MR-1 Data Logging Printer |
| Ledger recorder | biomation 8100 Waveform Recorder | Tau-Tron MR-1 Data Logging Printer |
| Public receipt sheet | Tau-Tron MR-1 Data Logging Printer | Teletype AN/FGC-36 |
| Maintenance/refusal page | Teletype AN/FGC-36 | Marconi TK 1803 Control Panel |

## Next UI iteration

The next command center UI should add these components:

1. A top apparatus state strip inspired by control panel indicators.
2. A source signal trace panel inspired by signal analyzers.
3. A story engine panel with channel labels.
4. A score calibration table with cadence, density, silence, and pulse.
5. A printer feed panel with paper, online/offline, jam, and service states.
6. A ledger recorder panel that looks like a trace or event recorder.
7. A refusal/fault page using troubleshooting grammar.
8. A public receipt sheet that can be saved as an image or markdown field note.

## Visual inspection checklist

When opening each manual, inspect:

- cover hierarchy;
- table of contents;
- warning boxes;
- panel diagrams;
- operating procedures;
- calibration tables;
- troubleshooting tables;
- foldouts;
- typography;
- page numbers and captions;
- paper texture and scan marks.

## Public boundary

This selected set links to public archive pages only. It does not reproduce scanned pages. Any future use of page images must check reuse rights and be approved before publication.
