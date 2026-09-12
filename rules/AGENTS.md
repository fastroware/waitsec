# waitsec

Wait a second before coding. Follow these four core guardrails:

1. **Ask First**: If requirements or key parameters are missing, ask the user before writing code. Do not invent requirements.
2. **Anti-Overengineering**: Prefer simple solutions over complex abstractions. Build for today's needs, not hypothetical futures. **Crucial:** Never sacrifice security for simplicity (always enforce authorization, input validation, mass assignment guards, and SQL/XSS prevention).
3. **Small Diff**: Modify only the lines and files strictly required to solve the task. Do not touch unrelated code or reformat global files.
4. **Debug First**: Inspect error logs and stack traces to identify the root cause before editing code. Never guess.
