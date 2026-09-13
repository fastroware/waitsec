# Image and Media Sourcing

Use this guide when a page needs a new image, when an existing image must be selected, or when media delivery affects page layout and performance.

Do not add an image merely because a blueprint has an image slot. Media must support the content or product task.

## 1. Check the Project First

Inspect the target page, nearby pages, asset pipeline, CMS, and likely media directories. Look for:

- Brand marks and approved illustrations.
- Product screenshots and demonstrations.
- Portraits or team media.
- Existing editorial images.
- Open Graph images.
- Image components, optimization services, and CDN rules.
- License or credit records.

Reuse suitable project media before sourcing something new. Cropping or optimizing an approved asset is often better than adding another visual style.

Do not scan large upload or storage trees without a reason. Start with paths imported by nearby pages and the project's documented asset locations.

## 2. Define the Media Need

Before selecting an image, state:

- The job of the image.
- The subject and tone required by the content.
- The display ratio and approximate rendered size.
- Whether the image contains meaningful information or is decorative.
- License, attribution, privacy, and brand constraints.
- Whether people, products, locations, text, or trademarks are allowed.

User-provided assets and subjects named by the user are outside the automatic external-sourcing default. Use them as requested unless another project, consent, privacy, or safety rule applies.

## 3. Choose a Source

Use this order:

1. Existing approved project media.
2. Media supplied by the user or content owner.
3. An approved company library, CMS, or provider already used by the project.
4. An external source explicitly requested or approved by the user.
5. Pexels as the last stock fallback when the page needs an image and no suitable source exists.
6. A neutral placeholder or simple non-image treatment when no suitable media can be verified.

Do not open Pexels before checking the project folders, nearby imports, CMS, and approved providers. Confirm the current license and terms before using an external asset.

### Pexels Fallback Default

When the agent reaches Pexels without a user-specified subject:

- Do not search with people-focused terms.
- Prefer cinematic close-ups of plants, natural scenery, architecture, objects, products, workspaces without people, and natural textures.
- Useful search directions include `cinematic plant close up`, `leaves macro photography`, `misty mountain scenery`, `minimal architecture detail`, `workspace objects no people`, `product still life`, and `natural texture`.
- Inspect the selected result and skip it when a person is a visible subject, even if the search term was non-human.
- Do not use a random image endpoint that can return a different or unreviewed subject later.
- If no suitable result can be verified, use a neutral placeholder or ask for an asset when the image is important.

This default does not restrict an existing project asset or a subject the user explicitly requests. Do not replace or reject user-owned media merely because it contains a person.

## 4. Fit the Slot

- Match the source crop to the real content slot.
- Preserve important subjects across responsive crops.
- Use explicit intrinsic dimensions or an aspect-ratio container to reserve space.
- Avoid stretching media to a different ratio.
- Test narrow and wide crops with the real subject.
- Keep text out of an image when the text must remain readable, searchable, translatable, or accessible.

Common ratios can be useful starting points, but the component and content decide the final ratio.

## 5. Delivery and Performance

Follow the project's image component and pipeline first.

- Use a suitable modern format when the pipeline supports it.
- Avoid creating duplicate format conversions outside the normal build.
- Lazy-load below-the-fold media when it does not need early loading.
- Give high fetch priority only to the real Largest Contentful Paint image when measurement or page structure supports that choice.
- Use responsive sources when the project provides them.
- Keep remote domains compatible with the project's CSP, privacy policy, and image configuration.
- Vendor an external asset when licensing permits it and project reliability requires local ownership.
- Avoid production hotlinks that can disappear, track visitors, or bypass project optimization.

## 6. Accessible Text and Credits

- Give informative images alt text that describes the information needed in context.
- Use empty alt text for decorative images.
- Do not repeat a nearby caption word for word unless both serve different access needs.
- Keep visible credits when the license requires them.
- Record source and license in the project's established credit or asset record, not in random narration comments.

## Anti-Patterns

### 1. Adding Stock Media Before Checking the Project

* **The Bad Habit:** Searching for a new image before looking at approved product media and nearby page assets.
* **The Problem:** The page introduces a second visual style and ignores more accurate project material.
* **Why It Fails:** Generic media weakens identity and adds delivery or license work without improving the page.
* **Clean Fix:** Inspect existing imports, asset directories, the CMS, and the image pipeline first. Reuse or adapt a suitable approved asset.
* **The Waitsec Way:** Project media is the first source, not the fallback.

### 2. Searching Pexels for People by Default

* **The Bad Habit:** Searching Pexels for developers, teams, founders, customers, or other people when the user did not ask for a human subject.
* **The Problem:** Generic stock people become part of the page even though a plant, natural scene, object, product, or texture could support the content.
* **Why It Fails:** The agent makes an unnecessary subject choice and may introduce imagery the user does not want.
* **Clean Fix:** Use non-human search terms for automatic Pexels fallback and inspect the chosen result. Keep user-provided assets and explicitly requested subjects outside this default.
* **The Waitsec Way:** When the agent chooses the stock subject, start with useful media that does not introduce people.

### 3. Using an Unstable Remote Image in Production

* **The Bad Habit:** Linking directly to an external image without checking reliability, terms, tracking, CSP, or optimization.
* **The Problem:** The image can break, expose visitor requests, or load outside the project's performance controls.
* **Why It Fails:** A page dependency is handed to a source the project does not control.
* **Clean Fix:** Use an approved provider and configuration, or vendor the asset when permitted and useful. Record its source and license.
* **The Waitsec Way:** Know who serves each production asset and under what terms.

### 4. Unsized Media Shifting the Page

* **The Bad Habit:** Rendering an image without intrinsic dimensions or reserved aspect ratio.
* **The Problem:** Text and controls move when the media finishes loading.
* **Why It Fails:** People can lose their reading position or tap the wrong control as the page shifts.
* **Clean Fix:** Reserve the correct space with dimensions or aspect ratio and let responsive CSS scale it.
* **The Waitsec Way:** The layout knows the media shape before the pixels arrive.

## Media Checklist

- [ ] Does the page need this image for content, trust, identification, or explanation?
- [ ] Did I inspect approved project media, user assets, nearby imports, the CMS, and the current image pipeline before opening Pexels?
- [ ] If Pexels was needed without a user-specified subject, did I use non-human search terms and verify that people are not visible subjects?
- [ ] Are subject, consent, brand, license, credit, and privacy rules known?
- [ ] Does the crop work in the real responsive slot without distortion?
- [ ] Are dimensions or aspect ratio reserved?
- [ ] Does loading priority match the image's actual page role?
- [ ] Are remote delivery, CSP, tracking, and reliability handled?
- [ ] Is alt text or decorative treatment correct for the image's purpose?
