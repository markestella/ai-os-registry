# Next.js Stack Rules

## Architecture
- Use App Router (app/) by default
- Prefer Server Components unless client interactivity is required
- Use `"use client"` directive only when necessary
- API routes go in app/api/ using Route Handlers

## File Structure
- `app/` — routes and layouts
- `components/` — shared UI components
- `lib/` — utilities, helpers, API clients
- `public/` — static assets

## Rules
- Never use `getServerSideProps` or `getStaticProps` (Pages Router patterns)
- Prefer `fetch()` in Server Components over client-side data fetching
- Use `loading.tsx` and `error.tsx` for route-level states
- Keep `layout.tsx` minimal — no business logic
- Use `next/image` for all images
- Use `next/link` for internal navigation

## Data Fetching
- Server Components: fetch directly, no useEffect
- Client Components: use SWR or React Query
- API routes: validate all input, return proper status codes

## Styling
- Tailwind CSS preferred
- CSS Modules as alternative
- No inline styles in production code

## Performance
- Minimize client bundle — keep components server-side where possible
- Use dynamic imports for heavy client components
- Avoid loading entire libraries when only specific functions are needed

## Security
- Validate all API route inputs
- Never expose server-only secrets to client components
- Use environment variable prefixing (NEXT_PUBLIC_ only for client)
