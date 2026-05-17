# System overview

This is a preliminary apparatus map. It describes a possible technical structure, not a final exhibition specification.

## Functional blocks

```txt
public signals / curated sources
          |
          v
source collector
          |
          v
local project memory + dramaturgical rules
          |
          v
generative text engine
          |
          +--------------------+
          |                    |
          v                    v
dot-matrix printer      visual generation layer
          |                    |
          v                    v
continuous paper        screen / projection / future display
          |
          v
physical archive in formation
```

## Controller

The controller is the operational computer that coordinates sources, state, generation, printing, logging, and optional visual output.

At this stage, the controller is not assumed to run all AI models locally. The system may be:

- remote API based;
- hybrid;
- local-first;
- fully local only if hardware, budget, stability, and exhibition constraints allow it.

## Printer

The dot-matrix printer is the primary material output device. It converts generative text into mechanical rhythm, ink, paper, and cumulative archive.

## Hardware body

The installation may include a visible hardware body: rack, controller, dead switches, old drives, memory modules, cables, labels, and electronic debris.

The goal is not decoration. The goal is to expose computation as material infrastructure.

## Offline and failure posture

The apparatus should fail visibly and recoverably. If network access is unstable, the printer should still be able to continue from local memory, fallback fragments, or stored state.

The archive should preserve traces of the system's limits instead of hiding all instability.
