---
id: examples
title: Examples
sidebar_position: 3
---

# Real-World Examples

Learn from complete, real-world examples of spec-driven development.

## Example 1: Todo Application

Let's build a todo application using the spec-driven approach.

### Step 1: Constitution

```markdown
# Todo App Constitution

## Code Quality
- TypeScript with strict mode
- 100% type coverage
- ESLint + Prettier enforced
- Unit tests for all business logic

## Architecture
- Clean separation of concerns
- No direct DOM manipulation in business logic
- LocalStorage for persistence
- No external dependencies for core features

## User Experience
- Keyboard accessible
- Mobile responsive
- Loading states for all actions
- Optimistic UI updates
```

### Step 2: Specification

```markdown
# Todo Application Specification

## Overview
A simple, fast todo list application for managing daily tasks.

## User Stories

When I open the app,
I want to see all my todos,
so I can review what needs to be done.

When I've completed a task,
I want to mark it as done,
so I can track my progress.

When I need to add a task,
I want to quickly enter it,
so I can capture ideas immediately.

## Functional Requirements

### Task Management
- Add new todos with text description
- Mark todos as complete/incomplete
- Delete todos
- Edit existing todo text

### Data Persistence
- Todos persist across browser sessions
- No account required
- Works offline

### User Interface
- List view showing all todos
- Visual distinction between complete/incomplete
- Inline editing
- Keyboard shortcuts (Enter to add, Esc to cancel)

## Non-Functional Requirements

### Performance
- Instant feedback on all actions
- No loading spinners for local operations
- Smooth animations under 200ms

### Accessibility
- Keyboard navigable
- Screen reader friendly
- Clear focus indicators

## Success Criteria
- Can add 100 todos without performance degradation
- Works without internet connection
- All interactions possible via keyboard
- Passes WCAG 2.1 Level AA
```

### Step 3: Technical Plan

```markdown
# Todo App Implementation Plan

## Tech Stack
- Vanilla TypeScript (no framework)
- Vite for build tooling
- Vitest for testing
- CSS Modules for styling

## Architecture

### Data Layer
```typescript
interface Todo {
  id: string;
  text: string;
  completed: boolean;
  createdAt: number;
}

class TodoStore {
  load(): Todo[]
  save(todos: Todo[]): void
  subscribe(callback: (todos: Todo[]) => void): void
}
```

### Business Logic
```typescript
class TodoService {
  add(text: string): void
  toggle(id: string): void
  remove(id: string): void
  update(id: string, text: string): void
}
```

### UI Layer
- TodoList component
- TodoItem component
- TodoInput component

## File Structure
```
src/
  models/
    Todo.ts
  services/
    TodoService.ts
    TodoStore.ts
  components/
    TodoList.ts
    TodoItem.ts
    TodoInput.ts
  styles/
    main.css
  main.ts
  index.html
```

## Implementation Phases
1. Data models and storage
2. Business logic and tests
3. UI components
4. Keyboard shortcuts
5. Accessibility enhancements
```

### Step 4: Tasks

```markdown
# Implementation Tasks

## Phase 1: Foundation
- [ ] Create Todo interface and types
- [ ] Implement TodoStore with localStorage
- [ ] Write tests for TodoStore

## Phase 2: Business Logic
- [ ] Implement TodoService
- [ ] Add CRUD operations
- [ ] Write comprehensive unit tests
- [ ] Add observer pattern for state updates

## Phase 3: UI Components
- [ ] Create TodoInput component
- [ ] Create TodoItem component
- [ ] Create TodoList component
- [ ] Wire up event handlers

## Phase 4: Enhancement
- [ ] Add keyboard shortcuts
- [ ] Implement inline editing
- [ ] Add animations
- [ ] Ensure accessibility
```

### Step 5: Implementation

Use `/sp.implement` to execute all tasks!

## Example 2: Weather Dashboard

A more complex example with API integration.

### Specification (Excerpt)

```markdown
# Weather Dashboard

## Overview
Real-time weather dashboard showing current conditions
and 5-day forecast for user's location.

## Requirements

### Weather Display
- Current temperature and conditions
- Feels-like temperature
- Humidity and wind speed
- 5-day forecast with daily highs/lows

### Location
- Auto-detect user location
- Search for any city worldwide
- Save favorite locations

### Data Source
- Use OpenWeatherMap API
- Cache data for 10 minutes
- Graceful fallback for API errors

### UI/UX
- Weather icons for conditions
- Temperature unit toggle (C/F)
- Responsive layout
- Dark mode support
```

### Plan (Excerpt)

```typescript
// API Service
interface WeatherService {
  getCurrentWeather(lat: number, lon: number): Promise<Weather>
  getForecast(lat: number, lon: number): Promise<Forecast[]>
  searchCity(query: string): Promise<City[]>
}

// State Management
interface AppState {
  currentWeather: Weather | null
  forecast: Forecast[]
  selectedCity: City
  favorites: City[]
  unit: 'celsius' | 'fahrenheit'
  loading: boolean
  error: Error | null
}
```

## Example 3: This Book!

### The Specification

```markdown
# AI-Driven Book with Docusaurus

## Overview
Create a technical book about spec-driven development,
deployed automatically to GitHub Pages.

## Requirements
- Multiple chapters with nested sections
- Code syntax highlighting
- Mermaid diagrams support
- Search functionality
- Mobile responsive
- Auto-deploy on push to main

## Tech Stack
- Docusaurus v3
- TypeScript
- GitHub Actions for CI/CD
- GitHub Pages for hosting
```

### Implementation

This very book was created by:

1. Running `sp init book --ai copilot`
2. Using `/sp.specify` to define the book structure
3. Using `/sp.plan` to decide on Docusaurus
4. Using `/sp.tasks` to break down chapters
5. Using `/sp.implement` to generate content

## Key Takeaways

From these examples, notice:

1. **Specifications are clear but flexible**: They describe outcomes, not implementation
2. **Plans add technical details**: Technology choices happen at the planning stage
3. **Tasks are actionable**: Each task is concrete and testable
4. **AI handles implementation**: The AI writes code based on clear specs

## Try These Examples

Clone the example repositories and experiment:

```bash
# Todo App
git clone https://github.com/spec-kit-examples/todo-app

# Weather Dashboard
git clone https://github.com/spec-kit-examples/weather-dashboard
```

## Next Chapter

Ready for advanced topics? Continue to [Chapter 3: Advanced Topics](../chapter-3/advanced-techniques).
