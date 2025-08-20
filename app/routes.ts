import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("/todos", "routes/todo-page.tsx"),
] satisfies RouteConfig;
