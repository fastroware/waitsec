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

## Decision Matrix: When to Ask vs When to Default

| Situation | Action | Rationale |
| :--- | :--- | :--- |
| Missing storage location, file size limit, or format | **ASK** | Materially changes packages, disk, and schema. |
| Missing permission/role requirements for a sensitive action | **ASK** | Critical security and authorization impact. |
| Multiple valid architectures (e.g. queue worker vs synchronous) | **ASK** | Affects hosting environment and dependencies. |
| Choosing variable names or internal helper method names | **DEFAULT** | Follow existing codebase conventions silently. |
| Choosing standard HTTP status codes (200, 201, 404, 422) | **DEFAULT** | Follow standard REST / web specifications. |
| Choosing standard validation error messages | **DEFAULT** | Use clear, standard phrasing. |

---

## How to Ask Effectively

When asking questions:
1. **Limit to 1 to 3 questions maximum.** Never send a wall of text.
2. **Provide concrete choices (A / B).** Give clear recommendations (e.g. *"Option A: Local storage (simpler for now) vs Option B: S3 bucket"*).
3. **State the trade-off briefly.** Explain in one sentence why the choice matters.
4. **Wait for the answer.** Do not generate speculative files while waiting.

---

## Checklist

Before writing code for any new feature, verify:
- [ ] Are all critical requirements and constraints known?
- [ ] Did I avoid inventing product or business logic out of thin air?
- [ ] If questions are needed, are they capped at 1-3 with clear options?
- [ ] Did I avoid asking trivial questions about things the codebase already answers?
