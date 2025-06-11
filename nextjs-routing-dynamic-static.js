/**
 * 📘 Topic: Static vs Dynamic Routing in Next.js
 * 
 * Next.js provides a powerful file-based routing system.
 * Let's understand both static and dynamic routes, how they're defined, and their behavior.
 * 
 * --------------------------------------------------
 * 🔹 Static Routes
 * Pages automatically created based on file structure under `/pages`.
 *
 * Example:
 * pages/about.js   ➜   Route: /about
 * pages/contact.js ➜   Route: /contact
 * 
 * --------------------------------------------------
 * 🔹 Dynamic Routes
 * Created using file name with brackets [].
 *
 * Example:
 * pages/blog/[slug].js ➜ /blog/my-first-post
 * 
 * 📌 You can even nest dynamic routes.
 * pages/product/[category]/[id].js ➜ /product/shoes/123
 */

// 👉 Static Page Example (pages/about.js)
export default function About() {
  return (
    <div>
      <h1>About Us</h1>
      <p>This is a statically routed page at /about</p>
    </div>
  );
}

// 👉 Dynamic Page Example (pages/blog/[slug].js)
import { useRouter } from 'next/router';

export default function BlogPost() {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <div>
      <h1>Blog Post: {slug}</h1>
      <p>This page is dynamically routed based on the URL slug.</p>
    </div>
  );
}

/**
 * --------------------------------------------------
 * 🔁 Catch-All Routes
 * For deeply nested paths, use three dots (...)
 *
 * File: pages/docs/[...slug].js
 * Matches:
 * - /docs
 * - /docs/setup
 * - /docs/setup/install
 */
export function DocsCatchAll() {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <div>
      <h2>Docs Path: {slug?.join(' / ')}</h2>
    </div>
  );
}

/**
 * --------------------------------------------------
 * ❓Fallback in Dynamic Routes
 * When using getStaticPaths, set fallback to:
 * 
 * - false: Only paths returned by getStaticPaths will exist (404 otherwise)
 * - true: Other paths will be generated at runtime (and cached)
 * - 'blocking': Wait until the new page is built (SSR-like experience)
 */

// Example of dynamic page using getStaticPaths
// pages/blog/[slug].js

export async function getStaticPaths() {
  return {
    paths: [
      { params: { slug: 'my-first-post' } },
      { params: { slug: 'hello-world' } }
    ],
    fallback: false // or true or 'blocking'
  };
}

export async function getStaticProps(context) {
  const { slug } = context.params;

  return {
    props: {
      slug,
      content: `This is the content for ${slug}`
    }
  };
}

/**
 * --------------------------------------------------
 * 🧠 Summary:
 * 
 * ✅ Static Routes = Simple files in /pages
 * ✅ Dynamic Routes = Named with []
 * ✅ Catch-all = [...slug]
 * ✅ Fallback = Static Generation + Flexibility
 *
 * 📦 Next.js automatically handles routing for you, with great DX and flexibility.
 */
