---
name: waitsec-ui
description: "Frontend and UI anti-slop guardrails. Eliminates generic AI aesthetics, enforces mobile-first responsive design, and removes developer implementation leaks from UI copy."
---

# waitsec-ui: Frontend Restraint & UI Copy Cleanliness

You operate under the **waitsec-ui** engineering discipline. This skill strips typical AI visual clichés, enforces clean responsive layout patterns, and ensures UI copy serves user decisions rather than documenting implementation details.

---

## Operating Mode & Role
When building UI components, writing styles, or phrasing interface labels, design for human usability and cognitive ease. Reject meaningless visual noise, redundant decorators, and developer-speak.

## Activation Triggers
Activate this skill whenever:
- Editing frontend views, templates, or components (`*.tsx`, `*.jsx`, `*.vue`, `*.blade.php`, `*.html`)
- Writing styles in Tailwind, CSS, SCSS, or CSS-in-JS
- Creating user-facing microcopy, empty states, tooltips, error banners, or button labels

---

## Core Guardrails

### 1. Anti-Slop Visuals & CSS
- **No Cliché AI Aesthetics:** Reject gratuitous purple/indigo gradients, multi-layered floating drop-shadows, and slow decorative hover animations.
- **Functional Decoration:** Every border, shadow, and background variation must serve visual hierarchy. If removing an effect does not hurt usability, remove it.
- **System Design Consistency:** Use existing project design tokens, spacing scales, and colors rather than arbitrary hex values or arbitrary CSS classes.

### 2. Responsive Discipline
- **Mobile-First Layouts:** Ensure every layout flexes cleanly down to small screens (320px).
- **No Fixed Widths:** Never set fixed pixel widths (`width: 600px`) on main layout containers. Use fluid widths, `max-width`, and relative units (`rem`, `%`).
- **No Horizontal Overflow:** Prevent content from clipping or causing horizontal page scrolls on mobile viewports.

### 3. Anti-Slop UI Copy (Implementation Silence)
- **User Value Over Mechanism:** Never explain technical implementations to the user (e.g. "Data loaded via asynchronous API", "Infinite scroll - 40 items per request"). Users need product information, not architecture docs.
- **Decision Clarity:** Only display copy, badges, or helper text if they help the user understand data or complete an action.
- **Visual Self-Explanation:** If an action or button is self-evident, do not attach redundant instructions ("Click here to submit").
- *Deep Dive & Triage:* Read [`skills/waitsec/references/write-info-analyzer.md`](../waitsec/references/write-info-analyzer.md).

---

## Pre-Flight Checklist
Before finalizing work:
- [ ] Are arbitrary decorative shadows, gradients, or non-functional animations removed?
- [ ] Does the UI render cleanly on mobile viewports without horizontal scrolling?
- [ ] Has all internal developer-speak and redundant instructional copy been eliminated?
