# Background Treatment

Use this reference whenever a page background is chosen, not only when a decorative background is requested. The background is decided on every page, and defaulting to nothing is as much a decision as defaulting to a colored glow.

The background carries almost no information and most of the surface area. That combination is exactly why generated pages reach for it: it is the easiest place to add something, and the hardest place for it to mean anything. Every treatment below has to justify the attention it takes from the content sitting on it.

## What a Background Is Allowed to Do

A background earns its treatment by doing one of these jobs. If none applies, leave it flat.

- Separate one section from the next, so the page reads as structured rather than continuous.
- Establish depth, so a foreground panel is clearly in front of something.
- Carry brand, when the product has a real visual identity with a background element in it.
- Support content, as a photograph or texture that the content is genuinely about.
- Set focus, by darkening or quieting everything around the one thing that matters.

## The Default That Marks a Page as Generated

A large blurred orb, radial glow, or mesh gradient in blue to purple, purple to pink, or blue to cyan, sitting behind the hero. It is the single most recognizable background in generated work.

The tell is not the gradient. It is the combination of a palette nobody chose, a shape that means nothing, and placement decided by the fact that the area looked empty. The same gradient built from a real brand hue, at a size and position that separates one part of the page from another, is a normal design decision.

Two related defaults: the faint dot grid or blueprint line behind content, which is the shorthand for looking technical without doing any work, and the pure black page chosen because it reads as modern rather than because the audience or brand called for it.

## Treatments That Hold Up

| Treatment | How | Suits |
| :--- | :--- | :--- |
| Flat neutral | One background token, no gradient at all | Most pages. This is the correct default, and it is not a failure to commit. |
| Tonal banding | Alternate two or three neutral steps from the same scale between sections | Long marketing and content pages that need structure without decoration |
| Single-hue wash | A very low-contrast gradient staying inside one hue family, ideally under a 10 percent lightness shift | Establishing quiet depth behind a hero without introducing a second color |
| Grain or noise | A fine, low-opacity noise layer over a flat or gradient base | Warming a flat surface, and preventing visible banding on large gradients |
| Real imagery | A photograph or product capture that the content is about, with a legibility layer over it | Hero sections where the image carries actual meaning |
| Structural geometry | Lines, shapes, or a pattern drawn from the brand's own visual language | Products with a real identity motif |
| Spotlight and vignette | Quietly darkening or desaturating the edges around the focal content | Focusing attention on one element, often in dark themes |

## Keeping a Gradient From Reading as Generic

- Stay inside one hue family. Most generic gradients cross a large hue distance, usually blue into purple. A gradient from one hue to a neighboring tone of the same hue reads as a surface, not as decoration.
- Keep the contrast between the two ends low, usually under about a 10 percent lightness difference. A gradient the reader does not consciously notice is doing its job.
- Give it a direction that relates to the layout, following the reading direction or the shape of the section, rather than a diagonal chosen at random.
- Add a fine noise layer over any large gradient. Wide, smooth transitions band visibly on many displays, and low-opacity noise hides it while adding surface texture.
- Do not repeat the same gradient on every section. Once a treatment appears everywhere it stops separating anything.

## Light and Dark

Follow the token structure in [`color-scheme-and-theming.md`](./color-scheme-and-theming.md), and treat the background as a place where the two themes diverge rather than mirror.

- Dark backgrounds read better as elevated dark grays, with a base near a very dark neutral and lighter steps for raised surfaces, than as pure black. Pure black flattens elevation and makes white text glare.
- Light backgrounds are rarely pure white in a designed system. A very slightly warmed or cooled off-white gives the page a surface rather than a void.
- A gradient tuned for light mode almost never transposes to dark. Define it separately in each theme.
- Check contrast in both themes against the busiest part of the background, not its average color. A photograph or a gradient means text sits over a range of values, and the darkest and lightest points are what decide legibility.

## Legibility Over Imagery

Text over a photograph needs a deliberate legibility layer, not a text shadow patched on afterward.

- Prefer a solid or gradient scrim between image and text, dense enough that the text holds its contrast target over the busiest region of the image.
- Alternatively, keep the text off the image entirely, in an adjacent panel.
- Verify against the actual image, and against every image when the slot is dynamic. A scrim tuned for one photograph fails on the next one.
- Give the image a background color underneath so the text remains readable in the moment before the image loads, and if it never does.

## Performance

- Prefer CSS gradients over background images. They cost nothing to download and scale to any viewport.
- Avoid large blurred elements as a background technique. Blurring a big element is expensive and often forces the browser onto a slower path for the whole area.
- Fix the size of a noise or texture overlay and keep it small. A tiled noise tile of a few dozen pixels is enough.
- Do not animate a background gradient continuously. It is a large area repainting forever for an effect nobody is looking at.
- Load a background image at the right size for the breakpoint, and never load a hero-sized image on a phone.

## Anti-Patterns

### 1. The Orb That Fills an Empty Area

* **The Bad Habit:** Placing a large blurred colored shape behind the hero because the section looked bare.
* **The Problem:** A recognizable default in a palette nobody chose, occupying the most prominent area of the page.
* **Why It Fails:** It marks the page as generated before a single word is read, and it solves emptiness with decoration rather than with content.
* **Clean Fix:** Ask what the hero is missing. Usually the answer is a real product view, a real image, or a stronger typographic composition, not a background shape.
* **The Waitsec Way:** An empty area is a content question. Decoration is the wrong answer to it.

### 2. One Treatment Everywhere

* **The Bad Habit:** Applying the same gradient, texture, or pattern to every section on the page.
* **The Problem:** The background stops separating anything, because there is nothing left for it to contrast against.
* **Why It Fails:** Background treatment is a structural tool. Uniform application removes the structure it was meant to provide.
* **Clean Fix:** Alternate between a treated surface and a plain one, so each treated section is genuinely marked.
* **The Waitsec Way:** A background that is everywhere is not a background, it is the page.

### 3. Text Placed on an Image and Checked Once

* **The Bad Habit:** Laying a headline over a photograph, confirming it looks fine on that photograph, and shipping.
* **The Problem:** Contrast varies across a single image and changes completely when the image does.
* **Why It Fails:** The reader meets whichever region of whichever image happens to be behind the text, and a headline that disappears into a bright patch is unreadable regardless of how it tested.
* **Clean Fix:** Use a real scrim sized to the busiest region, verify against every image the slot can hold, and give the container a solid color for the period before the image loads.
* **The Waitsec Way:** Text over an image is readable by construction, not by luck.

## Background Checklist

- [ ] Does the background treatment do one of the named jobs, or is it flat because none applied?
- [ ] Is the page free of a large blurred orb, mesh glow, dot grid, or blueprint texture that arrived without a reason?
- [ ] If a gradient is used, does it stay inside one hue family at low contrast, with a direction that relates to the layout?
- [ ] Does any large gradient carry a fine noise layer to prevent visible banding?
- [ ] Are treated and plain sections alternated, so the treatment still separates something?
- [ ] Are the light and dark backgrounds defined separately, with dark using elevated grays rather than pure black?
- [ ] Was contrast checked against the busiest region of the background, in both themes?
- [ ] Does text over imagery sit on a real scrim, verified against every image the slot can hold?
- [ ] Is there a solid color under every background image for the period before it loads?
- [ ] Are background images sized per breakpoint, with no continuously animated gradients and no large blurred elements?
