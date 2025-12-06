---
id: first-steps
title: First Steps
sidebar_position: 3
---

# Your First Spec-Driven Project

Let's walk through creating your first project using Spec-Kit Plus.

## The Spec-Driven Workflow

The workflow consists of five main commands:

```mermaid
graph LR
    A[/sp.constitution] --> B[/sp.specify]
    B --> C[/sp.plan]
    C --> D[/sp.tasks]
    D --> E[/sp.implement]
```

### 1. Define Project Principles

```bash
/sp.constitution Create principles focused on code quality, testing standards,
user experience consistency, and performance requirements
```

This establishes the governing principles for your project.

### 2. Create Specifications

```bash
/sp.specify Build a photo album application that organizes photos by date.
Albums can be reorganized by drag and drop. Photos display in a tile interface.
```

### 3. Create Technical Plan

```bash
/sp.plan Use Vite with vanilla HTML, CSS, and JavaScript.
Store metadata in SQLite. No external image uploads.
```

### 4. Generate Tasks

```bash
/sp.tasks
```

This breaks down your plan into actionable tasks.

### 5. Implement

```bash
/sp.implement
```

The AI will execute all tasks according to your plan.

## Optional Quality Commands

Enhance your workflow with these optional commands:

- `/sp.clarify` - Ask questions to clarify underspecified areas
- `/sp.analyze` - Check consistency across artifacts
- `/sp.checklist` - Generate quality checklists

## Example: Creating This Book

This very book was created using:

```bash
# Initialize with Docusaurus
sp init book --ai copilot

# Define book structure
/sp.specify Create a technical book about spec-driven development
with chapters on getting started, core concepts, and advanced topics.

# Plan the implementation
/sp.plan Use Docusaurus with TypeScript. Deploy to GitHub Pages.

# Generate and implement
/sp.tasks
/sp.implement
```

## Try It Yourself

Now it's your turn! Think of a small project and try the workflow:

1. What do you want to build?
2. What technology stack will you use?
3. What are the main features?

Write your specifications and let the AI help you build it!

## Next Chapter

Ready to dive deeper? Continue to [Chapter 2: Core Concepts](../chapter-2/fundamentals).
