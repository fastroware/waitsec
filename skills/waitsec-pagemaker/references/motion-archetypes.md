# Motion Archetypes

Use this reference when a page needs a motion language rather than a single effect: a flagship landing page, a product launch page, a redesign where the user asked for something that feels modern, cinematic, or comparable to a site they admire.

[`motion-and-3d.md`](./motion-and-3d.md) governs the values underneath every archetype here: durations, easing, cleanup, reduced motion, and the parallax depth tiers. [`scroll-experience.md`](./scroll-experience.md) governs the scroll mechanics. This file sits above both and answers the earlier question: which motion language does this product actually want.

The mistake this file exists to prevent is reaching for the most impressive archetype regardless of product. A scrubbed hero sequence on a documentation site is not ambitious, it is a mismatch. The archetype is chosen from what the product is and who visits it, the same way a visual direction is.

## Choosing an Archetype

Answer three questions first:

1. What is the one thing a visitor needs to understand on this page?
2. Is that thing a physical object, an interface, an idea, or a body of writing?
3. How often will the same person return? A page visited once can afford choreography that a page visited daily cannot.

Then match:

| Archetype | Fits | The moving subject | Rough effort |
| :--- | :--- | :--- | :--- |
| Scrubbed product reveal | A single flagship object or feature, launch pages, hardware, anything with a physical or visual form worth examining | One subject, pinned, its state tied to scroll progress | High |
| Layered depth scroll | Framework, developer tool, and platform marketing, where the page has a sequence of ideas rather than one object | Background, midground, and foreground layers at different rates | Medium |
| Interface demonstration | Application and SaaS products, where the thing to understand is a workflow | The product's own interface, performing one real task | Medium |
| Editorial reveal | Writing-led pages, documentation, personal sites, anything where reading is the task | Text and media arriving once, calmly, in reading order | Low |
| Ambient scene | Agency, studio, portfolio, and brand pages where atmosphere is the message | A continuous background scene, canvas, or 3D object | High |
| Micro-only | Dashboards, admin panels, tools, docs, anything used repeatedly | Nothing but state changes: hover, focus, open, close | Minimal |

Micro-only is a legitimate answer, not a failure to commit. For a screen someone opens twenty times a day, it is usually the correct one.

## The Archetypes

### Scrubbed Product Reveal

One subject stays pinned while its state advances with scroll progress: a rotation, a scale, a cutaway, a color change, a sequence of frames.

- The subject must be real. A scrubbed sequence of an actual product is evidence. The same treatment applied to a generic 3D shape is an expensive way to show nothing.
- Tie state to scroll progress, not to time. The reader controls the pace, and reversing the scroll must reverse the sequence cleanly.
- Keep the pinned sequence short enough to finish in a few screens of scrolling. A pin that holds the reader for ten screens reads as a stuck page.
- Show progress through the sequence and keep a visible way past it.
- Keep the accompanying text outside the scrubbed subject, in the foreground tier, so it never moves while being read.

For the frames themselves, prefer in order: a CSS or WebGL transform on a single asset, then a preloaded image sequence, then a real 3D canvas. An image sequence is usually lighter and far more predictable than a 3D scene, and it fails more gracefully.

### Layered Depth Scroll

Background, midground, and foreground move at different rates as the page scrolls, following the depth tiers in [`motion-and-3d.md`](./motion-and-3d.md).

- Depth comes from the difference between tiers, not from large travel on any one of them.
- Assign every element to exactly one tier and keep the assignment consistent down the page. An element that changes tier between sections reads as an inconsistency, not a surprise.
- Reserve the foreground tier for everything the reader acts on or reads at length.
- Use it to separate a sequence of ideas. When the page is really one idea, this archetype adds movement without adding meaning.

### Interface Demonstration

The product's own interface performs one real task on the page: a filter applied, a record created, a state changing in response to something.

- Show a real task with real data shapes. A fabricated interface performing an invented action is the dashboard equivalent of an invented testimonial.
- Loop it only if the action is short and clearly a loop. A long sequence that restarts without warning confuses more than it explains.
- Give the reader a way to pause or to see the same thing as a still. Some people need to study the frame that matters.
- Keep it honest about what the product actually does today.

### Editorial Reveal

Content arrives once, in reading order, with restraint.

- One reveal technique for the whole page, usually a short fade with a small upward offset.
- Stagger a group at roughly 40ms to 80ms per item, capped so the last item is not still arriving after the reader has reached it.
- Never animate body text word by word or line by line. Reading is the task, and staged text actively slows it.
- This is the default when nothing about the product suggests otherwise.

### Ambient Scene

A continuous background scene: a slow canvas, a drifting 3D object, a generative field.

- It must be genuinely slow and genuinely peripheral. Anything fast enough to catch the eye repeatedly is competing with the content it sits behind.
- Keep contrast under it stable, so text over the scene never drops below its contrast target at any frame of the animation.
- Pause it when the tab is hidden and when it scrolls out of view.
- This is the archetype with the worst cost-to-benefit ratio on a low-powered device. Give it a hard budget and a still fallback before building it.

### Micro-Only

Hover, focus, press, open, close, and state change, at the durations in [`motion-and-3d.md`](./motion-and-3d.md). No scroll choreography, no entrance animation on ordinary content.

- The craft here is consistency: the same easing and the same duration for the same class of change, everywhere.
- A tool that responds instantly and predictably feels better built than one that performs. Repeated use punishes decoration quickly.

## Responsive Behavior

An archetype is not a fixed implementation. It scales down through a ladder, and the page must be verified at each rung:

1. **Wide screen, capable device**: the full archetype.
2. **Narrow screen**: reduce travel and depth. A vertical offset that reads as depth on a wide screen is a large share of a phone's height. Pinned sequences usually need a shorter scroll distance, and layered depth often collapses to two tiers or to none.
3. **Touch input**: drop every pointer-driven tilt and hover reveal, and give the equivalent a tap or an always-visible state.
4. **Reduced motion**: show the end state directly. A scrubbed sequence becomes its most representative frame, a layered scroll becomes a static composition, a reveal becomes content already present.
5. **Low-powered device or failed script**: the page still explains itself. Content is visible, controls work, and nothing depends on an effect that did not load.

Rung 5 is the real test. Build the page so it reads correctly with every effect removed, then add the archetype on top.

## Budget Before Building

State the budget before implementation, then verify against it:

- The added weight the archetype costs, including image sequences, 3D assets, and any library.
- The frame cost during the heaviest moment, measured on a mid-range device rather than a development machine.
- What loads eagerly and what waits. An ambient scene or an image sequence below the fold should never block the first paint.
- What happens on a slow connection while the assets are still arriving.

When a scrubbed sequence or a 3D scene cannot meet its budget, step down the ladder: a shorter sequence, a video, a still image with a small CSS transition. Stepping down is a normal outcome, not a failure.

## Anti-Patterns

### 1. Borrowing the Archetype Instead of the Reasoning

* **The Bad Habit:** Copying the motion language of an admired site because the user named it, without asking what that site's page was doing.
* **The Problem:** A scrubbed product reveal built for a physical object gets applied to a page that has no object, so the sequence scrubs through nothing in particular.
* **Why It Fails:** The admired site chose its archetype from its own content. Lifting the technique without the content leaves an expensive effect with no subject.
* **Clean Fix:** Name what this page's visitor must understand, then pick the archetype that shows that. Say plainly when the named reference does not fit, and what does.
* **The Waitsec Way:** Take the reasoning from a reference, not the choreography.

### 2. The Sequence That Holds the Reader Hostage

* **The Bad Habit:** Pinning a section and requiring many screens of scrolling to advance past it, with no progress shown and no way out.
* **The Problem:** The reader scrolls, the page does not move on, and there is no signal about how long this lasts.
* **Why It Fails:** Scroll is the reader's main control. A pin that absorbs it without visible progress reads as a frozen page, and people leave rather than investigate.
* **Clean Fix:** Keep pinned sequences short, show progress through them, and keep a visible route past.
* **The Waitsec Way:** A pinned section borrows the scroll. It does not confiscate it.

### 3. Building the Top Rung Only

* **The Bad Habit:** Implementing the archetype at full strength on a wide screen and treating the narrow, touch, reduced-motion, and failure states as later cleanup.
* **The Problem:** Most visitors meet a version of the page that was never designed, usually the one on a phone.
* **Why It Fails:** Motion degrades worse than layout does. An effect tuned for a wide canvas on a fast machine does not merely look smaller elsewhere, it stutters, overlaps, or traps the reader.
* **Clean Fix:** Build the content-only version first, verify it, then add the archetype and check every rung of the ladder.
* **The Waitsec Way:** The page has to work before it gets to perform.

## Archetype Checklist

- [ ] Did I name what the visitor must understand, and choose the archetype from that rather than from ambition?
- [ ] If the user named a reference site, did I take its reasoning rather than copy its choreography, and say so when it did not fit?
- [ ] Is the moving subject real, whether it is a product, an interface, or content?
- [ ] Does the foreground tier stay still, so nothing being read or acted on moves?
- [ ] For a pinned sequence, is it short, does it show progress, and can the reader get past it?
- [ ] Does the archetype scale down through every rung: narrow screen, touch, reduced motion, low power, failed script?
- [ ] Does the page still explain itself with every effect removed?
- [ ] Was a weight and frame budget stated, and verified on a mid-range device?
- [ ] Is an ambient or continuous effect paused when hidden or off-screen?
- [ ] For a repeatedly used screen, did I consider whether micro-only is the correct answer?
