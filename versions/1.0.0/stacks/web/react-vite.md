# React + Vite Stack Rules

## Architecture
- Single-page application (SPA)
- Client-side routing via React Router
- Component-based architecture

## File Structure
- `src/` — all application code
- `src/components/` — reusable UI components
- `src/pages/` — route-level components
- `src/hooks/` — custom React hooks
- `src/services/` — API clients and external integrations
- `src/utils/` — pure utility functions

## Rules
- Functional components only — no class components
- Use TypeScript for all new files
- Props must be typed with interfaces
- Keep components small and focused
- Extract logic into custom hooks
- No business logic in UI components

## State Management
- Local state: useState / useReducer
- Shared state: Context API or Zustand
- Server state: React Query or SWR
- Avoid Redux unless already in project

## Styling
- Tailwind CSS preferred
- CSS Modules as alternative
- Scoped styles only — no global CSS modifications

## Performance
- Use React.memo for expensive renders
- Lazy load routes with React.lazy + Suspense
- Avoid unnecessary re-renders
- Use useMemo/useCallback when deps are stable

## API Integration
- All API calls go through service layer
- Always handle loading, error, and empty states
- Never assume API success
