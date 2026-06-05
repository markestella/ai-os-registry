# PROJECT MEMORY (MULTI-STACK AWARE)

---

# 🌐 GLOBAL CONTEXT

## PROJECT TYPE
- SaaS platform (Netzon Pay / AI OS tooling)
- Multi-stack system (Backend + Frontend + Infrastructure)

## CORE ARCHITECTURE PRINCIPLES
- Separation of concerns across services
- API-first backend design
- Stateless services wherever possible
- Event-driven where applicable

## SHARED RULES (ALL STACKS)
- Always validate input DTOs
- Avoid unnecessary refactors
- Keep changes minimal and scoped
- Never break backward compatibility

---

# 🟦 STACK: .NET BACKEND

## TECHNOLOGY
- ASP.NET Core 6 / 8
- Entity Framework Core
- PostgreSQL
- Redis (optional caching)

## ARCHITECTURE
- Clean / Layered Architecture:
  Controller → Service → Repository

## RULES
- Controllers must NOT contain business logic
- Services must be stateless
- Use DTOs for all API contracts
- Avoid direct DB calls outside repositories

## PERFORMANCE RULES
- Avoid N+1 queries
- Prefer batch DB operations
- Always use async/await

## KNOWN ISSUES
- Login timeout issues in AuthService
- Race condition in payment webhook handler

---

# 🟨 STACK: FRONTEND (REACT / TSX)

## TECHNOLOGY
- React + TypeScript
- TSX components
- Tailwind CSS (if applicable)

## RULES
- Keep components small and reusable
- Avoid business logic in UI components
- Use hooks for state management
- Prefer composition over inheritance

## API INTEGRATION
- Always handle loading/error states
- Never assume API success response

---

# 🟩 STACK: NEXT.JS (IF APPLICABLE IN FRONTEND PROJECTS)

## TECHNOLOGY
- Next.js (App Router)
- Server + Client Components

## RULES
- Prefer Server Components by default
- Use Client Components only when needed
- API routes must be minimal
- Avoid unnecessary client-side fetching

---

# 🟪 STACK: INFRASTRUCTURE

## TECHNOLOGY
- Docker
- VPS (HostHatch)
- PostgreSQL
- Redis

## RULES
- Keep services containerized
- Environment variables must never be hardcoded
- Ensure idempotent deployments

---

# 🧠 ARCHITECTURE NOTES

- Backend is the source of truth
- Frontend is a thin presentation layer
- Database operations must be transactional where needed
- Redis is only for performance optimization, not core logic

---

# 🧩 IMPORTANT BUSINESS LOGIC

- Users can belong to multiple organizations
- Payments must be idempotent
- API must remain backward compatible
- Audit logs required for financial actions

---

# ⚠️ GLOBAL PERFORMANCE RULES

- Avoid N+1 queries
- Prefer batching over loops with DB calls
- Use async/await everywhere
- Minimize unnecessary API calls between services

---

# 🤖 AI BEHAVIOR NOTES

- Always respect ACTIVE_SCOPE.md
- Never assume missing stack context
- Always infer correct stack before making changes
- Prefer stack-specific rules over global rules when conflicting
- Avoid cross-stack contamination (e.g. React logic in .NET layer)

---

# 🚨 KNOWN ISSUES

- Login timeout issues in AuthService (.NET)
- Occasional race condition in payment webhook handler