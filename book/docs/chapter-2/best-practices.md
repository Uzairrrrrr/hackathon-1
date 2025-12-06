---
id: best-practices
title: Best Practices
sidebar_position: 2
---

# Best Practices for Spec-Driven Development

Master these best practices to maximize the effectiveness of your spec-driven workflow.

## Writing Effective Specifications

### Use the "Job Story" Format

Instead of user stories, use job stories:

**Format:**
```
When [situation], I want to [motivation], so I can [expected outcome].
```

**Example:**
```
When I'm reviewing pull requests on mobile,
I want to see code diffs clearly,
so I can provide meaningful feedback on the go.
```

### Be Specific, Not Prescriptive

❌ **Too Vague:**
```
Make the app fast
```

❌ **Too Prescriptive:**
```
Use React.memo() on all components and implement
virtual scrolling with react-window
```

✅ **Just Right:**
```
List view should render smoothly when displaying
1000+ items, with lazy loading as user scrolls
```

## Constitution Best Practices

Your project constitution should define:

### Code Quality Standards
```markdown
## Code Quality
- All functions must have unit tests
- Test coverage minimum: 80%
- TypeScript strict mode enabled
- ESLint errors are build blockers
```

### Architecture Principles
```markdown
## Architecture
- Follow Clean Architecture patterns
- Separate business logic from UI
- Use dependency injection
- API responses must be versioned
```

### Performance Requirements
```markdown
## Performance
- Initial page load under 2 seconds
- Time to interactive under 3 seconds
- Core Web Vitals must be "Good"
- Images must be optimized and lazy-loaded
```

## Planning Best Practices

### Break Down Complexity

Instead of one massive spec, create multiple focused ones:

**Instead of:**
```
Build a complete e-commerce platform
```

**Do this:**
```
Feature 1: Product Catalog
Feature 2: Shopping Cart
Feature 3: Checkout Flow
Feature 4: Payment Integration
```

### Version Your Specifications

Keep track of spec evolution:

```
specs/
  001-user-auth/
    v1-initial-spec.md
    v2-added-oauth.md
    v3-final.md
  002-product-catalog/
    v1-initial-spec.md
```

## Task Management

### Make Tasks Atomic

Each task should be:
- **Completable in one session** (2-4 hours max)
- **Independently testable**
- **Clearly defined** with acceptance criteria

❌ **Too Large:**
```
Implement user authentication system
```

✅ **Properly Sized:**
```
1. Create user registration form with validation
2. Implement password hashing service
3. Set up email verification flow
4. Build login endpoint with rate limiting
```

### Use Task Dependencies

Structure tasks with dependencies:

```markdown
## Tasks

### Phase 1: Foundation
- [ ] Task 1.1: Set up database schema
- [ ] Task 1.2: Create data models

### Phase 2: API (depends on Phase 1)
- [ ] Task 2.1: Implement CRUD endpoints
- [ ] Task 2.2: Add authentication middleware

### Phase 3: UI (depends on Phase 2)
- [ ] Task 3.1: Build forms
- [ ] Task 3.2: Connect to API
```

## Quality Assurance

### Use Clarification Effectively

Before implementing, use `/sp.clarify`:

```
/sp.clarify Focus on edge cases, error handling,
and accessibility requirements
```

### Run Analysis Checks

After creating tasks, before implementation:

```
/sp.analyze
```

This checks for:
- Consistency across specs, plans, and tasks
- Missing requirements
- Conflicting constraints

### Create Custom Checklists

Generate validation checklists:

```
/sp.checklist Create a checklist for API security,
performance, and error handling
```

## Common Pitfalls to Avoid

### 1. Mixing Abstraction Levels

❌ **Don't mix high-level and low-level details:**
```
Create a user dashboard that shows analytics.
Use Chart.js for the graphs. The data should be
fetched from /api/analytics endpoint.
```

✅ **Keep abstraction consistent:**
```
Create a user dashboard displaying:
- User activity over time
- Top performed actions
- System usage statistics
```

### 2. Over-Specification

❌ **Too much detail:**
```
Create a button component with primary and secondary variants.
Primary should use #007bff color. Add 8px padding. Border
radius 4px. Font size 14px. Line height 20px...
```

✅ **Right amount of detail:**
```
Create a button component with primary and secondary variants
following the design system color palette.
```

### 3. Under-Specification

❌ **Too little detail:**
```
Add search functionality
```

✅ **Sufficient detail:**
```
Add search functionality that:
- Searches across product names and descriptions
- Shows results as user types (debounced)
- Highlights matching terms
- Supports filters by category and price range
```

## Collaboration Tips

### Review Specifications Together

Before implementation:
1. Share spec with team
2. Discuss edge cases
3. Validate assumptions
4. Refine requirements

### Use Spec Templates

Create templates for common features:

```markdown
# Feature Specification Template

## Overview
[Brief description]

## User Stories
[Job stories format]

## Requirements
### Functional
- [ ] Requirement 1
- [ ] Requirement 2

### Non-Functional
- [ ] Performance target
- [ ] Security requirement

## Success Criteria
- [ ] Acceptance test 1
- [ ] Acceptance test 2

## Out of Scope
[What this feature explicitly does NOT include]
```

## Next Section

See these practices in action with [Examples](./examples).
