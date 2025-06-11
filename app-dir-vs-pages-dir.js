/**
 * 📘 Topic: App Directory vs Pages Directory in Next.js
 * (Next.js 13+ introduces a new way of building apps)
 * 
 * 🔄 Legacy vs Modern Approaches:
 * - `pages/` folder → traditional, file-based routing (stable)
 * - `app/` folder → new, component-driven layout model (still improving)
 */

/**
 * 🗂️ 1. Folder Structure Difference:
 * 
 * ✅ pages/
 *  ├── index.js → `/`
 *  ├── about.js → `/about`
 * 
 * ✅ app/
 *  ├── page.js → `/`
 *  ├── about/
 *      └── page.js → `/about`
 */

/**
 * ⚙️ 2. Routing & Components:
 * - In `pages/`, each file is a React Component with `getServerSideProps` or `getStaticProps`.
 * - In `app/`, each route can have:
 *   - `page.js` – actual page component
 *   - `layout.js` – persistent layout
 *   - `loading.js` – route-based loading UI
 *   - `error.js` – route-specific error boundaries
 *   - `template.js` – non-persistent layouts
 */

/**
 * 🔁 3. Rendering Differences:
 * 
 * ✅ pages/
 * - CSR by default
 * - Use `getServerSideProps` or `getStaticProps` for SSR/SSG
 * 
 * ✅ app/
 * - Server Components by default ⚠️
 * - Can mix client/server via `"use client"` directive
 * - Automatically loads faster, smaller bundles
 */

/**
 * 📦 4. Data Fetching:
 * 
 * pages/:
 * ```js
 * export async function getServerSideProps() {}
 * ```
 * app/:
 * ```js
 * // fetch directly in Server Component
 * export default async function Page() {
 *   const res = await fetch(...)
 *   return <div>...</div>
 * }
 * ```
 * - Can use caching, streaming, suspense more easily in `app/`
 */

/**
 * 🔥 5. Why use `app/` dir?
 * - Server Components → less JS shipped to client
 * - Shared layouts without reloading
 * - Built-in loading/error states
 * - Future-ready architecture
 * 
 * ❌ But beware:
 * - Still under active dev
 * - Some libraries don't fully support yet
 * - Learning curve can be higher
 */

/**
 * 🧠 TL;DR:
 * - Use `pages/` for stable apps, full ecosystem support
 * - Use `app/` for new projects, full flexibility and performance
 * - You can mix both — just don't overlap same route in both
 */

