---
name: debug-first
description: Inspect error logs, stack traces, and root causes before guessing or modifying code.
---

# Debug First: Inspect Evidence Before Touching Code

Never guess the cause of an error when real technical evidence is available. Do not spray random code changes across multiple files hoping the bug disappears.

---

## Detailed Pitfalls & The 5-Point Rule

### 1. The Shotgun Guess

* **The Bad Habit:** A test fails or a crash occurs, and the agent immediately edits three different files, tweaking logic in random places without identifying why execution failed.
* **The Problem:** Changes land in files that may have nothing to do with the failure, and the original bug remains.
* **Why It Fails:** The AI acts on statistical intuition rather than empirical debugging, often introducing new bugs while failing to fix the original one.
* **Clean Fix:** Never touch a single line of code until you have identified the exact file, line number, and runtime state that triggered the failure.
* **The Waitsec Way:** Read the evidence first. A fix without a cause is just another guess.

### 2. Silent Error Swallowing

* **The Bad Habit:** When an exception is thrown, the agent wraps the crashing block in a generic `try/catch` and leaves the catch block empty, or returns an empty fallback (`return null;`) just to stop the crash from bubbling up.
* **The Problem:** The crash disappears, but the broken state that caused it stays in place.
* **Why It Fails:** Silencing errors masks underlying data corruption and turns a loud, easily fixable bug into a silent, catastrophic production failure.
* **Clean Fix:** Fix the root cause so the operation succeeds safely. If catching an exception is truly necessary, log the error with full diagnostic context and handle the failure gracefully.
* **The Waitsec Way:** Never hide an error to make the output look clean. Silence is not a fix.

### 3. Surface Symptom Patching

* **The Bad Habit:** Seeing `TypeError: Cannot read property 'id' of undefined`, the agent adds optional chaining (`user?.id`) or a null check (`if (!user) return;`), without checking *why* `user` was undefined in the first place.
* **The Problem:** The symptom is masked and the missing value flows deeper into the system.
* **Why It Fails:** Masking a missing variable upstream causes corrupted state downstream, where the real damage is harder to trace.
* **Clean Fix:** Trace the data flow backwards. Find where `user` was loaded, why it failed to resolve, and fix the source query or relationship.
* **The Waitsec Way:** Fix the source, not the symptom. Chase the cause one step up the chain.

### 4. Hallucinating Missing Dependencies

* **The Bad Habit:** An import fails or a class is not found (often due to a typo or incorrect namespace), and the agent immediately attempts to run `npm install <random-package>` or `composer require`.
* **The Problem:** The project gains a new dependency to solve what was really a typo or a path mistake.
* **Why It Fails:** The agent assumes missing functionality means missing packages, cluttering the project with unneeded external dependencies.
* **Clean Fix:** Check for typos, path mismatches, autoloading issues, or missing exports first.
* **The Waitsec Way:** Confirm the cause before adding weight. Most "missing" things are already there, just named wrong.

---

## The 5-Step Root Cause Sequence

Follow this disciplined sequence whenever debugging:

1. **Read the Full Stack Trace:** Locate the exact file path and line number where the execution failed. Do not stop at the first line of the error message.
2. **Inspect the Execution Context:** Read the failing function, check the inputs passed to it, and determine the exact condition that caused the crash.
3. **Reproduce or Verify the Root Cause:** Confirm why the condition occurred (e.g. database query returned empty array, missing environment variable, incorrect type casting).
4. **Apply One Targeted Fix:** Make the smallest possible fix that resolves the root cause.
5. **Verify the Fix:** Run the test suite, command, or request again to verify that the error is resolved and no regressions were introduced.

---

## Checklist

Before declaring a bug fixed:
- [ ] Did I locate the exact line and file of the failure from the stack trace?
- [ ] Did I fix the root cause rather than merely masking the symptom?
- [ ] Did I avoid wrapping the code in silent, empty try/catch blocks?
- [ ] Did I verify the fix by re-running the failing test or reproduction command?
