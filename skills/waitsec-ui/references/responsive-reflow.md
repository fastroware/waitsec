# Responsive Reflow

Use this reference when a layout has to hold up across the full width range, or when a component is being checked or repaired at narrow widths.

The principle underneath everything here: a narrow layout is a different layout, not the wide one shrunk. Reflowing means re-stacking, resizing, and sometimes reordering with intent. Every failure below is a layout that only changed size when it needed to change shape.

## Breakpoints

- Put a breakpoint where the content stops working, found by narrowing the viewport and watching where it breaks. Do not derive breakpoints from a list of device widths, which change every year and describe hardware rather than this layout.
- Reuse the project's existing breakpoints when they hold. Add one only where this content genuinely needs a change the existing set does not provide.
- Design the narrow state deliberately rather than patching it at the end of the stylesheet. A trailing override fixes the symptom that got reported and leaves the next one, because the base styles are still tuned for a wide canvas.
- Cover the middle of the range, not only a phone width and a wide desktop. Two states leave tablets and small laptops inheriting whichever neighbor is closest: a single column stretched far too wide, or a multi-column grid crammed into a fraction of its intended space. A typical reflow is three states, not two: one column, then two columns once a single stack gets too wide, then the full grid only when it genuinely fits.
- Verify by dragging through the whole width range, not by checking two sample widths.

## Scale

- Give the narrow layout its own size register. Section padding, gaps, and hero heights tuned for a wide canvas become oversized slabs and empty deserts on a phone.
- Let type scale with the viewport, through `clamp()` or a smaller step at the breakpoint. Type fixed in pixels is type sized for exactly one screen.
- Avoid `100vh` for section heights. It includes browser chrome on mobile, so the section overflows the visible area, and a full-viewport section pushes everything else below the fold on a small screen. Let sections size to their content, and use `dvh` where a genuine full-height section is intended.
- Keep touch targets at their minimum size while everything else shrinks. Scale is the one place where the narrow layout gets smaller in most respects and not in this one.

## Grids and Stacking

- Collapse multi-column grids to a single column at the breakpoint. A grid that keeps its columns on a narrow screen gives each one a sliver, wraps text awkwardly, and eventually collides.
- Size tracks with `minmax()`, `auto-fit`, or `auto-fill` rather than fixed pixel tracks, so columns shrink and wrap with the content.
- Let flex and grid children shrink with their parent. A child with a fixed width or `min-width` holds its size while the parent narrows and bursts out of it. Grid and flex children often need `min-width: 0` to shrink at all.
- Do not force a twelve-column system onto content that wants one or two columns. The span math starts fighting a grid the reader never sees.
- Preserve the intended reading order when the layout restacks. A visual reorder that scrambles the source order leaves keyboard and screen reader users following a different sequence than the one on screen.

## Overflow

- Page-level horizontal scrolling is always a defect. The offending element is usually off-screen in a wide preview and goes unnoticed until a phone opens the page.
- The usual causes are a wide table, a code block that does not wrap, an image without `max-width: 100%`, a long unbroken string such as a URL, and a fixed-width child. Contain each one locally or let it reflow.
- Use `overflow: hidden` only where cropping is the design intent, as on a thumbnail. Clipping a container because its content does not fit hides information and controls instead of solving the layout.
- Give a wide table its own scroll container, or reflow it into one card per record at narrow widths.

## Touch

- Keep interactive targets at roughly 44 by 44 pixels of touch area, using padding or a larger hit box even when the visible control is smaller.
- Leave a gap between adjacent targets. Two large controls touching each other behave like one, because the finger press area overlaps both.
- Give every hover-only interaction a tap equivalent. There is no hover on a touchscreen, so a menu, reveal, or tooltip that only responds to hover does not exist there.
- Give controls a visible `:active` state so a tap visibly registers.

## Navigation

- Collapse a wide navigation row into a real mobile pattern at the breakpoint, either a compact menu or a bottom bar for the few primary destinations. A desktop row kept as a row crowds, wraps, or spills, and it is the first thing a mobile visitor meets.
- Keep the menu discoverable. A bare icon with no label assumes the reader already knows what it opens, and on a narrow screen it may hold the only route to everything.
- Reserve the space that a fixed bottom bar occupies, with scroll padding and safe-area insets, so the last item in a list or the final button in a form is never hidden underneath it.
- Keep sticky chrome compact. On a small viewport every fixed pixel is a pixel of content permanently removed.

## Anti-Patterns

### 1. Two States and Nothing Between

* **The Bad Habit:** Defining one stacked layout below a breakpoint and one wide grid above it, with nothing in between.
* **The Problem:** Tablet and small-laptop widths inherit whichever neighbor is closest, so they get a stretched stack or a crammed grid.
* **Why It Fails:** A page is a continuous range of widths, not two sample points. The layout reads as designed only where it was checked.
* **Clean Fix:** Add the states the content actually needs across the range, then verify by dragging through it.
* **The Waitsec Way:** The widths nobody checked are the widths that break.

### 2. Shrinking Instead of Reflowing

* **The Bad Habit:** Carrying wide-canvas padding, type sizes, and section heights unchanged into the narrow layout.
* **The Problem:** Everything looks blown up, nothing breathes, and the page scrolls through empty gaps.
* **Why It Fails:** An element sized for a wide canvas dominates a narrow one. Confident at one width becomes overbearing at another.
* **Clean Fix:** Give the narrow layout its own smaller register for type, padding, and gaps, while keeping touch targets at full size.
* **The Waitsec Way:** A narrow layout is designed, not compressed.

### 3. The Overflow Nobody Saw

* **The Bad Habit:** Declaring the layout done from a wide preview, where the offending element sits harmlessly off to the side.
* **The Problem:** A table, image, code block, or fixed-width child pushes the page wider than the viewport on a phone.
* **Why It Fails:** The reader can scroll sideways into emptiness and cannot tell where the page ends.
* **Clean Fix:** Check for horizontal overflow at the narrowest supported width, find the element wider than the viewport, and contain or reflow it.
* **The Waitsec Way:** Sideways scroll on a page is a bug, never a layout.

## Reflow Checklist

- [ ] Are breakpoints placed where the content breaks, not where a device list says?
- [ ] Are there real states across the whole range, so tablet and small-laptop widths are neither a stretched stack nor a crammed grid?
- [ ] Does the narrow layout use its own scale for type, padding, gaps, and section heights?
- [ ] Are section heights free of `100vh`, using content height or `dvh` where a full-height section is intended?
- [ ] Do multi-column grids collapse cleanly instead of colliding, with children able to shrink?
- [ ] Does the restacked order still match the intended reading order?
- [ ] Is there zero page-level horizontal scrolling at the narrowest supported width?
- [ ] Is anything clipped by an `overflow: hidden` that was meant to fix a fit problem?
- [ ] Are touch targets around 44 by 44 pixels, with real gaps between neighbors?
- [ ] Does every hover-only interaction have a tap equivalent and a visible active state?
- [ ] Does navigation reflow into a real mobile pattern, stay discoverable, and never cover content?
- [ ] Was the layout verified by dragging through the range rather than checking two widths?
