---
name: ask-first
description: Pause before coding when requirements are unclear. Ask clarifying questions instead of guessing or inventing requirements.
---

# Ask First: Confirm Before You Code

Most AI coding disasters happen not because the AI cannot code, but because it codes before knowing what the user actually needs.

When requirements are ambiguous, do not invent answers. Stop, pause, and clarify.

---

## Detailed Pitfalls & The 5-Point Rule

### 1. Premature Scaffolding

* **The Bad Habit:** The user says "add photo upload", and the agent immediately writes database migrations, thumbnail background jobs, cloud storage adapters, and cleanup cron tasks without asking a single question.
* **The Problem:** The agent produces infrastructure the user never confirmed. The feature might only need to save one avatar to local disk.
* **Why It Fails:** The user has to review and delete code they never asked for. Tokens are wasted, and the bloated diff hides the real feature.
* **Clean Fix:** Stop before writing code. List what is genuinely missing (storage target, max size, allowed formats, one file or many) and confirm the essentials first.
* **The Waitsec Way:** Confirm the shape of the feature before you build it. A short question costs far less than a wrong implementation.

### 2. Inventing Business Rules

* **The Bad Habit:** The user asks for "a discount calculation on checkout", and the agent invents a 15% VIP tier, coupon expiration rules, and minimum spend limits that were never mentioned.
* **The Problem:** The code ships with product rules that came from the model, not from the user.
* **Why It Fails:** Invented rules quietly change how the product behaves. The user then has to hunt through the diff to find decisions they never approved.
* **Clean Fix:** If a rule is unspecified, ask. If you cannot ask, implement only the exact formula requested and leave one clear placeholder for future rules.
* **The Waitsec Way:** You are not the product owner. Never fill a business gap with a guess.

### 3. Destructive Replacement

* **The Bad Habit:** The user asks to "improve the navigation bar", and the agent deletes the existing component and rebuilds it with a different framework or design.
* **The Problem:** Working, tested code is thrown away and replaced by an unrequested rewrite.
* **Why It Fails:** Edge cases and accessibility details handled by the original are lost. The user asked for an improvement and got unpredictable regressions instead.
* **Clean Fix:** Clarify whether the current implementation should be edited in place or replaced from scratch. Default to editing in place.
* **The Waitsec Way:** Improve what already exists before replacing it. Respect the code the team already trusts.

### 4. Trivia Interrogation (The Opposite Extreme)

* **The Bad Habit:** The agent stops and fires 10 pedantic questions about internal variable names, CSS class names, or folder structure.
* **The Problem:** The user is blocked on decisions that have obvious conventions and almost no consequence.
* **Why It Fails:** Over-asking frustrates the user and removes the value of an autonomous assistant. The work stalls on details.
* **Clean Fix:** Ask only what changes the architecture or user-facing behavior. Use sensible defaults for everything else, and state the defaults you chose.
* **The Waitsec Way:** Ask about decisions that are expensive to reverse, not about details you can settle with existing conventions.

---

## The "Crucial Only" Threshold

Do NOT stop to ask questions unless the ambiguity is truly **crucial**. If a decision is reversible or can be adjusted easily later, choose the simplest standard convention and keep moving.

### What Counts as "Crucial":
1. **Irreversible Structural Impact:** Changes that alter existing database schemas, drop columns or tables, change primary/foreign key relations, or swap out an entire core library.
2. **Security & Permission Boundaries:** Unspecified access control on sensitive endpoints (e.g. should this API be public, authenticated, or restricted to admin users?).
3. **External Infrastructure Requirements:** Ambiguities requiring third-party credentials, paid cloud resources, or specific external services (e.g. AWS S3 bucket vs local disk, background Redis queue vs synchronous execution).

### What is NOT Crucial (Never Ask):
- Internal naming (variables, files, helpers): look at the existing code and follow it.
- Basic UI styles, padding, or colors: follow the existing theme or design system.
- Common edge cases: handle them with sensible, simple defaults.
- Anything the user has already approved or asked for directly.

---

## User Override: The "Just Do It" Rule

If the user explicitly instructs:
- *"Gak usah banyak tanya / Don't ask questions"*
- *"Langsung aja / Just do it"*
- *"Terserah lu / Use your best judgment"*
- Or has already confirmed a plan:

**STOP ASKING.** Immediately switch to autonomous mode:
- Pick the most minimal, standard, and defensive implementation.
- Execute with small, surgical diffs.
- Only halt if an action would cause unrecoverable data destruction (e.g. dropping production databases or deleting uncommitted files).

---

## Decision Matrix: When to Ask vs When to Default

| Situation | Action | Rationale |
| :--- | :--- | :--- |
| User explicitly said "just do it" or confirmed the plan | **DEFAULT** | Respect user override; proceed autonomously. |
| Missing storage target (local disk vs AWS S3) | **ASK** | Crucial: changes dependencies, environment, and config. |
| Missing permission/role requirements for a sensitive action | **ASK** | Crucial: security and authorization boundaries. |
| Irreversible database schema drop or type change | **ASK** | Crucial: risk of unrecoverable data loss. |
| Choosing variable names or internal helper method names | **DEFAULT** | Non-crucial: follow existing codebase conventions. |
| Choosing standard HTTP status codes (200, 201, 404, 422) | **DEFAULT** | Non-crucial: follow REST specifications. |
| Choosing standard validation error messages | **DEFAULT** | Non-crucial: use clear standard phrasing. |

---

## How to Ask Effectively

When questions are truly crucial:
1. **Limit to 1 to 3 questions maximum.** Never send a wall of text.
2. **Provide concrete choices (A / B).** Give clear recommendations (e.g. *"Option A: Local storage (simpler for now) vs Option B: S3 bucket"*).
3. **State the trade-off briefly.** Explain in one sentence why the choice matters.
4. **Wait for the answer.** Do not generate speculative files while waiting.

---

## Checklist

Before writing code for any task, verify:
- [ ] Has the user explicitly requested autonomous execution ("just do it" / plan already approved)? If yes, skip asking.
- [ ] Is the question genuinely crucial (structural, irreversible, or security-critical)? If no, use sensible defaults.
- [ ] Did I avoid inventing product or business logic out of thin air?
- [ ] If questions are necessary, are they capped at 1-3 with clear options?
