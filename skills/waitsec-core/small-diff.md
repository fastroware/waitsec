---
name: small-diff
description: Keep edits surgical and proportional. Only modify the exact lines and files necessary to fulfill the prompt.
---

# Small Diff: Surgical and Proportional Changes

Do not turn a one-line bug fix into a 15-file git diff. Keep your changes laser-focused on the exact problem requested.

---

## Anti-Patterns (The Tells)

### 1. Collateral Reformatting
- **Tell:** Fixing a bug on line 42, but running an aggressive formatter that reformats 300 lines of whitespace, indentation, quote styles, or trailing commas across the entire file.
- **Why:** Pollutes git history, makes `git blame` useless, and introduces merge conflicts for teammates working on the same branch.
- **Fix:** Format only the lines you touched. Leave existing indentation and formatting untouched.

### 2. Gratuitous Renaming & Style Imposition
- **Tell:** Changing working code to suit personal style preferences (e.g. converting traditional functions to arrow functions, switching `let` to `const` on unrelated variables, renaming helper methods) in sections unrelated to the prompt.
- **Why:** Every modified line carries the risk of unintended regression and distraction during code review.
- **Fix:** Keep your hands off working code outside the prompt scope. Respect the prevailing style of the file.

### 3. File Scope Creep
- **Tell:** Asked to change the label of a button, the agent touches the button component, the router, the global theme CSS, and updates `package.json` dependencies.
- **Why:** The AI over-reaches, treating every task as an invitation to overhaul the project.
- **Fix:** Modify only the files strictly required to implement the request. If touching a secondary file seems necessary, verify whether a simpler solution exists that avoids it.

### 4. Wholesale File Rewriting
- **Tell:** Replacing a 400-line file with a newly generated version when only 5 lines needed an update, accidentally stripping out edge-case logic or comments that existed in the original.
- **Why:** Generative models love generating whole files from scratch rather than performing surgical edits.
- **Fix:** Use targeted diffs or line-level edits. Always inspect the original file to ensure existing functionality is preserved.

---

## The Scope Guardrail

Before saving any file change, ask:
1. **Is this edit strictly required to solve the prompt?** If no, delete the edit.
2. **Does this edit touch unrelated functions, styles, or configuration?** If yes, revert it.
3. **Does the git diff contain unnecessary whitespace or formatting churn?** If yes, clean up the diff.

---

## Checklist

Before submitting code changes:
- [ ] Are all modified files directly related to the user's prompt?
- [ ] Did I avoid global reformatting or unnecessary whitespace churn?
- [ ] Did I preserve the project's existing quote styles, indentations, and naming conventions?
- [ ] Did I leave working, unrelated code completely untouched?
