/**
 * 📘 Topic: Server Components vs Client Components in Next.js (13+)
 *
 * Next.js App Directory (`app/`) allows a mix of:
 *  ✅ Server Components (default)
 *  ✅ Client Components (opt-in via `"use client"`)
 *
 * Ye architecture performance, UX, aur dev experience dono mein improvement laata hai.
 */

/**
 * 🔹 1. What is a Server Component?
 * - Runs ONLY on the server
 * - Never sent to browser (zero JS on client)
 * - Can safely fetch data, access DB, secrets
 * - Great for rendering heavy UI/data at build or request time
 *
 * Example:
 */
export default async function ServerComponent() {
  const res = await fetch('https://api.example.com/posts', { cache: 'no-store' });
  const data = await res.json();

  return (
    <div>
      <h1>Server Rendered Posts</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

/**
 * 🔹 2. What is a Client Component?
 * - Runs in browser
 * - Can use useState, useEffect, event handlers
 * - Required for interactivity, animations, form handling, etc.
 * 
 * ⚠️ Must be explicitly declared with `"use client"`
 */

"use client";

import { useState } from "react";

export default function ClientComponent() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click Me</button>
    </div>
  );
}

/**
 * 🔄 3. How to use both together:
 * - Server components can render client components inside them.
 * - But not vice versa. (Client can't render server)
 *
 * Good pattern:
 * ServerComponent
 *  └── ClientComponent (nested interactivity)
 */

/**
 * 🔍 4. When to use what:
 * 
 * ✅ Use Server Components:
 * - Fetching and rendering data
 * - SEO critical content
 * - Reducing client bundle size
 * 
 * ✅ Use Client Components:
 * - State and effects
 * - User interaction
 * - Dynamic rendering in browser
 */

/**
 * 🧠 TL;DR:
 * - Server Components = zero client JS, faster, data-safe
 * - Client Components = browser logic, interactivity
 * - Combine for best DX and UX
 *
 * 🔥 Tip: Start with server, only mark `"use client"` where needed
 */

