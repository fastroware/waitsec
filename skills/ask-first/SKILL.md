---
name: ask-first
description: Pause before coding when requirements are unclear. Ask clarifying questions instead of guessing.
---

# Ask First: Confirm Before You Code

Most AI coding mistakes happen because the agent starts coding before knowing what the user actually wants.

When requirements are vague, do not invent answers. Stop and ask.

## When to Pause and Ask

Ask before writing code if:
- Key decisions are missing (e.g. file formats, storage location, size limits, user permissions).
- You are unsure whether to overwrite an existing feature or build alongside it.
- There are multiple valid approaches with significantly different trade-offs.

## When NOT to Ask (Pick Sensible Defaults)

Do not bug the user with tiny technical trivia. Pick the simplest default and proceed if:
- The question is about basic implementation details (variable names, internal helper functions).
- The existing codebase already has a clear pattern for this.
- The choice has no impact on user experience or architecture.

## How to Ask

- Ask 1 to 3 short, direct questions.
- Present concrete options (A or B) whenever possible.
- Briefly explain why the choice matters so the user can answer easily.
- Wait for the user's answer before creating files or running heavy generation.
