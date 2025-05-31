// useState-useEffect.ts

/*
  React Hooks in Next.js 15 (App Router) — `useState` & `useEffect`

  1️⃣ What is `useState`?
    - Hook used to create and manage local component state.
    - Useful for input values, toggles, counters, etc.

    Example:
    const [count, setCount] = useState(0);
    setCount(count + 1);

  2️⃣ What is `useEffect`?
    - Hook for side effects: fetching data, subscriptions, timers, etc.
    - Runs after render. Can have dependencies to control when it runs.

    Example:
    useEffect(() => {
      console.log("Component mounted!");
    }, []);

  3️⃣ Important Notes:
    - These hooks work only in Client Components.
    - So you MUST add `"use client";` at the top of your component file.

  4️⃣ Common use cases:
    - `useState`: Form inputs, toggles, tabs
    - `useEffect`: Fetch data, sync with localStorage, timers, etc.
*/

// ---------------CODE EXAMPLE--------------- //

// "use client";
// import { useState, useEffect } from "react";

// export default function CounterComponent() {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     console.log("Component mounted or count changed:", count);
//   }, [count]); // 👈 runs when count changes

//   return (
//     <div>
//       <p>Count: {count}</p>
//       <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
//     </div>
//   );
// }

// ---------------CODE EXAMPLE ENDS--------------- //


// ✅ Summary:
// - `useState()` lets you store dynamic data inside functional components.
// - `useEffect()` lets you handle side-effects like API calls or subscriptions.
// - Always ensure `"use client";` is present when using these hooks in App Router.
