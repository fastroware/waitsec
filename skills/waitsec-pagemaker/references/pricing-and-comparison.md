# Pricing and Comparison Tables

Use this reference whenever a page needs a pricing section, a plan or tier comparison, or a feature comparison table. It extends the Pricing row in [`landing-page.md`](./landing-page.md)'s section menu with the actual shape of the section.

Pricing is exactly the kind of content the rest of this skill warns against inventing. Every number, feature, and limit shown here must come from the real brief. A missing price is a missing fact, not a gap to fill with a realistic-looking guess.

## Two Common Shapes

- **Tier cards**: two to four plan cards side by side, each built for a quick choice between a small number of options.
- **Full comparison table**: a longer feature-by-feature table, used when the tiers share many features and the differences need to be scannable row by row rather than card by card.

A page can use one or both. Tier cards work well as the primary pricing section; a full comparison table works well underneath it, or on its own page, for people who want the detail.

## Tier Cards

- Each card states the plan name, the price, its billing period, and one short line describing who the plan is for.
- Show the number as the dominant visual element on the card. De-emphasize the recurring period text next to it, for example `$29` large with `/month` set smaller beside it.
- List real included features as a short, scannable list with a consistent marker, not a paragraph. Quantitative limits belong in the list as real values, for example `50 GB storage`, not a vague claim like generous storage.
- Give every card one clear primary action. Word it for what actually happens next: start a trial, choose a plan, or contact sales, not the same generic label on every card when the flows genuinely differ.
- If a monthly and annual price both exist, show the real discount as a stated percentage or amount when annual is cheaper. Do not invent a number if the real discount is unknown.
- If a tier's price is genuinely variable or requires a sales conversation, say so plainly, for example Contact us or Custom pricing. Do not hide a real, public price behind a vague label just to create a sales conversation that is not needed.

### Highlighting a Recommended Tier

- Highlight at most one tier, and only when there is a real reason, a stated recommendation, the most popular plan, or the best value for most people. Do not decorate a tier as recommended without a real basis for it.
- Use one clear technique for the highlight: a stronger border, a slight elevation, or a small labeled badge. Keep the rest of the card's structure identical to the other tiers so the comparison stays fair and legible.
- Every tier highlighted at once cancels the signal. If every card looks special, none of them do.

## Full Comparison Table

- Use a real table, not a div grid that visually resembles one. Screen readers need actual row and column relationships, which only a real table structure provides.
- Group related features under a subheading or a divider row, for example Core, Support, Security, rather than one long flat list of thirty unrelated rows.
- Use a consistent marker for included and not included across every cell. A filled checkmark and a plain dash or muted x-mark read clearly at a glance. Do not rely on color alone to carry that meaning; pair the color with a distinct shape so it still reads correctly for colorblind visitors.
- When a feature is quantitative rather than a plain yes or no, show the real value in the cell, for example `Unlimited` or `10 projects`, instead of forcing it into a generic checkmark.
- Keep the tier names visible while the table scrolls, either with a sticky header row, a sticky first column, or both, depending on which axis actually scrolls for this page's tier count and viewport.
- Give a jargon-heavy feature name a short plain-language label, with an optional tooltip or info icon for the technical detail, instead of a wall of unexplained terms.

## Responsive Behavior

- On a narrow viewport, let the table scroll horizontally inside its own container, the same pattern described in [`dashboard.md`](./dashboard.md) for wide data tables. Never let the whole page scroll horizontally because of one wide table.
- When the table has few tiers and many rows, reflowing to one stacked card per tier, repeating each feature's label next to its value, often reads better on a small screen than a horizontally scrolling table.
- Keep the primary action for each tier reachable without scrolling past the table's full width on a small screen.

## Trust and Honesty

- Never invent a price, a discount percentage, a feature limit, or a comparison detail that was not part of the real brief. State what is missing instead.
- Never use a fake countdown, a fake low-stock warning, or a pre-selected priciest option relying on visual trickery to nudge a choice. If a promotion has a real deadline, state the real deadline plainly.
- Disclose real fees, taxes, or add-on costs on the pricing section itself. Do not reveal them only at a later checkout step when the brief already states them here.

## Anti-Patterns

### 1. Invented Numbers

* **The Bad Habit:** Filling in a plausible-looking price, feature limit, or discount percentage when the real number was not provided.
* **The Problem:** The page displays a fact that is not true, on the exact section people use to make a purchase decision.
* **Why It Fails:** A wrong number here is not a cosmetic bug. It misleads a real purchase decision and has to be caught and fixed before the page can ship.
* **Clean Fix:** Use a clear placeholder or ask for the real figure instead of guessing at one that looks realistic.
* **The Waitsec Way:** A missing fact stays missing until it is real, especially here.

### 2. Every Tier Is the Popular One

* **The Bad Habit:** Adding a highlight badge or a stronger border to more than one card, or to all of them, so nothing looks plain.
* **The Problem:** The visual signal meant to guide a fast decision no longer points anywhere.
* **Why It Fails:** Highlighting is a hierarchy tool. Applied everywhere, it stops being hierarchy.
* **Clean Fix:** Highlight one tier, only with a real, stated reason behind the choice.
* **The Waitsec Way:** A recommendation means one thing is recommended.

### 3. The Div That Pretends to Be a Table

* **The Bad Habit:** Building a comparison grid out of styled divs instead of real table markup, usually to make custom styling easier.
* **The Problem:** Assistive technology loses the row and column relationships that make a comparison table understandable without sight.
* **Why It Fails:** The visual comparison this section exists for becomes unavailable to anyone using a screen reader.
* **Clean Fix:** Use real table markup with proper header association, and style it, rather than abandoning table semantics for easier styling.
* **The Waitsec Way:** A comparison table needs to compare for everyone, not just for sighted mouse users.

## Pricing Checklist

- [ ] Does every price, discount, limit, and feature come from the real brief, with nothing invented to look plausible?
- [ ] Does the price read as the dominant element on each card, with the billing period de-emphasized?
- [ ] Is at most one tier highlighted, with a real, stated reason?
- [ ] Does a full comparison table use real table markup with proper header association, not a styled div grid?
- [ ] Are included and not included marked with a shape difference, not color alone?
- [ ] Are related features grouped under real subheadings instead of one long flat list?
- [ ] Does the table stay usable, with tier names visible, on a narrow viewport, without page-level horizontal scrolling?
- [ ] Are any real fees or add-on costs disclosed here rather than hidden until checkout?
- [ ] Is every tier's action worded for what actually happens next?
