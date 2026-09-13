# Landing Page Blueprint

Use this guide for a product home page, campaign page, launch page, or focused marketing page.

A landing page has one main job. Define that job before choosing sections or visual treatments. Apply [`waitsec-ui`](../../waitsec-ui/SKILL.md) for interface detail and load [`seo-and-structured-data.md`](./seo-and-structured-data.md) only when the page is public and indexable.

## Start With Known Facts

Identify:

- The audience and problem.
- The product or offer.
- The primary action.
- Real features, limitations, prices, proof, and links.
- Existing brand assets and product media.
- The page's place in the current site shell.

Do not invent customers, quotes, metrics, partner logos, prices, awards, or product capabilities.

## Section Menu

Choose only the sections supported by the goal and real content.

| Section | Use when | Leave out when |
| :--- | :--- | :--- |
| Hero | The page needs a clear first explanation and action. | A shared shell already supplies the needed introduction. |
| Problem and solution | The audience needs context before understanding the offer. | The use case is already obvious or space is tightly focused. |
| Feature or benefit section | Real capabilities can be explained with useful differences. | Content would repeat the hero with new icons. |
| Product view or demonstration | A real screenshot, sample, or interaction helps understanding. | Only generic stock media is available. |
| Proof | Verifiable quotes, outcomes, logos, or public evidence exist. | The evidence is missing or cannot be published. |
| Pricing | The page supports a purchase decision and current prices are known. | Pricing is private, variable, or owned by another route. |
| FAQ | Repeated questions block the main action. | Questions would be invented for page length or schema. |
| Final action | A later reminder helps after the explanation. | It would repeat the same message after every section. |

Navigation and footer belong only when the existing shell or page journey needs them. Do not create a new navbar for an isolated campaign page without checking the project.

## Content Order

A useful default sequence is:

1. Explain what the offer is and who it helps.
2. Show the primary action.
3. Add the smallest amount of context needed to trust or understand it.
4. Show real capabilities, proof, or pricing in the order needed for the decision.
5. Repeat the primary action once near the end when the page is long enough to need it.

Change this order when the audience already knows the product or when the purchase journey requires another sequence.

## Responsive Behavior

- Keep the headline, explanation, and main action visible early on small screens.
- Turn side-by-side sections into a readable flow when space runs out.
- Preserve source order so the mobile reading sequence remains logical.
- Let comparison content reformat or scroll inside its own container. Avoid maintaining two unrelated copies of the same data.
- Keep media sized to its content role. A decorative image should not push the main action far down the page.
- Test long headlines, translated text, pricing labels, and real button copy.

## Actions and Proof

- Give one action the primary visual treatment in each decision area.
- A secondary action is allowed when it supports a different, clear next step.
- Use descriptive link text instead of repeated generic labels.
- Make proof traceable when possible.
- State limitations or conditions that affect the decision.

## Anti-Patterns

### 1. The Template Checklist Page

* **The Bad Habit:** Adding every common landing section whether or not the brief has content for it.
* **The Problem:** The page fills with weak feature cards, empty proof, invented questions, and repeated actions.
* **Why It Fails:** People must scan a long page to find the one reason they came, and false filler reduces trust.
* **Clean Fix:** Choose sections from the section menu based on the page job and known facts. Leave unsupported sections out.
* **The Waitsec Way:** A landing page is complete when it supports one decision, not when it fills a template.

### 2. Competing Primary Actions

* **The Bad Habit:** Giving several hero actions the same strong color, size, and placement.
* **The Problem:** The first screen asks people to start, book, read, compare, and contact at the same time.
* **Why It Fails:** The intended next step becomes hard to identify, especially on a narrow screen.
* **Clean Fix:** Choose one visually primary action. Keep a useful secondary action quieter and remove unrelated actions from the hero.
* **The Waitsec Way:** Clear priority helps people move without guessing.

### 3. Repeated Feature Card Filler

* **The Bad Habit:** Generating a grid of equal cards with vague claims, matching icons, and identical descriptions.
* **The Problem:** Major and minor capabilities look the same, while none has enough detail to be useful.
* **Why It Fails:** The section reads like placeholder content and hides the product's real difference.
* **Clean Fix:** Group real capabilities by importance. Use screenshots, examples, or different layout weight only when the content supports it.
* **The Waitsec Way:** Content importance decides presentation, not a card count.

## Page Checklist

- [ ] Is the audience, offer, and primary action clear near the start?
- [ ] Does every section have real content and a job?
- [ ] Are claims, prices, quotes, logos, and metrics factual?
- [ ] Is one action visually primary in each decision area?
- [ ] Does the mobile reading order match the intended page story?
- [ ] Are comparisons and media usable without page-level horizontal scrolling?
- [ ] Did I reuse the existing shell, styles, components, and assets?
- [ ] If the page is indexable, did I apply factual, non-duplicated metadata?
