// File: streaming-and-suspense.js

/* 📘 Topic: Streaming and React Suspense in Next.js App Router

Streaming allows sending parts of the page as they’re ready, improving TTFB and user experience. React Suspense enables showing fallback UI while waiting for data or components. */

/**

🧪 Streaming Example using Server Components with Suspense

File: /app/page.js */


import { Suspense } from 'react'; import UserProfile from './UserProfile';

export default function HomePage() { return ( <div> <h1>Streaming Demo</h1> <Suspense fallback={<p>Loading user profile...</p>}> <UserProfile /> </Suspense> </div> ); }

/**

💡 UserProfile is a server component simulating slow fetch

File: /app/UserProfile.js */


async function fetchUser() { await new Promise((r) => setTimeout(r, 3000)); return { name: 'Jeevan', role: 'Developer' }; }

export default async function UserProfile() { const user = await fetchUser(); return <p>👤 {user.name} - {user.role}</p>; }

/**

✅ Benefits:

React streams content to browser as it’s ready


Faster perceived load time


Works natively in App Router


❗ Suspense works only for Server Components or async Client Components (with use hook or lazy imports). */


/**

🧠 Real-world usage:

Dashboards


Reports with large datasets


E-commerce product details + sidebar */



/**

Summary:

Use <Suspense> to stream async content


Works well with nested layouts


Keep fallbacks light and contextual */



