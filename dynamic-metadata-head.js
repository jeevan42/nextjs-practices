// File: dynamic-metadata-head.js

/* 📘 Topic: Dynamic Metadata & Head Management in Next.js (App Router)

This file explains how to manage metadata (like title, description, og:image etc.) dynamically in Next.js App Directory. Also covers <head> usage, default vs dynamic metadata, and SEO improvements. */

/**

🔹 Default metadata via metadata.js

Place this in route folder: /app/about/metadata.js */ export const metadata = { title: 'About Us - MyApp', description: 'Learn more about our team and mission.', openGraph: { title: 'About - MyApp', description: 'About MyApp team and mission statement', images: ['/og-about.png'], }, };


/**

🔸 Dynamic Metadata using generateMetadata()

Used for routes where metadata depends on dynamic data (e.g., blog/[slug]) */ export async function generateMetadata({ params }) { const post = await fetch(https://myapi.com/posts/${params.slug}).then(res => res.json());


return { title: post.title, description: post.excerpt, openGraph: { title: post.title, description: post.excerpt, images: [post.coverImage], }, }; }

/**

⚙️ Managing <head> directly (not recommended in App Router)

If you must inject custom head tags directly: */ import Head from 'next/head';


export default function CustomHeadExample() { return ( <> <Head> <title>Custom Title</title> <meta name="description" content="Custom Description" /> </Head> <p>This uses legacy Head component.</p> </> ); }

/**

✅ Summary:

Use metadata object for static content


Use generateMetadata() for dynamic content


Avoid <Head> in App Router unless migrating from Pages Router */



