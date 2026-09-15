# Glassmorphism

Use this reference when the user explicitly asks for a glass, frosted glass, liquid glass, or backdrop blur surface, or when the stated visual thesis in [`design-direction.md`](./design-direction.md) calls for it with a reason.

Glassmorphism is a surface treatment, not a page style. It earns a place on specific panels over a colorful or detailed background. It is not a substitute for hierarchy, and it is not the default for every card, sidebar, and button just because it looks modern.

## Decision Gate

Before applying the effect, answer:

1. Did the user ask for it, or does the stated visual thesis call for it?
2. Is there a colorful, textured, or layered background behind the surface? Glass over a flat solid color reads as a plain tinted box, not glass.
3. Which specific surfaces need it? Naming them keeps the effect rare and intentional instead of automatic.
4. Can body text and controls on top of it stay at a safe contrast ratio?
5. Does the project's design system already define a glass token? Reuse it instead of writing a new recipe.

If the background is flat, uniform, or already low contrast, skip the effect or add a gradient or image layer first.

## Core Recipe

Four properties carry the effect. Keep values inside these ranges and adjust by theme.

```css
.glass-surface {
  background: rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.16);
  border-radius: var(--radius-lg, 16px);
}
```

| Property | Light theme | Dark theme |
| :--- | :--- | :--- |
| Background alpha | 0.08 to 0.18 white | 0.08 to 0.2 white, or 0.2 to 0.35 near black |
| Blur radius | 8px to 16px | 8px to 16px |
| Border alpha | 0.15 to 0.3 white | 0.08 to 0.16 white |
| Shadow | soft, low opacity, offset downward | soft, higher opacity to read on dark |

Always pair `backdrop-filter` with the `-webkit-` prefix for Safari. Round the same radius the rest of the system uses. Do not invent a new radius scale just for glass panels.

## Where It Reads Well

- A hero panel, pricing card, or auth card placed over a photo, gradient mesh, or animated background.
- A sticky navigation bar or header floating over scrolling page content.
- A modal, popover, or command palette layered above the rest of the interface.
- A small accent panel inside an otherwise flat, restrained system, used once with a clear reason.

## Where It Fights the Content

- Dense data tables, spreadsheets, or long lists. Blur cost and busy backgrounds behind every row hurt both readability and performance.
- Long-form reading text. Body copy needs a stable, high-contrast surface, not a semi-transparent one.
- The entire page background or every card on a page. When everything is glass, nothing reads as glass, and the page loses hierarchy.
- Small interactive controls with fine text, where a blurred, shifting background under the label makes the target harder to read at a glance.

## Accessibility and Fallback

- Keep text over glass at or above 4.5:1 contrast against the busiest part of the background behind it, not just the average color. Add a slightly stronger background alpha before reaching for a text shadow.
- Respect `prefers-reduced-transparency` by swapping in a solid, near-opaque surface when the user's system requests it.
- Wrap the effect so unsupported browsers still get a readable surface:

```css
.glass-surface {
  background: rgba(20, 20, 24, 0.92);
}

@supports (backdrop-filter: blur(1px)) or (-webkit-backdrop-filter: blur(1px)) {
  .glass-surface {
    background: rgba(255, 255, 255, 0.12);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
  }
}
```

- Never place required form fields, destructive actions, or safety-critical copy on a glass surface without confirming the fallback stays readable too.

## Performance

- `backdrop-filter` is GPU-costly. Limit the number of simultaneously visible blurred layers, especially on mobile.
- Avoid animating the blur radius itself. Animate transform or opacity on the surface instead, and let the blur stay fixed.
- Avoid stacking glass panels directly on top of other glass panels. Depth comes from one clear layer, not several compounding ones.
- On a long scrolling list, apply the effect to a fixed or sticky element only, not to every row that scrolls past the viewport.

## Anti-Patterns

### 1. Glass Over a Flat Background

* **The Bad Habit:** Applying the glass recipe to a card sitting on a plain solid-color page.
* **The Problem:** With nothing behind the blur to diffuse, the panel becomes a plain tinted box with a border.
* **Why It Fails:** The effect depends on visible depth behind it. Without that, the extra properties add cost with no visual payoff.
* **Clean Fix:** Add a gradient, image, or pattern layer behind the panel first, or skip the effect and use a normal surface.
* **The Waitsec Way:** Glass needs something to refract. Give it one before reaching for the recipe.

### 2. Every Surface Turned to Glass

* **The Bad Habit:** Applying the same blur and transparency to the nav, every card, every button, and the footer.
* **The Problem:** The page loses the contrast between foreground and background that made the first glass panel readable.
* **Why It Fails:** Depth is relative. A page that is entirely translucent has no baseline left to appear to float above.
* **Clean Fix:** Choose the few surfaces that benefit, usually one to three per screen, and keep the rest of the system flat or solid.
* **The Waitsec Way:** Glass is an accent technique, applied with restraint like any other effect.

### 3. No Fallback or Contrast Check

* **The Bad Habit:** Shipping the blur and transparency without checking rendered contrast or unsupported browsers.
* **The Problem:** Text sits at unreadable contrast over a busy background, and older browsers show a fully transparent, illegible panel.
* **Why It Fails:** The effect becomes an accessibility failure instead of a polish detail.
* **Clean Fix:** Check contrast against the busiest part of the background, raise the alpha value if needed, and add the `@supports` fallback.
* **The Waitsec Way:** An effect that breaks readability is not a finished effect.

## Glassmorphism Checklist

- [ ] Did the user ask for glass, or does the stated visual thesis call for it with a reason?
- [ ] Is there a colorful, textured, or gradient layer behind every glass surface?
- [ ] Are blur, background alpha, and border alpha inside the ranges above, and consistent with the theme?
- [ ] Is the effect limited to a small, named set of surfaces instead of the whole page?
- [ ] Does text on glass hold readable contrast against the busiest part of the background behind it?
- [ ] Is there a solid fallback for browsers without `backdrop-filter` support and for `prefers-reduced-transparency`?
- [ ] Are blurred layers limited in number, with no blur-radius animation and no glass stacked on glass?
- [ ] Does the project already define a glass token this page should reuse instead of a new recipe?
