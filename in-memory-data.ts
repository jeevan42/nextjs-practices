// in-memory-data.ts
// -------------------------------------------
// In-Memory Data Storage in Next.js API Routes
//
// Sometimes you need to store temporary data during the app runtime,
// without using a database. This is called in-memory storage.
//
// This file covers:
// - What is in-memory data
// - Use cases and limitations
// - Example: Storing todos in-memory in an API route
// -------------------------------------------

// 1️⃣ What is In-Memory Data?
// - Data stored in variables inside your server's memory (RAM).
// - Lives only as long as your server process is running.
// - Data is lost on server restart or redeploy.
// - Not shared across multiple server instances or serverless invocations.

// 2️⃣ When to use in-memory data?
// - Prototyping or demos without a real database.
// - Caching data temporarily.
// - Very small apps where persistence is not critical.

// 3️⃣ Limitations:
// - Not persistent; data resets on server restart.
// - Not scalable for production or multiple server instances.
// - Should NOT be used for critical or long-term data.

// 4️⃣ Example Usage in Next.js API Route

// We keep todos in a simple array inside this module:
type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

let todos: Todo[] = [
  { id: 1, title: "Learn Next.js API Routes", completed: false },
];

// Functions to manipulate todos
export function getTodos() {
  return todos;
}

export function addTodo(title: string) {
  const newTodo: Todo = {
    id: todos.length + 1,
    title,
    completed: false,
  };
  todos.push(newTodo);
  return newTodo;
}

// 5️⃣ Using these in an API route

/*
In your app/api/todos/route.ts:

import { NextResponse } from "next/server";
import { getTodos, addTodo } from "@/lib/in-memory-data";

export async function GET() {
  return NextResponse.json(getTodos());
}

export async function POST(request: Request) {
  const { title } = await request.json();
  const todo = addTodo(title);
  return NextResponse.json(todo, { status: 201 });
}
*/

// -------------------------------------------
// Summary:
// - In-memory data is quick and easy for prototyping.
// - Not recommended for production apps.
// - Perfect for learning Next.js API Routes with simple state management.
// -------------------------------------------
