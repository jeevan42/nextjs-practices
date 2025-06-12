// File: app-directory-routing.js

/* 📘 Topic: App Directory Routing in Next.js 13+

This file explains how routing works in the App Directory introduced in Next.js 13+. Learn about folders, layout.js, page.js, route.js, loading.js, and error.js */

/**

🧱 Folder-based Routing Structure:

app/


├── layout.js        → shared layout for all child routes

├── page.js          → renders the route’s page component

├── loading.js       → optional fallback during loading

├── error.js         → optional error handling component

└── dashboard/

├── page.js

├── layout.js

├── settings/

├── page.js

Each folder = a route. Each page.js = that route's entrypoint. */


/**

📄 Example: /app/dashboard/page.js */ export default function DashboardPage() { return <h1>Dashboard</h1>; }


/**

🧩 layout.js in /app/dashboard/ */ export default function DashboardLayout({ children }) { return (

 <div>
   <aside>Sidebar</aside>
   <main>{children}</main>
 </div>
); }

/**

🌀 loading.js — used for loading UI during lazy data fetching */ export default function Loading() { return <p>Loading...</p>; }


/**

❗ error.js — error boundary for the current route subtree */ export default function ErrorBoundary({ error }) { return <div>Something went wrong: {error.message}</div>; }


/**

✅ Summary:

App directory promotes co-location of logic (page, layout, loading, etc.)


Great for modular and scalable projects


Replaces old file-based pages/ system (though both can coexist temporarily) */



