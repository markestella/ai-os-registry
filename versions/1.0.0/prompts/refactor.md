# PROMPT: Refactor

## Context
You are refactoring existing code. Follow these rules strictly.

## Process
1. Read TASK.md to understand the refactoring goal
2. Read ACTIVE_SCOPE.md — only touch scoped files
3. Analyze current code structure and identify issues
4. Create PLAN.md with:
   - Current state analysis
   - Target state description
   - Step-by-step transformation plan
   - Risk assessment

## Rules
- Preserve all existing behavior — refactoring must not change functionality
- Make changes incrementally — verify at each step
- Do not change public API contracts unless explicitly scoped
- Keep backward compatibility
- Do not combine refactoring with feature changes
- Extract only when duplication is proven (3+ occurrences)
- Prefer simple renames and moves over complex abstractions

## Output
- Current vs target architecture comparison
- Ordered list of safe transformations
- Before/after code for each change
- Verification that behavior is preserved
