// File: client-vs-server-components.js

/* 📘 Topic: Client vs Server Components in Next.js App Router

Next.js App Router allows mixing Server and Client components for optimal performance and flexibility. */

/**

🔹 Server Component (default)

File: /app/page.js */


export default async function HomePage() { const res = await fetch('https://api.example.com/data'); const data = await res.json();

return ( <div> <h1>Welcome</h1> <p>Server-side fetched data: {data.message}</p> </div> ); }

// Server Components: // ✅ Can fetch data directly (like getServerSideProps before) // ✅ Run only on server, no JS sent to client // ❌ Cannot use hooks like useState/useEffect

/**

🔸 Client Component

File: /components/Counter.js */


'use client'; import { useState } from 'react';

export default function Counter() { const [count, setCount] = useState(0);

return ( <button onClick={() => setCount(count + 1)}> Count: {count} </button> ); }

// Client Components: // ✅ Can use hooks and interactivity // ❌ Can’t fetch data like server components // ❌ Adds bundle size

/**

🧠 Strategy:

Prefer Server Components for rendering, data fetching


Use Client Components only when needed (forms, modals, stateful logic)


You can compose: ServerComponent → ClientChildComponent */



/**

✅ Summary:

Server by default, add 'use client' to opt-in


Reduce client JS with Server Components


Mix both to balance performance and interactivity */



