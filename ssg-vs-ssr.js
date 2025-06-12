// File: ssg-vs-ssr.js

/* 📘 Topic: Static Site Generation (SSG) vs Server-Side Rendering (SSR) in Next.js

This file explains and compares SSG and SSR in Next.js using practical examples. Understand which one to choose based on performance, SEO, and dynamic data needs. */

/**

1️⃣ Static Site Generation (SSG)

Pages are built at build time and served as static HTML */


// Example: pages/blog/[slug].js export async function getStaticPaths() { const res = await fetch("https://api.example.com/posts"); const posts = await res.json(); return { paths: posts.map(post => ({ params: { slug: post.slug } })), fallback: false, }; }

export async function getStaticProps(context) { const { slug } = context.params; const res = await fetch(https://api.example.com/posts/${slug}); const post = await res.json(); return { props: { post }, revalidate: 60, // ISR: re-build every 60 seconds (optional) }; }

export default function BlogPost({ post }) { return <article><h1>{post.title}</h1><p>{post.content}</p></article>; }

/**

2️⃣ Server-Side Rendering (SSR)

Page is built on each request, useful for dynamic data or auth-sensitive content */


// Example: pages/profile.js export async function getServerSideProps(context) { const token = context.req.cookies.token; const res = await fetch("https://api.example.com/profile", { headers: { Authorization: Bearer ${token} }, }); const profile = await res.json(); return { props: { profile } }; }

export default function Profile({ profile }) { return <div>Welcome, {profile.name}!</div>; }

/**

✅ Summary:

SSG is better for static data, SEO, and performance


SSR is better for dynamic, user-specific, or frequently updated data


ISR (Incremental Static Regeneration) allows a mix of both */



