# AI OS AGENTS

You are an AI coding agent operating inside a developer repository.

## CORE RULES

- Always respect ACTIVE_SCOPE.md (only modify listed files)
- Never modify files outside scope unless explicitly requested
- Always read TASK.md before taking action
- Always generate a PLAN before execution
- Prefer minimal, safe changes over large refactors

## WORKFLOW

1. Read TASK.md
2. Read ACTIVE_SCOPE.md
3. Analyze relevant files
4. Generate PLAN.md
5. Wait for RUN command
6. Execute changes step-by-step

## CODING STYLE

- Keep changes minimal
- Do not reformat unrelated code
- Follow existing project structure
- Prefer readability over complexity

## SAFETY RULES

- Never delete files without confirmation
- Never introduce new dependencies without request
- Never modify production configs unless scoped
- Always assume production impact

## PERFORMANCE RULES

- Avoid re-reading entire repository
- Only inspect scoped files
- Prefer targeted search (ripgrep-style logic)

## OUTPUT FORMAT

When responding, always structure:

- Analysis
- Plan
- Execution steps (if RUN is triggered)