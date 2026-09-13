# Image Sourcing Blueprint (waitsec-pagemaker)

Use this guide when a page needs images. The rule is simple: reuse the project's own media first. Only go external when the project has nothing that fits.

---

## Part 1: Check the Project First

Before downloading anything, look for existing media:

- Common folders: `public/`, `public/images/`, `assets/`, `static/`, `img/`, `images/`, `resources/`, `storage/`, `uploads/`, `media/`.
- Also check template asset folders, CMS uploads, and existing CDN configuration.
- List what exists: logos, product shots, icons, backgrounds, photos. Note the format, dimensions, and license.
- Prefer an existing image over a new one. Reuse keeps the bundle small and the brand consistent.
- If an existing image only needs cropping, resizing, or compression, do that instead of downloading a new one.
- Never replace a project's real product screenshots with generic stock photos.

## Part 2: When to Source Externally

Only source externally when the project has no suitable image for the section.

- Default source: **Pexels**, which is royalty-free. Use the Pexels CDN URL or download into the project's asset folder.
- Content rules, in order of priority:
  - **No identifiable people.** Skip faces, crowds, portraits, and hands. The user asked for no people.
  - Prefer close-up plants, leaves, flowers, moss, water, rocks, textures, landscapes, mountains, sky, and abstract nature.
  - No text, watermarks, brand logos, or recognizable trademarks inside the photo.
  - No violent, political, medical, or otherwise sensitive imagery.
- Because Pexels has no reliable "no people" filter, verify each chosen image visually before using it. If a person appears even in the background, pick another.

## Part 3: Match the Aspect Ratio

Pick the image ratio that matches the slot, and set explicit `width` and `height` so the layout does not shift.

| Slot | Ratio | Suggested size |
| :--- | :--- | :--- |
| Hero | 16:9 | 1600x900 |
| Wide banner | 21:9 | 2100x900 |
| Card thumbnail | 4:3 | 800x600 |
| Square card or avatar | 1:1 | 600x600 or 400x400 |
| Open Graph image | 1.91:1 | 1200x630 |
| Full-bleed section | 16:9 desktop, 4:5 mobile crop | 1600x900 and 1000x1250 |

Request the right size and crop from Pexels with URL parameters, for example:

```text
https://images.pexels.com/photos/<id>/pexels-photo-<id>.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&fit=crop
```

Adjust `w` and `h` to the slot ratio. Use `fit=crop` so the subject stays centered instead of stretched.

## Part 4: Delivery

- When the project vendors its own media, download the image into the asset folder instead of hotlinking in production.
- For quick static pages, a direct Pexels CDN URL is acceptable, but record the URL so it can be replaced later.
- Compress to WebP or AVIF when the stack supports it. Keep a JPEG or PNG fallback only if needed.
- Load below-the-fold images with `loading="lazy"` and `decoding="async"`.
- Load the hero image eagerly with `fetchpriority="high"` so it does not delay Largest Contentful Paint.
- Always set a descriptive `alt`. Decorative images get `alt=""`.
- When a license or project rule requires it, record the source and credit in a comment or a credits file.

## Part 5: Pitfalls

### 1. Downloading New Images When the Project Already Has Them

* **The Bad Habit:** Reaching for a stock photo before checking the project's own asset folders.
* **The Problem:** The page ends up with two visual styles, and the real product shots go unused.
* **Why It Fails:** Inconsistent branding looks unprofessional, and the bundle grows for no reason.
* **Clean Fix:** Scan `public/`, `assets/`, `static/`, and `storage/` first. Reuse or lightly crop what exists.
* **The Waitsec Way:** The project's own media is the source of truth. Add only what is truly missing.

### 2. People in Stock Photos

* **The Bad Habit:** Dropping a smiling stock model into a hero because the search looked good.
* **The Problem:** A generic person weakens the message and often clashes with the brand.
* **Why It Fails:** It reads as filler, and the user explicitly asked for images without people.
* **Clean Fix:** Filter and visually verify for no people. Prefer plants, landscapes, and textures.
* **The Waitsec Way:** Choose imagery that supports the message, not a face that distracts from it.

### 3. Wrong Aspect Ratio

* **The Bad Habit:** Using a long landscape photo inside a square card, or stretching an image to fit.
* **The Problem:** The subject gets cropped badly or the image looks distorted.
* **Why It Fails:** Broken proportions look careless and hurt trust.
* **Clean Fix:** Request or crop the exact ratio the slot needs, and use `object-fit: cover` for flexible containers.
* **The Waitsec Way:** Match the media to the frame. Do not force the frame to the media.

### 4. Hotlinking Unstable URLs in Production

* **The Bad Habit:** Pointing production pages at a temporary stock URL that later changes or disappears.
* **The Problem:** The image breaks and the section renders empty.
* **Why It Fails:** Broken images look like a bug and can take down a hero.
* **Clean Fix:** Download and vendor important images, or record and verify every external URL.
* **The Waitsec Way:** Own the assets your page depends on.

### 5. Unsized Images Causing Layout Shift

* **The Bad Habit:** Inserting images with no width or height, or with only a CSS width.
* **The Problem:** The page jumps as images load and text shifts position.
* **Why It Fails:** Layout shift is jarring and it hurts Core Web Vitals and SEO.
* **Clean Fix:** Set explicit `width` and `height` attributes that match the ratio, and let CSS scale them down.
* **The Waitsec Way:** Reserve the space before the pixels arrive.

---

## Pre-Flight Checklist for Image Sourcing

- [ ] Did I check the project's own asset folders before sourcing new images?
- [ ] Does every external image come from a royalty-free source such as Pexels, with no identifiable people?
- [ ] Does each image's aspect ratio match its slot (hero 16:9, card 4:3 or 1:1, Open Graph 1200x630)?
- [ ] Are important images downloaded and vendored instead of hotlinked in production?
- [ ] Do all images have explicit width and height to prevent layout shift?
- [ ] Are below-the-fold images lazy, and is the hero image prioritized?
- [ ] Does every meaningful image have a descriptive `alt`, with `alt=""` for decorative ones?
