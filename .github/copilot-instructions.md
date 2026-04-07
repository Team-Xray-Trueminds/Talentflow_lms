Always use context7 for documentation lookups.

When working with package or library documentation, always use Context7 MCP before relying on memory or writing code. This applies to React, Tailwind CSS, React Router, Vite, TypeScript, and any other framework, SDK, or package docs.

## Design System Adherence

When developing pages and components, you MUST follow the design system defined in [docs/design.md](../docs/design.md). Key principles:

- **No-Line Rule:** Never use 1px solid borders. Define boundaries through background color shifts or tonal transitions.
- **Surface Hierarchy:** Use `surface` (base), `surface-container-low` (secondary), and `surface-container-lowest` (primary content).
- **Glass & Gradient:** Apply glassmorphism (70% opacity + 20px backdrop-blur) to floating elements. Use gradient fills (primary to primary-container) for CTAs.
- **Typography:** Manrope for headlines/displays, Inter for body/functional data. Use `on-surface-variant` for secondary labels.
- **Shadows:** Use ambient shadows `0px 12px 32px rgba(25, 28, 30, 0.06)` for floating elements. Never use pure black shadows.
- **Borders:** Use Ghost Borders (`outline-variant` at 15% opacity) only when accessibility requires, never solid borders.
- **Components:** Primary buttons with gradient + no border. Input fields: `surface-container-highest` background, `surface-tint` focus ring. No `<hr>` dividers; use whitespace or color shifts.

Before implementing any page or component, review [docs/design.md](../docs/design.md) to ensure compliance with the design system.

## Compliance Enforcement Rules

Use these implementation rules to keep pages consistent:

- Reuse shared primitives first: prefer shared components in `src/components/` (for navigation, footer, auth UI, and repeated form patterns) before adding page-local markup.
- Avoid hard-coded visual values for core UI: use design tokens (`primary`, `surface-*`, `on-surface-*`, `outline-variant`) instead of raw hex colors for recurring surfaces, text, and actions.
- Keep auth pages structurally aligned: Login and Sign Up should share the same header/footer primitives, input treatment, divider treatment, and CTA style.
- Enforce no-line boundaries: do not add solid border separators for layout grouping; use tonal surface shifts, spacing, or ghost borders only when accessibility requires.
- Keep shadows consistent: use ambient shadow treatment (`shadow-ambient`) for floating surfaces; avoid one-off shadow values unless explicitly required by design.
- For new pages/components, include a short self-check in your implementation process:
	1. Uses shared primitives where available
	2. Uses tokenized colors and spacing
	3. No prohibited solid line separators
	4. Matches design.md interaction and typography rules
