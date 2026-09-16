# Generated-Output Tells

Use this reference as an audit pass before reporting a page complete, and as a guard while building one. It catalogs the specific choices that make a page read as machine-assembled rather than designed.

None of these are banned outright. Each is a default that arrives without a decision behind it. The test is always the same: was this chosen for this product, or did it appear because it appears everywhere? A technique with a stated reason is craft. The same technique applied because nothing else came to mind is a tell.

This file audits for genericness. It does not supply direction. A page that removes every tell below and adds nothing in its place is not finished, it is empty. Direction comes from [`design-direction.md`](./design-direction.md) and [`visual-styles.md`](./visual-styles.md). Removing tells and having no identity are two different failures, and the fix for the second is never more removal.

## Color and Surface

| Tell | Why it reads as generated | What to do instead |
| :--- | :--- | :--- |
| Blue to purple, purple to pink, or blue to cyan gradient as the main color treatment | The single most over-produced palette in generated work. It signals an absent brand, not a chosen one. | Take the palette from the real brand or the stated direction. Keep a gradient only where it separates one level of hierarchy from another. |
| A large blurred colored orb or radial glow behind the hero | The same default palette wearing a different shape. It fills the background because the background felt bare. | Let the background be quiet. If the hero needs depth, give it real content: a product view, a real image, a typographic composition. See [`background-treatment.md`](./background-treatment.md). |
| Five or more active colors with no system behind them | With every element free to be any color, none of them mean anything. | Cap the working palette at two or three core colors plus one accent, and let a neutral carry most of the page. |
| The accent color on buttons, links, icons, badges, borders, and backgrounds at once | An accent that appears everywhere has stopped being an accent. | Spend the accent at the few moments that matter. Everything else uses the neutral scale. |
| Every surface blurred: nav, cards, sidebar, and modal all frosted together | When every layer is translucent, nothing sits in front of anything. | Apply glass to one to three named surfaces with a real background behind them. See [`glassmorphism.md`](./glassmorphism.md). |
| A soft shadow under every card, button, and panel | Elevation applied everywhere communicates no elevation at all. | Keep most surfaces flat on the page. Lift only what genuinely sits above it. |
| Glow on cards, borders, icons, and buttons simultaneously | Glow is an attention amplifier. Used everywhere it amplifies nothing. | Reserve it for one or two elements where drawing the eye is the actual goal. |
| Every element pill-shaped: inputs, cards, buttons, badges, modals | Radius stops distinguishing an input from a card, so the shape language collapses. | Use a small set of radii deliberately. One generous radius on the primary action reads as a choice. |
| A gradient across headline text, usually on the last few words | It emphasizes by line position rather than by meaning, sits at many contrast values at once, and almost always ships with the default palette. | Set the headline in one color and emphasize with weight, size, or a system color on a whole phrase. See [`hero-composition.md`](./hero-composition.md). |
| A faint dot grid, blueprint line, or graph-paper texture behind the content | The default way to make a flat page look technical without doing any work. | Use texture only when it belongs to the product's real identity. |
| Dark theme chosen because it looks technical | Dark is a decision about audience and brand, not a default setting. | Pick the theme from the product and its audience. When there is no strong reason for one fixed theme, ship a working light and dark toggle, per [`color-scheme-and-theming.md`](./color-scheme-and-theming.md). |

## Layout Shapes

| Tell | Why it reads as generated | What to do instead |
| :--- | :--- | :--- |
| Hero, feature grid, logo bar, testimonials, FAQ, final call to action, in that exact order, every time | That order is a template's memory, not the product's argument. | Build the section order from what this specific product has to explain, in the order it needs explaining. |
| A bento mosaic of differently sized tiles | The default app-like landing layout, so it says nothing about this product. | Use it only when the content genuinely has items of different weight. When every tile holds a similar thing, a plain grid is more honest. |
| Feature cards at identical size, padding, and icon treatment | Uniform cards flatten the content, so the flagship capability and the minor one look equally important. | Let the layout reflect real importance. The main capability may deserve a full-width treatment while the supporting ones sit in a list. |
| A "how it works" section that is always exactly three steps with numbered round icons | Real processes are rarely three tidy steps. The template forced the shape. | Show the real process at whatever length it actually is, including two steps or six. |
| Identical spacing between and inside every section | Rhythm is a structural tool, and one uniform value removes it entirely. | Vary spacing to group related content and separate unrelated content. |
| Every section built as centered title, centered subtitle, then a card grid | Identical composition makes sections blur into one strip. | Alternate the composition where the content calls for it. |
| A four-column footer labeled Product, Company, Resources, Legal | The columns exist because templates have four columns. | Structure the footer around the links the site actually has. One useful column beats four half-empty ones. |
| Exactly three pricing tiers with the middle one badged | The shape is the default, so the highlight signals nothing. | Use as many tiers as the product really has. See [`pricing-and-comparison.md`](./pricing-and-comparison.md). |

## Decoration

| Tell | Why it reads as generated | What to do instead |
| :--- | :--- | :--- |
| Sparkle, lightning bolt, magic wand, cube, or robot glyphs as feature icons | The generic visual vocabulary of an AI product. They describe nothing specific. | Choose icons for real relevance. When no fitting icon exists, the label alone does the job. |
| Every icon from the same thin-stroke rounded default library | A single default set makes every generated page's icons interchangeable. | Treat the icon set as a real visual choice whose weight and stroke suit the product. |
| A small arrow appended to nearly every button | When every action points somewhere, none of them point anywhere specific. | Keep the arrow for the action that genuinely benefits from a direction cue. |
| A thin colored bar down the left edge of cards or rows | The cheapest way to make a card look designed. It adds color without adding meaning. | Keep the stripe only where it marks real state such as active, overdue, or failing. |
| A glowing, pulsing colored dot beside a heading or nav item | It borrows live-status vocabulary for a page where nothing is live. | Keep a dot only where it marks a genuine state, and then without the glow and the endless pulse. |
| A capsule eyebrow above the headline restating the product name or category, usually with a dot | The most prominent slot on the page spent repeating what the logo beside it already says. | Keep an eyebrow only for real status a headline cannot carry. Otherwise let the headline open the page. |
| A capsule badge combining a pill shape, thin border, glow, dot, and uppercase text | The full combination is decoration pretending to be a status. | Use a badge only where it carries real information, and never the whole stack of effects at once. |
| A styled fake terminal window as the hero visual | A costume standing in for a real product screenshot. | Show the real product. If the product genuinely is a command-line tool, a real capture is evidence; a drawn one is not. |
| Oversized monospace headings, or uppercase labels with extreme letter spacing | Shorthand for technical and modern that does no typographic work. | Choose the typeface from the product's character, with a reason. |
| Generic illustration-library characters with no link to the product | Decorated rather than designed. They fill space without carrying content. | Use a real screenshot, a real photograph, or nothing. |

## Content Honesty

This group is the most damaging, because these tells put untrue content on the page rather than merely generic styling.

| Tell | Why it reads as generated | What to do instead |
| :--- | :--- | :--- |
| A row of company logos under the hero with no real customers behind it | A trust claim with nothing supporting it. | Show real, verifiable logos or no logo bar. |
| Testimonials from invented people with invented job titles | The most direct form of fabricated evidence a page can carry. | Use real quotes with real attribution, or leave the section out. |
| Statistics, percentages, and growth figures that were never supplied | A number on a page reads as a fact, whether or not one exists behind it. | State only real figures. Mark a missing one as missing. |
| Placeholder records dressed as real data: a plausible name, a plausible email, a plausible message | It reads fine in a mockup and collapses the moment anyone real looks at it. | Leave cells empty, or use placeholders that are obviously placeholders. |
| A hero visual showing an interface frame filled with placeholder labels, invented figures, or a decorative chart | The page's central piece of evidence is fabricated, in the position carrying the most weight. | Show a real capture, crop to the part that is real, or drop the visual and let the typography carry the hero. |
| A page selling a product that is never actually shown working | Promises with nothing behind them, usually alongside missing terms and privacy pages. | Show the working product, or say plainly that it is not shipped yet. |
| Navigation links pointing at pages that do not exist | A broken promise the reader discovers on their first click. | Every navigation item needs a real destination, or a visible and honest coming-soon label. |
| Buttons, menus, and forms that look finished but do nothing | This is the line between a mockup and a product. | Every interactive element gets real behavior or comes out of the page. |

## App and Dashboard Screens

| Tell | Why it reads as generated | What to do instead |
| :--- | :--- | :--- |
| Sidebar, top bar, four stat cards, one chart, one table, regardless of what the screen manages | A layout recalled from memory instead of derived from the work the screen supports. Swap the labels and it fits any product. | Name the decision the user makes here, then build the hierarchy around it. See [`dashboard.md`](./dashboard.md). |
| Four equal stat cards, each with a green percentage delta | Four equal cards is already a hierarchy failure, and a delta with no real comparison period is an invented trend. | Show the metrics that matter, weighted by how much they matter, with deltas only where a real comparison exists. |
| An activity feed of invented people doing invented things | The testimonial problem in a different layout, making an empty product look busy. | Show real events, or an honest empty state that says what to do first. |
| A chart with a generic title such as Overview or Performance | A chart is an answer. With no question behind it, it is texture that costs more attention than a sentence would. | Write the question first and put it in the title. If a sentence answers it better, write the sentence. |
| Table columns taken from the component's defaults rather than the data | The reader scans for the field that decides their next action and it is not there. | Choose columns from the decision this table supports, with the deciding field early. |
| An empty state that says "No data available" and nothing else | It satisfies the requirement to have an empty state without telling the reader anything. | Say why it is empty and give the one action that fills it. First run, filtered to nothing, and permission denied are three different screens. |

## Motion

| Tell | Why it reads as generated | What to do instead |
| :--- | :--- | :--- |
| Elements that pulse, float, or bounce forever with no trigger | Perpetual motion competes with reading and never lets the page rest. | Motion marks a moment. It does not run on a loop. |
| Fade, slide, scale, and bounce stacked on every element as it enters | A page where everything moves has no focal point, so motion becomes wallpaper. | Choreograph deliberately. The main message moves; the supporting content stays still. |
| An entrance animation on every section, re-firing on every scroll pass | Already-read content keeps re-announcing itself. | Reveal once, then leave it. See [`scroll-experience.md`](./scroll-experience.md). |

## Flagship Anti-Patterns

### 1. Technique Without a Reason

* **The Bad Habit:** Reaching for glass, glow, gradient, bento, or a blurred orb because the section looked plain.
* **The Problem:** Every one of these is a recognizable default, so applying several at once produces a page that looks like every other generated page.
* **Why It Fails:** The reader cannot name the pattern, but they recognize the category instantly, and the product inherits that impression before reading a word.
* **Clean Fix:** Require a stated reason for each technique, traceable to the visual thesis. A technique with no reason comes out.
* **The Waitsec Way:** If the reason cannot be stated in a sentence, the technique is a default, not a decision.

### 2. Filling a Gap With Something Untrue

* **The Bad Habit:** Supplying a plausible statistic, testimonial, logo, or data row when the real one was not provided.
* **The Problem:** The page now carries a claim that is not true, in exactly the places people rely on to make decisions.
* **Why It Fails:** Generic styling is a quality problem that can be improved later. A fabricated fact is a trust problem that has to be found and removed before the page can ship at all.
* **Clean Fix:** Mark the gap as a gap. An honest placeholder or a missing section is always cheaper than a fabricated one.
* **The Waitsec Way:** An empty space is a question. A fabricated one is a lie the product has to answer for.

### 3. Auditing Into Emptiness

* **The Bad Habit:** Removing every pattern on this page and shipping what remains: white background, thin grey borders, small radius, default typeface, no identity.
* **The Problem:** The result is not generic anymore, but it is not designed either.
* **Why It Fails:** This file removes what does not belong. It cannot supply what should. A page with nothing left is a direction problem showing up as a clean audit.
* **Clean Fix:** Run [`design-direction.md`](./design-direction.md) and give the page a real thesis, then apply this audit to what that produces.
* **The Waitsec Way:** Removing the generic is half the work. The other half is having something to say.

## Audit Checklist

- [ ] Does every gradient, glass surface, glow, shadow, and texture trace back to a stated reason?
- [ ] Is the accent color spent at a few deliberate moments rather than spread across the page?
- [ ] Does the section order come from this product's argument rather than a familiar template sequence?
- [ ] Does layout weight reflect real content importance instead of a uniform card grid?
- [ ] Are icons, badges, stripes, arrows, and status dots carrying information rather than decorating?
- [ ] Is the headline set in one color, with no gradient carrying emphasis by line position?
- [ ] Does the hero open with real content rather than a dotted eyebrow capsule restating the product name?
- [ ] Is every number, quote, logo, record, and testimonial real, or clearly marked as a placeholder?
- [ ] Does every navigation item and interactive control have a real destination or behavior?
- [ ] On an app screen, is the layout built around the decision the user makes there?
- [ ] Do empty, loading, and error states name a cause and a next action?
- [ ] Does motion mark specific moments, with nothing looping and nothing re-firing on scroll?
- [ ] After removing the tells, does the page still have a stated identity rather than nothing at all?
