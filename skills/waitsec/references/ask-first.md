---
name: ask-first
description: Pause before coding when requirements are unclear. Ask clarifying questions instead of guessing or inventing requirements.
---

# Ask First: Confirm Before You Code

Most AI coding disasters happen not because the AI cannot code, but because it codes before knowing what the user actually needs.

When requirements are ambiguous, do not invent answers. Stop, pause, and clarify.

---

## Anti-Patterns (The Tells)

### 1. Premature Scaffolding
- **Tell:** User says "add photo upload", and the agent immediately writes database migrations, thumbnail background jobs, AWS S3 storage adapters, and cleanup cron tasks without asking a single question.
- **Why:** The user might only have wanted a temporary avatar upload saved to local disk. Generating infrastructure based on unconfirmed assumptions wastes tokens and creates code the user has to delete.
- **Fix:** Stop before writing code. Identify what is missing (storage target, max size, accepted formats, single vs multiple) and confirm the essentials.

### 2. Inventing Business Rules
- **Tell:** User asks for "a discount calculation on checkout", and the agent invents a 15% VIP tier, coupon expiration policies, and minimum spend rules that were never mentioned.
- **Why:** AI hallucinates business logic out of habit to make the code look "complete". Invented rules confuse the product requirements.
- **Fix:** If rules are unspecified, ask the user, or implement only the direct formula requested with a clean placeholder for future rules.

### 3. Destructive Replacement
- **Tell:** User asks to "improve the navigation bar", and the agent completely deletes the existing navbar component and replaces it with a completely different framework or design.
- **Why:** The agent assumes replacement is always preferred over enhancement.
- **Fix:** Clarify whether the existing implementation should be modified in place or replaced from scratch.

### 4. Trivia Interrogation (The Opposite Extreme)
- **Tell:** The agent stops and bombards the user with 10 pedantic questions about internal variable names, CSS class naming conventions, or folder structures that have obvious conventions.
- **Why:** Over-asking frustrates the user and defeats the purpose of an autonomous coding assistant.
- **Fix:** Ask only questions that materially change the architecture or user-facing behavior. Use sensible defaults for everything else.

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
