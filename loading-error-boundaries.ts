// loading-error-boundaries.ts

/*
⏳ loading.tsx and error.tsx in Next.js 15

🔹 loading.tsx:
- Used to show a loading spinner or skeleton while content is being fetched.

🔹 error.tsx:
- Used to catch errors in the route's UI tree and display fallback UI.

🔹 File structure:

app/
├── page.tsx
├── loading.tsx      ✅ Shows while page is loading
└── error.tsx        ✅ Catches runtime errors

🔹 Bonus:
- You can add a `reset()` method in `error.tsx` to retry rendering.
*/
