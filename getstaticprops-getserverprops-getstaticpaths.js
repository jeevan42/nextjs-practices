/**
 * 📘 Topic: Data Fetching Methods in Next.js
 *
 * Next.js supports multiple data-fetching strategies for SSR, SSG, and hybrid rendering.
 * Let's break down the core methods: 
 * 
 * - getStaticProps
 * - getStaticPaths
 * - getServerSideProps
 *
 * Each serves a different use case.
 */

/* -----------------------------------------
 🔹 getStaticProps (SSG - Static Site Generation)
 ----------------------------------------- */
// Pre-renders page at build time. Great for fast-loading pages with content that rarely changes.

export async function getStaticProps() {
  // Simulate fetching data
  const data = await fetch('https://jsonplaceholder.typicode.com/posts/1').then(res => res.json());

  return {
    props: {
      post: data
    },
    revalidate: 10, // ISR: Rebuild page every 10 seconds (optional)
  };
}

export default function StaticPage({ post }) {
  return (
    <div>
      <h1>Static Page (getStaticProps)</h1>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
}

/* -----------------------------------------
 🔹 getServerSideProps (SSR - Server Side Rendering)
 ----------------------------------------- */
// Runs on each request. Use for data that must be up-to-date (auth, dashboards).

export async function getServerSideProps(context) {
  const data = await fetch('https://jsonplaceholder.typicode.com/users/1').then(res => res.json());

  return {
    props: {
      user: data
    }
  };
}

export function ServerPage({ user }) {
  return (
    <div>
      <h1>Server-side Page (getServerSideProps)</h1>
      <h2>{user.name}</h2>
      <p>{user.email}</p>
    </div>
  );
}

/* -----------------------------------------
 🔹 getStaticPaths (with getStaticProps)
 ----------------------------------------- */
// Used with dynamic routes to generate all required paths during build.

export async function getStaticPaths() {
  const posts = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=3').then(res => res.json());

  const paths = posts.map(post => ({
    params: { id: post.id.toString() }
  }));

  return {
    paths,
    fallback: false, // true / blocking also supported
  };
}

export async function getStaticPropsForPost({ params }) {
  const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`).then(res => res.json());

  return {
    props: {
      post: data
    }
  };
}

export function DynamicPostPage({ post }) {
  return (
    <div>
      <h1>Dynamic Page (getStaticPaths + getStaticProps)</h1>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
}

/**
 * --------------------------------------------------
 * 🧠 Summary:
 *
 * ✅ getStaticProps: Build-time rendering, great for blog pages, marketing, etc.
 * ✅ getStaticPaths: Use with dynamic [params] pages.
 * ✅ getServerSideProps: Runtime rendering for dynamic user-specific content.
 *
 * 🔁 getStaticProps + revalidate = Incremental Static Regeneration (ISR)
 *
 * ⚠️ Only one of the three (getStaticProps, getServerSideProps, getInitialProps) can be used in a page.
 */
