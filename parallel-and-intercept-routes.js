// File: parallel-and-intercept-routes.js

/*
📘 Topic: Parallel Routes & Intercepting Routes in Next.js (App Router)

These advanced routing techniques are powerful for complex UI patterns like modals, drawers, and tabbed layouts.
*/

//////////////////////////////
// 🔹 Parallel Routes
//////////////////////////////

/*
✅ Use Case:
Rendering multiple sibling layouts (like tabs or panels) within a page using layout slots.

🧠 Syntax:
You define named slots in your layout like @auth, @content, @sidebar, etc.
*/

//// Folder structure:
/*
app/
 └── layout.js
 └── @modal/
 │    └── default.js
 └── @dashboard/
 │    └── page.js
*/

//// layout.js
export default function RootLayout({ children, modal, dashboard }) {
  return (
    <div>
      {modal}
      <main>{dashboard}</main>
      {children}
    </div>
  );
}

//// @dashboard/page.js
export default function DashboardPage() {
  return <h2>Dashboard main area</h2>;
}

//// @modal/default.js
export default function ModalSlot() {
  return null; // renders nothing until intercepted
}

/*
🔁 This lets you split sections of the UI into independent render trees.
*/

//////////////////////////////
// 🔸 Intercepting Routes
//////////////////////////////

/*
✅ Use Case:
Open a modal over the current page without full navigation — useful for popups, previews, etc.

🧠 Syntax:
Use `(.)`, `(..)`, or `(..)(..)` to intercept a route from the root, parent, or grandparent.
*/

//// Folder structure:
/*
app/
 └── product/
 │    └── [id]/page.js          --> Normal product page
 └── @modal/
      └── (.)product/[id]/page.js  --> Intercepts to show modal
*/

//// @modal/(.)product/[id]/page.js
export default function ProductModal({ params }) {
  return (
    <div className="modal">
      <h3>Quick View for Product ID: {params.id}</h3>
      {/* Fetch and show product details */}
    </div>
  );
}

/*
🔍 This renders a modal over any page you're currently on, while preserving background state.
Great for things like: 
- Instagram-like post overlays
- Chat preview in a sidebar
- Confirmation dialogs
*/

//////////////////////////////
// ✅ Summary
//////////////////////////////

/*
- Parallel routes: allow multiple independent layouts to render together.
- Intercept routes: let you render a page *over* another route (modals/drawers).
- Enables UI that doesn't need full route transitions.
- Improves perceived performance and UX.
*/