# Onboarding Module

This module implements a 4-screen horizontal swipe onboarding flow.

## Structure

- `screens/OnboardingScreen.tsx` - Main container with FlatList and navigation
- `components/OnboardingSlide.tsx` - Reusable slide component with background image and content
- `components/PaginationDots.tsx` - Pagination indicator dots
- `types/index.ts` - TypeScript interfaces

## Assets Required

The following PNG images must be exported from Figma and placed in `assets/images/onboarding/`:

1. **slide1.png** - Welcome screen (woman exercising with rope)
   - Export from Figma node 3056:2912
   - Background image showing woman in gym setting
   - This slide displays the FB logo and "Welcome to FITBODY" text

2. **slide2.png** - Track Your Progress
   - Custom background image for progress tracking screen
   - Should show fitness tracking/analytics theme

3. **slide3.png** - Personalized Workouts  
   - Custom background image for workout customization screen
   - Should show workout/training theme

4. **slide4.png** - Stay Motivated
   - Custom background image for motivation/goals screen
   - Should show achievement/success theme

## Usage

The onboarding flow is triggered from `app/index.tsx` and redirects to `app/onboarding.tsx`.

After completing onboarding, users are redirected to `/(auth)/login`.

## Navigation Flow

```
app/index.tsx 
  → /onboarding 
    → 4 horizontal slides with swipe
      → Skip button (any slide) → /(auth)/login
      → Next button → next slide
      → Get Started button (last slide) → /(auth)/login
```

## Design System

- Primary color: #896CFE (purple for buttons)
- Accent color: #E2F163 (yellow for text/logo)
- Background overlay: Gradient from rgba(35,35,35,0.4) to rgba(35,35,35,0.8)
- Active dot: #E2F163, 24x8px
- Inactive dot: #666666, 8x8px
