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

## Part 1: Visual Restraint

### 1. Generic AI Aesthetics

* **The Bad Habit:** Reaching for purple-to-indigo gradients, layered drop shadows, and slow hover animations on every surface.
* **The Problem:** The interface looks like every other generated template, and depth cues appear on elements that have no reason to float or move.
* **Why It Fails:** Users recognize the generic look instantly and trust the product less. Decorative motion also distracts from the actual task.
* **Clean Fix:** Use solid neutral surfaces and pick one deliberate accent color for the primary action. Add shadow or motion only when it signals real elevation or state.
* **The Waitsec Way:** Restraint reads as confidence. If an effect does not help the user, remove it.

### 2. Decoration That Does Not Earn Its Place

* **The Bad Habit:** Adding borders, shadows, glows, and background patterns to fill empty space.
* **The Problem:** The page is visually busy and the important element no longer stands out.
* **Why It Fails:** When everything is decorated, nothing has hierarchy. Users do not know where to look first.
* **Clean Fix:** Remove an effect and check whether usability drops. If it does not, leave it removed.
* **The Waitsec Way:** Every visual choice must carry meaning. Decoration is not a substitute for hierarchy.

### 3. Arbitrary Values Instead of Design Tokens

* **The Bad Habit:** Typing random hex colors, odd spacing numbers, and one-off font sizes into components.
* **The Problem:** The same "gray" appears in five slightly different shades, and spacing drifts from screen to screen.
* **Why It Fails:** The interface feels inconsistent, and future changes require hunting every stray value.
* **Clean Fix:** Use the existing design tokens, spacing scale, and theme colors. Add a token only when the system genuinely lacks one.
* **The Waitsec Way:** Follow the system in place. Consistency comes from reuse, not from fresh choices.

---

## Part 2: Responsive Discipline

### 4. Fixed Widths and Horizontal Overflow

* **The Bad Habit:** Setting fixed pixel widths on main containers, tables, or code blocks.
* **The Problem:** On a narrow phone the page wobbles sideways and content disappears past the edge of the screen.
* **Why It Fails:** Horizontal scrolling on a vertical page breaks reading and navigation. Users lose their place and leave.
* **Clean Fix:** Use fluid widths with a max width (`w-full max-w-5xl mx-auto px-4`) and wrap tables or code blocks in `overflow-x-auto`.
* **The Waitsec Way:** The layout must fit the screen it is on. Zero horizontal page scrolling on mobile.

### 5. Desktop Assumed as the Default

* **The Bad Habit:** Building the wide desktop layout first and patching mobile with a media query at the very end.
* **The Problem:** The mobile view inherits desktop rules and glitches: oversized type, cramped cards, and broken spacing.
* **Why It Fails:** A last-minute patch fixes only the bug you happened to notice. Real visitors hit all the rest.
* **Clean Fix:** Start with the mobile layout, then add widths and columns as the screen grows.
* **The Waitsec Way:** Mobile is the base, not an afterthought. Design from the small screen up.

---

## Part 3: Anti-Slop UI Copy (Implementation Silence)

### 6. Implementation Leaks in Copy

* **The Bad Habit:** Writing user-facing text about the code, such as "Data loaded via asynchronous API" or "Infinite scroll, 40 items per request".
* **The Problem:** The interface explains its own technical internals to the user.
* **Why It Fails:** Users want to finish a task, not read architecture notes. The text adds noise and reveals nothing useful.
* **Clean Fix:** Delete implementation talk. Keep only what helps the user understand the data or complete an action.
* **The Waitsec Way:** The UI serves the user, not the developer. Hide the mechanism, show the meaning.
* *Deep Dive & Triage:* Read [`skills/waitsec/references/write-info-analyzer.md`](../waitsec/references/write-info-analyzer.md).

### 7. Redundant Instructional Copy

* **The Bad Habit:** Adding "Click here to submit" under a clear "Submit" button.
* **The Problem:** The screen repeats what the control already says.
* **Why It Fails:** Extra text slows scanning without adding information. It makes a clean interface feel cluttered and unsure.
* **Clean Fix:** Let the label and visual design carry the instruction. Delete the helper sentence.
* **The Waitsec Way:** If the interface is already clear, stay quiet. Clear does not mean more text.

### 8. Labels That Do Not Help a Decision

* **The Bad Habit:** Labeling every icon, card, and number with explanatory text "so the screen does not look empty".
* **The Problem:** The page fills with words that do not help the user choose or act.
* **Why It Fails:** Visual noise makes the real information harder to find, and users skim past everything.
* **Clean Fix:** Keep text only when it changes a decision or explains the data. Remove labels that merely restate what is already visible.
* **The Waitsec Way:** Show information that helps. Delete decoration made of words.

---

## Pre-Flight Checklist
Before finalizing work:
- [ ] Are arbitrary decorative shadows, gradients, or non-functional animations removed?
- [ ] Does the UI render cleanly on mobile viewports without horizontal scrolling?
- [ ] Has all internal developer-speak and redundant instructional copy been eliminated?
