# PROMPT: Bug Fix

## Context
You are fixing a bug in the codebase. Follow these rules strictly.

## Process
1. Read TASK.md to understand the bug description
2. Read ACTIVE_SCOPE.md — only inspect scoped files
3. Identify the root cause before making changes
4. Create PLAN.md with:
   - Root cause analysis
   - Minimal fix strategy
   - Files to modify
   - Expected outcome

## Rules
- Fix the root cause, not the symptom
- Make the smallest possible change
- Do not refactor surrounding code
- Do not change unrelated logic
- Preserve existing formatting
- Add error handling only if the bug requires it
- Do not introduce new dependencies

## Output
- Analysis of the bug
- Exact files and lines to change
- Before/after code snippets
- Verification steps
