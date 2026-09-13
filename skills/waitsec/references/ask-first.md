# Ask First: Resolve High-Impact Ambiguity

Ask only when a missing answer can change security, data safety, external services, or a decision that is expensive to reverse. Use the project and sensible defaults for routine details.

## Use When

- Permission or ownership rules are missing for protected data.
- A destructive schema or data change is unclear.
- The task needs credentials, a paid service, or a specific external system.
- Two plausible project targets would produce meaningfully different behavior.

## Do Not Use When

- Existing code, configuration, or conventions already answer the question.
- The choice is internal, low impact, and easy to change later.
- The user already approved a plan or asked you to use your judgment.
- You are choosing names, formatting, common status codes, or routine UI spacing.

## Anti-Patterns

### 1. Inventing Product or Permission Rules

- **The Bad Habit:** The agent invents a discount policy or decides that a sensitive endpoint is public.
- **The Problem:** The implementation contains behavior the user did not request or approve.
- **Why It Fails:** Made-up rules can change prices, access, or user expectations without warning.
- **Clean Fix:** Ask one direct question when no safe project default exists. Otherwise, use the narrowest safe behavior supported by the codebase.
- **The Waitsec Way:** The agent implements product rules. It does not create them.

### 2. Building Before the Shape Is Clear

- **The Bad Habit:** A request for photo upload becomes migrations, cloud storage, queues, thumbnails, and cleanup jobs.
- **The Problem:** The diff grows around assumptions instead of the confirmed need.
- **Why It Fails:** The user must review and remove work that may not belong in the feature.
- **Clean Fix:** Confirm only choices that change the implementation in a large way, such as local storage versus an external service.
- **The Waitsec Way:** Confirm the boundary, then build only what fits inside it.

### 3. Replacing Working Code Without Need

- **The Bad Habit:** The agent replaces an existing component or framework when the request only asks for an improvement.
- **The Problem:** Tested behavior and project conventions disappear in an unrequested rewrite.
- **Why It Fails:** The replacement can lose edge cases and create a much larger review.
- **Clean Fix:** Edit in place unless replacement is requested or the existing structure cannot support the change safely.
- **The Waitsec Way:** Improve working code before considering a rewrite.

### 4. Asking About Routine Details

- **The Bad Habit:** The agent blocks work with questions about variable names, class order, colors, or folder placement.
- **The Problem:** The user must decide details the repository already settles.
- **Why It Fails:** Excess questions remove the value of an agent that can inspect and follow conventions.
- **Clean Fix:** Read nearby code, pick the established pattern, and state a notable default only when it helps review.
- **The Waitsec Way:** Ask about costly decisions, not routine implementation choices.

## Decision Guide

Ask when all three are true:

1. The answer is not available in the prompt or project.
2. The choice has a real effect on security, data, external setup, or hard-to-reverse behavior.
3. There is no safe and reversible default.

When a question is needed:

- Ask the smallest useful set of questions, usually one to three.
- Give concrete options and a short recommendation.
- Explain the trade-off in one sentence.
- Wait before creating speculative files.

If the user says "just do it," choose the safest reversible option and continue. If no safe option exists, explain the blocker instead of inventing behavior.

## Quick Example

- **Bad:** "Which name should I use for the helper, and should it go above or below this method?"
- **Good:** Read the file, follow its naming and ordering, then make the change.

## Checklist

- [ ] Is the missing answer absent from both the prompt and the project?
- [ ] Would the answer change a high-impact decision?
- [ ] If I asked, did I keep it short and offer concrete choices?
