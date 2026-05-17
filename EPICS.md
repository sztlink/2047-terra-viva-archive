# Epics

This roadmap turns the repository into a public technical-artistic research archive without exposing private production material.

The epics are ordered so each block can be developed with Felipe's input, reviewed, and committed as a coherent public layer.

## Current target

Move the repository from **initial public shell** to **credible research archive v0.2**.

The repo should make clear that Projeto 2047 / Arquivo Terra Viva is not "AI art" in the generic sense. It is a research process around apparatus, archive, obsolete media, e-waste, and the material politics of computation.

---

## Epic 0 — Orientation and canon

**Goal**  
Create a fast entry point for visitors, curators, researchers, and future collaborators.

**Outputs**

- `START-HERE.md`
- Short repo thesis
- Current status block
- Reading path: 5 minutes / 20 minutes / deep dive
- Glossary of key terms

**Felipe input needed**

- What should a stranger understand in the first 3 minutes?
- Which phrase should lead: "present being mined", "living archive", "printer as witness", or another?
- Should the repo foreground Giselle/Felipe authorship equally from line one, or foreground the apparatus archive first?

**Definition of done**

A new reader can understand what the repo is, what it is not, and where to start without reading every file.

---

## Epic 1 — Dot-matrix printer as archive apparatus

**Goal**  
Document the printer as the material heart of the work, not as nostalgic scenography.

**Outputs**

- `01-apparatus/printer-research/README.md`
- `01-apparatus/printer-research/dot-matrix-as-archive-apparatus.md`
- `01-apparatus/printer-research/continuous-paper.md`
- `01-apparatus/printer-research/encoding-and-typography.md`
- `01-apparatus/printer-research/failure-modes.md`
- Future: print samples, photos, scans, audio notes

**Felipe input needed**

- Which printer model is canonical for the first tests?
- What do you already know from the FX-2190 experiments?
- Should Portuguese accents and encoding issues become visible as material behavior or be solved invisibly?
- How should the paper accumulate in space?
- Is the printer a witness, oracle, bureaucratic machine, archive machine, or all of these?

**Definition of done**

The printer reads as a conceptual and technical apparatus with enough specificity to support future prototypes.

---

## Epic 2 — Peer field and related practices

**Goal**  
Position the project near relevant artistic, technical, and theoretical fields without reducing it to influence lists.

**Outputs**

- `00-concept/peer-field.md`
- Sections for:
  - printer / live information systems;
  - AI, archive, and image politics;
  - e-waste and material computation;
  - generative fiction and machine writing;
  - speculative archives and environmental futures.

**Felipe input needed**

- Which peers feel alive, not merely academically correct?
- Should the repo include only public references or also personal field notes about why they matter?
- How close should Hans Haacke's `News` be placed to this project?
- Which Giselle works should be cited as shared field, and which should stay implicit for now?

**Definition of done**

A reader can locate the project among media art, AI criticism, archive studies, and material computation without mistaking it for a derivative work.

---

## Epic 3 — Diagrams and visual grammar

**Goal**  
Give the repo visual clarity through public, redrawn diagrams.

**Outputs**

- `05-diagrams/apparatus-flow.svg`
- `05-diagrams/archive-layers.svg`
- `05-diagrams/material-stack.svg`
- `05-diagrams/README.md` updated with captions

**Felipe input needed**

- Should diagrams look technical, archival, or editorial?
- Black and white, terminal-like, news.szt.link style, or blueprint style?
- Should the diagrams reveal cloud/API dependency explicitly?
- Which diagram is most important first: apparatus flow, archive layers, or material stack?

**Definition of done**

The repo has at least one diagram that can travel into a presentation, article, or future publication without exposing private material.

---

## Epic 4 — Prototype receipts

**Goal**  
Document real tests as receipts: small, factual, reproducible fragments of the apparatus becoming material.

**Outputs**

- `03-field-notes/YYYY-MM-printer-smoke-test.md`
- `03-field-notes/YYYY-MM-generative-loop-smoke.md`
- `03-field-notes/YYYY-MM-paper-archive-test.md`
- Optional media folder for sanitized photos/scans/audio

**Felipe input needed**

- Which first test matters most: print text, print from generated fragment, print with accents, or print continuously?
- Can photos of the printer/paper be public?
- Should failed output be preserved as evidence?
- What minimum test would make the project feel real in the body?

**Definition of done**

The repository contains at least one real apparatus receipt: command, setup, output, failure, observation, and next step.

---

## Epic 5 — Generative dramaturgy and memory

**Goal**  
Define how the generative system writes without becoming an unconstrained chatbot.

**Outputs**

- `02-generative-system/dramaturgical-constraints.md`
- `02-generative-system/source-ledger.md`
- `02-generative-system/print-ledger-schema.md`
- `02-generative-system/fallback-modes.md`

**Felipe input needed**

- What must never drift in the fictional world?
- What is allowed to be generated freely?
- Should public news sources be named or abstracted?
- Should the system cite sources internally, publicly, or not at all?
- What is the relation between present date and fictional 2047 date?

**Definition of done**

The generative layer has constraints, memory, and traceability before any large implementation begins.

---

## Epic 6 — Hardware and e-waste body

**Goal**  
Specify the material body of the installation without turning e-waste into generic cyberpunk decoration.

**Outputs**

- `01-apparatus/hardware-body.md`
- `01-apparatus/e-waste-sourcing-ethics.md`
- `01-apparatus/living-and-dead-hardware.md`
- Public checklist of possible components by category, without suppliers or negotiation details

**Felipe input needed**

- Should the functioning controller be visible inside the rack?
- Which dead components matter visually or historically?
- Should provenance labels be part of the work?
- How much should the work confess remote computation if cloud APIs are used?

**Definition of done**

The hardware body is described as material argument, not decoration.

---

## Epic 7 — Citation, release, and preservation layer

**Goal**  
Make the repo citable as a stable public research artifact.

**Outputs**

- `CHANGELOG.md`
- `CITATION.cff`
- `MANIFEST.md`
- Tag `v0.1.0` or `v0.2.0`
- Optional checksum list for public artifacts

**Felipe input needed**

- Should the first citable release happen now or after printer documentation?
- How should Giselle and Felipe be represented in citation metadata?
- Should this later go to Zenodo, or remain GitHub-only for now?

**Definition of done**

The archive has a stable version that can be referenced in academic, curatorial, or public contexts.

---

## Suggested working order

1. Epic 0 — Orientation and canon
2. Epic 1 — Dot-matrix printer as archive apparatus
3. Epic 3 — First diagram
4. Epic 2 — Peer field
5. Epic 4 — First prototype receipt
6. Epic 5 — Generative dramaturgy and memory
7. Epic 6 — Hardware and e-waste body
8. Epic 7 — Citation and release

## Rule for all epics

Do not publish private process.  
Do not publish institutional material.  
Do not freeze the artwork prematurely.  
Make the apparatus legible.  
Let caveats travel with the artifacts.
