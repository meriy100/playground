import {
  createBrowserRouter,
  Link,
} from "react-router-dom";
import Login from "./pages/Login.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <h1>Hello World</h1>
        <Link to="login">Login</Link>
      </div>
    ),
  },
  {
    path: "login",
    element: <Login />,
  },
]);

export default router