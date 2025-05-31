// project-structure-bestpractices.ts

/*
📦 Scalable Next.js Project Structure (App Router)

Recommended layout:

src/
├── app/                 # Route-based pages
│   ├── layout.tsx
│   ├── globals.css
│   ├── page.tsx
│   └── dashboard/
│       └── page.tsx
├── components/          # Reusable UI components
├── lib/                 # Helpers, utilities
├── types/               # TypeScript types
├── styles/              # Optional custom styles
├── constants/           # Static config, constants

🔹 Best Practices:
- Use `@/` alias via tsconfig
- Split logic into files: services, hooks, context
- Keep components small and reusable
*/
