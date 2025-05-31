// next-auth-setup.ts

/*
🔐 Authentication with NextAuth.js in App Router

🔹 Installation:

npm install next-auth

🔹 Setup steps:
1. Create a `[...nextauth]/route.ts` file inside `app/api/auth`.
2. Configure providers (Google, GitHub, Credentials, etc.)
3. Wrap the layout with `<SessionProvider>`.
4. Use `useSession()` hook to access auth state.

🔹 Example config:

import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";

const handler = NextAuth({
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
  ],
});

export { handler as GET, handler as POST };
*/
