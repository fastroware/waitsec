# Debug First: Use Evidence Before Fixing Code

When behavior fails, gather enough evidence to support a likely root cause before making a production fix. Focused temporary instrumentation is useful when the current evidence is not enough.

## Use When

- A test or command fails.
- The application crashes or returns the wrong result.
- The user reports a reproducible bug.
- Validation reveals a new failure during implementation.

## Do Not Use When

- The task is a new feature with no reported failure.
- The user requested a planned refactor rather than a bug diagnosis.
- You are reviewing a possible risk without claiming that it caused a real failure.

## Anti-Patterns

### 1. Changing Several Files on a Guess

- **The Bad Habit:** The agent edits several possible causes before reading the failure output.
- **The Problem:** Unrelated changes appear while the original failure remains unclear.
- **Why It Fails:** New behavior makes the evidence harder to interpret and can add more bugs.
- **Clean Fix:** Read the full error, inspect the failing path, and test one likely cause at a time.
- **The Waitsec Way:** Evidence comes before the production fix.

### 2. Hiding the Error

- **The Bad Habit:** The agent adds an empty catch block, returns `null`, or suppresses a warning so the failure disappears.
- **The Problem:** The visible error is gone but the broken state remains.
- **Why It Fails:** Callers receive incomplete data and lose the information needed to recover or diagnose the issue.
- **Clean Fix:** Repair the cause. If an error must be caught, handle it clearly and log only safe diagnostic context.
- **The Waitsec Way:** A quiet failure is not a fixed failure.

### 3. Patching a Symptom Without Checking the Domain

- **The Bad Habit:** The agent adds optional chaining or an early return as soon as a value is missing.
- **The Problem:** The code may hide an invalid state, or it may reject a valid empty state without checking the domain.
- **Why It Fails:** The same syntax can either fix or mask the issue depending on why the value is missing.
- **Clean Fix:** Trace where the value comes from and decide whether absence is valid before choosing a guard or fixing the source.
- **The Waitsec Way:** Understand the state before deciding how to handle it.

### 4. Installing a Package for an Import Error

- **The Bad Habit:** A missing import leads straight to installing a new package.
- **The Problem:** The project gains a dependency before path, export, spelling, or setup errors are checked.
- **Why It Fails:** The added package may not solve the failure and creates more maintenance work.
- **Clean Fix:** Check existing dependencies, import paths, exports, namespaces, and generated files first.
- **The Waitsec Way:** Confirm what is missing before adding anything.

## Root Cause Sequence

1. Read the full error, stack trace, logs, or incorrect output.
2. Inspect the failing function, inputs, and nearby data flow.
3. Separate observed facts from your current hypothesis.
4. Reproduce the suspected cause or run one focused experiment.
5. Apply one targeted production fix.
6. Re-run the failing path and a useful nearby regression check.

You may add temporary logging or assertions when needed. Remove them before delivery unless they provide lasting operational value. Do not log secrets, tokens, credentials, or full sensitive payloads.

## Quick Example

- **Bad:** Add `user?.id`, catch every error, and install an auth package.
- **Good:** Confirm why `user` is missing, fix the failed lookup or handle a valid guest state, then rerun the failing case.

## Checklist

- [ ] Can I state the observed failure separately from my hypothesis?
- [ ] Does the fix address the supported cause rather than only hiding the output?
- [ ] Did I rerun the failing path and remove temporary diagnostic noise?
