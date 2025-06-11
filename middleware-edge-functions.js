/**
 * 📘 Topic: Next.js Middleware & Edge Functions
 *
 * Middleware in Next.js runs **before** a request is completed.
 * You can:
 * - Authenticate users
 * - Redirect conditionally
 * - Add headers
 * - Rewrite paths
 * 
 * ⚙️ It runs at the Edge — super fast & globally distributed.
 */

import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

/**
 * 🔹 Middleware function
 * This runs before rendering any route (in specified matchers or root level)
 */
export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const token = req.cookies.get('token')?.value;

  // 🔒 Redirect unauthenticated users
  if (pathname.startsWith('/dashboard') && !token) {
    const loginUrl = new URL('/login', req.url);
    return NextResponse.redirect(loginUrl);
  }

  // 🌍 Add Geo-based headers (e.g., for A/B testing or i18n)
  const country = req.geo?.country || 'US';
  const res = NextResponse.next();
  res.headers.set('x-country', country);

  return res;
}

/**
 * 🔍 Limit the paths this middleware runs on
 */
export const config = {
  matcher: ['/dashboard/:path*', '/profile/:path*'],
};

/**
 * 🧠 Key Concepts:
 * - Runs on Edge (no cold starts, fast)
 * - Zero latency for redirects or blocking
 * - Can inspect cookies, headers, geolocation
 * - Doesn't have access to DOM or response body
 * 
 * 🚫 Limitations:
 * - No full access to req.body
 * - No DB queries directly (use API routes for that)
 * 
 * ✅ Use cases:
 * - Auth protection
 * - Locale routing
 * - Feature flags
 * - Bot blocking / rate limiting
 * 
 * 📁 Where to create:
 * Create `middleware.ts` or `middleware.js` in project root.
 */
