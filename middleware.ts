// middleware.ts

/*
🌐 Middleware in Next.js (App Router)

🔹 Purpose:
- Middleware runs **before** a request is completed.
- Useful for authentication, redirects, logging, header injection, etc.

🔹 File Location:
- Place a `middleware.ts` file at the root or in any nested folder under `/src`.

🔹 Syntax:
- Exports a function that receives a `NextRequest` object.
- Use `NextResponse` to respond or redirect.

🔹 Example:
*/

// ---------------CODE-START--------------- //

// import { NextResponse } from "next/server";
// import type { NextRequest } from "next/server";

// export function middleware(request: NextRequest) {
//   const isLoggedIn = false; // Example logic

//   if (!isLoggedIn && request.nextUrl.pathname.startsWith("/dashboard")) {
//     return NextResponse.redirect(new URL("/login", request.url));
//   }

//   return NextResponse.next();
// }

// ---------------CODE-END--------------- //

/*
🔸 Configure paths in `middleware.ts` using `matcher` in `next.config.js`:

export const config = {
  matcher: ["/dashboard/:path*"],
};

*/
