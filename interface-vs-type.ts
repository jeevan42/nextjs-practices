/*
  Type vs Interface in TypeScript — Theory & Practical Use

  1️⃣ What is `type`?
    - `type` is used to define a custom type alias.
    - It can describe object shapes, primitives, union types, intersections, tuples, etc.
    - Example: 
      type ID = number | string;

  2️⃣ What is `interface`?
    - `interface` is mainly used to define the shape of an object or class contracts.
    - Supports declaration merging (can be extended across multiple files).
    - Useful for OOP and large object models.
    - Example:
      interface User {
        id: number;
        name: string;
      }

  3️⃣ Differences:
    - `interface` can be merged and extended easily.
    - `type` is more flexible (can do unions/intersections).
    - Both can describe object shapes interchangeably.
    - Performance and usage are almost identical for simple cases.

  4️⃣ When to use which?
    - Use `interface` when you want to define object shapes with potential merging or extending.
    - Use `type` when you need union/intersection types or more flexibility.
    - For simple models like a Todo item, either works fine.

  5️⃣ Example Todo type and interface:

    // Using type alias
    export type Todo = {
      id: number;
      text: string;
      completed: boolean;
    };

    // Using interface
    export interface Todo {
      id: number;
      text: string;
      completed: boolean;
    }

  6️⃣ Conclusion:
    - Use whichever fits your style or project conventions.
    - Both are widely accepted in Next.js + TypeScript projects.
*/

// -----------------------
// Sample in-memory data store using `type` for Todo

export type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

// Simple in-memory array to store todos
export const todos: Todo[] = [
  { id: 1, text: "Learn Next.js", completed: false },
  { id: 2, text: "Build Todo App", completed: true },
];
