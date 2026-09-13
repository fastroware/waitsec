# Verify First: Report Proof, Not Confidence

Before reporting completion, run the narrowest meaningful check that can catch a mistake in the changed behavior. Add broader checks when the affected area and available environment support them.

## Use When

- You changed code, configuration, schemas, build files, or executable examples.
- You fixed a bug or added behavior.
- You are about to say that a task is complete or a failure is fixed.
- The user asks what was tested or how the result was checked.

## Do Not Use When

- You are giving a general explanation with no changed or executable result.
- A check needs unavailable credentials, services, hardware, or tools. Report that limit instead.
- A broad suite adds little value to a low-risk text-only change.

## Anti-Patterns

### 1. Claiming Success Without Running a Check

- **The Bad Habit:** The agent edits code and reports that the issue is fixed without executing anything.
- **The Problem:** The completion claim has no observed result behind it.
- **Why It Fails:** A syntax error, bad import, or missed call site can remain in the first version of a plausible change.
- **Clean Fix:** Run a focused test, build, type check, lint command, or reproduction that matches the change.
- **The Waitsec Way:** A result is reported as proven only after it is observed.

### 2. Reporting a Check That Did Not Run

- **The Bad Habit:** The agent says an endpoint returned `200` or a suite passed without running the command.
- **The Problem:** The report presents an expected outcome as a real outcome.
- **Why It Fails:** The user may ship based on evidence that does not exist.
- **Clean Fix:** Report only commands you ran and results you saw. Mark unavailable checks as not run.
- **The Waitsec Way:** Never invent test results.

### 3. Running Only an Unrelated Broad Check

- **The Bad Habit:** The agent runs a large suite but skips the reproduction or focused test for the changed behavior.
- **The Problem:** A green suite may not exercise the path that was changed.
- **Why It Fails:** Test volume does not prove coverage of the requested result.
- **Clean Fix:** Start with the narrow check that targets the change, then run broader checks when useful.
- **The Waitsec Way:** Relevant proof comes before more proof.

### 4. Checking Only the Success Path

- **The Bad Habit:** A feature with validation or permissions is tested only with valid input and full access.
- **The Problem:** Failure behavior remains unknown.
- **Why It Fails:** Real users also submit empty, invalid, expired, or unauthorized requests.
- **Clean Fix:** Check a relevant failure or edge case when the changed behavior has one.
- **The Waitsec Way:** Test the risk introduced by the change, not a fixed number of scenarios.

## Proportional Verification

| Change | Useful first check | Broader check when useful |
| :--- | :--- | :--- |
| Bug fix | Re-run the reproduction or focused regression test | Nearby module or project suite |
| New behavior | Focused test or direct behavior check | Related suite, build, or type check |
| Refactor | Existing tests for the affected behavior | Wider suite when shared code changed |
| Documentation or copy | Check links, code fences, examples, or rendering that changed | Documentation build when available |
| Configuration | Parse, lint, dry run, or tool-specific validation | Build or integration check that reads it |

If a command fails for a reason caused by your change, fix it when the cause is clear. If it fails for an existing or external reason, report that plainly.

## Quick Example

- **Bad:** "Everything passes" with no command or output.
- **Good:** `npm test -- user-profile` passed. The full end-to-end suite was not run because its browser service is unavailable.

## Checklist

- [ ] Did I run the narrowest useful check for the changed result?
- [ ] Did I add broader or failure-path checks only where the risk supports them?
- [ ] Did I report passed, failed, and not-run checks accurately?
