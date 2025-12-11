# FitTrack

React Native (Expo) mobile fitness application.

## Documentation

- [Constitution](./constitution.md) - Project principles and rules
- [Architecture](./architecture.md) - System design and patterns
- [Tech Stack](./tech-stack.md) - Technologies and dependencies

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm start

# Run on iOS
npm run ios

# Run on Android
npm run android
```

## Project Structure

```
project3/
├── app/                    # Expo Router screens
├── src/
│   ├── modules/           # Feature modules
│   └── core/              # Shared infrastructure
├── assets/                # Images, fonts
├── constitution.md        # Project principles
├── architecture.md        # Architecture spec
└── tech-stack.md         # Tech stack definition
```

## MVP Features

- User profile management
- Exercise search
- Calorie calculator
- Exercise load calculator
- Favorites management
- Home feed
- Progress tracking

## Tech Stack

- React Native (Expo SDK 51+)
- TypeScript (strict mode)
- Zustand (state management)
- Expo Router (navigation)
- AsyncStorage (local storage)
- Axios (HTTP client)
