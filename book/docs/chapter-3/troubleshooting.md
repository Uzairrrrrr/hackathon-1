---
id: troubleshooting
title: Troubleshooting
sidebar_position: 2
---

# Troubleshooting Guide

Common issues and their solutions when working with spec-driven development.

## Spec-Kit Plus Issues

### Installation Problems

#### Issue: `uv` command not found

**Solution:**
```bash
# Add to PATH
export PATH="$HOME/.local/bin:$PATH"

# Add to shell profile for persistence
echo 'export PATH="$HOME/.local/bin:$PATH"' >> ~/.bashrc
source ~/.bashrc
```

#### Issue: Permission denied during installation

**Solution:**
```bash
# Don't use sudo with uv
# Instead, ensure user has write access to ~/.local
chmod u+w ~/.local/bin

# Then reinstall
uv tool install specifyplus
```

### Specification Issues

#### Issue: AI generates code that doesn't match spec

**Causes:**
1. Specification too vague
2. Specification conflicts with plan
3. AI context limit exceeded

**Solutions:**

1. **Make specs more specific:**
```markdown
❌ Add a search feature

✅ Add a search feature that:
- Searches in real-time as user types
- Debounces input (300ms)
- Shows max 10 results
- Highlights matching text
```

2. **Run consistency check:**
```bash
sp analyze
```

3. **Break into smaller features:**
```markdown
Instead of one large spec, create:
- Feature 001: Basic search
- Feature 002: Search filters
- Feature 003: Search analytics
```

#### Issue: Specifications are too large

**Solution:**

Use the INVEST criteria for specs:

- **I**ndependent: Can be developed separately
- **N**egotiable: Details can be refined
- **V**aluable: Delivers user value
- **E**stimable: Scope is clear
- **S**mall: Completable in reasonable time
- **T**estable: Success criteria are clear

Break large specs into smaller ones:

```markdown
# Large spec (problematic)
Build a complete e-commerce platform with products,
cart, checkout, payments, inventory, shipping,
and order management.

# Better approach
## Sprint 1
- 001-product-catalog
- 002-shopping-cart

## Sprint 2  
- 003-checkout-flow
- 004-payment-integration

## Sprint 3
- 005-inventory-management
- 006-order-tracking
```

### Planning Issues

#### Issue: Plan doesn't align with constitution

**Check:**
```bash
sp analyze
```

**Fix:**
Review your constitution and update either:
- The constitution (if requirements changed)
- The plan (if it violates principles)

Example conflict:
```markdown
# Constitution says:
- No external dependencies

# But plan includes:
- Install React, Redux, Axios...

# Resolution:
Either update constitution to allow frameworks,
or change plan to use vanilla JavaScript
```

#### Issue: Technology choices seem wrong

**Solutions:**

1. **Be more specific in constitution:**
```markdown
❌ Use modern tech stack

✅ Technology Stack:
- Frontend: React 18+ with TypeScript
- State: Zustand (not Redux)
- HTTP: Native fetch (no Axios)
- Build: Vite
```

2. **Provide constraints in `/sp.plan`:**
```bash
/sp.plan Use Next.js 14 with App Router. Deploy to Vercel.
Use Prisma for database access. Prefer React Server Components.
```

### Implementation Issues

#### Issue: `/sp.implement` fails or produces errors

**Debug steps:**

1. **Check task completeness:**
```bash
# Review tasks before implementing
/sp.tasks

# Make sure each task is:
# - Clearly defined
# - Has acceptance criteria
# - Is independently testable
```

2. **Implement incrementally:**
```bash
# Instead of implementing all at once
/sp.implement

# Implement one task at a time
# Copy individual task and ask AI to implement it
```

3. **Verify environment:**
```bash
# Check all required tools are installed
sp check

# Verify project structure
ls -la .specify/
```

#### Issue: Generated code has bugs

**Prevention:**

Add test requirements to specs:
```markdown
## Testing Requirements
- Unit tests for all business logic
- Integration tests for API endpoints
- E2E tests for critical user flows
- Minimum 80% code coverage
```

**Fix:**

1. **Use `/sp.checklist` for validation:**
```bash
/sp.checklist Generate checklist for code quality,
testing, error handling, and edge cases
```

2. **Request test generation:**
```bash
Please generate comprehensive tests for the implemented feature,
covering edge cases, error scenarios, and happy paths.
```

## AI Agent Issues

### GitHub Copilot Issues

#### Issue: Slash commands not working

**Verify:**
```bash
# Check if .github/copilot-instructions.md exists
ls .github/copilot-instructions.md

# Re-initialize if needed
sp init --here --ai copilot --force
```

#### Issue: Copilot not following specs

**Solution:**

Reference specs explicitly:
```
Please implement this feature according to the specification
in .specify/specs/001-feature-name/spec.md
```

### Claude Code Issues

#### Issue: Claude not installed

**Solution:**
```bash
# Download from official site
https://docs.anthropic.com/en/docs/claude-code/setup

# Or skip agent check
sp init --ai claude --ignore-agent-tools
```

## Git Issues

### Issue: Merge conflicts in `.specify/`

**Solution:**
```bash
# Keep your version for specs
git checkout --ours .specify/specs/

# Resolve manually for sensitive files
git mergetool .specify/constitution/
```

### Issue: Large `.specify/` directory

**Solution:**

Add to `.gitignore` if needed:
```
# .gitignore
.specify/memory/
.specify/tmp/
```

But **keep** these in git:
```
.specify/constitution/
.specify/specs/
.specify/plans/
```

## Deployment Issues

### GitHub Pages Not Updating

**Check:**

1. **GitHub Actions workflow:**
```bash
# View workflow status
gh workflow list
gh run list

# Check for errors
gh run view --log-failed
```

2. **Build configuration:**
```typescript
// docusaurus.config.ts
url: 'https://YOUR_USERNAME.github.io',
baseUrl: '/YOUR_REPO_NAME/',
organizationName: 'YOUR_USERNAME',
projectName: 'YOUR_REPO_NAME',
```

3. **GitHub Pages settings:**
- Go to Settings → Pages
- Source: GitHub Actions
- Branch: gh-pages (if using deploy branch)

### Build Failures

**Common causes:**

1. **TypeScript errors:**
```bash
# Check locally
npm run typecheck

# Fix errors before pushing
```

2. **Missing dependencies:**
```bash
# Ensure package-lock.json is committed
git add package-lock.json
git commit -m "Add package-lock.json"
```

3. **Node version mismatch:**
```yaml
# .github/workflows/deploy.yml
- uses: actions/setup-node@v3
  with:
    node-version: '20' # Match your local version
```

## Performance Issues

### Slow Specification Processing

**Solutions:**

1. **Reduce context:**
```markdown
# Instead of including everything
Create a complete app with all features...

# Be focused
Create the user authentication module with
login, registration, and password reset.
```

2. **Use incremental specs:**
```bash
# First
/sp.specify Core authentication

# Then
/sp.specify Social login integration

# Finally
/sp.specify Two-factor authentication
```

### Slow Build Times

**Optimize:**

1. **Enable caching:**
```yaml
# .github/workflows/deploy.yml
- uses: actions/cache@v3
  with:
    path: |
      ~/.npm
      node_modules
    key: ${{ runner.os }}-node-${{ hashFiles('**/package-lock.json') }}
```

2. **Parallel builds:**
```json
// package.json
{
  "scripts": {
    "build": "docusaurus build --out-dir build --no-minify"
  }
}
```

## Getting Help

### Resources

1. **Spec-Kit Plus Issues:**
   - GitHub Issues: https://github.com/panaversity/spec-kit-plus/issues
   - Discussions: https://github.com/panaversity/spec-kit-plus/discussions

2. **Docusaurus Issues:**
   - Documentation: https://docusaurus.io/docs
   - Discord: https://discord.gg/docusaurus

3. **AI Agent Support:**
   - Claude Code: https://docs.anthropic.com/
   - GitHub Copilot: https://docs.github.com/copilot

### Creating a Good Issue Report

Include:

```markdown
## Environment
- OS: [Linux/Mac/Windows]
- Spec-Kit Plus version: [run `sp --version`]
- AI Agent: [claude/copilot/other]
- Node version: [run `node --version`]

## Expected Behavior
[What you expected to happen]

## Actual Behavior
[What actually happened]

## Steps to Reproduce
1. Step 1
2. Step 2
3. Step 3

## Relevant Files
[Include relevant specs, plans, or error messages]

## Screenshots
[If applicable]
```

## Next Section

Explore real-world [Case Studies](./case-studies) to see how others solved similar problems.
