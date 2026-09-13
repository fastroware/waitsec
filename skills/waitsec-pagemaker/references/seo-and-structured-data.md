# SEO and Structured Data

Use this reference for a public indexable page or when the user explicitly asks for SEO, social metadata, or structured data.

Do not apply this checklist automatically to private application screens, auth pages, internal tools, temporary previews, or routes that the project intentionally excludes from search.

## Indexability Gate

Before adding metadata, decide:

1. Is the page public?
2. Should search engines index it?
3. Is there one stable preferred URL?
4. Are the title, description, images, dates, names, and other facts known?
5. Does the framework, CMS, plugin, or shared layout already generate metadata or schema?

If the page is not indexable, follow the project's existing `noindex` pattern. Do not add rich-result markup to compensate.

## Existing Generator First

Inspect:

- Shared head or metadata components.
- Framework metadata APIs.
- CMS and SEO plugins.
- Layout defaults and route overrides.
- Existing JSON-LD helpers.
- Server-rendered output, not only source code.

Extend the existing owner. Do not add a second title, canonical tag, Open Graph block, or schema object for the same entity.

## Base Metadata for Indexable Pages

Add or update only what the page needs and the project does not already provide:

- A unique, factual title. Separate title parts with a middle dot surrounded by spaces, " · ", for example "Blog · Example Site". Do not use an en dash, em dash, hyphen, or vertical bar as the title separator.
- A useful meta description based on visible page content. Keep the title and description free of emoji and free of em dash (U+2014) or en dash (U+2013) unless the user explicitly asks.
- A canonical URL when the preferred URL is known.
- Open Graph fields for pages intended to be shared.
- A suitable absolute social image URL when a real image exists.
- Language alternatives only when real translated routes exist.
- Descriptive page headings and link text.

Character counts are review hints, not hard limits. Prefer accurate wording that displays well in the product's target search and sharing contexts.

## Content Structure

- Use one clear page topic and a logical heading order.
- Put the main answer or value near the start when that helps the reader.
- Use lists, tables, and definitions only when they make the content easier to understand.
- Keep dates visible when freshness affects the decision.
- Name authors, organizations, products, and locations only when the facts are known and useful.
- Render indexable content through the project's supported server or build path when possible.
- Do not add repetitive phrases for search engines.

Question-shaped headings can help question-driven pages, but they are not required for every article or section.

## Structured Data Gate

Add structured data only when:

- The page is public and indexable.
- A Schema.org type accurately describes visible content.
- The required facts are known.
- The project does not already emit the same entity.
- The markup can remain synchronized with the page.

No JSON-LD is better than invented, duplicated, or misleading JSON-LD.

## Common Type Choices

| Page content | Possible type | Use only when |
| :--- | :--- | :--- |
| Organization home or about content | `Organization` | The organization facts are visible and known. |
| Site identity and search | `WebSite` | It represents the real site and does not duplicate an existing generator. |
| Software product | `SoftwareApplication` | The page describes real software and its stated fields. |
| Physical or purchasable product | `Product` | Product and offer facts are visible and current. |
| Blog or article listing | `Blog`, `CollectionPage`, `ItemList` | The listed items match visible content and order. |
| Article or post | `Article`, `BlogPosting` | Author, dates, headline, and other used fields are factual. |
| Personal profile | `ProfilePage`, `Person` | The page is primarily about that person. |
| Contact page | `ContactPage`, `Organization`, `ContactPoint` | The listed contact methods are visible. |
| Visible FAQ | `FAQPage` | The same questions and answers appear on the page and current search rules support the use. |
| Visible breadcrumbs | `BreadcrumbList` | The breadcrumb path is shown or otherwise part of the real page structure. |

A type being available does not mean the page needs it or qualifies for a rich result.

## JSON-LD Rules

- Use the project's established placement and generator.
- Use absolute URLs for entity IDs and media when URLs are included.
- Use ISO 8601 dates when dates are included.
- Keep values synchronized with visible content.
- Reuse stable `@id` values when the project already has an entity graph.
- Do not mark up hidden FAQs, invented reviews, estimated ratings, unknown prices, or placeholder people.
- Do not copy a complete example and leave sample data inside it.

## Validation

Use the checks available to the project:

1. Confirm the rendered page has one intended title, canonical URL, and social metadata set.
2. Parse JSON-LD as JSON.
3. Check that every used field matches visible or known data.
4. Check for duplicate entities and metadata.
5. Run project tests or metadata checks when they exist.
6. Use external schema or rich-result tools when access is available and the selected type is supported.

Report what was actually checked. Do not claim external validation when it was not run.

## Anti-Patterns

### 1. Adding Schema to Every Page

* **The Bad Habit:** Inserting a generic JSON-LD block into every route because structured data is treated as a completion requirement.
* **The Problem:** Private and utility pages gain noisy markup that describes little or duplicates shared output.
* **Why It Fails:** Search systems may ignore the data, while maintainers must keep another source synchronized.
* **Clean Fix:** Pass the indexability and structured-data gates. Add a matching type only when it describes known visible content.
* **The Waitsec Way:** Metadata is a factual interface, not a decoration.

### 2. Duplicating the Existing Generator

* **The Bad Habit:** Adding page-level tags and JSON-LD without checking the framework, layout, CMS, or plugin output.
* **The Problem:** The rendered page contains conflicting titles, canonical URLs, social tags, or entity objects.
* **Why It Fails:** Consumers cannot tell which value is authoritative, and later updates reach only one copy.
* **Clean Fix:** Find the current metadata owner and extend it. Inspect rendered output for duplicates.
* **The Waitsec Way:** One source should own each claim.

### 3. Filling Unknown Fields With Plausible Data

* **The Bad Habit:** Inventing dates, prices, ratings, addresses, authors, or image URLs to complete a schema example.
* **The Problem:** Machine-readable claims no longer match the real page or business.
* **Why It Fails:** False metadata can mislead users, break validation, and damage trust in the rest of the data.
* **Clean Fix:** Use only known facts. Omit optional fields, request missing business data when it is needed, or skip the schema.
* **The Waitsec Way:** An incomplete honest claim is better than a complete false one.

## Pre-Flight Checklist

- [ ] Is the page public and intended for indexing?
- [ ] Did I inspect existing metadata and schema generators?
- [ ] Are title, description, canonical URL, and social fields factual and non-duplicated?
- [ ] Does the content use a clear heading order without search-driven repetition?
- [ ] If structured data is present, does its type match visible content?
- [ ] Are all names, dates, prices, links, and media URLs known facts?
- [ ] Did I validate rendered output with the tools actually available?
