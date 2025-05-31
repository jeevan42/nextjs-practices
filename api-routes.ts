// api-routes.ts
// -------------------------------------------
// Next.js 15 - API Routes with App Router
//
// In Next.js 15 App Router, API routes are implemented
// as route handler files inside the `app/api/` folder.
//
// This file explains:
// - What are API Routes
// - How to create API route handlers
// - HTTP method handlers (GET, POST, etc.)
// - Using in-memory or external data
// - Example API route for todos
// -------------------------------------------

// 1️⃣ What are API Routes?
// API Routes let you create backend endpoints inside your Next.js app.
// They can handle requests (GET, POST, PUT, DELETE) and respond with JSON or other data.
// Useful for building REST APIs, form submissions, authentication, etc.

// 2️⃣ How to create API Routes?
// - Create a folder inside `app/api/` for your endpoint.
// - Add a `route.ts` file inside that folder.
// - Export functions named after HTTP methods: GET, POST, PUT, DELETE, etc.
// - Each handler receives a Request object and returns a Response.

// 3️⃣ Example of API Route Handler (todos)

// ---------------CODE-START--------------- //

// File: app/api/todos/route.ts

// import { NextResponse } from "next/server";

// // In-memory todos array (for example only)
// let todos = [
//   { id: 1, title: "Learn Next.js 15 API routes", completed: false },
//   { id: 2, title: "Build a Todo app", completed: false },
// ];

// // GET handler - Return all todos
// export async function GET() {
//   return NextResponse.json(todos);
// }

// // POST handler - Add a new todo
// export async function POST(request: Request) {
//   const data = await request.json();
//   const newTodo = {
//     id: todos.length + 1,
//     title: data.title,
//     completed: false,
//   };
//   todos.push(newTodo);
//   return NextResponse.json(newTodo, { status: 201 });
// }

// ---------------CODE-END--------------- //

// -------------------------------------------
// Notes:
// - Use NextResponse to send responses.
// - You can parse JSON body from Request with `request.json()`.
// - You can also handle other HTTP methods similarly.
// - This approach works with app router's file-based routing.
// -------------------------------------------

// 4️⃣ Summary:
// - API routes live in app/api/your-endpoint/route.ts
// - Export functions named by HTTP verbs (GET, POST, etc.)
// - Use Request and NextResponse to handle requests/responses
// - Great for backend logic within Next.js without separate server

