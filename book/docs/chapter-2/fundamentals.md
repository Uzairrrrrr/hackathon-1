---
id: fundamentals
title: Fundamentals
sidebar_position: 1
---

# Core Fundamentals of Spec-Driven Development

Understanding the core principles behind spec-driven development is essential for success.

## The Specification-First Mindset

Traditional development often follows this pattern:

```
Idea → Code → Documentation → Testing
```

Spec-driven development reverses this:

```
Specification → Plan → Tasks → Implementation → Validation
```

## Key Principles

### 1. Executable Specifications

Specifications aren't just documentation—they're executable blueprints that directly generate working code.

**Example Specification:**
```markdown
## User Authentication System

### Requirements
- Users can register with email and password
- Passwords must be at least 8 characters
- Email verification required before login
- Session expires after 24 hours

### Constraints
- Use bcrypt for password hashing
- Store sessions in Redis
- Rate limit to 5 login attempts per minute
```

### 2. Intent Over Implementation

Focus on **what** you want, not **how** to build it.

❌ **Bad (Too Specific):**
```
Create a React component with useState hook that manages
a counter with increment and decrement buttons styled with Tailwind.
```

✅ **Good (Intent-Focused):**
```
Build a counter interface where users can increase or decrease
a numerical value. Display the current count prominently.
```

### 3. Iterative Refinement

Specs evolve through multiple refinement cycles:

1. **Initial Spec**: High-level requirements
2. **Clarification**: Use `/sp.clarify` to resolve ambiguities
3. **Planning**: Technical implementation details
4. **Task Breakdown**: Actionable development steps
5. **Implementation**: AI-assisted coding

### 4. Separation of Concerns

Keep different aspects of your project separate:

- **Constitution**: Project principles and standards
- **Specifications**: What to build
- **Plans**: How to build it
- **Tasks**: Step-by-step implementation

## Specification Structure

A well-written specification includes:

### Context
- Background information
- Problem statement
- Target users

### Requirements
- Functional requirements
- Non-functional requirements (performance, security, etc.)
- Constraints and limitations

### Success Criteria
- How to validate the implementation
- Expected outcomes
- Test scenarios

## Example: Complete Specification

```markdown
# Feature: Dark Mode Toggle

## Context
Users need to work at different times of day and prefer different
color schemes for comfort and accessibility.

## Requirements

### Functional
- Toggle button in navigation header
- Persist user preference across sessions
- Smooth transition between themes
- Apply to all pages instantly

### Non-Functional
- Transition animation under 200ms
- No layout shift during switch
- WCAG AA compliant color contrast
- Works with system preference API

## Success Criteria
- All text remains readable in both modes
- User preference persists after browser restart
- Respects system dark mode setting on first visit
- Automated tests verify all color combinations
```

## Working with AI

When writing specs for AI implementation:

### DO ✅
- Be specific about requirements
- Provide examples
- Define success criteria
- Mention constraints

### DON'T ❌
- Prescribe exact code structure
- Include implementation details
- Assume specific libraries
- Mix specification with code

## Next Section

Learn about [Best Practices](./best-practices) for writing effective specifications.
