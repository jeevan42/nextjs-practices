// client-component.ts
// -------------------------------------------
// Next.js 15 - Client Components Overview
//
// By default, Next.js 15 App Router components are Server Components.
// To opt-in to client-side rendering and use React hooks, you must add "use client" directive.
//
// This file explains:
// - What is a Client Component
// - When and why to use "use client"
// - Restrictions and capabilities
// - Example client component with React hooks usage
// -------------------------------------------

// 1️⃣ What is a Client Component?
// A Client Component is a React component that runs entirely on the client-side (browser).
// It can use state, effects, event handlers, and browser APIs.

// 2️⃣ Why use "use client"?
// - To enable React hooks like useState, useEffect, useContext, etc.
// - To handle user interactions, local state, or any browser-only logic.

// 3️⃣ How to use?
// Add "use client"; directive at the very top of the file.
// This tells Next.js to bundle and serve this component as client-side JS.

// 4️⃣ Restrictions:
// - Client Components cannot use Server-only features like direct database queries, filesystem access.
// - They can import Server Components, but Server Components cannot import Client Components.

// ---------------EXAMPLE--------------- //

// ---------------CODE-END--------------- //


// "use client";

// import React, { useState, useEffect } from "react";

// export default function Counter() {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     console.log("Count updated:", count);
//   }, [count]);

//   return (
//     <div>
//       <h2>Counter Component (Client Side)</h2>
//       <p>Count: {count}</p>
//       <button onClick={() => setCount(count + 1)}>Increment</button>
//     </div>
//   );
// }

// ---------------CODE-END--------------- //

// -------------------------------------------
// Summary:
// - Use "use client" at top for client components.
// - Enables React hooks and interactivity.
// - Keep server logic in Server Components.
// -------------------------------------------
