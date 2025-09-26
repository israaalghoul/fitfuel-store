# FitFuel — Frontend E-commerce

Professional README for the FitFuel frontend project. This document describes what technologies are used, how to run the project locally, the folder structure, and basic troubleshooting steps.

## Overview

FitFuel is a React-based frontend for an e-commerce site built with Vite. It provides a modern UI for browsing products, searching, and managing a shopping cart (Badge + Sidebar) with local persistence.

Key features:
- Product listing and detail pages
- Hero section carousel powered by Swiper with smooth transitions
- Global shopping cart accessible via a badge and slide-out sidebar
- Quantity controls (increase/decrease), delete item, clear cart, and total price
- Cart persistence in localStorage
- Responsive layout (mobile → tablet → desktop)
- Mock API with JSON Server for local development

---

## Tech Stack

- React (JSX)
- Vite (development server and bundler)
- React Router (client-side routing)
- Swiper (hero carousel)
- Zustand / React Context (state management)
- TanStack Query (data fetching)
- Axios (HTTP client)
- JSON Server (mock API)
- ESLint (code linting)

## Prerequisites

- Node.js >= 16
- Yarn (recommended)

## Local Setup

1. Clone the repository:

```powershell
git clone <repository-url>
cd FitFuel-Project
```

2. Install dependencies:

```powershell
yarn install
```

3. Start the mock API server (JSON Server) in a separate terminal:

```powershell
yarn server
```

4. Start the development server (Vite):

```powershell
yarn dev
```

By default:
- Frontend: `http://localhost:5173`
- Mock API: `http://localhost:3000`

## Important Scripts

- `yarn dev` — Run development server (Vite)
- `yarn build` — Build for production
- `yarn preview` — Preview production build
- `yarn lint` — Run ESLint
- `yarn server` — Run JSON Server (data in `src/db/index.json`)

---

## Folder Structure (detailed)

Below is a more detailed view of the `src/` folder used in this project. It highlights the main features, shared components, utilities, and entry points you will work with.

```
src/
├── App.jsx                    # Application root — mounts providers and Router
├── main.jsx                   # Entry — ReactDOM render and global providers
├── index.css                  # Global base styles / variables
├── assets/                    # Static assets referenced by components (icons, small images)
├── db/
│   └── index.json             # JSON Server fake DB (products, users, etc.)
├── lib/
│   ├── axios/                 # Axios instance and interceptors (src/lib/axios/index.js)
│   └── storage/               # localStorage helpers (get/set wrapper)
├── routes/                    # Router configuration and provider (RouterProvider)
│   └── provider.jsx
├── shared/                    # Reusable UI and layout primitives
│   ├── components/
│   │   ├── btn/               # Reusable button component (Btn)
│   │   ├── container/         # Page container wrapper
│   │   ├── loader/            # Loading spinner / skeleton
│   │   └── sidebar/           # Cart sidebar UI (used by Cart feature)
│   ├── hooks/                 # Shared hooks (e.g., debounce)
│   └── layout/                # Layout pieces: Navbar, Footer, DefaultLayout
├── features/                  # Feature-scoped modules
│   ├── home/
│   │   ├── components/        # Hero section, Featured components
│   │   ├── pages/             # Home page wrapper
│   │   └── routes/            # Home route(s)
│   ├── products/
│   │   ├── components/        # product-item, product-list, products-section
│   │   ├── services/          # API calls (products service)
│   │   ├── store/             # product-related state (Zustand or Context)
│   │   └── pages/             # Products pages (list, details)
│   └── auth/                  # Authentication related routes and components
└── shared-types/              # (optional) shared TypeScript types or prop interfaces
```

Short descriptions / key files
- `src/App.jsx` — wraps the application with providers (CartProvider, QueryClientProvider) and renders `RouterProvider`.
- `src/main.jsx` — entry point that mounts React and imports global CSS.
- `src/db/index.json` — mock data used by JSON Server; edit this to change local API responses.
- `src/lib/axios/index.js` — central place for axios defaults (baseURL, interceptors).
- `src/lib/storage/index.js` — simple wrapper used to persist cart to `localStorage`.
- `src/shared/components/sidebar/` — the Cart Sidebar component and styles (open/close, overlay behavior).
- `src/features/products/components/product-item/` — product card component where `Add to cart` is wired.
- `src/features/products/store/` — cart and products state (CartProvider, products store, etc.).

If you want, I can output a complete tree of the actual files (including filenames) under `src/` — this helps when preparing docs or onboarding materials.

---

## Engineering Notes

- The cart is implemented using React Context (`CartProvider`) and persisted to `localStorage` via utilities in `src/lib/storage`.
- The hero carousel uses Swiper with `fade` effect and `crossFade` enabled for smooth transitions.
- Product listing shows 6 items on the main products section, while `/products/list` shows all items.
- Prices are displayed rounded up using `Math.ceil` and totals compute from the rounded values.

---

## Troubleshooting

1. Build or dependency issues:
   - Run `yarn install` to ensure dependencies are present.
   - If a module like `swiper` is missing, run `yarn add swiper`

2. CSS/stacking problems (elements not appearing above others):
   - Check for `transform` or `filter` on parent elements which create stacking contexts affecting `z-index`.
   - Ensure overlays have `position: absolute`/`fixed` and a higher `z-index` than underlying elements.

3. Cart not persisting:
   - Confirm `CartProvider` wraps the application root so the context is available.
   - Check `localStorage` for saved cart data under the expected key (see `src/lib/storage`).

4. Swiper images not showing:
   - Confirm image paths in `public/images` or `src/assets` match the `src` attributes used in the components.
   - Ensure Swiper CSS (`swiper/css` and `swiper/css/effect-fade`) is imported.

---

## Production Tips

- Convert images to `WebP` and enable lazy-loading for better performance.
- Add pre-commit hooks (husky) and `lint-staged` to enforce code style before commits.
- Use environment variables for API endpoints instead of hard-coded URLs.

---

## Next steps / Suggested Improvements

- Add unit and integration tests (Jest + React Testing Library)
- Consider migrating to TypeScript for improved type safety
- Improve performance via code splitting and lazy-loading heavy components

---

## 🆘 Support
For support and questions, please contact the development team.