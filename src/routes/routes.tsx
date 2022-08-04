import { lazy } from "react";

const Home = lazy(() => import("../pages/content/home"));
const Deals = lazy(() => import("../pages/content/deals"));
const Book = lazy(() => import("../pages/content/bookings"));
const Login = lazy(() => import("pages/account/Login"));
const GetAllUsers = lazy(() => import("pages/content/admin/GetAllUsers"));

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
  {
    name: "GetAllUsers",
    path: "/admin/get-all-users",
    element: <GetAllUsers />,
  },
];

export const accountRouters = [
  {
    name: "Login",
    path: "login",
    element: <Login />,
  },
];
