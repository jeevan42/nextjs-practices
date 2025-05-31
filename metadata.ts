// metadata.ts

/*
🔍 SEO & Metadata with generateMetadata() in Next.js 15

🔹 What is Metadata?
- Data that helps browsers and search engines understand your page (title, description, og:image, etc.)

🔹 How to use it:
- You can export a `metadata` object or use `generateMetadata()` for dynamic values.

🔹 Example (static):

export const metadata = {
  title: "Todo App",
  description: "Manage your tasks easily",
};

🔹 Example (dynamic):

export async function generateMetadata({ params }) {
  const todo = await fetchTodo(params.id);
  return {
    title: `Todo - ${todo.title}`,
  };
}

*/
