# Hero Composition

Use this reference whenever a page opens with a hero: a landing page, a product page, a launch page, or any route whose first screen has to explain something before the reader scrolls.

The hero concentrates more generated-output tells than any other part of a page, because it is the section with the most space and the least required content. Every default gets reached for here first. [`generated-output-tells.md`](./generated-output-tells.md) audits the whole page; this file covers the composition that produces most of its findings.

## What the Hero Owes the Reader

Three things, in this order:

1. What this is, in plain words.
2. Who it is for, or what problem it removes.
3. What to do next.

Everything else in the hero is optional and has to earn its space against those three. A hero that takes a full screen and delivers only a slogan has spent the most valuable area on the page without answering any of them.

## The Eyebrow Badge

A small capsule above the headline, usually with a dot, a thin border, and either uppercase text or a restatement of the product category.

This is the single most recognizable opening in generated work. It fails on three counts at once:

- **The dot marks nothing.** It borrows live-status vocabulary for a page where nothing is live. When it also glows or pulses, it is a double bid for attention over a fact that does not exist.
- **The text usually repeats the headline or the product name.** An eyebrow reading the expanded form of the logo beside it is the same information twice, in the position with the highest attention on the page.
- **The capsule styling is decoration.** Pill shape plus thin border plus glow plus uppercase is a combination that signals importance without carrying any.

Keep an eyebrow only when it carries information the headline does not and cannot:

- A real, current status: a version number, a launch date, a funding round, an availability change.
- A real category the reader needs in order to place the product, when the headline is deliberately evocative rather than descriptive.
- A live link to something specific, such as a changelog entry or an announcement.

When it stays, strip it down. Plain text or a quiet label, no dot unless it marks a genuine state, no glow, no pulse, and a real link if it points anywhere. When none of those apply, delete it. The headline is stronger as the first thing on the page.

## Headline

- One idea, stated plainly. A headline that needs the subheading to make sense has not been written yet.
- Say something only this product could say. If the headline still reads correctly after swapping in a competitor's name, it is a category description, not a headline.
- Keep it short enough to read in one pass. Long headlines get skimmed, and the skim keeps the first four words.
- Avoid stacking abstract nouns. Concrete language reads faster and commits to more.

### Gradient Text

Applying a gradient to headline text, usually across the last few words, is a top-level tell. It fails for reasons beyond being overused:

- **It breaks contrast checking.** The text now sits at many contrast values at once, and the light end of the gradient is usually the part that fails.
- **It picks the wrong words.** The gradient lands on whichever words fall at the end of the line, so it emphasizes by position rather than by meaning. Reflow the text and the emphasis moves somewhere else.
- **It is usually the default palette.** Gradient text and the blue-into-purple palette almost always ship together, which compounds both tells.
- **It degrades badly.** Where the clipping technique is unsupported, the text can render invisible or fall back to an unintended color.

When a specific word genuinely needs emphasis, emphasize that word: a weight change, a color from the system applied to the whole phrase, or a size step. All three survive reflow, pass a contrast check, and point at meaning rather than at line position.

A gradient across a headline can work where it is part of a real brand identity and the contrast holds at every point. That is a decision with a reason behind it, and it is rare.

## Subheading and Action

- The subheading adds the information the headline left out. It does not restate the headline in longer form.
- Two or three lines is usually enough. A paragraph in the hero is content that belongs further down the page.
- One action gets the primary treatment. A secondary action is allowed when it genuinely leads somewhere different, and it stays visually quieter.
- Label the action for what happens next, not with a generic verb. The label is a promise about the next screen.

## The Hero Visual

The visual is where the hero either proves the product or admits it has nothing to show.

- **A real product capture is evidence.** A screenshot of the actual interface, with real structure and real data shapes, does more than any styling.
- **A mockup filled with placeholder values is the opposite.** A dashboard frame containing cards that read `Data`, or a chart drawn as decorative diagonal lines with no axis, tells the reader the product either does not exist yet or was not worth showing. It is the fabricated-metrics problem in visual form, and it is more damaging than a plain hero with no visual at all.
- **A chart in a hero visual needs a real shape.** If the real data cannot be shown, crop the capture to a part that can, or use a different visual entirely.
- If there is genuinely nothing to show yet, say so plainly. An honest hero with strong typography and no visual outperforms a convincing mockup of a product that is not ready.

Give the visual a real reason to be in a frame. A browser chrome or device frame around a capture helps the reader place what they are looking at. An empty decorative frame around an invented interface does not.

## Composition

Two layouts carry most heroes, and both are fine when chosen:

- **Stacked**: headline, subheading, action, centered or left-aligned, with the visual below. Suits a hero where the words do the work.
- **Split**: text on one side, visual on the other. Suits a hero where the product's appearance is part of the argument.

The tell is not the layout, it is the absence of a choice. Pick based on whether the visual is evidence or illustration, then commit.

For the background behind it, use [`background-treatment.md`](./background-treatment.md). The hero is where the blurred orb, the mesh glow, and the blueprint grid appear most often, and all three arrive for the same reason: the area looked empty. A hero that feels empty needs a better visual or a stronger headline, not a background shape.

## Anti-Patterns

### 1. The Stacked Default

* **The Bad Habit:** Opening with a dotted capsule badge, a headline whose final words carry a gradient, a blurred colored orb or grid behind it, and a framed mockup containing placeholder values.
* **The Problem:** Four separate defaults land in the first screen, each one recognizable on its own and unmistakable together.
* **Why It Fails:** The reader forms an impression of the product from this screen before reading a sentence, and the impression is that nobody made a decision here.
* **Clean Fix:** Remove the badge unless it carries real status, set the headline in one color, choose the background deliberately, and show the real product or no product.
* **The Waitsec Way:** The first screen is where the reader decides whether anyone was paying attention.

### 2. The Eyebrow That Repeats the Logo

* **The Bad Habit:** Placing the expanded product name or category above a headline that already says the same thing.
* **The Problem:** The most prominent position on the page carries information the reader already has from the logo beside it.
* **Why It Fails:** A slot that repeats teaches the reader that this page's prominent positions are not worth reading.
* **Clean Fix:** Put real status there or nothing. The headline is a stronger opening than a restatement.
* **The Waitsec Way:** An eyebrow earns its line by saying something the headline cannot.

### 3. A Mockup Standing In for a Product

* **The Bad Habit:** Filling the hero visual with an interface frame holding placeholder labels, invented figures, or a chart drawn as decoration.
* **The Problem:** The page's central piece of evidence is fabricated, in the position that carries the most weight.
* **Why It Fails:** Generic styling is a quality problem. A fabricated product view is a trust problem, and it is the one the reader is most likely to notice.
* **Clean Fix:** Show a real capture, crop to the part that is real, or drop the visual and let the typography carry the hero.
* **The Waitsec Way:** A hero with no visual is honest. A hero with an invented one is not.

## Hero Checklist

- [ ] Does the hero answer what this is, who it is for, and what to do next?
- [ ] Is there an eyebrow badge, and if so does it carry real status the headline cannot, without a decorative dot, glow, or pulse?
- [ ] Does the headline state one idea plainly, and would it still be true if a competitor's name were swapped in?
- [ ] Is the headline set in a single color, with emphasis carried by weight, size, or a system color applied to a whole phrase?
- [ ] Does the subheading add information rather than restate the headline?
- [ ] Is there one primary action, labeled for what actually happens next?
- [ ] Is the hero visual a real capture, or absent, with no placeholder values, invented figures, or decorative charts?
- [ ] Was the layout chosen based on whether the visual is evidence or illustration?
- [ ] Is the background a deliberate choice rather than a shape filling an area that looked empty?
- [ ] Does the hero still read correctly at a narrow width, with the headline, subheading, and action visible early?
