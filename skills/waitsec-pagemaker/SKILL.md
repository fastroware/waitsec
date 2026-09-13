---
name: waitsec-pagemaker
description: "Page-level orchestrator for building and revising complete web pages. It reads the existing project, chooses only the needed page guidance, coordinates UI quality, and verifies the result without forcing frameworks, sections, assets, or metadata."
---

# waitsec-pagemaker: Page Orchestrator

Use this skill to plan and build a complete page or route. It coordinates page purpose, content order, layout, project fit, metadata, and verification.

Follow [`waitsec`](../waitsec/SKILL.md) for general engineering discipline. Use [`waitsec-ui`](../waitsec-ui/SKILL.md) for detailed interface constraints.

## Role and Skill Relationship

Pagemaker leads full-page composition:

- Decide what the page must help people understand or do.
- Inspect the existing route, shell, content, and design system.
- Choose the closest page blueprint.
- Include only sections supported by the task and available facts.
- Coordinate public-page metadata when it applies.
- Verify the complete page across its useful states and widths.

UI owns component and interface detail:

- Visual restraint and design tokens.
- Responsive behavior and accessibility.
- Interaction states and user-facing copy.

For a full-page task, load pagemaker and UI together when needed. Pagemaker leads composition. UI constrains the details. A component-only task uses UI, not pagemaker.

Use [`waitsec-quality`](../waitsec-quality/SKILL.md) when auth or other page work changes server security, tokens, rate limits, tests, or sensitive data handling. Use [`waitsec-code`](../waitsec-code/SKILL.md) for implementation and dependency hygiene.

## Triggers

Use this skill when:

- Creating a complete page, route, or page template.
- Reworking the section order and purpose of an existing page.
- Turning a brief into a landing, blog index, article, about, contact, or auth page.
- Planning a multi-section public page.
- Auditing a complete page for content flow, page-level responsive behavior, or metadata.
- Adding page metadata or structured data as part of full-page work.

## Non-Triggers

Do not use this skill for:

- A single component, control, modal, form field, card, or style adjustment.
- A copy-only or accessibility-only edit that does not change page composition.
- Backend logic, migrations, API work, or test-only changes.
- A small metadata fix that does not require page planning.
- Motion, image, or 3D work on an isolated component.

Route those tasks to UI, code, quality, or core as appropriate.

## Operating Priorities

When instructions compete, use this order:

1. The user's stated goal and constraints.
2. The existing project and its established patterns.
3. Security, accessibility, and factual accuracy.
4. The selected page blueprint.
5. Optional enhancements.

Do not add a section, dependency, asset, icon set, animation, schema block, or navigation element just because a reference mentions it.

## Concise Project Recon

Before changing a page:

1. Locate the target route, template, layout shell, and nearby pages.
2. Identify the framework, rendering method, styling system, and design tokens already in use.
3. Check existing components, icons, media, metadata helpers, and structured-data generators.
4. Reuse the current stack. Native CSS remains native CSS by default.
5. Prefer existing project tools, then a simple native solution, then a dependency only when it is justified.
6. Ask only when an unclear choice changes architecture, ownership, content, cost, or another expensive decision.
7. Keep recon proportional. Do not scan unrelated directories when the target and nearby files answer the question.

Read [`references/project-recon.md`](./references/project-recon.md) when the stack is unclear, a dependency is being considered, or the project has competing patterns.

## Page Workflow

### 1. Define the Page Job

State the main audience, task, and outcome in one or two sentences. If the brief is clear, proceed without asking for confirmation.

### 2. Choose a Blueprint

Pick the closest reference from the routing table. Do not force an unrelated blueprint. For an unlisted page, borrow only the useful structure from the nearest match.

### 3. Inventory Real Content

Separate known facts from placeholders and unknowns. Do not invent testimonials, prices, dates, metrics, people, addresses, links, product features, or schema fields.

### 4. Choose Sections

Include a section only when it helps the page job and has real content. Mark missing content clearly or leave the section out. Preserve useful sections already present unless the task asks to restructure them.

### 5. Build With the Existing System

Reuse the project shell, components, styles, icons, and media. Keep changes limited to the task. Add a dependency only when the project and requested behavior cannot reasonably handle the need.

### 6. Apply the UI Contract

Use the compact rules below. Open the full UI skill when component behavior, accessibility, responsive detail, or copy needs more guidance.

### 7. Add Public Metadata When It Applies

Use [`references/seo-and-structured-data.md`](./references/seo-and-structured-data.md) only for public indexable pages or explicit SEO work. Do not duplicate metadata or schema already generated by the project.

### 8. Verify the Real Page

Check the route, content, interactions, relevant states, responsive behavior, and available project validation commands. Report only checks that actually ran.

## Compact UI Contract

### Project Fit and Visual Restraint

- Follow existing tokens, components, icon sets, and styling conventions.
- Reuse project icon components, libraries, and approved assets. Do not replace a missing icon library with emoji, raster icons, or hand-written inline SVG.
- SVG rendered by an icon library and existing SVG assets are allowed. Use a clear text label when an icon is optional, or choose a fitting established library when the page genuinely needs a consistent icon set.
- Build hierarchy with type, spacing, alignment, and contrast before using effects.
- Avoid repeated gradients, blur, large shadows, decorative grids, and all-pill interfaces unless the product already uses them with a clear purpose.
- Keep one visually primary action per decision area. Separate destructive actions.

### Responsive Layout

- Start with the smallest useful layout and expand when content needs room.
- Reuse project breakpoints when they work. Let content expose where another change is needed.
- Prevent page-level horizontal scrolling. Contain wide tables, code, and data views locally.
- Avoid fixed page widths and fixed viewport heights that clip content or fight mobile keyboards.
- Keep long-form text at a comfortable reading measure.

### Accessibility

- Use semantic landmarks and a logical heading order.
- Keep visible labels, accessible names, useful alt text, keyboard access, and visible focus.
- Use readable contrast and do not rely on color alone for meaning.
- Make primary touch controls comfortable without forcing large targets around inline text links.
- Respect reduced-motion preferences.

### States and Actions

- Design only the states the page can reach, including loading, empty, error, success, disabled, and retry states where relevant.
- Give immediate feedback for submissions and prevent accidental repeat requests.
- Explain destructive or irreversible results before confirmation.
- Follow the product's existing action order and interaction patterns.

### Copy

- Keep copy that supports understanding, choice, safety, recovery, or action.
- Remove implementation narration and repeated instructions.
- Never remove accessible names, labels, validation, consent, costs, security guidance, or destructive warnings for visual cleanliness.
- Use [`waitsec-ui/references/ui-copy.md`](../waitsec-ui/references/ui-copy.md) for copy decisions.

### Media and Motion

- Reuse project and user-provided assets first.
- Treat Pexels as a last stock fallback. Without a user-specified subject, search for plants, natural scenery, architecture, objects, products, or natural textures instead of people.
- Do not apply that automatic sourcing default to existing project media or a subject the user explicitly requests.
- Choose media that supports the content and follows the user's licensing and subject requirements.
- Use native CSS for small transitions. Reuse an existing motion or 3D tool before considering another dependency.
- Treat parallax as a relationship between page layers, not an image-only effect. Choose cards, product previews, media, headings, decorative layers, or backgrounds according to the page context.
- Load [`references/image-sourcing.md`](./references/image-sourcing.md) only when media must be selected or added.
- Load [`references/motion-and-3d.md`](./references/motion-and-3d.md) only when the requested page needs motion, parallax, or 3D.

## Reference Routing

| Need | Load |
| :--- | :--- |
| Stack unclear or dependency under consideration | [`project-recon.md`](./references/project-recon.md) |
| Public metadata, indexability, or schema | [`seo-and-structured-data.md`](./references/seo-and-structured-data.md) |
| Landing, product, or campaign page | [`landing-page.md`](./references/landing-page.md) |
| Blog, news, or article listing | [`blog-index.md`](./references/blog-index.md) |
| Article, post, or long-form reading page | [`article-single.md`](./references/article-single.md) |
| About, profile, or portfolio page | [`about-me.md`](./references/about-me.md) |
| Contact, support, or feedback page | [`contact-page.md`](./references/contact-page.md) |
| Login, register, reset, or lockout page | [`auth-pages.md`](./references/auth-pages.md) |
| Selecting or adding page images | [`image-sourcing.md`](./references/image-sourcing.md) |
| Requested animation, parallax, or 3D | [`motion-and-3d.md`](./references/motion-and-3d.md) |

Load only the references needed for the current page. Do not read every blueprint by default.

## Flagship Page Anti-Patterns

### 1. Building Before Reading the Project

* **The Bad Habit:** Starting from a remembered template before checking the target route, nearby pages, and existing tools.
* **The Problem:** The new page uses the wrong syntax, styling system, shell, or component patterns.
* **Why It Fails:** The page feels separate from the product and creates avoidable repair work.
* **Clean Fix:** Run proportional recon, reuse the project stack, and open the matching blueprint before building.
* **The Waitsec Way:** The project is the source of truth. A blueprint adapts to it.

### 2. Turning Every Optional Section Into a Requirement

* **The Bad Habit:** Adding a hero, feature grid, proof, pricing, FAQ, newsletter, and footer block to every page.
* **The Problem:** The page becomes long, repetitive, and filled with weak or invented content.
* **Why It Fails:** Extra sections hide the page's main job and make factual review harder.
* **Clean Fix:** Include only sections that support the goal and have real content. Leave unsupported sections out.
* **The Waitsec Way:** A complete page contains what it needs, not everything a template can hold.

### 3. Styling Before Content Hierarchy

* **The Bad Habit:** Choosing gradients, cards, motion, and image treatments before deciding the reading and action order.
* **The Problem:** Decoration becomes the structure, while the message and primary action remain unclear.
* **Why It Fails:** People notice effects but cannot quickly understand the page or continue the task.
* **Clean Fix:** Set the content order, headings, sections, and primary action first. Style that structure with restraint.
* **The Waitsec Way:** Page design begins with meaning and order.

### 4. Adding a Tool for a Small Effect

* **The Bad Habit:** Installing an icon, animation, CSS, or 3D package before checking project tools and native browser features.
* **The Problem:** A small page change adds bundle weight, setup, and maintenance work.
* **Why It Fails:** The implementation cost outlives the effect and can conflict with the existing stack.
* **Clean Fix:** Reuse the project tool first, use a simple native solution second, and add a dependency only with a clear reason.
* **The Waitsec Way:** Dependencies solve real gaps, not routine styling.

## Pre-Flight Checklist

Before reporting a page complete:

- [ ] Did I identify the page job, audience, and primary outcome?
- [ ] Did I inspect the target route, nearby pages, shell, styling system, components, and existing generators?
- [ ] Did I load only the references needed for this page?
- [ ] Are all sections supported by the goal and real content?
- [ ] Did I reuse project tools and avoid an unnecessary framework or dependency?
- [ ] Does the page follow the compact UI contract and link to deeper UI guidance where needed?
- [ ] Does it work across the useful width range without page-level horizontal scrolling?
- [ ] Are accessibility, interaction states, copy, and destructive outcomes handled where relevant?
- [ ] Are images, motion, icons, and navigation present only when the page needs them?
- [ ] For public indexable pages, is metadata factual, non-duplicated, and validated where possible?
- [ ] For auth work, are client UX and server security handled by the right skills?
- [ ] Did I run relevant project checks and report the real results?
