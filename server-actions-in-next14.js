// File: server-actions-in-next14.js

/*
📘 Topic: Server Actions in Next.js 14+

Server Actions allow you to mutate data directly in server components or client forms,
without creating separate API routes or using external fetch logic.

🔧 Think of it like built-in API handlers tied directly to your UI.
*/

///////////////////////////
// ⚙️ 1. Enabling Server Actions
///////////////////////////

/*
✅ Works out of the box in Next.js 14+ (App Router only)
✅ Use `"use server"` directive inside a server component or file
✅ Can be passed to client components (like forms) as props

No need for: pages/api, fetch(), useEffect for submit, etc.
*/

'use server'

export async function addTodo(formData) {
  const todo = formData.get('todo');

  // simulate DB insert or backend call
  console.log(`✅ Adding todo: ${todo}`);

  // You could use Prisma, SQL, or another API call here
}


///////////////////////////
// 📄 2. Page that uses Server Action
///////////////////////////

/*
Use the server action as the form's `action` prop.
Next.js automatically handles the POST request and re-renders on submit.
*/

import { addTodo } from './server-actions-in-next14';

export default function TodoPage() {
  return (
    <div>
      <h1>📝 Add a Todo (Next.js Server Action)</h1>

      <form action={addTodo}>
        <input type="text" name="todo" placeholder="Enter a task..." required />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}


///////////////////////////
// 💡 3. Use Cases of Server Actions
///////////////////////////

/*
✅ Simple form submissions (e.g. auth, comments, todos)
✅ Reduce client JS bundle (less fetch/useEffect boilerplate)
✅ Automatic revalidation (optional)
✅ Great for team dashboards, admin panels, CRUD apps

You can also:
- Pass server actions to client components
- Trigger server logic without writing an API route
- Chain actions together (update → revalidate path)
*/

///////////////////////////
// ✅ Summary
///////////////////////////

/*
- Server Actions = "form-based" data mutations without APIs
- Great DX for fullstack React
- Removes fetch/post boilerplate
- Secure, fast, and clean

🎯 TL;DR:
- Write logic with `"use server"`
- Call it directly from a form or button
- Next.js handles the rest 🔥
*/