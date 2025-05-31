// server-component.ts
// -------------------------------------------
// Next.js 15 - Server Components Overview
//
// By default, all components in Next.js 15 App Router are Server Components,
// unless marked with "use client" directive.
//
// This file explains:
// - What is a Server Component
// - Benefits of Server Components
// - How to use them
// - Restrictions and capabilities
// - Example Server Component
// -------------------------------------------

// 1️⃣ What is a Server Component?
// A Server Component is a React component rendered on the server during the request.
// It does not include any client-side JavaScript by default, resulting in faster loads and better SEO.

// 2️⃣ Why use Server Components?
// - Improved performance: Smaller JS bundles, faster page loads.
// - Ability to safely use server-only features like filesystem, database calls, secrets.
// - No hydration overhead on the client.

// 3️⃣ How to use?
// - Just create components normally WITHOUT the "use client" directive.
// - They can fetch data directly (e.g. using fetch or database queries).
// - They can render UI that does not require client interactivity.

// 4️⃣ Restrictions:
// - Cannot use React hooks like useState, useEffect, useContext, etc.
// - Cannot handle browser events or client-side interactivity.
// - Cannot import Client Components directly (only vice versa).

// ---------------EXAMPLE--------------- //

// ---------------CODE-START--------------- //


// import React from "react";

// // Server Component: Fetches data and renders UI on the server
// export default async function ServerTime() {
//   // Example: fetch current date/time (simulated with new Date)
//   const currentTime = new Date().toLocaleString();

//   return (
//     <div>
//       <h2>Server Component</h2>
//       <p>Current server time: {currentTime}</p>
//       <p>This component is rendered on the server.</p>
//     </div>
//   );
// }

// ---------------CODE-END--------------- //


// -------------------------------------------
// Summary:
// - Default component type in Next.js 15 App Router.
// - Rendered on server, no client JS by default.
// - Use for data fetching, SEO, static content.
// - Cannot use client hooks or browser APIs.
// -------------------------------------------
