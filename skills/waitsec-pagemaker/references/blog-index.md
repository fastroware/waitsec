# Blog and Article Index Blueprint

Use this guide for a blog listing, news index, article archive, changelog list, or other page that helps people find content.

Apply [`waitsec-ui`](../../waitsec-ui/SKILL.md) for component and responsive detail. Use [`seo-and-structured-data.md`](./seo-and-structured-data.md) only for public indexable content.

## Define the Browsing Job

Determine:

- What content is listed.
- How people are likely to browse or search it.
- Which fields really exist, such as title, date, author, category, image, or summary.
- Whether filtering, search, pagination, or sorting already exists.
- Whether freshness changes the reader's decision.

Do not add categories, reading times, author details, thumbnails, or summaries when the content model does not provide them.

## Page Structure

A useful index may include:

| Area | Use when |
| :--- | :--- |
| Page title and short description | The collection needs context. |
| Search | The collection is large enough for direct lookup. |
| Categories or filters | Categories are real, useful, and supported by filtering behavior. |
| Featured item | One item has a real editorial reason to lead. |
| List or grid | Always, using the shape that best supports scanning. |
| Pagination or load more | The collection is too large for one response. |
| Subscription action | A real subscription path exists and fits the page goal. |

A single readable feed often works better than a card grid for text-heavy content. Use a grid when imagery or item comparison helps browsing.

## Item Content

Each item needs a clear destination label, usually its title. Add other fields only when they help selection:

- Summary for topic and scope.
- Date when freshness matters.
- Author when authorship matters.
- Category when it helps filtering or recognition.
- Image when it carries information or identity.
- Reading time only when it is calculated consistently and useful to the audience.

Avoid generic link labels when the title itself can be the link.

## Filters and Pagination

- Preserve real query state in the URL when the project supports it.
- Keep selected filters visible and keyboard usable.
- Let filter controls scroll or collapse when space is limited, but keep the behavior discoverable.
- Use explicit pagination as a safe default.
- A manual load-more action is valid when new items append without losing focus or history.
- Automatic infinite loading needs a reachable footer, position restoration, clear loading feedback, and an accessible alternative.

## Responsive Behavior

- Keep several titles visible within a short mobile scan.
- Reduce or move images when they consume more space than the content needs.
- Let cards become a single flow before text becomes cramped.
- Keep dates and other useful metadata readable.
- Contain wide filter groups without causing page-level horizontal scrolling.

## Anti-Patterns

### 1. Image-First Cards That Hide the List

* **The Bad Habit:** Giving every item a large fixed-height image before its title.
* **The Problem:** A phone screen shows mostly imagery and very few content choices.
* **Why It Fails:** People visit an index to compare topics quickly, but the layout slows scanning and uses more data.
* **Clean Fix:** Size images according to their value. Use compact thumbnails or a text-first list when titles and summaries carry the decision.
* **The Waitsec Way:** The index helps people find content before it decorates the collection.

### 2. Filter Controls Taking Over the Page

* **The Bad Habit:** Rendering every category as a large pill that wraps across several mobile rows.
* **The Problem:** Controls push the first result far down and create a noisy block at the top.
* **Why It Fails:** Browsing starts with managing the interface instead of seeing the content.
* **Clean Fix:** Show the useful filters in a compact row, menu, or disclosure. Keep selection visible and accessible.
* **The Waitsec Way:** Filters support the list. They do not become the main content.

### 3. Uncontrolled Infinite Loading

* **The Bad Habit:** Fetching more items whenever the viewport nears the bottom with no stop, history, or recovery behavior.
* **The Problem:** The footer moves away, back navigation loses position, and failures interrupt the list without a clear next action.
* **Why It Fails:** People lose control of where they are and cannot reliably return to an item.
* **Clean Fix:** Prefer pagination or a manual load-more action. If automatic loading is required, preserve position, expose status, keep the footer reachable, and provide recovery.
* **The Waitsec Way:** Browsing controls should remain with the user.

## Page Checklist

- [ ] Does the page expose only content fields that really exist?
- [ ] Can people identify and open an item from its title?
- [ ] Are filters useful, stateful, and keyboard accessible?
- [ ] Does the mobile layout show enough titles for quick scanning?
- [ ] Are dates, authors, categories, images, and reading times conditional on real value?
- [ ] Can people reach the footer and return to their previous list position?
- [ ] Are loading, empty, error, and end-of-list states clear?
- [ ] If indexable, is metadata factual and generated once?
