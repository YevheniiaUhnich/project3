# Tech Stack Definition

## Core Framework

### React Native + Expo
**Version:** Expo SDK 51+  
**Workflow:** Managed  
**Reason:** Rapid development, OTA updates, no native config

**Key Expo Packages:**
- `expo` - Core SDK
- `expo-router` - File-based navigation
- `expo-constants` - Environment variables
- `expo-secure-store` - Secure storage (auth tokens)
- `expo-image-picker` - Profile photo
- `expo-auth-session` - OAuth flows

---

## Language

### TypeScript
**Version:** 5.x  
**Config:** Strict mode enabled  
**tsconfig.json:**
```json
{
  "extends": "expo/tsconfig.base",
  "compilerOptions": {
    "strict": true,
    "noImplicitAny": true,
    "strictNullChecks": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true
  }
}
```

---

## State Management

### Option A: Zustand (Recommended)
**Version:** 4.x  
**Size:** ~3KB  
**Reason:** Minimal boilerplate, TypeScript-first, simple API

**Packages:**
- `zustand` - State management

**Store Pattern:**
```typescript
import { create } from 'zustand';

interface State {
  user: User | null;
  setUser: (user: User) => void;
}

export const useUserStore = create<State>((set) => ({
  user: null,
  setUser: (user) => set({ user })
}));
```

### Option B: Redux Toolkit
**Version:** 2.x  
**Reason:** Familiarity, DevTools  
**Note:** More boilerplate than Zustand

**Packages:**
- `@reduxjs/toolkit`
- `react-redux`

---

## Navigation

### Expo Router
**Version:** 3.x  
**Pattern:** File-based routing  
**Reason:** Built for Expo, type-safe, deep linking

**Related:**
- `expo-router` - Routing
- `react-native-screens` - Native navigation
- `react-native-safe-area-context` - Safe areas

---

## Storage

### AsyncStorage
**Package:** `@react-native-async-storage/async-storage`  
**Version:** 1.x  
**Size Limit:** ~6MB (iOS), ~10MB (Android)  
**Use Cases:** User data, settings, cache, favorites

**Storage Keys Convention:**
```typescript
const STORAGE_KEYS = {
  USER_PROFILE: '@user_profile',
  FAVORITES: '@favorites',
  AUTH_TOKEN: '@auth_token',
  CACHE_PREFIX: '@cache_'
} as const;
```

---

## HTTP Client

### Axios
**Package:** `axios`  
**Version:** 1.x  
**Reason:** Interceptors, error handling, TypeScript support

**Alternative:** Native `fetch` (zero dependencies)

**Configuration:**
```typescript
import axios from 'axios';

const client = axios.create({
  timeout: 10000,
  headers: { 'Content-Type': 'application/json' }
});
```

---

## External APIs

### Exercise Database
**Option A:** ExerciseDB API (RapidAPI)  
**Tier:** Free  
**Limit:** 100 requests/day  
**Data:** 1300+ exercises, images, instructions

**Option B:** API Ninjas Exercises  
**Tier:** Free  
**Limit:** 50,000 requests/month

**Endpoints:**
- `/exercises` - Search exercises
- `/exercises/{id}` - Get exercise details

### Nutrition Database
**Option A:** Edamam Nutrition API  
**Tier:** Free (Developer)  
**Limit:** 10,000 requests/month  
**Data:** Nutrition analysis, recipes

**Option B:** Spoonacular API  
**Tier:** Free  
**Limit:** 150 requests/day

**Endpoints:**
- `/recipes/search` - Search recipes
- `/food/ingredients/{id}/information` - Nutrition info

### Music Preview
**Option A:** Deezer API  
**Tier:** Free  
**Data:** 30-second previews, playlists

**Option B:** Spotify Web API  
**Tier:** Free  
**Limit:** Rate-limited  
**Data:** Track previews (30s)

**Endpoints:**
- `/search` - Search tracks
- `/playlists/{id}` - Get playlist

---

## Authentication

### Email/Password
**Package:** Built-in (no package)  
**Storage:** `expo-secure-store` for tokens  
**Validation:** `zod` for schemas

### Google OAuth
**Package:** `expo-auth-session`  
**Flow:** Authorization Code with PKCE  
**Config:**
```typescript
import * as AuthSession from 'expo-auth-session';

const discovery = {
  authorizationEndpoint: 'https://accounts.google.com/o/oauth2/v2/auth',
  tokenEndpoint: 'https://oauth2.googleapis.com/token'
};
```

---

## Form Management

### React Hook Form
**Package:** `react-hook-form`  
**Version:** 7.x  
**Reason:** Performance, minimal re-renders, TypeScript

**Integration:**
```typescript
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
```

---

## Validation

### Zod
**Package:** `zod`  
**Version:** 3.x  
**Reason:** TypeScript-first, runtime validation, type inference

**Example:**
```typescript
import { z } from 'zod';

const userSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  age: z.number().min(13).max(120)
});

type User = z.infer<typeof userSchema>;
```

---

## UI Components

### Base Components
**Source:** Custom (from Figma)  
**Pattern:** Compound components  
**Styling:** StyleSheet API

**Core Components:**
- Button
- Input
- Card
- Avatar
- Tabs
- Modal
- Loader

### Icons
**Package:** `@expo/vector-icons`  
**Sets:** Ionicons, MaterialIcons, FontAwesome  
**Reason:** Built into Expo, no extra install

---

## Styling

### React Native StyleSheet
**Pattern:** Component-level styles  
**No external library** (no styled-components, no NativeWind for MVP)

**Theme Structure:**
```typescript
export const theme = {
  colors: {
    primary: '#6C63FF',
    secondary: '#FF6584',
    background: '#FFFFFF',
    text: '#333333'
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32
  },
  typography: {
    h1: { fontSize: 32, fontWeight: 'bold' },
    body: { fontSize: 16, fontWeight: 'normal' }
  }
};
```

---

## Date Handling

### date-fns
**Package:** `date-fns`  
**Version:** 3.x  
**Size:** ~70KB (tree-shakeable)  
**Reason:** Functional, immutable, lightweight

**Common Functions:**
- `format()` - Date formatting
- `parseISO()` - Parse ISO strings
- `differenceInYears()` - Age calculation

**Alternative:** Native `Date` object (zero dependencies)

---

## Code Quality

### ESLint
**Package:** `eslint`  
**Config:** Expo + TypeScript  
**Rules:**
```json
{
  "extends": [
    "expo",
    "plugin:@typescript-eslint/recommended"
  ],
  "rules": {
    "no-console": "warn",
    "@typescript-eslint/no-explicit-any": "error"
  }
}
```

### Prettier
**Package:** `prettier`  
**Config:**
```json
{
  "semi": true,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "es5"
}
```

---

## Development Tools

### TypeScript
- `typescript`
- `@types/react`
- `@types/react-native`

### Expo CLI
- `@expo/cli` - Build, run, publish

### EAS
- `eas-cli` - Build and submit to stores

---

## Testing (Post-MVP)

### Unit Testing
**Package:** `jest`  
**React Testing:** `@testing-library/react-native`

### E2E Testing
**Package:** `detox` (post-MVP)

---

## Optional/Future

### Push Notifications
**Package:** `expo-notifications`  
**Status:** Post-MVP

### Analytics
**Package:** `expo-firebase-analytics`  
**Status:** Post-MVP

### Error Tracking
**Service:** Sentry  
**Package:** `@sentry/react-native`  
**Status:** Post-MVP

---

## Package.json Dependencies

### Production
```json
{
  "dependencies": {
    "expo": "~51.0.0",
    "expo-router": "~3.5.0",
    "react": "18.2.0",
    "react-native": "0.74.0",
    "zustand": "^4.5.0",
    "@react-native-async-storage/async-storage": "^1.23.0",
    "axios": "^1.6.0",
    "expo-secure-store": "~13.0.0",
    "expo-auth-session": "~5.5.0",
    "expo-image-picker": "~15.0.0",
    "expo-constants": "~16.0.0",
    "@expo/vector-icons": "^14.0.0",
    "react-hook-form": "^7.51.0",
    "@hookform/resolvers": "^3.3.0",
    "zod": "^3.22.0",
    "date-fns": "^3.6.0"
  }
}
```

### Development
```json
{
  "devDependencies": {
    "@types/react": "~18.2.0",
    "@types/react-native": "~0.73.0",
    "typescript": "^5.3.0",
    "eslint": "^8.57.0",
    "eslint-config-expo": "^7.0.0",
    "@typescript-eslint/eslint-plugin": "^7.0.0",
    "@typescript-eslint/parser": "^7.0.0",
    "prettier": "^3.2.0"
  }
}
```

---

## Bundle Size Target

**MVP Target:** < 10MB  
**Strategy:**
- Tree-shake unused code
- Compress images
- Lazy load heavy features
- Monitor with `expo-size`

---

## Platform Support

**iOS:** 13.0+  
**Android:** 6.0+ (API 23)  
**Reason:** Covers 95%+ of active devices

---

## Build Configuration

### app.json
```json
{
  "expo": {
    "name": "FitTrack",
    "slug": "fittrack",
    "version": "1.0.0",
    "platforms": ["ios", "android"],
    "ios": {
      "bundleIdentifier": "com.fittrack.app",
      "supportsTablet": true
    },
    "android": {
      "package": "com.fittrack.app",
      "adaptiveIcon": {
        "foregroundImage": "./assets/adaptive-icon.png"
      }
    }
  }
}
```

---

## Environment Variables

### .env Structure
```
# APIs
EXERCISE_API_KEY=xxx
NUTRITION_API_KEY=xxx
MUSIC_API_KEY=xxx

# OAuth
GOOGLE_CLIENT_ID=xxx

# Feature Flags
ENABLE_MUSIC=true
ENABLE_SOCIAL=false
```

**Access:** `expo-constants`
```typescript
import Constants from 'expo-constants';
const apiKey = Constants.expoConfig?.extra?.exerciseApiKey;
```

---

## Upgrade Path

### When to Add
**Redux:** If state complexity grows  
**React Query:** If server state dominates  
**NativeWind:** If Tailwind CSS preferred  
**MST:** If complex state trees needed  
**Reanimated:** If advanced animations required

### When to Replace
**AsyncStorage → SQLite:** If data > 10MB  
**Axios → fetch:** If bundle size critical  
**Zustand → Redux:** If team prefers Redux

---

## Dependency Audit

**Run Monthly:**
```bash
npm audit
npm outdated
expo-doctor
```

**Security:**
- No packages with critical vulnerabilities
- Update dependencies quarterly
- Pin major versions
