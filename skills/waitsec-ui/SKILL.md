---
name: waitsec-ui
description: "[Coming Soon] UI/frontend extension for waitsec. Covers anti-slop CSS, responsive discipline, and no-decoration-for-decoration's-sake rules."
---

# waitsec-ui: Frontend Guardrails

> **Status: Work in Progress.** This module is not yet active. Check [github.com/fastroware/waitsec](https://github.com/fastroware/waitsec) for release updates.

---

## Planned Guardrails

This extension targets frontend and CSS quality:

- **Anti-Slop CSS** — No gradient purple for no reason, no box-shadow stacks that add nothing, no animation on elements that don't need it.
- **Responsive Discipline** — Mobile-first layout rules. No pixel-locked widths on main containers. No horizontal scroll on mobile.
- **Decoration Restraint** — Every visual element must have a functional purpose. Decorative elements that increase cognitive load without guiding the user get cut.

---

## How to Use When Released

```bash
npx waitsec --skill waitsec-core --skill waitsec-ui
```
