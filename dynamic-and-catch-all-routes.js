// File: dynamic-and-catch-all-routes.js

/* 📘 Topic: Dynamic and Catch-All Routes in Next.js

This file explains how to use dynamic, catch-all, and optional catch-all routes in both the pages/ and app/ directories. Includes examples, use cases, and how to access the parameters in each case. */

/**

1️⃣ Dynamic Route Segment

File: pages/blog/[slug].js or app/blog/[slug]/page.js */


// pages/blog/[slug].js export async function getServerSideProps({ params }) { return { props: { slug: params.slug }, }; }

export default function BlogPage({ slug }) { return <h1>Blog Page for: {slug}</h1>; }

/* URL: /blog/hello-world  → slug = 'hello-world' */

/**

2️⃣ Catch-All Route Segment

File: pages/docs/[...params].js or app/docs/[...params]/page.js */


// pages/docs/[...params].js export async function getServerSideProps({ params }) { return { props: { path: params.params }, }; }

export default function DocsPage({ path }) { return <h1>Docs path: {path.join(" → ")}</h1>; }

/* URL: /docs/getting-started/installation → path = ['getting-started', 'installation'] */

/**

3️⃣ Optional Catch-All Segment

File: pages/shop/[[...category]].js or app/shop/[[...category]]/page.js */


// pages/shop/[[...category]].js export async function getServerSideProps({ params }) { return { props: { category: params.category || [] }, }; }

export default function ShopPage({ category }) { return ( <> <h1>Shop Page</h1> <p>Category Path: {category.length ? category.join(" / ") : "All Products"}</p> </> ); }

/* URL: /shop → category = [] URL: /shop/electronics/laptops → category = ['electronics', 'laptops'] */

/**

4️⃣ Usage in app/ directory (Next.js 13+) */


// app/blog/[slug]/page.js export default function BlogSlugPage({ params }) { return <h1>App Router Blog Page for: {params.slug}</h1>; }

// Automatically passed in via generateStaticParams or dynamic rendering

/** ✅ Summary:

[slug] → single dynamic segment

[...slug] → catch all segments

[[...slug]] → optional catch all

Use params.slug in App Router, context.params.slug in Pages Router */


