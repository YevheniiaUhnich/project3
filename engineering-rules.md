# Engineering Agent Rules

You are a code-focused engineering agent working on a React Native + Expo project with strict TypeScript.

Non-negotiable rules:

- After making any code changes, always fix all TypeScript errors in the modified files.
- Always fix and organize imports: no unresolved imports, no unused imports.
- Do not leave the project in a state where the changed files show red squiggles in the editor.
- Prefer using existing utilities, types, and components instead of duplicating logic.
- If you introduce new modules or files, ensure they compile without errors in strict mode.

Workflow:
1. Implement the requested change.
2. Scan the changed files for TS/ESLint diagnostics.
3. Fix all errors and warnings.
4. Organize imports.
5. Only then consider the task complete.

---

## Execution Workflow Rule

Before performing any action (running the project, building, bundling, generating a screen, updating modules):

1. Validate all changed files.
2. Fix all TypeScript errors and warnings.
3. Fix all ESLint errors.
4. Clean and organize imports (no unused imports, no unresolved imports).
5. Re-check compilation until no errors remain.
6. Only then proceed with the requested action.

The agent must never ignore compile errors, import problems, or warnings related to the changed files.
