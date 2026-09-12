---
name: verify-first
description: Never declare a task complete without proving it works. Run tests, verify builds, and check for regressions.
---

# Verify First: Proof Over Assumption

Never say "I'm done" or "The bug is fixed" without concrete technical proof. Always verify before declaring completion.

**Core Principle:** *An unverified change is an incomplete change.* If you cannot prove that the code compiles, runs, and satisfies the requirement, you are not done.

---

## Detailed Pitfalls & The 5-Point Rule

### 1. The Premature Victory Lap

* **The Bad Habit:** The agent modifies code, never runs a test or build command, and immediately announces: *"I have fixed the issue and implemented all requirements!"*
* **The Problem:** The claim of success has no command output behind it.
* **Why It Fails:** The AI relies on statistical confidence instead of empirical execution. In reality, a missing semicolon, wrong import, or syntax error often lurks on the first line.
* **Clean Fix:** Run the relevant test suite, build command, or reproduction script before writing your closing message.
* **The Waitsec Way:** Done means proven. Confidence is not evidence.

### 2. Regression Blindness

* **The Bad Habit:** Fixing a bug in component A, but accidentally breaking components B and C because shared state, schema, or props were modified without running the full test suite.
* **The Problem:** The targeted fix silently damages neighboring features.
* **Why It Fails:** The AI focuses narrowly on the prompt and ignores downstream dependencies, so the team discovers the breakage in production.
* **Clean Fix:** If the project has automated tests (`npm test`, `pytest`, `php artisan test`, `go test`), run them to ensure no regressions were introduced.
* **The Waitsec Way:** A local fix is only safe when the whole system still works. Check the neighbors.

### 3. Phantom Verification

* **The Bad Habit:** The agent claims *"I tested the login endpoint and it returned status 200"* when no terminal command, curl request, or test runner was actually executed in the environment.
* **The Problem:** The stated result is invented, not observed.
* **Why It Fails:** Generative models hallucinate successful outcomes based on expectation. The user trusts a report that never happened.
* **Clean Fix:** Real verification produces real output. If execution tools are available, run the command and inspect the actual stdout/stderr. If tools are unavailable, instruct the user on the exact command to run.
* **The Waitsec Way:** Report only what you actually ran. If you did not run it, say so.

### 4. Happy-Path Myopia

* **The Bad Habit:** Testing only the success state (e.g. valid login) while completely ignoring error states (wrong password, empty inputs, network failure, unauthorized access).
* **The Problem:** The feature looks complete until a real user triggers a failure case.
* **Why It Fails:** AI naturally gravitates toward the ideal flow, so the failure branches ship untested and break at the worst time.
* **Clean Fix:** Verify both the happy path and at least one failure/edge case before declaring completion.
* **The Waitsec Way:** The edges are where software breaks. Verify the failure path, not just the demo path.

---

## The 4-Step Verification Sequence

Follow this sequence before declaring any task finished:

1. **Syntax & Build Check:** Ensure the code compiles, lints, or builds with zero errors (`npm run build`, `tsc --noEmit`, etc.).
2. **Behavioral Test:** Run the specific automated test or reproduction script that targets the changed functionality.
3. **Regression Check:** Run the wider test suite (if available) to guarantee neighboring features still work.
4. **Present Concrete Evidence:** Summarize what was tested and include the actual pass/fail status in your final response.

---

## Decision Matrix: What to Verify

| Task Type | Minimum Verification Required |
| :--- | :--- |
| **Bug Fix** | Re-run the reproduction command; prove the error no longer occurs. |
| **New Feature** | Run unit/feature tests; test both valid input and invalid/empty input. |
| **Refactoring** | Run existing test suite to ensure 100% backward compatibility. |
| **Documentation / Copy** | Verify rendered markdown formatting, links, and code block syntax. |

---

## Checklist

Before declaring a task complete:
- [ ] Did I run the build, linter, or type checker to ensure no syntax/compilation errors?
- [ ] Did I run the relevant automated test or verification command?
- [ ] Did I verify that existing neighboring functionality was not broken?
- [ ] Did I check at least one error or edge-case state?
- [ ] Did I report the real verification outcome to the user instead of assuming success?
