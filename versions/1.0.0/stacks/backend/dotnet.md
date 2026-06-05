# .NET Backend Stack Rules

## Architecture
- Clean / Layered Architecture: Controller → Service → Repository
- ASP.NET Core Web API
- Entity Framework Core for data access
- PostgreSQL as primary database

## Project Structure
- `Controllers/` — API endpoints (thin, no business logic)
- `Services/` — business logic layer
- `Repositories/` — data access layer
- `Models/` — domain entities
- `DTOs/` — data transfer objects
- `Middleware/` — custom middleware
- `Extensions/` — service registration helpers

## Rules
- Controllers must NOT contain business logic
- Services must be stateless and injected via DI
- Use DTOs for all API request/response contracts
- Never expose domain entities directly to API consumers
- Use async/await for all I/O operations
- Repository pattern for all database access

## Database
- Use EF Core migrations for schema changes
- Avoid raw SQL unless performance-critical
- Prevent N+1 queries — use `.Include()` or projections
- Use transactions for multi-step operations
- Batch operations where possible

## Error Handling
- Use middleware for global exception handling
- Return proper HTTP status codes
- Never expose stack traces in production responses
- Use ProblemDetails format for error responses

## Security
- Validate all input DTOs with data annotations or FluentValidation
- Never trust client input
- Use authorization policies, not role checks in controllers
- Never hardcode connection strings or secrets

## Performance
- Use async/await throughout
- Prefer `IQueryable` projections over loading full entities
- Use Redis for caching when appropriate
- Avoid blocking calls (`.Result`, `.Wait()`)

## Testing
- Unit test services with mocked repositories
- Integration test API endpoints
- Never test implementation details
