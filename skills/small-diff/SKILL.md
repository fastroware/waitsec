---
name: small-diff
description: Keep edits small and focused. Only change the files and lines necessary to solve the prompt.
---

# Small Diff: Keep Code Changes Proportional

Do not rewrite an entire file or touch neighboring modules when fixing a specific bug or adding a small tweak.

## The Rules

1. **Only touch relevant files.** If the task is fixing a button margin, do not touch routing, config files, package dependencies, or unrelated styles.
2. **No unsolicited refactoring.** Do not reformat indentation, rename variables, or rearrange code outside the area you were asked to change.
3. **No vanity cleanups.** Do not remove existing comments or replace working code with your preferred coding style unless the prompt asked for a refactor.
4. **Preserve existing style.** Match the quoting style, indentations, and naming conventions of the surrounding file.

## Why This Matters

Unnecessary edits create noisy git diffs, increase merge conflicts, and accidentally break working features. Make the smallest surgical change that gets the job done.
