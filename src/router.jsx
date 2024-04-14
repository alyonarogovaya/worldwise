import { createBrowserRouter } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import PageNotFound from "./pages/PageNotFound";
import Login from "./pages/Login";
import AppLayout from "./pages/AppLayout";
import CityList from "./components/CityList";

import Form from "./components/Form";
import CountriesList from "./components/CountriesList";

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
    element: <AppLayout />,
    children: [
      { path: "cities", element: <CityList />, index: true },
      { path: "countries", element: <CountriesList /> },
      { path: "form", element: <Form /> },
    ],
  },
]);

export default router;
