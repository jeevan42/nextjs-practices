// File: route-handlers-api-routes.js

/* 📘 Topic: Route Handlers in App Router (Replacing API Routes)

In Next.js App Router, traditional pages/api/*.js is replaced with Route Handlers. They are defined using the special route.js (or route.ts) file under the /app directory. */

/**

✨ Basic GET and POST handler

File: /app/api/hello/route.js */


export async function GET(request) { return new Response(JSON.stringify({ message: 'Hello from GET!' }), { headers: { 'Content-Type': 'application/json' }, status: 200, }); }

export async function POST(request) { const body = await request.json(); return new Response( JSON.stringify({ message: 'You sent', data: body }), { headers: { 'Content-Type': 'application/json' }, status: 201, } ); }

/**

✅ Supported Methods: GET, POST, PUT, PATCH, DELETE, OPTIONS

✅ Built on Web standard Request/Response APIs

✅ Use cookies(), headers() from next/headers for advanced handling */


/**

🧠 Common Use Cases:

Authentication (login, register)


Webhooks


RESTful APIs with CRUD


Server Actions in future */



/**

⚠️ Notes:

Middlewares run before Route Handlers


No access to Express-style req, res


Native streaming supported */



/**

Summary:

API logic now colocated with components


Route Handlers promote modular, flexible design */



