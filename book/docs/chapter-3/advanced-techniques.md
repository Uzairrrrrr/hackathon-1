---
id: advanced-techniques
title: Advanced Techniques
sidebar_position: 1
---

# Advanced Spec-Driven Techniques

Take your spec-driven development to the next level with these advanced techniques.

## Multi-Agent Workflows

Leverage multiple AI agents for complex projects.

### Parallel Implementation

Create multiple implementations of the same spec to explore different approaches:

```bash
# Create three parallel implementations
sp init photo-app-react --ai claude
sp init photo-app-vue --ai copilot  
sp init photo-app-svelte --ai gemini

# Use the same spec across all three
cp photo-app-react/.specify/specs/001-photo-upload.md \
   photo-app-vue/.specify/specs/
cp photo-app-react/.specify/specs/001-photo-upload.md \
   photo-app-svelte/.specify/specs/
```

### Agent Specialization

Use different agents for different tasks:

- **Architecture Agent**: Create high-level system design
- **Implementation Agent**: Write the code
- **Testing Agent**: Generate comprehensive tests
- **Documentation Agent**: Create user guides

## Enterprise-Scale Specifications

### Monorepo Management

Structure specs for large codebases:

```
.specify/
  constitution/
    global.md
    frontend-standards.md
    backend-standards.md
    security-requirements.md
  
  specs/
    shared/
      001-design-system.md
      002-auth-system.md
    
    frontend/
      apps/
        001-admin-dashboard.md
        002-user-portal.md
      packages/
        001-component-library.md
    
    backend/
      services/
        001-user-service.md
        002-payment-service.md
      shared/
        001-api-gateway.md
```

### Cross-Team Specifications

When multiple teams collaborate:

```markdown
# Feature: Real-Time Notifications

## Team Dependencies

### Backend Team Requirements
- WebSocket endpoint: wss://api.example.com/notifications
- JWT authentication
- Message format: JSON with type discriminator
- Rate limit: 100 messages/second per user

### Frontend Team Requirements
- React hooks for connection management
- Automatic reconnection on disconnect
- Message queue for offline scenarios
- Type-safe message handlers

### DevOps Team Requirements
- Kubernetes deployment with 3 replicas
- Load balancer supporting WebSocket sticky sessions
- Monitoring dashboards for connection metrics
- Auto-scaling based on active connections
```

## Advanced Planning Strategies

### Phased Rollout Planning

Plan for incremental releases:

```markdown
# Multi-Phase Implementation

## Phase 1: MVP (Week 1-2)
- Basic CRUD operations
- Simple UI
- SQLite database
- Deploy to staging

## Phase 2: Enhancement (Week 3-4)
- Add search functionality
- Implement caching
- Migrate to PostgreSQL
- Beta release

## Phase 3: Scale (Week 5-6)
- Add Redis for sessions
- Implement rate limiting
- Add monitoring
- Production release

## Phase 4: Optimize (Week 7-8)
- Performance optimizations
- Advanced analytics
- A/B testing framework
```

### Feature Flags in Specifications

Include feature flags for controlled rollouts:

```markdown
## Feature: Advanced Search

### Flag: `advanced_search_enabled`
When enabled:
- Full-text search across all fields
- Fuzzy matching
- Search suggestions

When disabled:
- Simple exact-match search
- Search only in title field

### Rollout Strategy
- 5% of users: Day 1
- 25% of users: Day 3
- 100% of users: Day 7
```

## Custom Specification Templates

Create domain-specific templates:

### API Endpoint Template

```markdown
# API Endpoint: [METHOD] [PATH]

## Authentication
- [ ] Public
- [ ] Authenticated
- [ ] Admin only

## Request

### Headers
| Header | Required | Description |
|--------|----------|-------------|
| Content-Type | Yes | application/json |

### Body Schema
```json
{
  "field1": "string",
  "field2": "number"
}
```

## Response

### Success (200)
```json
{
  "id": "uuid",
  "created_at": "timestamp"
}
```

### Error (400)
```json
{
  "error": "Error message",
  "code": "ERROR_CODE"
}
```

## Validation Rules
- Field1: 1-255 characters
- Field2: Positive integer

## Rate Limiting
- 100 requests per minute per user

## Testing Scenarios
- [ ] Valid request returns 200
- [ ] Missing field returns 400
- [ ] Unauthorized returns 401
- [ ] Rate limit returns 429
```

### UI Component Template

```markdown
# Component: [ComponentName]

## Props
| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| prop1 | string | Yes | - | Description |
| prop2 | number | No | 0 | Description |

## States
- Loading
- Error
- Empty
- Success

## Accessibility
- [ ] Keyboard navigable
- [ ] Screen reader friendly
- [ ] Focus visible
- [ ] ARIA labels

## Responsive Behavior
- Mobile: [behavior]
- Tablet: [behavior]
- Desktop: [behavior]

## Test Cases
- [ ] Renders with default props
- [ ] Handles loading state
- [ ] Displays error message
- [ ] Calls onAction callback
```

## Integration with CI/CD

### Automated Spec Validation

Create GitHub Actions to validate specs:

```yaml
name: Validate Specifications

on: [pull_request]

jobs:
  validate-specs:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Install Spec-Kit Plus
        run: |
          curl -LsSf https://astral.sh/uv/install.sh | sh
          uv tool install specifyplus
      
      - name: Run Spec Analysis
        run: |
          sp analyze
          sp checklist
      
      - name: Check for Consistency
        run: |
          # Custom validation script
          ./scripts/validate-specs.sh
```

### Specification-Driven Tests

Generate tests from specifications:

```typescript
// Auto-generated from spec
describe('User Authentication', () => {
  // From spec requirement: "Password must be at least 8 characters"
  it('rejects passwords shorter than 8 characters', () => {
    expect(() => validatePassword('short')).toThrow();
  });
  
  // From spec requirement: "Email verification required before login"
  it('prevents login before email verification', async () => {
    const user = await createUnverifiedUser();
    await expect(login(user.email, user.password)).rejects.toThrow();
  });
});
```

## Performance Optimization Specs

Specify performance requirements clearly:

```markdown
# Performance Requirements

## Page Load Performance
- First Contentful Paint (FCP): < 1.5s
- Largest Contentful Paint (LCP): < 2.5s
- Time to Interactive (TTI): < 3.5s
- Cumulative Layout Shift (CLS): < 0.1

## API Response Times (95th percentile)
- GET /api/users: < 100ms
- POST /api/users: < 200ms
- GET /api/search: < 500ms

## Database Queries
- All queries must use indexes
- No N+1 query problems
- Query execution time < 50ms

## Bundle Size
- Initial JavaScript bundle: < 200KB gzipped
- CSS bundle: < 50KB gzipped
- Total page weight: < 500KB

## Monitoring
- Set up alerts for performance degradation
- Track Core Web Vitals in production
- Log slow queries automatically
```

## Security Specifications

Define security requirements:

```markdown
# Security Requirements

## Authentication
- JWT tokens with 15-minute expiry
- Refresh tokens with 7-day expiry
- Tokens stored in httpOnly cookies
- CSRF protection enabled

## Authorization
- Role-based access control (RBAC)
- Permission checks on every endpoint
- Principle of least privilege

## Data Protection
- All sensitive data encrypted at rest
- TLS 1.3 for data in transit
- PII data encrypted in database
- Secure key rotation every 90 days

## Input Validation
- Sanitize all user inputs
- SQL injection prevention
- XSS protection
- CSRF tokens on all forms

## Audit Logging
- Log all authentication attempts
- Log all permission failures
- Log all data access
- Retain logs for 1 year
```

## Next Section

Learn how to handle [Troubleshooting](./troubleshooting) when things don't go as planned.
