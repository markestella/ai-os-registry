# Svelte Stack Rules

## Architecture
- Component-driven SPA or SSR via SvelteKit
- File-based routing (SvelteKit)
- Reactive declarations with `$:` syntax

## File Structure
- `src/routes/` — page routes (SvelteKit)
- `src/lib/` — shared components, utilities, stores
- `src/lib/components/` — reusable components
- `src/lib/stores/` — Svelte stores
- `static/` — static assets

## Rules
- Use `.svelte` files for components
- Prefer Svelte stores over prop drilling
- Keep components small and focused
- Use TypeScript in `<script lang="ts">`
- Use `+page.svelte` / `+layout.svelte` for routing (SvelteKit)

## Data Loading (SvelteKit)
- Use `+page.server.ts` for server-side data loading
- Use `+page.ts` for universal load functions
- Form actions via `+page.server.ts` actions
- Never fetch in `onMount` when server load is available

## Styling
- Scoped styles in `<style>` blocks
- Tailwind CSS as utility layer
- No global style modifications

## Reactivity
- Use `$:` for derived state
- Use writable/readable stores for shared state
- Avoid complex reactive chains

## Performance
- Components are compiled — minimal runtime overhead
- Use `{#await}` blocks for async rendering
- Lazy load heavy components with dynamic imports
