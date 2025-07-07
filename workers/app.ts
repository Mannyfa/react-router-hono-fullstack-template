import { Hono } from "hono";
import { createRequestHandler } from "react-router";

const app = new Hono();

const menu = new Hono().get("/", (c) => {
  return c.json([
    { id: 1, name: "Pancakes", description: "Fluffy pancakes with syrup.", tags: "Breakfast, Sweet", price: "$10", image_url: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { id: 2, name: "French Toast", description: "Golden brown french toast.", tags: "Breakfast, Sweet", price: "$12", image_url: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?q=80&w=1949&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { id: 3, name: "Waffles", description: "Crispy waffles with berries.", tags: "Breakfast, Sweet", price: "$11", image_url: "https://images.unsplash.com/photo-1562376552-0d160a2f238d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  ]);
});

const blog = new Hono().get("/", (c) => {
  return c.json([
    { id: 1, title: "My First Blog Post", body: "This is my first blog post." },
    { id: 2, title: "My Second Blog Post", body: "This is my second blog post." },
    { id: 3, title: "My Third Blog Post", body: "This is my third blog post." },
  ]);
});

app.route("/api/menu", menu);
app.route("/api/blog", blog);

app.get("*", (c) => {
  const requestHandler = createRequestHandler(
    () => import("virtual:react-router/server-build"),
    import.meta.env.MODE,
  );

  return requestHandler(c.req.raw, {
    cloudflare: { env: c.env, ctx: c.executionCtx },
  });
});

export default app;
