/**
 * 📘 Topic: Loading & Error Boundaries in Next.js App Directory
 *
 * Next.js App Directory (`app/`) uses React Suspense by default.
 * It supports:
 * - loading.js → shown during route or component load
 * - error.js → shown when component throws error
 *
 * ✅ Improves UX via skeletons/loaders
 * ✅ Provides scoped error handling
 */

/**
 * 📁 File structure:
 * /app
 *   └── dashboard
 *        ├── page.js         → main route component
 *        ├── loading.js      → shown while page.js is loading
 *        └── error.js        → shown if page.js throws error
 */

// 🔹 page.js (can be async for data fetching)
export default async function DashboardPage() {
  const res = await fetch("https://api.example.com/data", {
    cache: "no-store",
  });

  if (!res.ok) {
    // throw error to trigger error.js
    throw new Error("Failed to fetch dashboard data");
  }

  const data = await res.json();

  return (
    <div>
      <h1>Dashboard</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

// 🔹 loading.js (auto shown during `page.js` load)
export default function Loading() {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Loading dashboard...</h2>
    </div>
  );
}

// 🔹 error.js (auto shown if `page.js` throws)
'use client'; // required

import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error("Dashboard error:", error);
  }, [error]);

  return (
    <div>
      <h2>Something went wrong!</h2>
      <p>{error.message}</p>
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
}

/**
 * 🔍 Key Notes:
 * - loading.js auto-wraps your page in <Suspense />
 * - error.js is a React error boundary (auto-catch on page-level)
 * - reset() allows retrying route render
 * 
 * 🧠 Tip: You can define loading/error per segment (page, layout, etc.)
 * - Also works with nested routing, so each segment can show its own fallback!
 */

/**
 * 🔥 Real-world uses:
 * - Show spinner/skeleton on data fetch
 * - Display fallback UI if API fails
 * - Retry mechanism on errors
 */

