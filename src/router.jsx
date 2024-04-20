import { createBrowserRouter, Navigate } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import PageNotFound from "./pages/PageNotFound";
import Login from "./pages/Login";
import AppLayout from "./pages/AppLayout";
import CityList from "./components/CityList/CityList";
import City from "./components/City/City";
import Form from "./components/Form/Form";
import CountriesList from "./components/CountriesList/CountriesList";
import ProtectedRoute from "./pages/ProtectedRoute";

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
