// src/lib/in-memory-data.ts

/**
 * 🗄️ In-Memory Data Store for Next.js API Routes
 *
 * This file acts as a temporary in-memory data storage to hold data without using a database.
 * It is useful for prototyping, demos, or apps where persistence is not needed.
 * 
 * ⚠️ Data stored here will be lost when the server restarts or redeploys.
 * 
 * --- Why and Where to place this file? ---
 * - Place inside `src/lib/` folder as a reusable "library" module.
 * - Keeps API route handlers clean by separating data logic.
 * 
 * --- How to Import using Aliases ---
 * 1. Define path alias in `tsconfig.json`:
 *    {
 *      "compilerOptions": {
 *        "baseUrl": "src",
 *        "paths": {
 *          "@/*": ["*"]
 *        }
 *      }
 *    }
 * 
 * 2. Then import like:
 *    import { todos } from "@/lib/in-memory-data";
 * 
 * --- Usage ---
 * - Import `todos` or any other in-memory collections in API routes.
 * - Perform CRUD operations on this array as if it is your DB.
 */

export type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

export const todos: Todo[] = [
  { id: 1, text: "Learn Next.js 15 App Router", completed: false },
  { id: 2, text: "Build a Todo app", completed: false },
];

// Example function to add a new todo
export function addTodo(text: string) {
  const newTodo: Todo = {
    id: todos.length + 1,
    text,
    completed: false,
  };
  todos.push(newTodo);
  return newTodo;
}

// You can add update, delete, toggle functions similarly if needed.


// src/app/api/todos/route.ts
// import { NextRequest, NextResponse } from "next/server";
// import { todos, addTodo } from "@/lib/in-memory-data";

// export async function GET() {
//   return NextResponse.json(todos);
// }

// export async function POST(request: NextRequest) {
//   const { text } = await request.json();
//   if (!text) {
//     return NextResponse.json({ error: "Text is required" }, { status: 400 });
//   }
//   const newTodo = addTodo(text);
//   return NextResponse.json(newTodo);
// }

