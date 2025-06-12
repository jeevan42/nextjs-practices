// File: streaming-and-suspense-in-next13.js

/*
📘 Topic: Streaming and Suspense in Next.js 13+

Next.js App Router (v13+) brings full support for React Server Components,
Streaming UI, and the Suspense mechanism. These help build faster, progressive UIs.
*/

////////////////////////
// ⛲ 1. What is Streaming?
////////////////////////

/*
✅ Enables sending parts of the UI to the browser *as soon as they're ready*
✅ Improves perceived performance and TTFB (time to first byte)
✅ Powered by React Server Components and `Suspense`
✅ No need to wait for entire page to be ready

Think: shell renders instantly → slow parts stream in later (like charts or user data)
*/

////////////////////////
// ⏳ 2. Suspense in App Router
////////////////////////

/*
✅ React’s built-in component to “suspend” part of the UI
✅ You can wrap server components or async logic
✅ Next.js handles it on the server — streamed progressively to client

⚠️ In App Router, Suspense works by default with server components.
*/

import { Suspense } from 'react';

function SlowComponent() {
  // Simulate delay
  const data = fetch('https://dummyjson.com/users/1').then(res => res.json());
  throw data; // Suspense will catch and wait
}

function LoadingFallback() {
  return <p>⏳ Loading user data...</p>;
}

export default function Page() {
  return (
    <div>
      <h1>Streaming + Suspense Demo</h1>

      {/* ⚙️ Part below will stream in once ready */}
      <Suspense fallback={<LoadingFallback />}>
        <SlowComponent />
      </Suspense>
    </div>
  );
}

////////////////////////
// ⚙️ 3. Streaming in App Directory
////////////////////////

/*
✅ Any `page.js`, `layout.js`, or nested component can use `Suspense`
✅ Even layouts can “stream” child segments (great for dashboards or feeds)

📁 Example structure:

- app
  - layout.js
  - dashboard
    - layout.js
    - analytics
      - page.js

💡 Nested layouts can individually use Suspense — no need to wait for whole page
*/

////////////////////////
// 📌 Tips and Summary
////////////////////////

/*
✅ Use Suspense for:
  - Slow server components (e.g. DB reads, APIs)
  - Third-party libraries (charts, auth, etc.)
  - Code-splitting (dynamic imports)

✅ Streaming improves UX:
  - First paint faster
  - Avoids big loading skeletons
  - Enables partial hydration

🎯 TL;DR:
- Suspense pauses rendering for async parts
- Streaming sends what’s ready immediately
- Together = snappy, progressive React apps in Next 13+
*/