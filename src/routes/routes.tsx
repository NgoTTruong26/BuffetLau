import { lazy } from "react";

const Home = lazy(() => import("../pages/home"));
const Deals = lazy(() => import("../pages/deals"));
const Book = lazy(() => import("../pages/bookings"));
const Login = lazy(() => import("components/Login"));
const GetAllUsers = lazy(() => import("pages/admin/GetAllUsers"));

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
