# Generative pipeline

This document sketches a possible generative system for the research archive. It is not a final implementation.

## Inputs

Possible input layers:

- public news or RSS sources;
- curated research fragments;
- project-specific dramaturgical rules;
- a fictional 2047 bible;
- previous printed fragments;
- system state and time markers;
- manual interventions by the artists.

## Generation loop

```txt
collect public signals
  -> filter and classify
  -> update local state
  -> generate a 2047 short story
  -> validate dramaturgical constraints
  -> calibrate sonic score through szt.link
  -> print or refuse
  -> log story, score, print, silence, or failure
  -> feed selected traces back into memory
```

## Text engine

The text engine should not behave like an open chatbot. It should behave like a constrained dramaturgical apparatus with memory, limits, and responsibility to the work's language.

The primary form is the **short story**. The system may use documents, bulletins, testimony, reports, and archive fragments as internal modes, but the generated output should be understood as literary material before it becomes paper.

The system should know what it is allowed to transform and what must remain stable.

## Image layer

A visual generation layer may exist, but it should not reduce the work to AI illustration.

If used, images should be treated as another apparatus of projection, hallucination, and archive pressure, not as decorative output.

## State, memory, and score

The work depends on external state more than endless prompt length. The system should preserve:

- source references;
- generated stories;
- sonic score parameters;
- print timestamps;
- silence events;
- failures;
- refusals;
- selected internal decisions;
- versioned constraints;
- daily archive summaries.

The printer performs the text. Cadence is not decoration. It is part of the generative system.

## Technical posture

The system may begin with remote APIs or hybrid infrastructure. A fully local system remains conceptually strong, but it requires separate validation of cost, stability, heat, noise, maintenance, and exhibition constraints.
