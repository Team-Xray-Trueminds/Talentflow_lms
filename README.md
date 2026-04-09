# TalentFlow LMS

**Architecting the Future of Professional Excellence.** 🏗️✨

TalentFlow is a high-fidelity learning management and professional mentorship platform designed with an "Architectural Curator" aesthetic. It connects visionaries with curated expertise to build the next generation of global industry leaders using a data-driven, precision-engineered trajectory.

---

## 🌓 The Dual Interface System

TalentFlow offers two distinct visual and functional experiences tailored to the user's role:

### 🎙️ The Studio (Instructor Dashboard)
A sophisticated, dark-themed "control room" aesthetic designed for content creation and academic oversight.
- **Deep Navy & Emerald Ties:** Professional, focused color palette.
- **Strategic Curriculum Management:** Tools to build and manage career-defining tracks.
- **Learner Oversight:** Advanced analytics and progress tracking.

### 🛣️ The Path (Learner Dashboard)
A clean, airy, and light-themed environment focused on focus and progression.
- **Surface Elevation:** Uses Material Design 3 principles for a high-fidelity feel.
- **Bento Grid Layout:** Geometric rhythm for intuitive navigation.
- **Progress Tracking:** Interactive maps for academic journeys.

---

## 🎨 Design Philosophy: The Architectural Curator

The project follows a strict **"Architectural Curator"** design language. All collaborators MUST adhere to these core principles:

### 1. The "No-Line" Rule
We avoid traditional borders (`border`, `border-t`, etc.). Instead, we express depth and separation through:
- **Tonal Shifts:** Using different surface elevations (e.g., `bg-surface-container-low` vs `bg-surface-container-high`).
- **Shadows:** Subtle, large-radius shadows (`shadow-ambient`).
- **Negative Space:** Generous padding (minimum `p-6`) to define boundaries.

### 2. Tonal Hierarchy (Semantic Elevation)
The application uses a semantic system based on containers:
- `surface-container-lowest`: Peak elevation (often for white cards).
- `surface-container-low`: The canvas/background layer.
- `surface-container-high`: Interactive hover states.
- `surface-container-highest`: Accentuated focal points.

### 3. Typography & Motion
- **Headlines:** `font-headline` (Manrope) for a modern, architectural feel.
- **Body:** `font-body` (Inter) for maximum readability.
- **Micro-interactions:** Every interaction should feel tactile. Use `hover:scale-[1.02]` and smooth `transition-all`.

---

## 🛡️ Security & Access Control

- **Learner Registration:** Open to the public via the standard sign-up flow.
- **Instructor Access:** Restricted. Instructor accounts cannot be created via the public sign-up page and must be provisioned by an Administrator to maintain the platform's standard of excellence.
- **Email Verification:** Mandatory verification flow before accessing the dashboard.

---

## 🚀 Technical Stack

- **Framework:** [React 19](https://react.dev/)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Routing:** [React Router 7](https://reactrouter.com/)
- **Type Safety:** [TypeScript](https://www.typescriptlang.org/)
- **Icons:** [Material Symbols Outlined](https://fonts.google.com/icons)

---

## 📂 Project Structure

```bash
src/
├── components/          # Reusable UI components
│   ├── auth/            # Authentication triggers and forms
│   ├── Navbar.tsx       # Dynamic navigation
│   ├── Sidebar.tsx      # Role-based side navigation (Studio vs Path)
│   └── AppFooter.tsx    # Branded footer
├── pages/               # Functional page compositions
│   ├── Instructor/      # Studio-related pages
│   ├── Learner/         # Path-related pages
│   ├── Admin/           # Oversight pages
│   └── LandingPage.tsx  # Initial entry point
├── context/             # Global state management
├── index.css            # Tailwind configuration & global animations
└── main.tsx             # App bootstrap
```

---

## 🛠️ Getting Started

### Prerequisites
- Node.js (v18 or higher)
- pnpm (Recommended) 

### Installation
```bash
# Clone the repository
git clone <repository-url>

# Install dependencies
pnpm install

# Start development server
pnpm run dev
```

---

## 🤝 Contribution Guidelines

To keep the platform premium and cohesive:

1. **Follow the Grid:** Use the Bento-grid structure for all content layouts.
2. **Use Semantic Tokens:** Never use hardcoded hex codes or generic Tailwind colors outside of configuration. Use the provided tokens (e.g., `bg-primary-container`).
3. **High-Fidelity Assets:** Use `generate_image` or high-quality architectural visuals. No generic placeholders.

---

© 2024 TalentFlow. All rights reserved. Built for the **Architectural Curator**.