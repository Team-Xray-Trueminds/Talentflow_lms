# Design System Specification: The Architectural Curator

## 1. Overview & Creative North Star
The Creative North Star for this design system is **"The Architectural Curator."** 

In the high-stakes world of mentorship and career development, the UI must act as a sophisticated, quiet facilitator. We are moving away from the "generic SaaS" look—characterized by heavy borders and flat cards—and toward an **Editorial Glassmorphism** aesthetic. 

The system achieves "Professionalism" through expansive white space and "Modernity" through layered tonal depth. By utilizing intentional asymmetry and overlapping elements, we create a sense of momentum. The interface shouldn't feel like a series of boxes; it should feel like a curated workspace where information breathes and priority is signaled through light and layering rather than lines.

---

## 2. Colors & Tonal Logic
Our palette is rooted in the authority of deep blues, balanced by the ethereal lightness of our surface tiers.

### The "No-Line" Rule
**Explicit Instruction:** Designers are prohibited from using 1px solid borders to section content. Layout boundaries must be defined solely through background color shifts or tonal transitions. 
*   *Instead of a border:* Place a `surface-container-highest` element against a `surface` background.
*   *Result:* A seamless, high-end feel that reduces visual noise and cognitive load.

### Surface Hierarchy & Nesting
Treat the UI as a physical stack of materials. 
*   **Base:** `surface` (#f7f9fb) – The canvas.
*   **Secondary Sections:** `surface-container-low` (#f2f4f6) – For sidebar backgrounds or grouping secondary content.
*   **Primary Content Containers:** `surface-container-lowest` (#ffffff) – For the main cards or data tables, providing maximum "lift."

### The "Glass & Gradient" Rule
To elevate CTAs and Hero sections:
*   **Glassmorphism:** For floating navigation or modal headers, use `surface` at 70% opacity with a `20px` backdrop-blur. 
*   **Signature Textures:** Use a subtle linear gradient (45°) from `primary` (#00327d) to `primary-container` (#0047ab) for primary action buttons. This adds a "soul" and depth that prevents the UI from looking sterile.

---

## 3. Typography: Editorial Clarity
We pair the structural precision of **Manrope** for displays with the high-readability of **Inter** for functional data.

*   **Display & Headline (Manrope):** Large, bold, and authoritative. Use `display-lg` (3.5rem) with tight letter-spacing (-0.02em) for landing moments to create an editorial feel.
*   **Titles & Body (Inter):** Reserved for the "work" of the platform. Inter’s tall x-height ensures that even at `body-sm` (0.75rem), data-dense tables for admins remain legible.
*   **Hierarchy Tip:** Always use `on-surface-variant` (#434653) for secondary labels to create a clear visual distinction from `on-surface` (#191c1e) primary text.

---

## 4. Elevation & Depth
In this system, depth is a functional tool, not a decoration.

*   **The Layering Principle:** Achieve hierarchy by "nesting." A `surface-container-lowest` card sitting inside a `surface-container-high` wrapper creates a natural, soft lift without a single pixel of shadow.
*   **Ambient Shadows:** For elements that truly float (e.g., Modals, Popovers), use a custom shadow: `0px 12px 32px rgba(25, 28, 30, 0.06)`. This shadow is tinted with our `on-surface` color, mimicking natural light.
*   **The "Ghost Border" Fallback:** If a container requires a boundary for accessibility (e.g., in high-contrast situations), use a **Ghost Border**: `outline-variant` (#c3c6d5) at **15% opacity**. Never use a 100% opaque border.

---

## 5. Components

### Buttons & Chips
*   **Primary Button:** Gradient fill (Primary to Primary-Container), `DEFAULT` (8px) radius. No border. White text.
*   **Secondary/Tertiary:** `surface-container-highest` fill with `on-primary-fixed-variant` text.
*   **Progress Indicators:** Use the vibrant `tertiary_container` (#005750) and `on_tertiary_container` (#13d4c4) for "In Progress" states to provide an energetic, "teal" momentum.

### Cards & Data Lists
*   **The Divider Prohibition:** Forbid the use of horizontal rules (`<hr>`). Use vertical white space (1.5rem to 2rem) or a shift from `surface-container-low` to `surface-container-lowest` to separate items.
*   **Intern Progress Cards:** Use `xl` (1.5rem) corner radius for learner-facing cards to feel approachable; use `sm` (0.25rem) for admin data cells to maintain high density.

### Input Fields
*   **State Logic:** 
    *   **Default:** `surface-container-highest` background, no border.
    *   **Focus:** 2px solid `surface-tint` (#2559bd).
    *   **Error:** `error_container` background with `on-error-container` text.

### Mentorship Timeline (Custom Component)
Use a vertical "Thread" using the `outline-variant` at 20% opacity. The nodes should use the `tertiary` color to signify growth and "the flow" of talent.

---

## 6. Do’s and Don’ts

### Do
*   **Do** use asymmetrical margins (e.g., a wider left margin for headlines) to give the layout an intentional, designer-led feel.
*   **Do** use `surface-dim` for inactive states to keep the UI feeling "quiet."
*   **Do** utilize `backdrop-blur` on navigation bars to allow content colors to bleed through as the user scrolls.

### Don’t
*   **Don't** use pure black (#000000) or pure grey shadows; always tint them with the primary or on-surface tokens.
*   **Don't** use standard 1px borders to separate the sidebar from the main content; use a background color shift to `surface-container-low`.
*   **Don't** clutter the admin view with large icons; use `label-sm` and `body-sm` to prioritize data density and efficiency.

---

## 7. Interaction States
*   **Loading:** Use animated shimmer skeletons with a gradient from `surface-container` to `surface-container-highest`.
*   **Success:** Use `on_tertiary_fixed` (#00201d) for text on a `tertiary_fixed` (#57fae9) background. It feels more premium and "calm" than a standard bright green.
*   **Error:** Use `error_container` (#ffdad6) for the surface and `on_error_container` (#93000a) for the text to ensure accessibility without "shouting" at the user.