// routing-basics.ts

/**
 * 📘 Routing in Next.js (App Router)
 *
 * In the App Router, routing is based on the file system inside the `app/` folder.
 * Each folder becomes a route, and each `page.tsx` file is the component rendered.
 */

/**
 * ✅ Examples:
 *
 * - `app/page.tsx`               → `/`
 * - `app/about/page.tsx`         → `/about`
 * - `app/blog/page.tsx`          → `/blog`
 * - `app/blog/[slug]/page.tsx`   → `/blog/my-post`
 */

/**
 * 🔁 Dynamic Routing:
 *
 * - Square brackets denote dynamic segments: `[id]`, `[slug]`
 * - Catch-all: `[...params]`
 */

/**
 * 🧠 Pro Tips:
 * - Add `layout.tsx` to persist layout across pages
 * - Nest folders to reflect nested routes (like `/blog/[slug]`)
 */
