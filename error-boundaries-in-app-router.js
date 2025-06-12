// File: error-boundaries-in-app-router.js

/* 📘 Topic: Error Boundaries in Next.js App Router

Next.js App Router allows you to define custom error boundaries using error.js files within route segments. These catch runtime errors during rendering, data fetching, or in client components. */

/**

🔹 Basic error boundary for a route

File: /app/dashboard/error.js */


'use client';

import { useEffect } from 'react';

export default function DashboardError({ error, reset }) { useEffect(() => { console.error('Dashboard error:', error); }, [error]);

return ( <div> <h2>Something went wrong in Dashboard!</h2> <p>{error.message}</p> <button onClick={() => reset()}>Try again</button> </div> ); }

/**

🔸 Key Notes:

Must be a Client Component (hence 'use client' at the top)


error is the error object caught during rendering or fetching


reset() allows retrying rendering (e.g., after fixing transient issues) */



/**

🧠 Best Practices:

Place error.js inside route segment folders (e.g., /dashboard)


Combine with loading.js and not-found.js for better UX


Use logs and error boundaries to avoid entire app crashes */



/**

✅ Summary:

Use error.js to scope error boundaries


Must be client components


Enable smooth UX during runtime errors */



