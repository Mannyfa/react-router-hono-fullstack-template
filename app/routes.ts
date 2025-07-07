import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/_index.tsx"),
  route("menu", "routes/menu.tsx"),
  route("booking", "routes/booking.tsx"),
  route("about", "routes/about.tsx"),
  route("gallery", "routes/gallery.tsx"),
  route("blog", "routes/blog.tsx"),
] as RouteConfig;
