# Scroll Experience

Use this reference when a page styles its scrollbar, enables smooth scrolling, pins or snaps a section during scroll, or reveals content as the reader moves down the page.

Scroll is the one interaction almost every visitor performs, usually with a device default they already trust. That makes it a high-risk place to be creative. Every change here has to earn itself against the behavior the browser already gives for free. Load [`motion-and-3d.md`](./motion-and-3d.md) alongside this file when the page also needs parallax, scroll-linked animation, or 3D.

## Scrollbar Styling

The default scrollbar is a real control with real affordances: a known width, a draggable thumb, and a position indicator the reader reads without thinking. Restyle it only when the design direction genuinely calls for it, not as a default polish step.

When the project does restyle it:

- Use the standard `scrollbar-width` and `scrollbar-color` properties as the base, with `::-webkit-scrollbar` rules layered on for finer control where the project supports it. Do not ship only the vendor-prefixed version.
- Keep the thumb wide enough to grab with a mouse. Roughly 8px to 12px works; below about 6px it becomes a precision test rather than a control.
- Keep a real contrast difference between the thumb and the track, in both themes. A thumb that nearly matches its track is a scrollbar that cannot be found.
- Style the page scrollbar and any inner scroll container consistently. A restyled page scrollbar beside a default-looking table scrollbar reads as an oversight.
- Reserve the gutter with `scrollbar-gutter: stable` on containers whose content can grow past their height, so the layout does not shift the moment a scrollbar appears.

Do not hide the scrollbar on a scrollable region. Hiding it removes the only passive signal that more content exists and that the reader's position within it can be judged. If the design cannot tolerate a visible scrollbar, the honest fix is usually a different layout, not an invisible control.

Never replace the native scrollbar with a JavaScript scrollbar library unless the project already uses one. Custom scroll implementations routinely break keyboard scrolling, momentum on touch devices, the browser's find-in-page scroll, and assistive technology.

## Smooth Scrolling

- Prefer native CSS `scroll-behavior: smooth`, applied to the scroll container or the root, over a scroll-hijacking library. It costs nothing, it does not fight the browser, and it degrades correctly.
- Scope it to where it helps. Smooth behavior on anchor navigation within a long page is useful, since the motion shows the reader where they landed. Smoothing every programmatic scroll on the site is not.
- Disable it under `prefers-reduced-motion`. A long smooth scroll is exactly the kind of large-area movement that triggers discomfort, so the reduced-motion path jumps directly instead.
- Do not override the scroll speed or easing of the reader's own wheel, trackpad, or touch gesture. Momentum scrolling is tuned per platform and per input device, and replacing it makes the page feel heavier or slippery in a way people notice immediately even when they cannot name it.

### Anchor Offset Under a Sticky Header

A page with a sticky header needs `scroll-margin-top` on its anchor targets, set to the header's height. Without it, every in-page link lands with the heading hidden behind the header, which reads as a broken link even though the scroll worked. Use `scroll-padding-top` on the scroll container when the same offset should apply to every target inside it.

## Scroll Snap

Scroll snap suits content that is genuinely made of discrete units: a horizontal card carousel, a media gallery, a step-by-step sequence. It does not suit ordinary page sections, where it takes control away from a reader who only wanted to move a little.

- Use `scroll-snap-type` with the `proximity` value when snapping should assist, and `mandatory` only when every position between units is genuinely invalid. Mandatory snapping on tall content can trap a reader who cannot reach a position between two snap points.
- Ensure every snap unit fits its container. A snap unit taller than the viewport combined with mandatory snapping makes part of the content unreachable.
- Keep keyboard and assistive-technology scrolling working through the snapping container.

## Sticky and Pinned Sections

- Prefer native `position: sticky` over a scroll-listener that toggles `fixed` positioning. It is smoother, cheaper, and does not desynchronize on fast scrolling.
- Sticky elements need a clear reason to stay: a header holding navigation, a table header holding column meaning, a summary that stays relevant while the detail scrolls. A decorative element that follows the reader is noise.
- Keep sticky chrome compact. Every pixel that stays fixed is a pixel of content permanently removed from a small screen.
- When a section pins and its content advances with scroll, give the reader a visible way to tell how far through the pinned sequence they are, and make sure the sequence can be skipped or exited. A pin that traps the reader with no visible progress reads as a broken page.

## Scroll-Triggered Reveals

- Reveal content once, on first entry, then leave it alone. Content that re-animates every time it scrolls back into view turns the page into a flickering strip.
- Use `IntersectionObserver` rather than a scroll event listener. It fires only at the relevant moment instead of on every frame of every scroll.
- Keep the content present and readable before scripts run, then enhance. A reveal built as `opacity: 0` in the base stylesheet leaves an entirely blank page for anyone whose script fails, and leaves the content invisible to a reader who simply loaded the page mid-scroll.
- Stagger a group by a small, consistent interval, roughly 40ms to 80ms per item, and cap the total. A twelve-item grid staggered at 150ms each makes the last item arrive nearly two seconds after the reader is already looking at it.
- Respect `prefers-reduced-motion` by showing the content in its final state with no entrance animation.

## Scroll Performance

- Animate `transform` and `opacity` only. Anything that triggers layout during scroll produces stutter that no amount of easing hides.
- Mark a scroll listener as passive when it does not call `preventDefault`, so the browser is not forced to wait on it before scrolling.
- Never run layout-reading work such as measuring an element's position inside a scroll or frame handler without batching it. Reading a measured value and then writing a style in the same handler forces synchronous layout on every frame.
- Test on a mid-range device, not only on a fast desktop. Scroll cost is one of the clearest differences between the two.

## Anti-Patterns

### 1. The Invisible Scrollbar

* **The Bad Habit:** Hiding the scrollbar on a scrollable region, or restyling it down to a nearly invisible sliver, because it looks cleaner.
* **The Problem:** The reader loses the only passive signal that more content exists and where they currently sit within it.
* **Why It Fails:** The scrollbar is a control and a position indicator at once. Removing it trades a real function for a small aesthetic gain.
* **Clean Fix:** Keep a visible thumb with real contrast against its track, wide enough to grab, in both themes.
* **The Waitsec Way:** A scroll region that hides its scrollbar is hiding its own length.

### 2. Hijacking the Reader's Scroll

* **The Bad Habit:** Intercepting wheel or touch input to drive custom scroll speed, custom easing, or a forced section-by-section jump.
* **The Problem:** The page stops responding the way every other page on the device responds.
* **Why It Fails:** Scroll momentum is tuned per platform and per input device, and people feel the mismatch instantly. It also breaks keyboard scrolling, find-in-page, and assistive technology in ways that are rarely caught before shipping.
* **Clean Fix:** Use native smooth behavior for anchor navigation, native snap for genuinely discrete units, and leave ordinary scrolling alone.
* **The Waitsec Way:** The reader owns the scroll. The page reacts to it.

### 3. Reveals That Re-Fire Forever

* **The Bad Habit:** Animating every section in on each entry into the viewport, so scrolling up and down replays the animation endlessly.
* **The Problem:** Content that was already read keeps re-announcing itself, and the page never settles.
* **Why It Fails:** An entrance animation is a one-time introduction. Repeating it turns a signal into ambient noise and makes re-reading actively harder.
* **Clean Fix:** Reveal once on first entry and stop observing that element afterwards.
* **The Waitsec Way:** Content introduces itself once, then gets out of the way.

## Scroll Checklist

- [ ] If the scrollbar is restyled, does it use the standard properties as a base, stay grabbable, and hold real contrast in both themes?
- [ ] Is the scrollbar visible on every scrollable region, with a stable gutter where content can grow?
- [ ] Is smooth scrolling native, scoped to where it helps, and disabled under reduced motion?
- [ ] Do anchor targets carry a `scroll-margin-top` matching the sticky header's height?
- [ ] Is scroll snap used only for genuinely discrete units, with every unit reachable?
- [ ] Do sticky elements have a real reason to stay, and stay compact?
- [ ] Do scroll reveals fire once, use `IntersectionObserver`, and leave content readable before scripts run?
- [ ] Is every scroll-linked animation limited to `transform` and `opacity`, with passive listeners and no per-frame layout reads?
- [ ] Was scroll behavior checked on a mid-range device and with a keyboard, not only on a fast desktop with a mouse?
