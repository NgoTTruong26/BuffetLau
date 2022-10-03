import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "layout";

const Home = lazy(() => import("../pages/content/home"));
const Deals = lazy(() => import("../pages/content/deals"));
const Book = lazy(() => import("../pages/content/bookings"));
const Login = lazy(() => import("pages/account/Login"));
const GetAllUsers = lazy(() => import("pages/content/admin/GetAllUsers"));
const Bills = lazy(() => import("pages/content/employees/bills"));
const CreateBills = lazy(
  () => import("pages/content/employees/bills/CreateBills")
);
const PaymentDetails = lazy(
  () => import("pages/content/employees/bills/PaymentDetails")
);

export const homeRoutes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "uu-dai",
    element: <Deals />,
  },
  {
    path: "dat-ban",
    element: <Book />,
  },
  {
    path: "/admin/get-all-users",
    element: <GetAllUsers />,
  },
  {
    path: "/employees/bills",
    element: <Bills />,
    children: [
      {
        path: "/employees/bills",
        element: <CreateBills />,
      },
      {
        path: "/employees/bills/create-bills",
        element: <CreateBills />,
      },
      {
        path: "/employees/bills/payment-details",
        element: <PaymentDetails />,
      },
    ],
  },
];

export const accountRouters = [
  {
    name: "Login",
    path: "login",
    element: <Login />,
  },
];

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [...homeRoutes],
  },
  {
    path: "account/login",
    element: <Login />,
  },
]);

/* ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <RouterProvider router={router} />
); */
