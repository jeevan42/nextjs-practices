// ✅ LINKING AND NAVIGATION IN NEXT.JS 15 (App Router)

// 1️⃣ Client-Side Navigation using <Link>
/*
Next.js provides a built-in <Link> component from 'next/link'
that enables client-side transitions between routes without full reload.
*/

// ---------------CODE-START--------------- //
// import Link from "next/link";

// export default function HomePage() {
//   return (
//     <div>
//       <h1>Home Page</h1>
//       <Link href="/about">
//         <button>Go to About Page</button>
//       </Link>
//     </div>
//   );
// }

// ---------------CODE-END--------------- //


/*
❓ Do we need "use client" for components using <Link>?

🔸 NO. You don’t need `"use client"` if the component only uses static JSX and <Link>.

🔸 YES. You need `"use client"` if you use client-side hooks like:
    - useState, useEffect, useRouter, etc.
*/
