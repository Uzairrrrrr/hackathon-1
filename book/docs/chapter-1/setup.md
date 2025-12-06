---
id: setup
title: Setup
sidebar_position: 2
---

# Environment Setup

Let's set up your development environment for spec-driven development.

## Prerequisites

Before you begin, ensure you have:

- **Node.js 20+**: Required for Docusaurus
- **Git**: For version control
- **Python 3.11+**: For Spec-Kit Plus
- **uv**: Python package manager

## Installing Spec-Kit Plus

### Step 1: Install uv

```bash
curl -LsSf https://astral.sh/uv/install.sh | sh
```

### Step 2: Install Spec-Kit Plus

```bash
uv tool install specifyplus
```

### Step 3: Verify Installation

```bash
sp check
```

## Setting Up Your AI Assistant

Choose one of the following AI assistants:

### Option 1: Claude Code (Recommended)

Download from [Claude Code Setup](https://docs.anthropic.com/en/docs/claude-code/setup)

### Option 2: GitHub Copilot

Already available in VS Code - just ensure you're signed in.

### Option 3: Other Supported Assistants

- Cursor
- Windsurf
- Gemini CLI
- Qwen Code

## Initialize Your Project

```bash
# Create a new project with Claude Code
sp init my-book --ai claude

# Or with GitHub Copilot
sp init my-book --ai copilot
```

## Next Steps

Now that your environment is ready, proceed to [First Steps](./first-steps) to start using Spec-Kit Plus!
