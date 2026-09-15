# Visual Style Directory

Use this reference when the user names a familiar aesthetic instead of describing a product and mood from scratch, for example modern, minimalist, brutalist, corporate, playful, luxury, retro, dark mode, neumorphic, maximalist, or a portfolio-style visual identity.

This is a starting point, not a shortcut around [`design-direction.md`](./design-direction.md). A named style still needs the product, audience, and content to fit it. Run this reference first to get a real starting system, then still confirm the visual thesis and build the token system the way `design-direction.md` describes.

A style name is not a page type. "Portfolio" usually means the [`about-me.md`](./about-me.md) blueprint carrying one of the visual directions below, most often Editorial, Modern and Clean, or Neo-Brutalist. Choose the page structure from `about-me.md` and the look from this table.

## How To Use a Preset

1. Match the user's word to the closest row. If they gave two conflicting words, such as "minimalist but playful", say what tension that creates and ask which one leads.
2. Confirm it against the real product and audience from [`design-direction.md`](./design-direction.md) step 1. A preset for a fintech dashboard and a preset for a children's app both called "playful" should not produce the same page.
3. Turn the row into the four-part visual thesis sentence design-direction asks for: goal, technique, mood, and what is explicitly avoided.
4. Define the actual token values from the row's approach, not the row's words. "A muted, restrained palette" is a starting instruction, not a finished color token.
5. Apply restraint the same way every direction does. A named style raises the ceiling on what is allowed. It does not lower the floor on hierarchy, contrast, or consistency.

## Style Directory

| Style | Feel | Color approach | Type pairing | Space and shape | Signature technique | Skip |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Modern and clean | Confident, current, product-led | One neutral scale, one accent, used sparingly | One grotesque or geometric sans for both headings and body, weight does the work | Generous whitespace, consistent 8px-step spacing, medium radius | Subtle elevation, one accent color used only for the primary action | Gradients on every surface, more than one accent doing the same job |
| Minimalist | Quiet, unhurried, content-first | Near-monochrome, one accent used rarely | One typeface, a small size scale, wide line height | Large whitespace margins, few or no borders, flat surfaces | Type and spacing alone carry hierarchy | Any shadow, gradient, icon, or decoration without a functional reason |
| Editorial | Considered, publication-grade, reader-first | High-contrast neutrals, one restrained accent for links and emphasis | A serif or high-contrast display face for headings, a plain sans for body, a real type scale | Narrow reading measure, strong vertical rhythm, pull quotes and rules as structure | Deliberate asymmetry in layout, not in every component | Card-grid treatment of long-form text, centered body copy |
| Neo-brutalist | Raw, loud, unapologetic, memorable | Two or three saturated flat colors, hard edges, no gradients | One heavy grotesque, oversized headings, tight tracking | Thick solid borders, offset hard drop shadows, sharp or minimal radius | Deliberately visible structure and misregistration as a stylistic choice | Soft shadows, blur, muted colors, anything that reads as polish |
| Corporate and professional | Trustworthy, stable, low risk | Two or three brand colors, generous neutral space, restrained accent use | A single well-established sans, conservative sizing | Predictable grid, moderate radius, consistent card patterns | Consistency and repetition across every section | Experimental layout, unproven type pairing, heavy decoration |
| Playful and bold | Energetic, friendly, approachable | Saturated but limited palette, one dominant hue plus supporting colors | A rounded or friendly sans, larger body size than usual | Larger radius, soft shadows, room for illustration or claymorphic thick soft shadows | Motion and shape used for delight, not just state change | Overuse across every element, illegible low-contrast pastel text |
| Luxury and premium | Restrained, considered, expensive-feeling | Near-black or near-white base, a single metallic or deep accent, very little color | A refined serif or high-contrast display face for headings, a quiet sans for body | Wide whitespace, thin hairline borders, minimal or no radius | Negative space and typography scale as the entire signal of quality | Bright saturated colors, playful shapes, dense layouts, loud motion |
| Retro and Y2K | Nostalgic, distinct, era-specific | Bright saturated palette or a specific decade's palette, used deliberately | A period-appropriate display face paired with a plain, readable body face | Chunky shapes, visible borders, era-accurate texture or gradient use | One or two period-specific motifs applied consistently, not scattered | Mixing motifs from different decades, using the reference for one component only |
| Dark mode and cyberpunk | Focused, high-tech, high-contrast | Near-black base, one or two saturated neon accents, careful contrast tiers | A geometric or monospace-adjacent sans, tight tracking on headings | Sharp or minimal radius, glow used only on interactive or key elements | Accent color as a wayfinding signal, not a background wash | Neon on every surface, insufficient contrast on body text, glow without purpose |
| Neumorphic (soft UI) | Tactile, soft, quietly 3D | A single base hue with barely-different light and dark shadow tones | A clean, moderate-weight sans that stays legible at low contrast | Consistent light source, paired inset and outset shadows, generous radius | Extruded surfaces on a small number of controls, not the whole layout | Full-layout use, any control where the shadow-only affordance drops below readable contrast |
| Maximalist | Rich, expressive, layered | Multiple colors and patterns used with a deliberate internal logic, not randomly | Two or three typefaces with a clear role each: display, body, accent | Dense but organized layout, layering as a structural choice | A stated internal logic that repeats, so density reads as intentional | Density with no organizing principle, competing focal points with no primary one |
| Glassmorphic | Layered, translucent, modern-native | A colorful or textured background layer plus a small number of frosted panels | Same as the surrounding direction; glass is a surface treatment, not a type system | See [`glassmorphism.md`](./glassmorphism.md) for exact blur, alpha, and radius ranges | Frosted panels over one to three named surfaces, never the whole page | Everything this style's own reference already lists as an anti-pattern |

## Higher-Risk Styles Need an Extra Pass

Three styles in the table carry a real accessibility cost if applied casually. Treat these as required checks, not optional polish:

- **Neo-brutalist**: hard shadows and saturated color pairs can drop below 4.5:1 contrast fast. Check every text and border color against its background before calling the direction done.
- **Neumorphic**: the whole technique depends on a subtle light and dark shadow pair, which by nature sits close to the background in contrast. Add a visible border or a stronger state change on focus and active so the control is not defined by shadow alone. Keep it to a small number of controls, never full-page.
- **Retro and Y2K**: period-accurate type and texture can undercut legibility and touch target size. Keep the body text and interactive targets at current accessibility standards even when the decoration is intentionally dated.

## Combining Directions

A brief sometimes names two styles, or a style plus a product category, such as "minimalist fintech dashboard" or "playful but professional." Resolve it the way any other unclear brief is resolved:

- State the tension plainly instead of averaging the two styles into something undefined.
- Ask which word leads when they genuinely conflict, or pick the one that fits the audience and say why.
- Borrow the restraint of one direction and the personality of the other deliberately, and name that choice in the visual thesis sentence so it reads as a decision, not a compromise nobody made on purpose.

## Anti-Patterns

### 1. Keyword to CSS With No Product Check

* **The Bad Habit:** Reading a style name and applying its table row directly without checking it against the real product, audience, and content.
* **The Problem:** A style that fits one product's audience gets applied to a product where it actively works against trust or usability.
* **Why It Fails:** A named style is a starting point copied from a pattern, not a fact about this specific product.
* **Clean Fix:** Run the preset through `design-direction.md` step 1 before building. Adjust or reject the direction when it does not fit.
* **The Waitsec Way:** A style name earns its use once it fits the product, not on the strength of the name alone.

### 2. Style Salad

* **The Bad Habit:** Pulling the signature technique from two or three different rows onto the same page, such as neo-brutalist borders next to neumorphic shadows next to a glass panel.
* **The Problem:** Each technique was designed around a different set of assumptions about contrast, depth, and surface. Combined, they fight each other.
* **Why It Fails:** The page reads as indecisive rather than intentional, and the techniques' own accessibility trade-offs stack instead of cancel out.
* **Clean Fix:** Pick one direction as the lead and borrow at most one accent technique from another, stated deliberately in the visual thesis.
* **The Waitsec Way:** One system, applied consistently, beats several systems applied at once.

### 3. Skipping the Extra Pass on a Risky Style

* **The Bad Habit:** Treating the contrast and legibility notes for neo-brutalist, neumorphic, or retro directions as optional flavor text.
* **The Problem:** The finished page inherits the style's known failure mode, usually low contrast or an unclear interactive affordance.
* **Why It Fails:** These are not edge cases. They are the specific, predictable cost of that specific style.
* **Clean Fix:** Run the extra pass listed above for these three styles every time they are used, not only when something looks wrong.
* **The Waitsec Way:** A style is not finished until its own known risks have been checked.

## Visual Style Checklist

- [ ] Did I match the named style to the closest row instead of guessing at an unlisted term?
- [ ] Did I confirm the preset against the real product, audience, and content before building?
- [ ] Did I turn the row into a real four-part visual thesis sentence instead of leaving it as a style label?
- [ ] Are the actual token values defined, not just the row's descriptive words?
- [ ] If the style is neo-brutalist, neumorphic, or retro, did I run its extra accessibility pass?
- [ ] If two styles were requested together, did I name the tension and the resulting decision instead of averaging them?
- [ ] Does the result still follow the restraint and one-system rules from `design-direction.md`?
- [ ] If the direction includes glass surfaces, did I apply `glassmorphism.md` instead of improvising the recipe?
