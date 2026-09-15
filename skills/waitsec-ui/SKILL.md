---
name: waitsec-ui
description: "Frontend and UI guardrails for clear, responsive, accessible interfaces. Use it for components, styles, interaction states, and user-facing copy without taking over full-page planning."
---

# waitsec-ui: Clear Interface Guardrails

Use this skill to keep interface work readable, useful, and consistent with the product. Follow [`waitsec`](../waitsec/SKILL.md) for general engineering discipline.

## Role

Own the details of the interface:

- Components and controls.
- Layout and responsive behavior.
- Visual hierarchy and design tokens.
- Accessibility and keyboard behavior.
- Loading, empty, error, success, and disabled states.
- Labels, helper text, validation, warnings, and other user-facing copy.

For a complete page or route, use [`waitsec-pagemaker`](../waitsec-pagemaker/SKILL.md) as the page orchestrator. Pagemaker leads page composition. This skill constrains the UI details.

## Triggers

Use this skill when the task includes:

- Creating or editing a component, form, card, table, modal, menu, or navigation control.
- Writing CSS, Sass, utility classes, CSS-in-JS, or component styles.
- Fixing responsive layout or horizontal overflow.
- Reviewing contrast, focus, keyboard use, touch targets, or semantic markup.
- Designing async and validation states.
- Writing or reviewing interface copy.
- Auditing an existing interface for visual or interaction noise.

## Non-Triggers

Do not use this skill by itself for:

- Planning the structure and section flow of a complete page. Use pagemaker, then load this skill when the page needs detailed component, responsive, accessibility, state, or copy guidance.
- Backend logic, database work, authentication enforcement, or tests.
- SEO metadata or structured data with no interface changes.
- A code-only refactor that does not affect rendered behavior.

A component-only task uses this skill, not pagemaker.

## Working Rules

### Follow the Product

- Read nearby components and styles before making choices.
- Reuse the existing design system, tokens, patterns, and icon set.
- Keep native CSS when the project already uses native CSS.
- Do not add a framework or component library for a small UI change.
- Preserve the product's language and interaction conventions unless the user asks to change them.

### Icons

- Reuse the project's icon components, icon library, and approved icon assets first.
- Do not use emoji anywhere in the interface, including as UI icons or as a substitute for a missing icon library.
- Do not hand-write inline SVG paths or draw a new SVG icon inside a component.
- SVG rendered by an established icon library is allowed. Existing SVG assets supplied by the project or user are also allowed.
- Do not use raster images as interface icons.
- If an icon is optional, use a clear text label instead. If the interface needs a consistent icon set, choose an established library that fits the project and dependency policy.
- Give icon-only controls an accessible name. Do not use the icon shape as the only explanation of an unfamiliar action.

### Visual Restraint

- Build hierarchy with type, spacing, alignment, and contrast before adding effects.
- Use borders, shadows, gradients, blur, and motion only when they communicate structure or state.
- Keep radii and spacing consistent with existing tokens.
- Give the main action the strongest visual weight. Keep secondary and destructive actions distinct.
- Do not fill empty space with decorative cards, labels, badges, or background patterns.
- If the user names a visual style such as modern, minimalist, brutalist, corporate, playful, luxury, retro, dark mode, neumorphic, or maximalist for a component or a small set of components, use [`waitsec-pagemaker/references/visual-styles.md`](../waitsec-pagemaker/references/visual-styles.md) for the concrete starting values instead of improvising from the name alone. A full-page or system-wide direction still belongs to pagemaker.

### Responsive Layout

- Start with the smallest useful layout, then expand when the content needs more room.
- Let content determine layout changes. Reuse project breakpoints when they work.
- Prevent page-level horizontal scrolling.
- Put wide tables, code, and data views in their own overflow container when needed.
- Avoid fixed page widths and fixed viewport heights that trap content on phones.
- Keep controls reachable and readable when a mobile keyboard is open.

### Accessibility

- Use semantic HTML before adding ARIA.
- Give every control an accessible name and every form field a visible label unless an established accessible pattern calls for another method.
- Keep keyboard focus visible and follow a logical focus order.
- Use sufficient text and control contrast.
- Make primary touch controls comfortable to hit without forcing large boxes around inline text links.
- Provide meaningful alt text for informative images and empty alt text for decorative images.
- Respect reduced-motion preferences.
- For requested parallax or complex motion, choose the moving layer from the interface context instead of assuming it must be an image. Use [`waitsec-pagemaker/references/motion-and-3d.md`](../waitsec-pagemaker/references/motion-and-3d.md) for detailed motion guidance.

### Interaction States

- Show immediate feedback after an action starts.
- Design loading, empty, error, success, disabled, and retry states when the feature can reach them.
- Prevent accidental repeat submissions while a request is running.
- Keep destructive actions separate and explain irreversible results before confirmation.
- Do not rely on color alone for errors, warnings, selection, or status.

### UI Copy

- Keep text that helps the user understand, decide, recover, or act.
- Remove implementation narration and instructions that only repeat a clear control.
- Preserve accessible names, labels, validation, consent, cost, security guidance, and destructive warnings.
- Use [`references/ui-copy.md`](./references/ui-copy.md) for the canonical `KEEP`, `REWRITE`, and `REMOVE` process.

### Text and Titles

- Do not use emoji anywhere in the interface, including copy, labels, and decoration.
- Do not use em dash (U+2014) or en dash (U+2013) in interface text, including headings, labels, and copy. Use a colon, comma, period, or parentheses instead. Only use them when the user explicitly asks.
- Separate parts of a page title with a middle dot surrounded by spaces, " · ", for example "Home · Blog · About". Do not use an en dash, em dash, hyphen, or vertical bar as the title separator.

## Core Anti-Patterns

### 1. Decoration Before Hierarchy

* **The Bad Habit:** Adding gradients, blur, large shadows, and decorative cards before the content structure is clear.
* **The Problem:** Effects compete with the main task and make unrelated elements look equally important.
* **Why It Fails:** People cannot quickly tell what to read or do first.
* **Clean Fix:** Establish heading order, spacing, alignment, contrast, and one clear primary action. Add an effect only when it explains depth, state, or grouping.
* **The Waitsec Way:** Structure does the work. Decoration must earn its place.

### 2. Desktop Layout Shrunk Into Mobile

* **The Bad Habit:** Building a wide layout first and letting columns, fixed widths, and large gaps squeeze onto a phone.
* **The Problem:** Content clips, controls crowd together, and the page moves sideways.
* **Why It Fails:** Reading and tapping become difficult on the screen people are using.
* **Clean Fix:** Start with a single readable flow. Add columns and larger spacing only when the content has room.
* **The Waitsec Way:** Mobile is a real layout, not a smaller screenshot of desktop.

### 3. Silent or Incomplete States

* **The Bad Habit:** Designing only the filled success state and leaving requests, empty data, and failures undefined.
* **The Problem:** The interface becomes blank or appears frozen outside the happy path.
* **Why It Fails:** People cannot tell whether they should wait, retry, change input, or leave.
* **Clean Fix:** Add the states the feature can actually reach, with clear feedback and a useful next action.
* **The Waitsec Way:** A component is complete only when its real states are understandable.

### 4. Emoji or Hand-Written SVG as an Icon Fallback

* **The Bad Habit:** Using emoji or drawing inline SVG paths when the project has no icon library.
* **The Problem:** Icons become visually inconsistent, platform-dependent, or difficult to review and maintain.
* **Why It Fails:** Emoji appearance changes across devices, while custom SVG paths create one-off assets without a shared system.
* **Clean Fix:** Reuse project icons first. Use a clear text label when an icon is optional, or choose an established icon library when a consistent set is genuinely needed. Library-rendered SVG and existing approved SVG assets are allowed.
* **The Waitsec Way:** A missing icon library is not permission to invent a new icon style.

### 5. Copy That Talks About the Code

* **The Bad Habit:** Showing internal terms such as rendering, caching, request batches, or lazy loading in normal interface copy.
* **The Problem:** The interface explains its implementation instead of helping with the task.
* **Why It Fails:** Technical narration adds noise and can hide the information people need.
* **Clean Fix:** State the user-visible meaning, status, or next action. Keep implementation detail in developer documentation.
* **The Waitsec Way:** Show what the user needs to know, not how the code works.

### 6. Emoji and Fancy Dashes in Generated Text

* **The Bad Habit:** Adding emoji to labels, headings, or copy, and joining title parts with an en dash or em dash.
* **The Problem:** The interface looks machine-generated, and long dashes render inconsistently across fonts and platforms.
* **Why It Fails:** Emoji changes shape and meaning across devices, while en and em dashes read as out of place in short interface text.
* **Clean Fix:** Remove emoji from all generated text. Replace en dash and em dash with a colon, comma, period, or parentheses. Separate title parts with " · ".
* **The Waitsec Way:** Restrained text reads as deliberate and human.

## Pre-Flight Checklist

Before finishing UI work:

- [ ] Did I follow the existing design system and avoid adding an unnecessary UI dependency?
- [ ] Do icons come from an existing or justified library or approved asset, with no emoji, raster substitute, or hand-written inline SVG?
- [ ] Is the visual hierarchy clear without decorative noise?
- [ ] Does the layout work across the useful width range without page-level horizontal scrolling?
- [ ] Are labels, accessible names, focus, contrast, keyboard use, and touch behavior handled?
- [ ] Are all reachable loading, empty, error, success, disabled, and destructive states clear?
- [ ] Does the copy help users act without exposing implementation detail or deleting needed warnings?
- [ ] Is generated text free of emoji, and free of em dash or en dash unless the user asked for them?
- [ ] Does the page title use " · " as the separator instead of an en dash, em dash, hyphen, or vertical bar?
- [ ] Did I verify the changed interface at relevant viewport sizes and interaction states?
