// env-variables.ts

/*
🔐 Environment Variables in Next.js

🔹 Use `.env.local` to store secrets (not committed to git).
🔹 Prefix with `NEXT_PUBLIC_` if variable is needed on client side.

🔹 Example:

.env.local
NEXT_PUBLIC_API_URL=https://api.example.com
SECRET_KEY=supersecret

🔹 Access in code:

const url = process.env.NEXT_PUBLIC_API_URL;

🔹 Don’t forget:
- Restart server after editing .env files.
- Never expose private keys to frontend (without `NEXT_PUBLIC_`).
*/
