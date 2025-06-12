// File: incremental-static-regeneration-advanced.js

/*
📘 Topic: Incremental Static Regeneration (ISR) in Next.js
Advanced usage with App Router, on-demand revalidation, and stale-while-revalidate concepts.
*/

/*
📍 ISR allows you to:
- Pre-render static pages at build time
- Rebuild or revalidate specific pages **in the background** without rebuilding the full app
- Serve stale content temporarily while updating in background
*/

//////////////////////////////
// ⚙️ Basic Usage (App Router)
//////////////////////////////

// app/blog/[slug]/page.js

export async function generateStaticParams() {
  const posts = await fetchPosts();
  return posts.map(post => ({ slug: post.slug }));
}

export const revalidate = 60; // Revalidate every 60 seconds

export default async function BlogPost({ params }) {
  const post = await getPost(params.slug);

  return (
    <article>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </article>
  );
}

/*
✅ This page will be:
- Pre-rendered at build time (based on generateStaticParams)
- Revalidated every 60 seconds in background
*/

//////////////////////////////
// ⚡ On-Demand Revalidation (Route Handler)
//////////////////////////////

// app/api/revalidate/route.js

import { revalidatePath } from 'next/cache';

export async function POST(req) {
  const { path } = await req.json();

  // Clears cache for a specific route
  revalidatePath(path);

  return Response.json({ revalidated: true });
}

/*
🧠 Use this in:
- CMS webhooks (when new content is published)
- Admin dashboards ("Refresh Page" button)
*/

//////////////////////////////
// 🧠 Strategy: stale-while-revalidate
//////////////////////////////

/*
✅ Next.js uses SWR-like strategy by default with ISR:
- The stale content is served immediately
- New data is fetched in the background
- Future requests get the updated version
*/

//////////////////////////////
// 🧪 Testing Tips
//////////////////////////////

/*
🧪 To see ISR in action locally:
- Run `next dev` (ISR works here too!)
- Add console logs in your data fetching logic
- Update content and re-trigger page reload after revalidate timeout
*/

//////////////////////////////
// 🧩 Bonus: Cache-Control headers (Edge)
//////////////////////////////

/*
You can control caching behavior at a more granular level using fetch options:
*/

await fetch('https://api.example.com/posts', {
  next: { revalidate: 300 }, // overrides default
});

/*
Or opt-out of caching:
*/

await fetch('https://api.example.com/dynamic', {
  cache: 'no-store',
});

//////////////////////////////
// ✅ Summary
//////////////////////////////

/*
- ISR gives static performance + dynamic freshness
- `revalidate` in page files (App Router) = easy config
- Use `revalidatePath()` for manual cache invalidation
- Supports stale-while-revalidate for good UX
- Reduces rebuild time massively for large apps
*/