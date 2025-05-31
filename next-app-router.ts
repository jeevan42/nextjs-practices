// next-app-router.ts

/**
 * 📘 App Router Overview
 *
 * Since Next.js 13, "App Router" is the recommended way to structure apps.
 * It uses the `app/` directory instead of `pages/` and brings layouts, server components,
 * and better routing out-of-the-box.
 */

/**
 * 📁 Basic Folder Structure:
 *
 * - app/
 *   ├── layout.tsx      → Root layout shared across pages
 *   ├── page.tsx        → Home page route (/)
 *   └── about/
 *       └── page.tsx    → About page route (/about)
 */

/**
 * ✅ Key Features of App Router:
 *
 * - File-based routing with nested folders
 * - Built-in layouts and templates
 * - Server-first by default (React Server Components)
 * - Co-location of loading/error states
 * - TypeScript, Streaming, and SEO friendly
 */

/**
 * 🧠 Notes:
 * - Every folder is a route segment.
 * - `layout.tsx` wraps child pages.
 * - You can use `loading.tsx` for skeletons and `error.tsx` for error boundaries.
 * - Can define dynamic segments like `[id]` or catch-alls like `[...slug]`.
 */

/**
 * 💡 Example URL to Folder Mapping:
 * /blog         → app/blog/page.tsx
 * /blog/42      → app/blog/[id]/page.tsx
 */

