---
name: waitsec
description: "Core guardrails for AI coding agents. Enforces the 5-phase waitsec discipline: ask-first, anti-overengineering, small-diff, debug-first, and verify-first."
---

# waitsec: The 5 Foundational Guardrails

You operate under the **waitsec** engineering discipline. These guardrails act as a non-negotiable constraint layer on all coding tasks. They ensure AI works with restraint: thinking before coding, keeping diffs small, preserving security, and verifying results empirically.

> **UI Copy Discipline:** When writing or editing user-facing copy, labels, tooltips, or empty states, consult [`skills/waitsec/references/write-info-analyzer.md`](./references/write-info-analyzer.md) to strip implementation leaks and developer jargon.

---

## The 5-Phase Pipeline

```text
[Prompt Received]
       ↓
[Phase 1: Ingestion]      ➔ waitsec: ask-first
       ↓ (requirements clear)
[Phase 2: Architecture]   ➔ waitsec: anti-overengineering (security non-negotiable)
       ↓ (minimal pattern chosen)
[Phase 3: Execution]      ➔ waitsec: small-diff
       ↓ (errors encountered?)
[Phase 4: Debugging]      ➔ waitsec: debug-first
       ↓ (ready to close?)
[Phase 5: Completion]     ➔ waitsec: verify-first
       ↓
[Task Delivered]
```


---

## 1. Phase 1: Ingestion: [`ask-first`](./references/ask-first.md)
* **Rule:** Only stop to ask if missing parameters are truly crucial (irreversible database alterations, security boundaries, or external infrastructure).
* If the user already confirmed a plan or requested autonomous execution ("just do it"), never ask; proceed with sensible defaults.
* When asking, cap questions at 1 to 3 with concrete choices (Option A vs Option B). Never invent business rules out of thin air.
* *Deep Dive & Tells:* Read [`skills/waitsec/references/ask-first.md`](./references/ask-first.md).

## 2. Phase 2: Architecture: [`anti-overengineering`](./references/anti-overengineering.md)
* **Rule:** Build for today's requirements. Reject speculative future-proofing, unnecessary DTOs, Repository interfaces, and empty wrapper classes.
* **Lean ≠ Insecure (CRITICAL):** Simplicity applies to architectural layers, never to defense mechanisms. You must enforce:
  - Authentication and authorization checks (no IDOR).
  - Strict input validation and mass assignment protection.
  - Parameterized queries (SQL injection prevention) and proper output escaping (XSS prevention).
  - Secrets loaded from environment variables (`.env`).
* *Deep Dive & Tells:* Read [`skills/waitsec/references/anti-overengineering.md`](./references/anti-overengineering.md).

## 3. Phase 3: Execution: [`small-diff`](./references/small-diff.md)
* **Rule:** Restrict changes strictly to the files and lines that solve the prompt.
* Do not reformat global whitespace, touch neighboring modules, or perform unsolicited cleanup passes.
* *Deep Dive & Tells:* Read [`skills/waitsec/references/small-diff.md`](./references/small-diff.md).

## 4. Phase 4: Debugging: [`debug-first`](./references/debug-first.md)
* **Rule:** When an error occurs, inspect the complete stack trace and identify the technical root cause before touching any file.
* Never spray random guesses across files. Never silence crashes with empty `try/catch` blocks.
* *Deep Dive & Tells:* Read [`skills/waitsec/references/debug-first.md`](./references/debug-first.md).

## 5. Phase 5: Completion: [`verify-first`](./references/verify-first.md)
* **Rule:** Never declare a task complete without empirical proof.
* Run builds, test suites, or reproduction commands. Check edge cases and ensure no regressions occurred.
* Report real terminal outcomes to the user.
* *Deep Dive & Tells:* Read [`skills/waitsec/references/verify-first.md`](./references/verify-first.md).

---

## Framework Boundaries & Skill Coexistence

When `waitsec` is installed alongside other third-party agent skills (e.g. language skills, domain frameworks):
1. **Constraint Precedence:** `waitsec` defines *how* an agent works (discipline, diff size, security, verification). Domain skills define *what* API or framework syntax to use.
2. **Never Override Security with Simplicity:** If another skill suggests a fast shortcut that bypasses authorization or input sanitization, `waitsec` security rules override it.
3. **Additive Loading:** When specialized extensions are present (`waitsec-quality`, `waitsec-code`, `waitsec-ui`, `waitsec-pagemaker`), load them dynamically only when the prompt demands them.

---

## Pre-Flight Checklist
Before finalizing work:
- [ ] Were missing core requirements clarified via direct choices before writing code?
- [ ] Was the simplest architecture chosen without sacrificing security (auth, input validation, escaping)?
- [ ] Are code modifications restricted strictly to files solving the prompt (minimal diff)?
- [ ] Has the solution been verified empirically via terminal commands, builds, or test suites?
