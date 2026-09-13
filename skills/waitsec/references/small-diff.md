# Small Diff: Make the Smallest Complete Change

Change every file needed for a complete solution, and no unrelated file. Required tests, types, call sites, documentation, translations, and snapshots are part of the solution when the change depends on them.

## Use When

- Editing an existing repository.
- Fixing a focused bug or adding a focused feature.
- Running a formatter or code generator.
- Considering cleanup, renaming, or refactoring near the requested work.

## Do Not Use When

- The user requested a broad refactor, migration, rename, or formatting pass.
- A new project or feature clearly needs several connected files.
- A related change is required for correctness, compatibility, testing, or documentation.

Small diff means proportional scope. It does not mean forcing the change into one file.

## Anti-Patterns

### 1. Unrelated Formatting Churn

- **The Bad Habit:** A one-line fix reformats hundreds of untouched lines.
- **The Problem:** The real change is buried in whitespace, quote, or indentation edits.
- **Why It Fails:** Review becomes slower and merge conflicts become more likely.
- **Clean Fix:** Use the project's required formatter on the smallest supported scope. Avoid repository-wide formatting unless requested.
- **The Waitsec Way:** The diff should make the solution easy to see.

### 2. Cleanup Outside the Request

- **The Bad Habit:** The agent renames helpers, changes style, or rewrites nearby conditionals while fixing an unrelated issue.
- **The Problem:** Cosmetic and behavioral changes mix into one review.
- **Why It Fails:** Each extra edit adds risk and makes the requested fix harder to check.
- **Clean Fix:** Match the current file and leave optional cleanup for a separate task.
- **The Waitsec Way:** Respect the scope the user gave you.

### 3. Avoiding Required Connected Changes

- **The Bad Habit:** The agent changes one function but skips its call sites, tests, types, or documentation to keep the file count low.
- **The Problem:** The diff looks small but the solution is incomplete.
- **Why It Fails:** Builds, callers, or users still depend on the old behavior.
- **Clean Fix:** Update every connected file required for the change to work and remain understandable.
- **The Waitsec Way:** Small means complete and focused, not artificially narrow.

### 4. Replacing a Whole File

- **The Bad Habit:** The agent regenerates a large file when only a few lines need to change.
- **The Problem:** Existing edge cases, comments, and local conventions can disappear.
- **Why It Fails:** Fresh output lacks the history and context carried by the original file.
- **Clean Fix:** Read the existing file and apply a targeted edit that preserves unrelated behavior.
- **The Waitsec Way:** Edit the file you have instead of recreating it from memory.

## Scope Guardrail

Before saving an edit, ask:

1. Is this change required for the requested behavior, compatibility, proof, or user-facing documentation?
2. Is there an unrelated cleanup mixed into it?
3. Does the diff include changes made by the user that must remain untouched?

Only remove or revert edits that you introduced. Do not discard unrelated user work.

## Quick Example

- **Bad:** Change a button label, reformat the component, rename its props, and update the global theme.
- **Good:** Change the label and update only the translation or test that directly depends on it.

## Checklist

- [ ] Is every changed file connected to the complete solution?
- [ ] Did I avoid optional cleanup and broad formatting churn?
- [ ] Did I preserve unrelated code and user changes?
