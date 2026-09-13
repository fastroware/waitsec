# waitsec Installation & Usage Guide

**Languages:** English | [Bahasa Indonesia](./installation-id.md)

This guide is written so anyone can follow it, even if you have never used a command line tool before. Every command is ready to copy and paste.

---

## Quick navigation

- [1. What you are installing](#1-what-you-are-installing)
- [2. Requirements](#2-requirements)
- [3. Fastest install](#3-fastest-install)
- [4. What "global" means](#4-what-global-means)
- [5. Full install](#5-full-install)
- [6. Partial install](#6-partial-install)
- [7. Install per editor](#7-install-per-editor)
- [8. Manual install with a rules file](#8-manual-install-with-a-rules-file)
- [9. Composer and Laravel](#9-composer-and-laravel)
- [10. Update and uninstall](#10-update-and-uninstall)
- [11. How to use it](#11-how-to-use-it)
- [12. Verify it works](#12-verify-it-works)
- [13. Security notice](#13-security-notice)
- [14. Troubleshooting](#14-troubleshooting)

---

## 1. What you are installing

waitsec is a set of instruction files for your AI coding agent. It teaches the agent to slow down, ask before guessing, keep changes small, and verify its work.

You are not installing a runtime library. You are installing markdown files that your AI agent reads so it behaves with more discipline.

There are five packages:

| Skill | What it does | Install when |
| :--- | :--- | :--- |
| `waitsec` | The core 5 guardrails: ask-first, anti-overengineering, small-diff, debug-first, verify-first | Always. This is the base every other skill builds on. |
| `waitsec-pagemaker` | Builds clean web pages: project recon, design preferences, responsive layout, UX, SEO and GEO, Schema.org, auth pages, motion, 3D, and image sourcing | You build or redesign web pages. |
| `waitsec-code` | Clean code: no comment noise, small focused functions, no unnecessary dependencies | You write or refactor source code. |
| `waitsec-ui` | Frontend restraint: anti-slop visuals, mobile-first layout, clean UI copy | You work on UI or design systems. |
| `waitsec-quality` | Security auditing, realistic tests, safe database migrations | You touch auth, payments, tests, or migrations. |

The extensions refer to the core `waitsec` skill, so always install `waitsec` together with any extension. See [Partial install](#6-partial-install).

## 2. Requirements

- Node.js 18 or newer, so `npx` works. Check with `node -v`.
- Git, so the skill folders can be cloned.
- An AI coding agent, for example Kilo Code, Cline, Cursor, Claude Code, Antigravity, Gemini CLI, or Codex.

## 3. Fastest install

Run this in your project folder:

```bash
npx waitsec
```

The installer asks three things:

1. **Skills to install.** All five are selected by default. Press `Space` to unselect any skill you do not want, and `Enter` to confirm. At least one skill must stay selected.
2. **Installation scope.** Choose `This project only` or `Everywhere (Global)`. See [What "global" means](#4-what-global-means).
3. **Your AI agents or editors.** Pick the tools you use. The installer places the files where each tool expects them.

That is it. Reload your editor and the agent will pick up the rules.

## 4. What "global" means

When the installer asks for the scope, it is asking where to write the files.

| Scope | Where the files go | Best for |
| :--- | :--- | :--- |
| **This project only** | Inside the current folder, usually in folders like `.agents/skills/` or `.claude/skills/`, plus a rules file like `.kilorules` | Teams. The rules travel with the repository, so everyone shares the same behavior, and you can commit them. |
| **Everywhere (Global)** | Your home directory, for example `~/.agents/skills` or `~/.claude/skills` | You as an individual. Every project on your machine gets the guardrails, even brand new ones, without setting anything up again. |

Simple rule of thumb:

- If you want the rules to be part of a shared codebase, install per project.
- If you want the rules on all your work on this computer, install globally.
- You can do both. A project install takes priority for that project.

## 5. Full install

Full means all five skills, so the agent has every guardrail available.

With the interactive installer, just keep all five selected in step 1 of `npx waitsec`.

Or use the universal skills CLI and install everything without prompts:

```bash
npx skills add fastroware/waitsec -y
```

After this, you can ask your agent for any task, and the relevant skill activates when needed.

## 6. Partial install

Partial install works for any extension, not only for pages. You can install just the core, one extension, or several extensions together.

The dependency rule:

> Every extension expects the core `waitsec` skill to be present. So whenever you install an extension, install `waitsec` together with it.

### Install one extension

```bash
# Only the core guardrails
npx skills add fastroware/waitsec --skill waitsec

# Core plus page builder
npx skills add fastroware/waitsec --skill waitsec waitsec-pagemaker

# Core plus UI
npx skills add fastroware/waitsec --skill waitsec waitsec-ui

# Core plus clean code
npx skills add fastroware/waitsec --skill waitsec waitsec-code

# Core plus quality and security
npx skills add fastroware/waitsec --skill waitsec waitsec-quality
```

### Install several extensions

List every skill you want after `--skill`:

```bash
# Core plus page builder and UI
npx skills add fastroware/waitsec --skill waitsec waitsec-pagemaker waitsec-ui

# Core plus everything except quality
npx skills add fastroware/waitsec --skill waitsec waitsec-pagemaker waitsec-ui waitsec-code
```

### With the interactive installer

When you run `npx waitsec`, the first prompt is the skill selection. All five skills are checked by default. Unselect the ones you do not want, keep `waitsec` plus the extensions you do want, then press `Enter`. That is the simplest way to install a partial set, and you can pick any combination.

Note: the per-skill page on skills.sh shows a command like `npx skills add fastroware/waitsec --skill waitsec`, which installs only that one skill. For any extension, always add `waitsec` to the `--skill` list as shown above.

## 7. Install per editor

The interactive installer `npx waitsec` handles the paths for you. This table shows what it creates.

| Editor or agent | Rule file | Skills folder |
| :--- | :--- | :--- |
| Kilo Code | `.kilorules` | `.kilo/skills` |
| Cline / Roo Code | `.clinerules` | `.cline/skills` |
| Cursor | `.cursorrules` | `.cursor/skills` |
| Claude Code | `CLAUDE.md` | `.claude/skills` |
| Antigravity / Universal | `AGENTS.md` | `.agents/skills` |
| Codex | `AGENTS.md` | `.codex/skills` |
| Gemini CLI | `GEMINI.md` | `.gemini/skills` |

If you use more than one editor, select all of them in step 3 and the installer writes each location.

## 8. Manual install with a rules file

If you only want the guardrails as a single rules file and do not want skill folders, copy the bundled rules file into your project root.

For Kilo Code or Cline:

```bash
curl -o .kilorules https://raw.githubusercontent.com/fastroware/waitsec/main/rules/waitsec.md
```

For Cursor:

```bash
curl -o .cursorrules https://raw.githubusercontent.com/fastroware/waitsec/main/rules/waitsec.md
```

For a universal pointer file:

```bash
curl -o AGENTS.md https://raw.githubusercontent.com/fastroware/waitsec/main/rules/AGENTS.md
```

You can also paste the contents of [`rules/waitsec.md`](../rules/waitsec.md) into the Custom Instructions field of your editor settings.

## 9. Composer and Laravel

Install as a development dependency:

```bash
composer require --dev waitsec/waitsec
```

Then run the interactive setup:

```bash
vendor/bin/waitsec
```

The Composer hook also copies the rules file into `.kilorules` on install if it does not exist yet.

## 10. Update and uninstall

Update with the skills CLI:

```bash
npx skills update
```

Update by reinstalling:

```bash
npx waitsec
```

When folders already exist, the installer asks whether to overwrite or keep them. Choose overwrite to get the latest version.

To uninstall, delete the files the installer created:

- The rule file, for example `.kilorules`, `.clinerules`, `.cursorrules`, or the waitsec block inside `AGENTS.md`, `CLAUDE.md`, or `GEMINI.md`.
- The skill folders, for example `.agents/skills/waitsec`, `.claude/skills/waitsec`, and any other installed skill folders.
- For global installs, do the same inside your home directory.

For the skills CLI, list and remove:

```bash
npx skills list
npx skills remove waitsec
```

## 11. How to use it

Once installed, you do not run waitsec. Your AI agent runs it for you.

1. Open your project in your editor.
2. Work as usual. Ask for a feature, a fix, or a page.
3. When the task matches a skill, the agent reads that skill and follows its rules.

Examples you can simply type:

- "Build a landing page for my SaaS."
- "Add a login page with a forgot password flow."
- "Fix this failing test."
- "Review this endpoint for security issues."

What changes in the agent's behavior:

- It asks one to three direct questions when a decision is genuinely important, instead of guessing.
- It writes the smallest change that solves the task.
- It reads the full error before changing code.
- It runs tests or a build before saying it is done.
- For pages, it checks your stack and styling first, then builds, then validates SEO and structured data.

If you installed only some skills, only those activate. For example, with `waitsec` plus `waitsec-pagemaker`, the agent gets the core discipline and the page builder, but not the security audit or code hygiene skills.

## 12. Verify it works

Check the installer version:

```bash
npx waitsec --version
```

List installed skills with the skills CLI:

```bash
npx skills list
```

You can also look for the folders yourself:

```bash
ls .agents/skills
ls .claude/skills
```

Finally, ask your agent: "Which waitsec skills are active in this project?" A correctly installed agent will name them.

## 13. Security notice

Please read this before using waitsec.

- waitsec provides instruction documents for AI agents. It is guidance, not a runtime library.
- We do not audit your application and we cannot guarantee that generated code, third-party skills, or dependencies are safe, correct, or free of vulnerabilities.
- Skills run with the same permissions as your AI agent, which can read and write files and can run commands on your machine. Always review what an agent changes before you run or ship it.
- Be extra careful with authentication, authorization, payments, secrets, and database migrations. Never let an agent push secrets or run destructive migrations unattended.
- Security practice inside the skills, such as input validation and parameterized queries, is advice. You are responsible for testing and securing your own project.
- The skills CLI also warns you to review skills before use. Take that warning seriously.

In short: use waitsec to make your agent more careful, not as a guarantee that your code is secure.

## 14. Troubleshooting

- `npx` is not recognized: install Node.js 18 or newer from nodejs.org, then reopen your terminal.
- The agent ignores the rules: make sure the skill folder is in the location your editor reads, then reload the editor.
- The installer found no agents: choose your editors manually in step 3.
- `npm publish` or network errors during install: check your connection and try again.
- You installed only an extension: install the core `waitsec` alongside it, as shown in [Partial install](#6-partial-install).
- Wrong behavior: open an issue at https://github.com/fastroware/waitsec/issues with your editor, your prompt, and what the agent did.
