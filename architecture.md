# Architecture Specification

## System Overview

**Type:** Client-side mobile application  
**Pattern:** Feature-based modular architecture  
**State Management:** Centralized (Zustand/Redux)  
**Navigation:** File-based routing (Expo Router)

---

## Architecture Layers

```
┌─────────────────────────────────────┐
│         Presentation Layer          │
│  (Screens, Components, Navigation)  │
└─────────────────────────────────────┘
                 ↓
┌─────────────────────────────────────┐
│         Business Logic Layer        │
│    (Hooks, Services, Validators)    │
└─────────────────────────────────────┘
                 ↓
┌─────────────────────────────────────┐
│          State Layer                │
│      (Zustand/Redux Stores)         │
└─────────────────────────────────────┘
                 ↓
┌─────────────────────────────────────┐
│          Data Layer                 │
│  (API Clients, AsyncStorage, Cache) │
└─────────────────────────────────────┘
```

---

## Module Structure

### Feature Module Template
```
module-name/
├── screens/          # Screen components
├── components/       # Feature-specific components
├── hooks/           # Custom hooks
├── services/        # Business logic
├── store/           # State management
├── types/           # TypeScript definitions
├── utils/           # Helpers
└── index.ts         # Public exports
```

### Core Modules

#### 1. Profile
**Responsibility:** User data management, settings  
**State:** User profile, preferences  
**External:** Auth API (future), AsyncStorage

#### 2. Feed (Home)
**Responsibility:** Daily content aggregation  
**State:** Feed items, recommendations  
**External:** Exercise API, Nutrition API

#### 3. Search
**Responsibility:** Exercise/recipe discovery  
**State:** Search query, results, filters  
**External:** Exercise API, Recipe API

#### 4. Favorites
**Responsibility:** Saved items management  
**State:** Favorites list (exercises, videos, recipes)  
**External:** AsyncStorage

#### 5. Nutrition
**Responsibility:** Meal planning, calorie tracking  
**State:** Daily meals, calorie goals, nutrition data  
**External:** Recipe API, Nutrition DB

#### 6. Progress
**Responsibility:** Fitness metrics tracking  
**State:** Workout history, body metrics  
**External:** AsyncStorage

#### 7. TasksToday
**Responsibility:** Daily challenges/goals  
**State:** Today's tasks, completion status  
**External:** Exercise API

#### 8. Music
**Responsibility:** Workout playlists  
**State:** Current playlist, player state  
**External:** Music preview API

#### 9. Settings
**Responsibility:** App configuration  
**State:** App settings, notifications, privacy  
**External:** AsyncStorage

---

## Data Flow

### Read Flow
```
UI Component → Custom Hook → Store → Service → API/Storage → Cache
```

### Write Flow
```
UI Action → Store Action → Service → API/Storage → Store Update → UI Re-render
```

### Cache Strategy
```
Request → Check Cache → [Hit: Return] / [Miss: API → Cache → Return]
```

---

## State Management Design

### Store Structure (Zustand)
```typescript
stores/
├── auth.store.ts       # Authentication state
├── profile.store.ts    # User profile
├── favorites.store.ts  # Saved items
├── nutrition.store.ts  # Meal tracking
├── progress.store.ts   # Fitness metrics
├── search.store.ts     # Search state
├── tasks.store.ts      # Daily tasks
└── settings.store.ts   # App settings
```

### State Principles
- Single source of truth
- Immutable updates
- Normalized data
- Derived state via selectors
- Optimistic updates

---

## Navigation Architecture

### Route Structure (Expo Router)
```
app/
├── (auth)/
│   ├── login.tsx
│   └── register.tsx
├── (tabs)/
│   ├── index.tsx       # Home/Feed
│   ├── search.tsx
│   ├── favorites.tsx
│   ├── music.tsx
│   └── profile.tsx
├── nutrition/
│   ├── index.tsx
│   ├── meal-plan.tsx
│   └── calculator.tsx
├── progress/
│   └── index.tsx
├── tasks/
│   └── index.tsx
└── settings/
    ├── index.tsx
    ├── profile-settings.tsx
    └── app-settings.tsx
```

### Navigation Patterns
- Tab navigation for main sections
- Stack navigation within features
- Modal for quick actions
- Deep linking ready

---

## API Integration

### API Client Architecture
```typescript
core/api/
├── client.ts          # Base HTTP client
├── interceptors.ts    # Request/response handling
├── cache.ts           # Response caching
└── endpoints/
    ├── exercises.ts
    ├── recipes.ts
    └── music.ts
```

### API Client Pattern
```typescript
// Base client with error handling, caching, retries
class APIClient {
  request()
  get()
  post()
  handleError()
  cacheResponse()
}

// Feature-specific clients
class ExerciseAPI extends APIClient {
  searchExercises()
  getExerciseById()
}
```

### Error Handling Strategy
```
API Error → Interceptor → Error Boundary → User Notification
```

---

## Storage Architecture

### AsyncStorage Schema
```typescript
Keys:
- @user_profile         # User data
- @user_preferences     # Settings
- @favorites_exercises  # Saved exercises
- @favorites_videos     # Saved videos
- @favorites_recipes    # Saved recipes
- @progress_history     # Workout history
- @nutrition_log        # Daily meals
- @cache_exercises_*    # API cache
- @cache_recipes_*      # API cache
- @auth_token           # JWT token
```

### Storage Service Pattern
```typescript
class StorageService {
  async get<T>(key: string): Promise<T | null>
  async set<T>(key: string, value: T): Promise<void>
  async remove(key: string): Promise<void>
  async clear(): Promise<void>
}
```

---

## Authentication Flow

### Login Sequence
```
1. User enters credentials
2. Validate input
3. Call auth API (future) / Mock auth
4. Store token in AsyncStorage
5. Update auth store
6. Navigate to app
```

### OAuth Flow (Google)
```
1. Open OAuth prompt
2. Receive token
3. Exchange for app token
4. Store credentials
5. Update auth store
6. Navigate to app
```

### Session Management
```
App Launch → Check Token → [Valid: Load User] / [Invalid: Login Screen]
```

---

## Component Architecture

### Component Hierarchy
```
Screen
└── Layout
    └── Feature Components
        └── UI Components
            └── Atoms
```

### Component Categories

**Screens** (`/screens`)  
- Full-page views
- Route-connected
- Orchestrate features

**Feature Components** (`/modules/*/components`)  
- Module-specific
- Business logic aware
- Reusable within module

**Shared Components** (`/core/components`)  
- Cross-module
- Generic UI elements
- No business logic

**UI Primitives** (`/core/ui`)  
- Button, Input, Card, etc.
- Design system foundation
- Style-only components

---

## Performance Optimization

### Code Splitting
- Lazy load screens via Expo Router
- Dynamic imports for heavy features
- Conditional module loading

### Rendering Optimization
- React.memo for expensive components
- useMemo for calculations
- useCallback for function props
- FlatList for lists

### Data Optimization
- Pagination for API results
- Incremental loading
- Request deduplication
- Background data refresh

---

## Security Architecture

### Data Security
- Encrypted AsyncStorage keys for sensitive data
- No plain text passwords
- Secure token storage
- API key obfuscation

### Input Validation
- Client-side validation
- Server-side validation (future)
- Sanitize user input
- Type checking (TypeScript)

---

## Calculator Algorithms

### Calorie Calculator
```
BMR = Mifflin-St Jeor equation
TDEE = BMR × Activity Factor
Goal Calories = TDEE ± Deficit/Surplus
```

### Exercise Load Calculator
```
Level 1 (Beginner): Base load × 0.6
Level 2 (Intermediate): Base load × 1.0
Level 3 (Advanced): Base load × 1.4

Base Load = f(user weight, age, fitness level)
```

---

## Extension Points

### Backend Integration (Future)
```
Current: API Clients → External APIs
Future:  API Clients → Backend → External APIs

Changes Required:
- Add backend client
- Update auth flow
- Add data sync
- Migrate AsyncStorage → Backend
```

### Feature Toggles
```typescript
const features = {
  socialFeeds: false,      // Post-MVP
  pushNotifications: false, // Post-MVP
  offlineMode: false,       // Post-MVP
  advancedAnalytics: false  // Post-MVP
}
```

---

## Dependency Graph

```
Profile ──────┐
Feed ─────────┤
Search ───────┤
Favorites ────┤──→ Core (API, Storage, UI)
Nutrition ────┤
Progress ─────┤
TasksToday ───┤
Music ────────┤
Settings ─────┘

No inter-module dependencies
All modules depend only on Core
```

---

## Build Architecture

### Build Targets
- Development: Expo Go
- Staging: EAS Build (internal)
- Production: EAS Build (stores)

### Environment Configuration
```
.env.development
.env.staging
.env.production

Variables:
- API_BASE_URL
- API_KEYS
- FEATURE_FLAGS
```

---

## Testing Strategy

### Test Pyramid (Post-MVP)
```
        E2E
       /   \
   Integration
     /       \
   Unit Tests
```

### Critical Paths (MVP)
- User registration/login
- Profile creation
- Calorie calculation
- Exercise search
- Favorites save/load

---

## Monitoring & Logging

### Error Tracking
- Error boundaries at screen level
- Console errors in development
- Sentry integration (post-MVP)

### Performance Monitoring
- React Native Performance Monitor
- Custom metrics (post-MVP)

---

## Migration Strategy

### AsyncStorage → Backend
```
Phase 1: Dual write (local + remote)
Phase 2: Remote primary, local fallback
Phase 3: Remote only, local cache
```

### API Changes
- Version endpoints
- Deprecation warnings
- Graceful fallbacks
