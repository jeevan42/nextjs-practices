// File: middleware-and-custom-headers.js

/* 📘 Topic: Middleware and Custom Headers in Next.js

This file demonstrates how to use middleware.js for request interception, and how to set custom HTTP headers in Next.js apps. Applicable in both pages/ and app/ directory structures. */

/**

1️⃣ Middleware Basics

middleware.ts or middleware.js at root or under specific routes */


// middleware.js import { NextResponse } from 'next/server';

export function middleware(request) { const { pathname } = request.nextUrl;

// Example: Redirect unauthenticated users const isLoggedIn = request.cookies.get("token"); if (!isLoggedIn && pathname.startsWith("/dashboard")) { return NextResponse.redirect(new URL("/login", request.url)); }

return NextResponse.next(); }

// Apply to all routes or configure using matcher export const config = { matcher: ["/dashboard/:path*", "/profile/:path*"], };

/**

2️⃣ Setting Custom Headers

File: next.config.js */


// next.config.js module.exports = { async headers() { return [ { source: "/(.*)", headers: [ { key: "X-Powered-By", value: "Next.js", }, { key: "X-Frame-Options", value: "DENY", }, ], }, ]; }, };

/**

3️⃣ Use Case: Add Locale Header in Middleware */


// middleware.js export function middleware(request) { const response = NextResponse.next(); response.headers.set("X-Custom-Lang", request.headers.get("accept-language") || "en"); return response; }

/** ✅ Summary:

middleware.js runs before requests hit the server

Use it for redirects, auth checks, or logging

Use next.config.js headers() to globally attach HTTP headers */


