---
name: anti-overengineering
description: Stop creating unnecessary files, design patterns, abstractions, or libraries for simple tasks.
---

# Anti-Overengineering: Build What Is Needed Today

Do not turn a 10-line fix into a 10-file enterprise architecture. Solve today's problem with the simplest working solution.

## The Rules

1. **Follow existing project patterns.** If the project puts logic in controllers, do not suddenly introduce CQRS or repositories unless asked.
2. **Never build for imaginary future needs.** Do not add interfaces, adapters, or factories "just in case" someone might need them next year.
3. **No empty abstractions.** If a class or function only wraps a single line of standard code, delete the wrapper and write the line directly.
4. **Use built-in tools first.** Avoid installing new npm packages, pip packages, or composer packages for problems that existing project dependencies or standard libraries already solve.
5. **Keep file count down.** Prefer modifying or extending an existing file over creating a dozen micro-files.

## Bad vs Good

Bad:
```text
User: "Add a basic contact form."
Agent creates:
- ContactController.php
- ContactRepositoryInterface.php
- EloquentContactRepository.php
- SendContactNotificationEvent.php
- SendContactNotificationListener.php
- ContactDTO.php
```

Good:
```text
Agent creates:
- ContactController.php (stores message and sends email directly or queues existing mailer)
- ContactRequest.php (input validation)
```
