# Determining a Style From Context

Use this reference whenever a page brief does not name a style and does not point to an existing project design system, for example a request built from a URL, an uploaded PDF or Word file, or a plain description of the page's purpose with no aesthetic language at all.

This runs before [`design-direction.md`](./design-direction.md)'s system-building steps and works alongside [`visual-styles.md`](./visual-styles.md)'s directory. The goal is a reasonable, stated starting direction, not a stalled conversation waiting for the user to name a style themselves.

## Order of Preference

1. The project's existing design system. Always wins when one exists and applies.
2. A style the user names directly. Route to [`visual-styles.md`](./visual-styles.md).
3. A real source the user gave: an existing site to redesign, a brand document, a logo, a deck. Extract from it.
4. The domain or purpose of the page, inferred from what it is for. Use the table below.
5. A safe, restrained default, Modern and Clean, when nothing above gives a real signal.

Once a direction comes from step 3, 4, or 5, state it in one short sentence before or alongside the build, so the person can correct it before more work sits on top of it. Do not block progress waiting for confirmation on a low-stakes visual choice. Proceed, and name the assumption.

## Reading a Source URL

- **Building a new page for an existing brand** ("landing page dari domain saya"): fetch the page, and read its real brand signals: current color usage, typography, logo, tone of the copy, product description. Reuse them as the starting tokens instead of inventing a new palette. This is inheriting a system, not picking one from `visual-styles.md`.
- **Redesigning an existing page** ("redesign dari url ini"): fetch the page for its real content and structure. It is source material, not the target look, unless the user says to keep the current visual identity. Read what the page communicates and who it serves, then choose a direction that elevates it, informed by the brand signals actually present, not by a template unrelated to the brand.
- A source URL supplies facts. It is not permission to copy another product's layout or design wholesale. Use real content from the page; do not invent facts it does not state.

## Reading an Uploaded Document

A PDF, Word file, deck, or brand document can carry the same signals a URL does: a logo, a stated brand color, a typeface already in use, a tone in the writing. Extract what is actually present. Do not invent a palette from a plain document with no visual identity of its own. Fall back to the domain table below instead.

## Inferring From Domain and Purpose

When the brief states only what the page is for, match its purpose to a starting direction from [`visual-styles.md`](./visual-styles.md):

| Purpose | Starting direction | Why |
| :--- | :--- | :--- |
| Financial, accounting, or banking product | Modern and clean, restrained accent | Trust and clarity read more than personality when money is involved |
| Healthcare or medical product | Modern and clean, high contrast, minimal decoration | Legibility and calm read as competence in this category |
| B2B SaaS product or internal tool | Modern and clean | The current baseline look people already trust for software |
| Developer tool or technical product | Modern and clean, dark mode often the primary theme | Matches the audience's own working environment |
| Legal, consulting, or professional services | Corporate and professional | Conservative signals build the trust this category needs |
| Creative agency or design studio | Editorial, or neo-brutalist for a bolder brand | The category rewards a distinctive, opinionated look |
| Personal site or writing-led portfolio | Editorial, or minimalist | The writing leads; the system should not compete with it |
| E-commerce or product storefront | Modern and clean, product-led | Photography and product detail need a quiet system around them |
| Luxury goods, fashion, or premium hospitality | Luxury and premium | The category's own established visual language |
| Children's product or education for young users | Playful and bold | Matches what this audience already expects |
| Nonprofit or community organization | Editorial, with a warm accent | Story and people lead over commercial polish |
| Gaming, entertainment, or nightlife | Dark mode and cyberpunk, or maximalist | Matches category convention and audience expectation |

This table is a starting point drawn from category convention, not a rule. Specific detail in the brief always overrides it.

## Anti-Patterns

### 1. Guessing Without Naming It

* **The Bad Habit:** Choosing a direction from context and proceeding as if it had been requested outright.
* **The Problem:** The entire visual identity of the page rests on an assumption the person never actually saw.
* **Why It Fails:** A silent assumption compounds. Redoing a finished system costs far more than one stated sentence would have.
* **Clean Fix:** State the inferred direction in one line, before or as part of delivering the build.
* **The Waitsec Way:** An assumption named once is cheap. An assumption discovered late is expensive.

### 2. Copying a Redesign Source's Look

* **The Bad Habit:** Reusing the existing site's own colors and layout when the task is to redesign it.
* **The Problem:** A redesign that looks like the original defeats the reason it was requested.
* **Why It Fails:** The user asked for something better, not a restatement of what is already there.
* **Clean Fix:** Treat the old page as content and context. Choose a genuinely different direction informed by the real brand signals present.
* **The Waitsec Way:** A redesign changes the system. It still keeps the facts.

### 3. One Default for Every Domain

* **The Bad Habit:** Applying the same generic modern template to every page regardless of the stated purpose.
* **The Problem:** A children's product and a law firm end up reading the same.
* **Why It Fails:** Purpose carries real signal about what the audience expects and trusts. Ignoring it wastes free information already in the brief.
* **Clean Fix:** Check the domain table and the audience before falling back to the generic default.
* **The Waitsec Way:** Context is information. Use it before defaulting past it.

## Inference Checklist

- [ ] Did I check for an existing project design system before inferring anything?
- [ ] Did the user name a style directly? If so, route to `visual-styles.md` instead of inferring.
- [ ] If a URL or document was given, did I extract real brand signals, content, and structure from it instead of inventing new choices?
- [ ] For a redesign, did I treat the source as content and context, not as the target look?
- [ ] If no source or named style existed, did I check the domain table for the closest match?
- [ ] Did I state the inferred assumption in one sentence instead of proceeding silently?
- [ ] Does the chosen direction still run through `design-direction.md`'s understand, thesis, and system steps before styling?
