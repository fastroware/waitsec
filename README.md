<p align="center">
  <a href="https://github.com/fastroware/waitsec">
    <img src="https://raw.githubusercontent.com/fastroware/waitsec/main/assets/banner-waitsec.png" alt="waitsec banner: Hold on. Think first. Code less." width="100%">
  </a>
</p>

<h1 align="center">
  <img src="https://raw.githubusercontent.com/fastroware/waitsec/main/assets/logo-waitsec.png" alt="waitsec logo" width="88" height="88">
  <br>
  waitsec
</h1>

<p align="center">
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-MIT-2ea44f" alt="License: MIT"></a>
  <a href="https://github.com/fastroware/waitsec/tags"><img src="https://img.shields.io/github/v/tag/fastroware/waitsec?label=version&color=1f6feb" alt="Version"></a>
  <a href="https://www.npmjs.com/package/waitsec"><img src="https://img.shields.io/npm/v/waitsec?color=crimson" alt="npm version"></a>
  <a href="https://skills.sh/fastroware/waitsec"><img src="https://img.shields.io/badge/skills.sh-waitsec-black?logo=vercel&logoColor=white" alt="skills.sh"></a>
</p>

> **Hold on. Think first. Code less.**

---

## What is waitsec?

waitsec is a set of plain instruction files for your AI coding agent. It is not a library you import and not a program you run in your app. It is a set of rules your agent reads so it behaves better while it works on your code.

Think of it as a checklist taped to your agent's desk. When you ask for a feature, the agent follows the checklist: ask when something is unclear, keep the change small, read the error before fixing it, and prove the work before saying it is done.

If you have ever asked for a small change and got twelve new files, or reported a one line bug and watched the agent edit five unrelated files, waitsec is for that problem.

## What "global" means

When you install waitsec, the installer asks for a scope. That is only about where the rule files are saved.

| Scope | Where the files go | Best for |
| :--- | :--- | :--- |
| **This project only** | Inside the current folder, for example `.agents/skills/` or `.claude/skills/`, plus a rules file | Teams. The rules travel with the repository and can be committed. |
| **Everywhere (Global)** | Your home directory, for example `~/.agents/skills` or `~/.claude/skills` | You. Every project on this computer gets the guardrails, even brand new ones. |

You can install both. A project install wins inside that project.

Full explanation: [docs/installation.md](https://github.com/fastroware/waitsec/blob/main/docs/installation.md) or [Bahasa Indonesia](https://github.com/fastroware/waitsec/blob/main/docs/installation-id.md).

## Features

| Skill | What it does | Use it when |
| :--- | :--- | :--- |
| `waitsec` | Core 5 guardrails: ask-first, anti-overengineering, small-diff, debug-first, verify-first | Always. This is the base every extension builds on. |
| `waitsec-pagemaker` | Builds clean web pages: project recon, design preferences, responsive layout, UX, SEO and GEO, Schema.org, auth pages, motion, 3D, and image sourcing | You build or redesign web pages. |
| `waitsec-code` | Clean code: no comment noise, small focused functions, no unnecessary dependencies | You write or refactor source code. |
| `waitsec-ui` | Frontend restraint: anti-slop visuals, mobile-first layout, clean UI copy | You work on UI or design systems. |
| `waitsec-quality` | Security auditing, realistic tests, safe database migrations | You touch auth, payments, tests, or migrations. |

## Install

Use the interactive installer in your project folder. It handles every editor and puts the files in the right place:

```bash
npx waitsec
```

All five skills are selected by default. Press `Space` to unselect any you do not want, then `Enter`.

Prefer a non-interactive install? Use the universal skills CLI:

```bash
npx skills add fastroware/waitsec -y
```

### Partial install

Extensions depend on the core skill, so installing one extension always means installing `waitsec` plus that extension. Example for the page builder:

```bash
npx skills add fastroware/waitsec --skill waitsec waitsec-pagemaker
```

Other combinations:

```bash
npx skills add fastroware/waitsec --skill waitsec                # core only
npx skills add fastroware/waitsec --skill waitsec waitsec-ui     # core plus UI
npx skills add fastroware/waitsec --skill waitsec waitsec-code   # core plus code
npx skills add fastroware/waitsec --skill waitsec waitsec-quality # core plus quality
```

## How to use it

1. Install it once, either for a project or globally.
2. Open your project in your editor and work as usual.
3. When a task matches a skill, the agent reads that skill and follows it. You do not run anything.

For example, just ask:

- "Build a landing page for my SaaS."
- "Add a login page with a forgot password flow."
- "Fix this failing test."
- "Review this endpoint for security issues."

The full guide, including per-editor setup, manual install, update, uninstall, and troubleshooting, is here:

- English: [docs/installation.md](https://github.com/fastroware/waitsec/blob/main/docs/installation.md)
- Bahasa Indonesia: [docs/installation-id.md](https://github.com/fastroware/waitsec/blob/main/docs/installation-id.md)

## Security notice

Read this before you use waitsec.

- waitsec is a set of instruction documents for AI agents. It is guidance, not a runtime library.
- We do not audit your application and we cannot guarantee that generated code, third party skills, or dependencies are safe, correct, or free of vulnerabilities.
- Skills run with the same permissions as your AI agent, which can read and write files and run commands on your machine. Always review what the agent changed before you run or ship it.
- Be especially careful with authentication, authorization, payments, secrets, and database migrations. Never let an agent push secrets or run destructive migrations unattended.
- The security advice inside these skills is advice only. You are responsible for testing and securing your own project.

In short: use waitsec to make your agent more careful, not as a guarantee that your code is secure.

## Structure

```text
waitsec/
├── docs/
│   ├── installation.md            # Full install and usage guide (English)
│   └── installation-id.md         # Panduan instalasi (Bahasa Indonesia)
├── skills/
│   ├── waitsec/                   # Core 5-phase guardrails
│   │   ├── SKILL.md               # Hub: pipeline overview + links to detail files
│   │   └── references/            # Deep-dive guardrails and UI copy rules
│   │       ├── ask-first.md
│   │       ├── anti-overengineering.md
│   │       ├── small-diff.md
│   │       ├── debug-first.md
│   │       ├── verify-first.md
│   │       └── write-info-analyzer.md
│   ├── waitsec-ui/                # Anti-slop CSS, UI copy restraint, responsive
│   │   └── SKILL.md
│   ├── waitsec-pagemaker/         # Page architect (landing, blog, articles, auth, contact)
│   │   ├── SKILL.md               # Recon, design preferences, SEO/GEO, Schema.org, UX
│   │   └── references/            # Blueprints per archetype
│   │       ├── landing-page.md
│   │       ├── blog-index.md
│   │       ├── article-single.md
│   │       ├── about-me.md
│   │       ├── contact-page.md
│   │       ├── auth-pages.md      # Login, register, password reset, lockout states
│   │       ├── motion-and-3d.md   # anime.js motion, parallax, three.js 3D
│   │       └── image-sourcing.md  # Reuse project media, Pexels fallback, aspect ratios
│   ├── waitsec-code/              # Clean code, anti-comment pollution
│   │   └── SKILL.md
│   └── waitsec-quality/           # Security auditing, testing discipline
│       └── SKILL.md
│
├── rules/
│   ├── AGENTS.md                  # Universal rule pointer (Antigravity / Claude Code)
│   └── waitsec.md                 # All-in-one bundled rules (Kilo Code / Cline / Cursor)
├── assets/
│   ├── banner-waitsec.png
│   └── logo-waitsec.png
├── bin/
│   └── cli.mjs                    # Interactive terminal installer (Clack prompts)
├── skills.sh.json                 # skills.sh repo page grouping
├── plugin.json                    # Antigravity plugin manifest
├── package.json                   # npm / npx manifest
└── composer.json                  # Composer / Laravel manifest
```

## Feedback, Bugs & Contributing

Found a bug, want to suggest a new guardrail, or want to contribute? Everything is tracked through GitHub.

### 1. Found a bug or have a complaint?
If an agent bypassed a guardrail, generated unexpected boilerplate, or an installer command failed:
1. Go to [GitHub Issues](https://github.com/fastroware/waitsec/issues).
2. Click **New Issue**.
3. Include your editor, the prompt you ran, and what the agent did wrong.

### 2. Suggesting a new guardrail or feature
1. Open a ticket on [GitHub Issues](https://github.com/fastroware/waitsec/issues) titled `[Feature] your idea`.
2. Provide a before-and-after example showing the bad output and the clean solution.

### 3. Submitting a pull request
1. Fork this repository on GitHub.
2. Create a branch: `git checkout -b feature/my-guardrail`.
3. Keep instructions concise, actionable, and free of generic AI slop.
4. Submit a **Pull Request** to `main`.

## License

MIT
