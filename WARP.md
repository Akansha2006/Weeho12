# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Technology Stack

This is a modern React application built with:
- **Vite** as the build tool and dev server
- **TypeScript** for type safety
- **React 18** with React Router for routing
- **shadcn/ui** component library with **Radix UI** primitives
- **Tailwind CSS** for styling
- **TanStack Query** for data fetching and state management
- **Lovable** platform integration for code generation

## Development Commands

### Primary Development Commands
```bash
# Start development server (runs on port 8080)
npm run dev

# Build for production
npm run build

# Build for development mode
npm run build:dev

# Preview production build
npm run preview

# Run ESLint
npm run lint
```

### Package Management
The project uses npm with a package-lock.json file. Always use `npm install` for dependency management.

## Project Architecture

### Directory Structure
```
src/
├── assets/          # Static images and media files
├── components/      
│   └── ui/         # shadcn/ui components (50+ reusable UI components)
├── hooks/          # Custom React hooks (use-mobile, use-toast)
├── lib/            # Utility functions (cn helper for className merging)
├── pages/          # Route components with associated CSS files
├── App.tsx         # Main app component with routing setup
├── main.tsx        # React 18 entry point
└── index.css       # Global styles and CSS variables
```

### Application Structure

**Main App Setup (`src/App.tsx`)**:
- Uses React Router with BrowserRouter
- Configures TanStack Query with QueryClientProvider
- Sets up toast notifications (dual setup with Toaster and Sonner)
- Wraps everything in TooltipProvider for shadcn/ui components

**Routing**:
- `/` → Index page (main music band website)
- `/weeho` → Weeho page (simple Vite + React demo)
- `/*` → 404 NotFound page

**Key Pages**:
- **Index.tsx**: Full-featured music band website with hero section, about, albums, contact form
- **Weeho.tsx**: Simple counter demo page showcasing Vite + React setup
- **NotFound.tsx**: 404 error page

### Component System

**shadcn/ui Integration**:
- Complete shadcn/ui setup with `components.json` configuration
- 50+ pre-built UI components in `src/components/ui/`
- Uses Tailwind CSS with CSS variables for theming
- Path aliases configured: `@/` maps to `./src/`

**Styling Approach**:
- Tailwind CSS with custom CSS for complex layouts
- CSS variables system for consistent theming
- Page-specific CSS files alongside components (Index.css, Weeho.css)
- `cn()` utility function for conditional className merging

### Build Configuration

**Vite Configuration**:
- Uses SWC for fast React compilation
- Development server on port 8080 with host "::" (accessible externally)
- Lovable-tagger plugin for development mode
- Path alias `@/` configured for imports

**TypeScript Configuration**:
- Composite project setup with separate app and node configs
- Relaxed strictness settings (noImplicitAny: false, etc.)
- Path mapping configured for `@/*` imports

## Development Notes

### Working with Assets
- Static assets are stored in `src/assets/`
- Import assets directly in components using ES6 imports
- Vite handles asset optimization and bundling

### Adding New Components
- For UI components: Use shadcn/ui CLI or manually add to `src/components/ui/`
- For page components: Add to `src/pages/` with associated CSS file if needed
- Update routing in `src/App.tsx` when adding new pages

### State Management
- TanStack Query is configured for server state
- Local component state with React hooks
- Toast notifications available globally via useToast hook

### Styling Guidelines
- Primary approach: Tailwind CSS utility classes
- Use `cn()` utility for conditional classes
- Page-specific styles in dedicated CSS files
- CSS variables defined in `index.css` for theming

### Lovable Integration
- Project is integrated with Lovable platform (ID: 46236a4f-7f29-44e5-8dfc-88debb1bb49d)
- Lovable-tagger runs in development for component tracking
- Changes made via Lovable are automatically committed to repo

## Common Development Patterns

### Adding a New Page
1. Create component in `src/pages/PageName.tsx`
2. Create associated CSS file `src/pages/PageName.css` if needed
3. Add route to `src/App.tsx` Routes component
4. Import and configure the component

### Using shadcn/ui Components
```typescript
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
```

### Styling with Tailwind + cn()
```typescript
import { cn } from "@/lib/utils";

className={cn(
  "base-classes",
  condition && "conditional-classes",
  props.className
)}
```