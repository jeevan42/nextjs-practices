/**
 * 📘 Topic: Server Actions in Next.js 13+ (App Router)
 *
 * Next.js Server Actions let you handle **server-side mutations** directly in your components.
 * ✅ Works with <form action={...}> like PHP-style forms
 * ✅ Runs on server only (no client-side JS required)
 * ✅ Great for simple, fast APIs (e.g., create/update/delete)
 *
 * 🔒 Safe from client tampering, no need for separate API route
 * 🔧 Requires experimental feature flag: `serverActions: true`
 */

// Enable server actions in `next.config.js`
// module.exports = {
//   experimental: {
//     serverActions: true,
//   },
// };

// 🔹 app/contact/page.js
'use client';

import React, { useState } from 'react';
import { submitContactForm } from './actions';

export default function ContactPage() {
  const [message, setMessage] = useState('');

  return (
    <form action={submitContactForm} className="space-y-4">
      <input name="name" required placeholder="Your Name" className="border p-2" />
      <input name="email" type="email" required placeholder="Email" className="border p-2" />
      <textarea name="message" placeholder="Message" className="border p-2"></textarea>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2">Send</button>
      {message && <p className="text-green-600">{message}</p>}
    </form>
  );
}

// 🔹 app/contact/actions.js
'use server';

export async function submitContactForm(formData) {
  const name = formData.get('name');
  const email = formData.get('email');
  const message = formData.get('message');

  // ✅ Perform server-side logic (DB, API call, etc.)
  console.log('Contact Form:', { name, email, message });

  // Optionally send email or store in DB here

  // You can return data to the client, but NOT directly
  // for this you'll need useFormState or revalidatePath
}

/**
 * 🔍 Notes:
 * - Action is a server function that receives FormData
 * - Runs ONLY on server, not bundled to client
 * - Use with `<form action={fn}>` (no JS needed)
 *
 * 🧠 Advanced:
 * - Use `useFormStatus()` to show loading state
 * - Use `revalidatePath()` to refresh data (like mutate)
 * - Can combine with `useFormState()` to show result
 */


/**
 * 📘 Topic: Authentication with NextAuth.js in Next.js App Router
 *
 * NextAuth.js is a complete open-source authentication solution for Next.js apps.
 *
 * ✅ Supports OAuth, Email, Credentials, JWT
 * ✅ Works with App Router (`app/`)
 * ✅ Built-in CSRF protection, session management
 */

// 1. Install dependencies
// npm install next-auth

// 2. Setup your route handler:

// 🔹 app/api/auth/[...nextauth]/route.js
import NextAuth from 'next-auth';
import GitHubProvider from 'next-auth/providers/github';

const handler = NextAuth({
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      session.user.id = token.sub;
      return session;
    },
  },
});

export { handler as GET, handler as POST };

// 3. Setup <SessionProvider> in layout.js

// 🔹 app/layout.js
import './globals.css';
import { SessionProvider } from 'next-auth/react';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SessionProvider>{children}</SessionProvider>
      </body>
    </html>
  );
}

// 4. Using in a page

// 🔹 app/profile/page.jsx
'use client';
import { useSession, signIn, signOut } from 'next-auth/react';

export default function ProfilePage() {
  const { data: session } = useSession();

  if (!session)
    return <button onClick={() => signIn()}>Sign in</button>;

  return (
    <div>
      <p>Welcome, {session.user.name}</p>
      <button onClick={() => signOut()}>Sign out</button>
    </div>
  );
}

/**
 * ✅ Securely handles login, logout, sessions
 * ✅ Works client-side with React hooks
 * ✅ Use server-side helpers if needed (e.g. `auth()` in server components)
 */
