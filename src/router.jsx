import { lazy } from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";

import CityList from "./components/CityList/CityList";
import City from "./components/City/City";
import Form from "./components/Form/Form";
import CountriesList from "./components/CountriesList/CountriesList";
import ProtectedRoute from "./pages/ProtectedRoute";

const Homepage = lazy(() => import("./pages/Homepage"));
const Product = lazy(() => import("./pages/Product"));
const Pricing = lazy(() => import("./pages/Pricing"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));
const Login = lazy(() => import("./pages/Login"));
const AppLayout = lazy(() => import("./pages/AppLayout"));

const router = createBrowserRouter([
  { path: "/", element: <Homepage />, errorElement: <PageNotFound /> },
  {
    path: "/product",
    element: <Product />,
  },
  {
    path: "/pricing",
    element: <Pricing />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/app",
    element: (
      <ProtectedRoute>
        <AppLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "/app",
        element: <Navigate to={"cities"} />,
      },
      {
        path: "cities",
        element: <CityList />,
        index: true,
      },
      { path: "cities/:id", element: <City /> },
      { path: "countries", element: <CountriesList /> },
      { path: "form", element: <Form /> },
    ],
  },
]);

export default router;
