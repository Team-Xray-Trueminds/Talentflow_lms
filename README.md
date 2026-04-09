# TalentFlow LMS

**Architecting the Future of Professional Excellence.** 🏗️✨

TalentFlow is a high-fidelity learning management and professional mentorship platform designed with an "Architectural Curator" aesthetic. It connects visionaries with curated expertise to build the next generation of global industry leaders using a data-driven, precision-engineered trajectory.

---

## 🌒 The Triple Interface System

TalentFlow offers three distinct visual and functional experiences tailored to user roles:

### 🏛️ The Vault (Admin Dashboard)
Strategic oversight for platform administrators with a focus on governance and system health.
- **User Management:** Granular control over instructor and learner accounts.
- **Talent Directory:** Comprehensive database of platform participants and their performance.
- **Audit Trails:** Tracking system activity and platform-wide growth metrics.

### 🎙️ The Studio (Instructor Dashboard)
A sophisticated, dark-themed "control room" aesthetic designed for academic oversight and content creation.
- **Academic Tracks:** Strategic curriculum management for career-defining tracks.
- **Gradebook Portal:** High-fidelity performance metrics and submission oversight.
- **Course Builder:** Precision-engineered tools for constructing adaptive learning paths.

### 🛣️ The Path (Learner Dashboard)
A clean, airy, light-themed environment focused on progression and clarity.
- **Academic Explorer:** Intuitive course discovery and enrollment.
- **Certification System:** Professional, downloadable certificates upon course completion.
- **Bento Progress Tracking:** Geometric rhythm for tracking academic journeys.

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
- **Fluid Motion:** Implementation of scroll-triggered animations and smooth micro-interactions (e.g., `hover:scale-[1.02]`).

---

## 🛡️ Security & Access Control

- **Learner Registration:** Open via standard sign-up flow.
- **Instructor Access:** Strictly restricted. Instructor accounts must be provisioned by an Administrator to maintain educational standards.
- **Verification:** Mandatory email verification flow for all account types.

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
│   ├── auth/            # Auth forms and verification modals
│   ├── layout/          # Dashboard layouts and structural wrappers
│   ├── Sidebar.tsx      # Role-based navigation logic (Vault, Studio, Path)
│   └── MetricCard.tsx   # Premium data visualization cards
├── pages/               # Page compositions
│   ├── Admin/           # Oversight and Management pages
│   ├── Instructor/      # Curriculum and Gradebook portals
│   ├── Learner/         # My Learning and Certificate pages
│   └── LandingPage.tsx  # Animated landing experience
├── context/             # Global state (Auth, UI preferences)
├── index.css            # Tailwind 4 configuration & custom animations
└── App.tsx              # Central routing and role management
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
2. **Use Semantic Tokens:** Never use hardcoded hex codes. Use the provided tokens (e.g., `text-primary`, `bg-on-secondary-container`).
3. **Refined Motion:** Ensure any new UI elements include appropriate entry animations and hover states.

---

© 2026 TalentFlow. All rights reserved. Built for the **Architectural Curator**.