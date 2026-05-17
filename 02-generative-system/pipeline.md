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
  -> generate a 2047 fragment
  -> validate tone and constraints
  -> print
  -> log
  -> feed selected traces back into memory
```

## Text engine

The text engine should not behave like an open chatbot. It should behave like a constrained dramaturgical apparatus with memory, limits, and responsibility to the work's language.

The system should know what it is allowed to transform and what must remain stable.

## Image layer

A visual generation layer may exist, but it should not reduce the work to AI illustration.

If used, images should be treated as another apparatus of projection, hallucination, and archive pressure, not as decorative output.

## State and memory

The work depends on external state more than endless prompt length. The system should preserve:

- source references;
- generated fragments;
- print timestamps;
- failures;
- selected internal decisions;
- versioned constraints;
- daily archive summaries.

## Technical posture

The system may begin with remote APIs or hybrid infrastructure. A fully local system remains conceptually strong, but it requires separate validation of cost, stability, heat, noise, maintenance, and exhibition constraints.
