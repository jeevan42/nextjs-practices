// layout-vs-page.ts

/*
🧩 layout.tsx vs page.tsx in Next.js 15

🔹 layout.tsx:
- Acts like a shared wrapper for all child routes.
- Perfect for headers, footers, sidebars, etc.
- Persistent across navigation (doesn’t re-render fully).

🔹 page.tsx:
- Defines content for a specific route (like "/about/page.tsx").
- It’s route-specific and rendered inside the closest layout.

🔹 Example structure:

src/
├── app/
│   ├── layout.tsx     // Shared layout
│   ├── page.tsx       // Home page
│   └── about/
│       └── page.tsx   // About page

🔹 Note:
- You can nest layouts too (e.g., dashboard layout inside app layout).
*/
