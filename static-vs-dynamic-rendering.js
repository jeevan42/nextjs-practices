// File: static-vs-dynamic-rendering.js

/*
📘 Topic: Static vs Dynamic Rendering in Next.js
Understand when to use Static Site Generation (SSG), Server-Side Rendering (SSR), or Client-Side Rendering (CSR).
*/

/////////////////////////////////////
// 🧱 1. Static Rendering (SSG)
/////////////////////////////////////

/*
✅ Uses build-time rendering
✅ Fastest for end users (pre-rendered HTML)
✅ Can be combined with ISR for freshness

👉 Use when:
- Data changes infrequently (blogs, docs)
- SEO is important
- Pages can be prebuilt

📁 Page-based example:

// app/products/[slug]/page.js
export async function generateStaticParams() {
  const products = await getAllProducts();
  return products.map((p) => ({ slug: p.slug }));
}

export const revalidate = 3600; // ISR: revalidate every hour

export default async function ProductPage({ params }) {
  const product = await getProduct(params.slug);
  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.price}</p>
    </div>
  );
}
*/

/////////////////////////////////////
// 🌐 2. Dynamic Rendering (SSR)
/////////////////////////////////////

/*
✅ Rendered at request time on the server
✅ Always fresh data
✅ Slightly slower than static but up-to-date

👉 Use when:
- Data changes frequently
- Depends on headers, cookies, or auth
- Personalization is required

📁 Example:

// app/dashboard/page.js
export const dynamic = 'force-dynamic'; // force SSR on this page

export default async function DashboardPage() {
  const userData = await fetchUserData();
  return (
    <div>
      <h1>Welcome back</h1>
      <p>Your score: {userData.score}</p>
    </div>
  );
}
*/

/////////////////////////////////////
// 🖥️ 3. Client-Side Rendering (CSR)
/////////////////////////////////////

/*
✅ Loads shell on initial request, fetches data in useEffect
✅ Minimal server load, useful for interactivity
❌ SEO not great out of the box

👉 Use when:
- Data is highly interactive
- SEO isn’t important (admin dashboards, internal tools)

📁 Example:

// app/stats/page.js
'use client';
import { useEffect, useState } from 'react';

export default function StatsPage() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/api/stats').then(res => res.json()).then(setData);
  }, []);

  return (
    <div>
      <h1>Stats</h1>
      {data ? <p>{data.views} views</p> : <p>Loading...</p>}
    </div>
  );
}
*/

/////////////////////////////////////
// 🧠 Summary
/////////////////////////////////////

/*
🔹 SSG = Build time rendering
🔹 ISR = Build + Background regeneration
🔹 SSR = Request time rendering
🔹 CSR = Renders after client loads JS

🚀 Choose wisely based on:
- Data freshness needs
- SEO importance
- Personalization requirements
- Performance budget
*/