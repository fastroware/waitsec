# Single Article and Reading View Blueprint

Use this guide for an article, blog post, documentation page, guide, or other long-form reading view.

Apply [`waitsec-ui`](../../waitsec-ui/SKILL.md) for typography, focus, components, and copy details. Use [`seo-and-structured-data.md`](./seo-and-structured-data.md) only when the page is public and indexable.

## Confirm the Content Model

Identify the fields that really exist:

- Title and article body.
- Summary or introduction.
- Author and publisher.
- Published and updated dates.
- Category or tags.
- Cover image and caption.
- Previous, next, or related content.

Do not generate author biographies, reading times, dates, categories, cover images, or related links from assumptions.

## Reading Structure

A useful reading page usually contains:

1. A clear way back to the collection or parent section when the shell does not already provide one.
2. One page title.
3. Useful metadata that exists and affects trust or context.
4. The article body in a focused reading column.
5. Optional author, source, related content, or next-step material after the article.

Do not place subscription boxes, share controls, related cards, and promotional banners between every section. Keep the article as the main object.

## Reading Measure and Type

- Aim for roughly 60 to 75 characters per line for normal body text.
- Use a readable base size and line height that match the existing product.
- Give headings enough separation to show topic changes.
- Keep paragraph spacing consistent.
- Preserve clear link, code, quote, list, and table styles.
- Test long words, code tokens, URLs, and translated text.

A fixed framework width does not guarantee a good reading measure. Check the rendered text.

## Code, Tables, and Media

- Put code and wide tables in their own horizontal overflow containers.
- Keep the main page stable while the wide child scrolls.
- Make the overflow area keyboard reachable when needed and avoid hiding useful scroll cues.
- Give images dimensions and captions when a caption adds source or context.
- Keep meaningful alt text separate from a visible caption when they serve different needs.
- Do not make media wider than the viewport without an intentional contained treatment.

## Navigation and Extras

- Previous and next links are useful only when the content has a real sequence.
- Related content should come from a real relationship, not random filler.
- Share controls should use the project pattern and should not crowd the title.
- A table of contents helps long structured documents, but short posts do not need one.
- Estimated reading time is optional and should be calculated consistently if shown.

## Anti-Patterns

### 1. Full-Width Long-Form Text

* **The Bad Habit:** Letting paragraphs span most of a wide desktop display.
* **The Problem:** Lines become too long and the reader has trouble finding the start of the next line.
* **Why It Fails:** Reading takes more effort and attention drifts away from the content.
* **Clean Fix:** Constrain the body to a comfortable character measure and check it with the actual typeface and size.
* **The Waitsec Way:** The page width serves reading comfort, not empty-screen coverage.

### 2. Wide Content Breaking the Page

* **The Bad Habit:** Allowing code, tables, URLs, or media to set the width of the whole document.
* **The Problem:** The page moves sideways and normal paragraphs no longer fit the viewport.
* **Why It Fails:** Readers lose their place and must fight the layout to reach the content.
* **Clean Fix:** Contain wide children in local overflow regions and keep the article column fluid.
* **The Waitsec Way:** Exceptional content gets a contained exception. It does not redefine the page.

### 3. Search-Driven Heading Rewrites

* **The Bad Habit:** Turning every heading into a repeated search question even when the article has a natural narrative structure.
* **The Problem:** Headings sound forced, repeat the same terms, and stop matching the author's argument.
* **Why It Fails:** The article becomes harder to read in an attempt to satisfy a machine pattern.
* **Clean Fix:** Use accurate headings that describe each section. Use questions only when the section genuinely answers one.
* **The Waitsec Way:** Clear writing comes before search formatting.

## Page Checklist

- [ ] Is the article body the clear focus of the page?
- [ ] Does the rendered body stay near a comfortable character measure?
- [ ] Are heading order, paragraph rhythm, links, lists, quotes, and code readable?
- [ ] Are wide code, tables, URLs, and media contained locally?
- [ ] Are author, dates, categories, images, reading time, and related links based on real data?
- [ ] Are optional promotions and controls kept out of the reading flow unless they help?
- [ ] Does navigation reflect a real parent or sequence?
- [ ] If indexable, is article metadata factual and non-duplicated?
