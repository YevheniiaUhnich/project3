# Project Folder Structure

```
project3/
├── app/                                    # Expo Router (file-based routing)
│   ├── (auth)/                            # Auth group
│   │   ├── _layout.tsx                    # Auth layout
│   │   ├── login.tsx                      # Login screen
│   │   └── register.tsx                   # Register screen
│   ├── (tabs)/                            # Tab navigation group
│   │   ├── _layout.tsx                    # Tabs layout
│   │   ├── index.tsx                      # Home/Feed screen
│   │   ├── search.tsx                     # Search screen
│   │   ├── favorites.tsx                  # Favorites screen
│   │   ├── music.tsx                      # Music screen
│   │   └── profile.tsx                    # Profile screen
│   ├── nutrition/                         # Nutrition stack
│   │   ├── index.tsx                      # Nutrition home
│   │   ├── meal-plan.tsx                  # Meal plan screen
│   │   └── calculator.tsx                 # Calorie calculator
│   ├── progress/                          # Progress stack
│   │   └── index.tsx                      # Progress tracking
│   ├── tasks/                             # Tasks stack
│   │   └── index.tsx                      # Tasks today
│   ├── settings/                          # Settings stack
│   │   ├── index.tsx                      # Settings home
│   │   ├── profile-settings.tsx           # Profile settings
│   │   └── app-settings.tsx               # App settings
│   └── _layout.tsx                        # Root layout
│
├── src/
│   ├── modules/                           # Feature modules
│   │   ├── auth/                          # Authentication module
│   │   │   ├── components/                # Auth-specific components
│   │   │   ├── hooks/                     # Auth hooks
│   │   │   │   └── useAuth.ts
│   │   │   ├── screens/                   # Auth screens (legacy)
│   │   │   ├── services/                  # Auth services
│   │   │   │   └── auth.service.ts
│   │   │   ├── store/                     # Auth state
│   │   │   │   └── auth.store.ts
│   │   │   ├── types/                     # Auth types
│   │   │   │   └── index.ts
│   │   │   └── index.ts                   # Module exports
│   │   │
│   │   ├── profile/                       # Profile module
│   │   │   ├── components/
│   │   │   ├── hooks/
│   │   │   │   └── useProfile.ts
│   │   │   ├── screens/
│   │   │   ├── services/
│   │   │   │   └── profile.service.ts
│   │   │   ├── store/
│   │   │   │   └── profile.store.ts
│   │   │   ├── types/
│   │   │   │   └── index.ts
│   │   │   └── index.ts
│   │   │
│   │   ├── feed/                          # Home feed module
│   │   │   ├── components/
│   │   │   ├── hooks/
│   │   │   │   └── useFeed.ts
│   │   │   ├── screens/
│   │   │   ├── services/
│   │   │   │   └── feed.service.ts
│   │   │   ├── types/
│   │   │   │   └── index.ts
│   │   │   └── index.ts
│   │   │
│   │   ├── search/                        # Search module
│   │   │   ├── components/
│   │   │   ├── hooks/
│   │   │   │   └── useSearch.ts
│   │   │   ├── screens/
│   │   │   ├── services/
│   │   │   │   └── search.service.ts
│   │   │   ├── store/
│   │   │   │   └── search.store.ts
│   │   │   ├── types/
│   │   │   │   └── index.ts
│   │   │   └── index.ts
│   │   │
│   │   ├── favorites/                     # Favorites module
│   │   │   ├── components/
│   │   │   ├── hooks/
│   │   │   │   └── useFavorites.ts
│   │   │   ├── screens/
│   │   │   ├── services/
│   │   │   │   └── favorites.service.ts
│   │   │   ├── store/
│   │   │   │   └── favorites.store.ts
│   │   │   ├── types/
│   │   │   │   └── index.ts
│   │   │   └── index.ts
│   │   │
│   │   ├── nutrition/                     # Nutrition module
│   │   │   ├── components/
│   │   │   ├── hooks/
│   │   │   │   └── useNutrition.ts
│   │   │   ├── screens/
│   │   │   ├── services/
│   │   │   │   └── nutrition.service.ts
│   │   │   ├── store/
│   │   │   │   └── nutrition.store.ts
│   │   │   ├── types/
│   │   │   │   └── index.ts
│   │   │   └── index.ts
│   │   │
│   │   ├── progress/                      # Progress tracking module
│   │   │   ├── components/
│   │   │   ├── hooks/
│   │   │   │   └── useProgress.ts
│   │   │   ├── screens/
│   │   │   ├── services/
│   │   │   │   └── progress.service.ts
│   │   │   ├── store/
│   │   │   │   └── progress.store.ts
│   │   │   ├── types/
│   │   │   │   └── index.ts
│   │   │   └── index.ts
│   │   │
│   │   ├── tasks/                         # Daily tasks module
│   │   │   ├── components/
│   │   │   ├── hooks/
│   │   │   │   └── useTasks.ts
│   │   │   ├── screens/
│   │   │   ├── services/
│   │   │   │   └── tasks.service.ts
│   │   │   ├── store/
│   │   │   │   └── tasks.store.ts
│   │   │   ├── types/
│   │   │   │   └── index.ts
│   │   │   └── index.ts
│   │   │
│   │   ├── music/                         # Music module
│   │   │   ├── components/
│   │   │   ├── hooks/
│   │   │   │   └── useMusic.ts
│   │   │   ├── screens/
│   │   │   ├── services/
│   │   │   │   └── music.service.ts
│   │   │   ├── store/
│   │   │   │   └── music.store.ts
│   │   │   ├── types/
│   │   │   │   └── index.ts
│   │   │   └── index.ts
│   │   │
│   │   └── settings/                      # Settings module
│   │       ├── components/
│   │       ├── hooks/
│   │       │   └── useSettings.ts
│   │       ├── screens/
│   │       ├── services/
│   │       │   └── settings.service.ts
│   │       ├── store/
│   │       │   └── settings.store.ts
│   │       ├── types/
│   │       │   └── index.ts
│   │       └── index.ts
│   │
│   └── core/                              # Shared infrastructure
│       ├── api/                           # API clients
│       │   ├── client.ts                  # Base HTTP client
│       │   ├── exercise.api.ts            # Exercise API
│       │   ├── recipe.api.ts              # Recipe API
│       │   ├── music.api.ts               # Music API
│       │   └── index.ts
│       ├── components/                    # Shared components
│       ├── constants/                     # App constants
│       │   ├── app.ts
│       │   └── index.ts
│       ├── hooks/                         # Shared hooks
│       ├── storage/                       # Storage layer
│       │   ├── storage.service.ts         # AsyncStorage wrapper
│       │   ├── keys.ts                    # Storage keys
│       │   └── index.ts
│       ├── theme/                         # Theme configuration
│       │   ├── theme.ts                   # Colors, spacing, typography
│       │   └── index.ts
│       ├── types/                         # Global types
│       ├── ui/                            # UI primitives
│       │   ├── Button.tsx
│       │   ├── Input.tsx
│       │   ├── Card.tsx
│       │   └── index.ts
│       └── utils/                         # Utility functions
│           ├── calorie-calculator.ts
│           ├── exercise-calculator.ts
│           ├── date.ts
│           └── index.ts
│
├── assets/                                # Static assets
│   ├── images/                           # Images
│   └── fonts/                            # Custom fonts
│
├── .env.example                          # Environment variables template
├── .eslintrc.json                        # ESLint configuration
├── .gitignore                            # Git ignore rules
├── .prettierrc.json                      # Prettier configuration
├── app.json                              # Expo configuration
├── architecture.md                       # Architecture specification
├── constitution.md                       # Project principles
├── package.json                          # Dependencies
├── README.md                             # Project documentation
├── tech-stack.md                         # Tech stack definition
└── tsconfig.json                         # TypeScript configuration
```

## Module Structure Pattern

Each module follows this structure:

```
module-name/
├── components/       # Feature-specific React components
├── hooks/           # Custom hooks for business logic
├── screens/         # Legacy screen components (if needed)
├── services/        # Business logic and API interactions
├── store/           # Zustand state management
├── types/           # TypeScript type definitions
└── index.ts         # Public API exports
```

## Key Principles

1. **Feature-based organization** - Each module is self-contained
2. **Expo Router for navigation** - File-based routing in `/app`
3. **Shared infrastructure** - Common code in `/src/core`
4. **Clear separation** - Modules don't import from each other
5. **Type safety** - TypeScript strict mode enforced
6. **Clean exports** - Each module exports via `index.ts`

## Import Patterns

```typescript
// Module imports
import { useAuth } from '@modules/auth';
import { useProfile } from '@modules/profile';

// Core imports
import { Button, Input } from '@core/ui';
import { storageService } from '@core/storage';
import { theme } from '@core/theme';

// Relative imports within module
import { ProfileService } from './services/profile.service';
```
