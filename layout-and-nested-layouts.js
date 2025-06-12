// File: layout-and-nested-layouts.js

/* 📘 Topic: Layout.js and Nested Layouts in Next.js (App Router)

Explains how layout.js helps share UI across pages, supports persistent layouts, and how nested layouts work for scoped areas like dashboards or user panels. */

/**

🔹 Basic layout.js example (shared across route group)

File: /app/layout.js */


export default function RootLayout({ children }) { return ( <html lang="en"> <body> <header>Global Header</header> <main>{children}</main> <footer>Global Footer</footer> </body> </html> ); }

/**

🔸 Nested Layout (e.g., Dashboard area)

File: /app/dashboard/layout.js */


export default function DashboardLayout({ children }) { return ( <section> <nav>Dashboard Sidebar</nav> <div>{children}</div> </section> ); }

/**

🧠 Important Notes:

Every folder with layout.js wraps its route's children.


Layouts are persistent: reusing state, not remounted on navigation.


Useful for keeping sidebar, modals, tabs, etc. persistent.


You can also use loading.js, error.js, and not-found.js in the same folder for enhanced UX. */


/**

✅ Summary:

Use layout.js in app/ to define structure.


Nest layouts for scoped experiences (e.g. admin panel)


Add loading/error boundaries per layout scope if needed. */



