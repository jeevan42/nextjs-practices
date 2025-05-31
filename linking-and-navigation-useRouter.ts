
// 2️⃣ useRouter Hook (Navigation programmatically)
/*
You can navigate programmatically using the `useRouter` hook from 'next/navigation' (App Router).
*/


// ---------------CODE-START--------------- //

// "use client";
// import { useRouter } from "next/navigation";

// export function GoToAboutButton() {
//   const router = useRouter();

//   return (
//     <button onClick={() => router.push("/about")}>
//       Navigate to About Page
//     </button>
//   );
// }
// ---------------CODE-END--------------- //

/*
Other useful methods:
- router.push('/route')     // Go to a route
- router.replace('/route')  // Replace history instead of push
- router.back()             // Go back
*/

// 📝 Note:
// - The `useRouter` hook from "next/navigation" is used in client components.
// - For server navigation (redirects), use `redirect()` from "next/navigation" in server components or actions.
