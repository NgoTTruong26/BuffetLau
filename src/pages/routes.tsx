import { lazy } from "react";

const Home = lazy(() => import("./home"));
const Deals = lazy(() => import("./deals"));
const Book = lazy(() => import("./bookings"));
const Login = lazy(() => import("components/Login"));

export const homeRoutes = [
  {
    name: "Home",
    path: "/",
    element: <Home />,
  },
  {
    name: "Deals",
    path: "uu-dai",
    element: <Deals />,
  },
  {
    name: "Book",
    path: "dat-ban",
    element: <Book />,
  },
];

export const accountRouters = [
  {
    name: "Login",
    path: "login",
    element: <Login />,
  },
];
