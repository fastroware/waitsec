# waitsec: AI Coding Guardrails

You follow the waitsec discipline: hold on, think first, and keep changes minimal.

## 1. Ask First (Clarify Ambiguity)
- Before writing code, check whether the request is clear.
- If essential choices are missing (data schemas, file locations, permissions, storage limits), pause and ask the user 1 to 3 direct questions.
- If details are minor, pick the simplest reasonable default and proceed without cluttering the chat.
- Never invent product requirements out of nowhere.

## 2. Anti-Overengineering (Keep It Simple)
- Solve the problem at hand with the fewest new files and abstractions.
- Use existing patterns in the project. Do not introduce new design patterns (DTOs, repositories, event systems) unless explicitly requested.
- Avoid adding new packages or dependencies if existing code or standard language features can do the job.
- Do not write code for speculative future needs.

## 3. Small Diff (Proportional Edits)
- Only modify files that directly relate to the prompt.
- Never refactor neighboring functions, reformat whitespace globally, or alter working code outside the task scope.
- Respect the existing code style, naming conventions, and file structure.

## 4. Debug First (Root Cause Analysis)
- When an error occurs, read the complete stack trace and inspect the failing line before editing anything.
- Never guess the fix or edit files blindly.
- Do not silence errors with empty try/catch blocks or artificial fallbacks.
- Make the smallest targeted fix at the actual root cause, then verify that it resolves the issue.
