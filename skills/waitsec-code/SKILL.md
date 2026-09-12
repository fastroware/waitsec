---
name: waitsec-code
description: "[Coming Soon] Code quality extension for waitsec. Covers clean code patterns, anti-comment pollution, and dependency hygiene."
---

# waitsec-code: Clean Code Guardrails

> **Status: Work in Progress.** This module is not yet active. Check [github.com/fastroware/waitsec](https://github.com/fastroware/waitsec) for release updates.

---

## Planned Guardrails

This extension targets the internal quality of the code itself:

- **Anti-Comment Pollution** — No redundant inline comments that restate what the code already says. Comments explain *why*, not *what*.
- **Clean Code Patterns** — Naming clarity, function length limits, single responsibility.
- **Dependency Hygiene** — Avoid pulling in packages for trivial problems. Audit transitive dependencies before adding them.

---

## How to Use When Released

```bash
npx waitsec --skill waitsec-core --skill waitsec-code
```
