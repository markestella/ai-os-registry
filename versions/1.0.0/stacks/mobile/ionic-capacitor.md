# Ionic + Capacitor Stack Rules

## Architecture
- Hybrid mobile application
- Ionic Framework for UI components
- Capacitor for native platform access
- React or Angular as base framework

## Project Structure
- `src/pages/` — screen-level components
- `src/components/` — reusable UI components
- `src/services/` — API and native plugin access
- `src/hooks/` — custom hooks (React)
- `src/theme/` — Ionic theme variables
- `android/` — native Android project
- `ios/` — native iOS project

## Rules
- Use Ionic components (`IonButton`, `IonList`, etc.) for consistent mobile UI
- Never use browser-only APIs directly — use Capacitor plugins
- Handle platform differences with `Capacitor.getPlatform()`
- Keep native code minimal — prefer JavaScript/TypeScript solutions
- Test on both iOS and Android simulators

## Navigation
- Use `IonReactRouter` (React) or Angular Router
- Use `IonTabs` for tab-based navigation
- Handle hardware back button on Android

## Native Access
- Camera, filesystem, notifications via Capacitor plugins
- Always handle permission requests gracefully
- Provide fallbacks for web platform

## Styling
- Use Ionic CSS variables for theming
- Respect safe areas (notch, home indicator)
- Support dark mode via `prefers-color-scheme`

## Performance
- Minimize bundle size — mobile networks are slow
- Lazy load non-critical routes
- Use virtual scrolling for long lists (`IonVirtualScroll`)
- Cache API responses for offline support

## Build & Deploy
- `npx cap sync` after dependency changes
- Test native builds before release
- Use `ionic build` then `npx cap copy` for deployment
