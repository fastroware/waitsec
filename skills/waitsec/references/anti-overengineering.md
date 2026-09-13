# Anti-Overengineering: Keep the Design Lean and Safe

Use the simplest design that meets the current requirement and fits the existing project. Simplicity removes unneeded structure, not relevant security controls.

## Use When

- Adding files, classes, interfaces, wrappers, patterns, or dependencies.
- Deciding where new logic belongs.
- Planning for possible future requirements.
- Handling input, protected data, database access, rendered output, or secrets.

## Do Not Use When

- The project already requires a clear architecture pattern.
- The user asked for a specific refactor or migration.
- More than one current use case proves that an abstraction is useful.
- A library is the safer standard choice for complex work such as cryptography or protocol handling.

## Anti-Patterns

### 1. Too Many Layers for One Small Job

- **The Bad Habit:** A simple form action gets an interface, repository, DTO, service, command, event, and listener.
- **The Problem:** Several files hide logic that could fit clearly in the project's existing handler.
- **Why It Fails:** Reviewers must trace boilerplate across folders before they can see the real behavior.
- **Clean Fix:** Put the logic in the nearest established project layer. Add another layer only when current complexity needs it.
- **The Waitsec Way:** Complexity must solve a problem that exists now.

### 2. Designing for Imagined Futures

- **The Bad Habit:** The agent adds factories, plugins, or strategies in case the project changes databases or providers later.
- **The Problem:** Unused branches and extension points become part of the code today.
- **Why It Fails:** The team maintains choices that may not happen and has more paths to test.
- **Clean Fix:** Build the current case cleanly. Refactor when a second real case shows what should be shared.
- **The Waitsec Way:** Let real requirements pull the design forward.

### 3. Empty Wrappers

- **The Bad Habit:** A helper only forwards its arguments to a standard or framework method.
- **The Problem:** Callers pass through an extra name and file without gaining behavior or clarity.
- **Why It Fails:** Readers open the wrapper to learn that it adds nothing.
- **Clean Fix:** Call the underlying method directly. Keep a wrapper only when it adds policy, behavior, or a clearer domain boundary.
- **The Waitsec Way:** Each abstraction must earn its place.

### 4. A Package for a Small Built-In Task

- **The Bad Habit:** The agent installs a package for simple date formatting, string padding, or another small standard-library task.
- **The Problem:** The dependency manifest grows for work the language already handles.
- **Why It Fails:** Each package adds update work, compatibility risk, and supply-chain exposure.
- **Clean Fix:** Check the standard library and existing project dependencies first. Add a package when it clearly handles complex work better and more safely.
- **The Waitsec Way:** A dependency is a maintenance choice, not a default shortcut.

## Contextual Security Baseline

When the task crosses a matching trust boundary:

- Scope protected reads and writes to the current user, role, or tenant.
- Validate untrusted input and write only allowed fields.
- Use parameterized queries and context-aware output escaping.
- Load credentials through the project's environment or secret manager.

Do not add unrelated auth or validation layers to code with no such boundary. Use `waitsec-quality` for a detailed security, testing, sensitive data, or migration review.

## Quick Example

- **Bad:** Six new classes for one endpoint, but no ownership check on the requested record.
- **Good:** A focused change in the existing project layer, with the relevant ownership and input checks.

The goal is clear structure, not a target file count or line count.

## Checklist

- [ ] Does each new layer, file, or dependency solve a current need?
- [ ] Does the design follow the project's existing structure?
- [ ] Did I keep the security controls that match the actual trust boundaries?
