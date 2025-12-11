# Project Constitution

## Project Identity
**Name:** FitTrack  
**Type:** React Native (Expo) Mobile Application  
**Domain:** Fitness & Health  
**Purpose:** Personalized training and nutrition tracking

---

## Core Principles

### Minimalism
- No overengineering
- Minimal dependencies
- Clean modular architecture
- Progressive feature rollout

### Technical Constraints
- **No** heavy native modules
- **No** paid APIs
- **No** complex native integrations
- **Expo-compatible** solutions only

### Code Quality
- TypeScript strict mode mandatory
- ESLint + Prettier enforced
- Component-based architecture
- Functional programming preferred
- Pure functions where possible

---

## MVP Scope

### Included Features
- User profile management
- Exercise search
- Calorie calculator
- Exercise load calculator (3 difficulty levels)
- Favorites management
- Home feed
- Progress tracking

### Excluded from MVP
- Social features
- Workout reminders/notifications
- Advanced analytics
- Payment integration
- Offline video playback
- Themes (optional for future)

---

## Data Management Rules

### Storage Strategy
- AsyncStorage for local data
- API response caching
- No database required for MVP
- Cache expiration: 24h for exercises, 7d for user data

### User Data
- Minimal required fields
- Local-first storage
- Privacy by design
- No analytics tracking in MVP

---

## API Integration Rules

### External APIs
- Free/open APIs only
- Fallback strategies required
- Rate limit handling
- Error boundaries mandatory

### Approved API Categories
- Exercise databases (free tier)
- Recipe/nutrition APIs (free tier)
- Music streaming (preview APIs)

---

## Authentication Rules

### Supported Methods
- Email/password (primary)
- Google OAuth (secondary)

### Security Requirements
- Secure token storage
- Session management
- Auto-logout after 30 days

---

## Module Architecture

### Core Modules
1. **Profile** - User data, settings
2. **Feed** - Home screen, daily content
3. **Search** - Exercise/recipe search
4. **Favorites** - Saved items
5. **Nutrition** - Meal plans, calorie calculator
6. **Progress** - Tracking metrics
7. **TasksToday** - Daily challenges
8. **Music** - Workout playlists
9. **Settings** - App/profile configuration

### Module Independence
- Each module is self-contained
- Shared utilities via `/core`
- No circular dependencies
- Communication via state management only

---

## File Structure Rules

### Naming Conventions
- PascalCase for components
- camelCase for functions/variables
- kebab-case for files
- Index exports for modules

### Organization
- Feature-based folders
- Co-location of related files
- Shared code in `/core`
- Types in `/types`

---

## Development Standards

### Code Style
- Functional components only
- Hooks for state management
- PropTypes via TypeScript
- No inline styles (use StyleSheet)

### Testing Philosophy
- Critical paths only for MVP
- Manual testing acceptable
- Automated tests post-MVP

### Performance
- Lazy loading for screens
- Memoization for expensive renders
- FlatList for long lists
- Image optimization

---

## Deployment

### Build Target
- Expo managed workflow
- EAS Build for production
- OTA updates enabled

### Environments
- Development (local)
- Staging (EAS)
- Production (app stores)

---

## Decision Log Format

### When Adding Dependencies
```
Dependency: <name>
Reason: <why needed>
Alternatives: <what was considered>
Size: <bundle impact>
```

### When Changing Architecture
```
Change: <what changed>
Motivation: <why>
Impact: <modules affected>
Rollback: <how to revert>
```

---

## Review Checklist

Before merging:
- [ ] TypeScript strict passes
- [ ] ESLint clean
- [ ] No console.logs
- [ ] No hardcoded strings (use i18n structure)
- [ ] AsyncStorage keys documented
- [ ] API errors handled
- [ ] Loading states implemented

---

## Non-Negotiable Rules

1. **No commit to main** without review
2. **No external API calls** without error handling
3. **No state mutations** (immutable patterns only)
4. **No any types** (TypeScript strict)
5. **No component files > 300 lines**
6. **No function files > 150 lines**
7. **No prop drilling > 2 levels** (use state management)

---

## Evolution Strategy

### Post-MVP Priorities
1. Backend integration
2. Push notifications
3. Social features
4. Advanced analytics
5. Premium features

### Refactoring Triggers
- File > size limit
- Module dependencies > 3 levels
- Performance issues
- Security vulnerabilities

---

## Code health rules

- Будь-які зміни в коді не можна вважати завершеними, якщо в проєкті є TypeScript помилки або ESLint помилки, повʼязані з цими змінами.
- Агент зобовʼязаний завжди:
  - виправляти імпорти після змін (жодних unused/import errors)
  - виправляти TypeScript помилки, повʼязані зі змінами
  - використовувати існуючі утиліти та типи замість дублювання
  - тримати файли в стані, коли редактор не показує помилок для щойно змінених ділянок коду.
- Заборонено залишати тимчасовий або некомпільований код у гілці main.

---

## Pre-Execution Validation Rules

- Перед будь-яким запуском, виконанням коду або онбордингом нового екрану, агент зобов'язаний:
  - перевіряти всі змінені файли на TypeScript помилки;
  - перевіряти ESLint помилки;
  - виправляти всі імпорти: жодних `unused`, жодних `cannot find module`;
  - автоматично організовувати імпорти після будь-якої зміни;
  - приводити код у стан, де редактор не показує червоних підкреслень;
  - ніколи не запускати проєкт у стані з помилками;
  - суворо дотримуватися строгого режиму TypeScript.

- Будь-які зміни не вважаються завершеними, доки агент не відновить компіляцію без помилок.
