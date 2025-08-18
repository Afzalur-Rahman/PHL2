import App from "@/App";
import { createBrowserRouter } from "react-router";
import Tasks from "@/pages/Tasks";
import User from "@/pages/User";

const router = createBrowserRouter([
  {
    path: "/",
    // element: <App />,

    Component: App,
    children: [
      {
        path: "user",
        Component: User,
      },
      {
        path: "tasks",
        Component: Tasks,
      },
    ],
  },
]);

export default router;
