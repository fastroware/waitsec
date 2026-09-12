---
name: small-diff
description: Keep edits surgical and proportional. Only modify the exact lines and files necessary to fulfill the prompt.
---

# Small Diff: Surgical and Proportional Changes

Do not turn a one-line bug fix into a 15-file git diff. Keep your changes laser-focused on the exact problem requested.

---

## Detailed Pitfalls & The 5-Point Rule

### 1. Collateral Reformatting

* **The Bad Habit:** Fixing a bug on line 42, but running an aggressive formatter that reformats 300 lines of whitespace, indentation, quote styles, or trailing commas across the entire file.
* **The Problem:** The real fix is now buried inside a wall of unrelated formatting changes.
* **Why It Fails:** It pollutes git history, makes `git blame` useless, and creates merge conflicts for teammates working on the same branch.
* **Clean Fix:** Format only the lines you touched. Leave existing indentation and formatting untouched.
* **The Waitsec Way:** A diff should show the solution, not a style argument. Touch only what the task requires.

### 2. Gratuitous Renaming & Style Imposition

* **The Bad Habit:** Changing working code to suit personal style preferences (e.g. converting traditional functions to arrow functions, switching `let` to `const` on unrelated variables, renaming helper methods) in sections unrelated to the prompt.
* **The Problem:** The diff fills with cosmetic edits that have nothing to do with the request.
* **Why It Fails:** Every modified line carries the risk of unintended regression and distracts the reviewer from the actual change.
* **Clean Fix:** Keep your hands off working code outside the prompt scope. Respect the prevailing style of the file.
* **The Waitsec Way:** Match the file you are editing, not the style in your head. Consistency beats personal preference.

### 3. File Scope Creep

* **The Bad Habit:** Asked to change the label of a button, the agent touches the button component, the router, the global theme CSS, and updates `package.json` dependencies.
* **The Problem:** Four files changed for a one-word edit.
* **Why It Fails:** The AI over-reaches, treating every task as an invitation to overhaul the project. This hides the real change and multiplies the chance of breakage.
* **Clean Fix:** Modify only the files strictly required to implement the request. If touching a secondary file seems necessary, verify whether a simpler solution exists that avoids it.
* **The Waitsec Way:** Stay inside the blast radius of the prompt. Small changes stay easy to review and easy to revert.

### 4. Wholesale File Rewriting

* **The Bad Habit:** Replacing a 400-line file with a newly generated version when only 5 lines needed an update, accidentally stripping out edge-case logic or comments that existed in the original.
* **The Problem:** The new file looks clean but silently drops behavior the original had.
* **Why It Fails:** Generative models love generating whole files from scratch rather than performing surgical edits. That habit erases years of accumulated fixes.
* **Clean Fix:** Use targeted diffs or line-level edits. Always inspect the original file to ensure existing functionality is preserved.
* **The Waitsec Way:** Edit the file you have, do not replace it. The original carries context that a fresh generation cannot.

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
