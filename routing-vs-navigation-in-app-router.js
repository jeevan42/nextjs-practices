// File: routing-vs-navigation-in-app-router.js

/*
📘 Topic: Routing vs Navigation in Next.js App Router

In Next.js (especially App Router), routing and navigation often get confused.
Let’s break it down: Routing is the structural definition of pages. Navigation is how we move between them.
*/

////////////////////////
// 📂 1. Routing
////////////////////////

/*
✅ Based on file system structure in `/app`
✅ Defines the URL hierarchy and rendering behavior
✅ Each folder under `/app` maps to a route segment

📁 Example:

// app/about/page.js → becomes route `/about`
// app/products/[slug]/page.js → becomes dynamic route `/products/:slug`

You can define layouts and templates too:

// app/layout.js → root layout
// app/dashboard/layout.js → nested layout for /dashboard/*
*/

////////////////////////
// 🧭 2. Navigation
////////////////////////

/*
✅ Moving between routes using Next.js components/functions
✅ Supports client-side navigation for speed
✅ Prevents full page reloads

Two main ways:
1. `<Link />` for declarative nav
2. `useRouter().push()` for programmatic nav
*/

import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function NavigationExample() {
  const router = useRouter();

  function goToDashboard() {
    router.push('/dashboard');
  }

  return (
    <div>
      <h1>Home Page</h1>

      {/* Declarative Navigation */}
      <Link href="/about">Go to About</Link>

      {/* Programmatic Navigation */}
      <button onClick={goToDashboard}>Go to Dashboard</button>
    </div>
  );
}

////////////////////////
// 🧠 Key Differences
////////////////////////

/*
🛣️ Routing:
- Is how you structure the app
- Defined in file system
- Involves dynamic routes, layouts, loading templates

🧭 Navigation:
- Is how you move between those routes
- Can be client-side (SPA behavior)
- Enables faster transitions and prefetching

🎯 TL;DR:
Routing = structure (where pages live)
Navigation = movement (how you reach them)
*/

////////////////////////
// 📌 Tips:
////////////////////////

/*
✅ Prefer <Link> for standard navigation
✅ Use router.push() for dynamic/programmatic flows (e.g. after form submit)
✅ Layouts and templates give persistent shells during navigation

Bonus: Link supports prefetching by default in viewport!
*/