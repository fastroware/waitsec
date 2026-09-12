---
name: waitsec-quality
description: "[Coming Soon] Quality extension for waitsec. Covers security auditing, automated testing discipline, and data integrity guardrails."
---

# waitsec-quality: Quality & Safety Guardrails

> **Status: Work in Progress.** This module is not yet active. Check [github.com/fastroware/waitsec](https://github.com/fastroware/waitsec) for release updates.

---

## Planned Guardrails

This extension adds a second layer on top of `waitsec-core`, focused on code quality and systemic safety:

- **Security Audit** — Active scanning for common vulnerabilities beyond the baseline enforced in `anti-overengineering`. Includes dependency audits, permission boundaries, and sensitive data exposure checks.
- **Testing Discipline** — Rules for meaningful tests: no trivial assertions, no mocked-everything suites, no skipping edge cases.
- **Data Integrity** — Database constraint checks, migration safety, and soft-delete handling patterns.

---

## How to Use When Released

Install alongside `waitsec-core`:

```bash
npx waitsec --skill waitsec-core --skill waitsec-quality
```

Or via `skills.sh`:

```bash
skills install fastroware/waitsec/skills/waitsec-quality
```
