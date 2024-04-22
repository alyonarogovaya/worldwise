import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./router.jsx";
import "./index.css";
import { CitiesProvider } from "./context/CitiesContext.jsx";
import { AuthProvider } from "./context/FakeAuthContext.jsx";
import SpinnerFullPage from "./components/SpinnerFullPage/SpinnerFullPage";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CitiesProvider>
      <AuthProvider>
        <Suspense fallback={<SpinnerFullPage />}>
          <RouterProvider router={router} />
        </Suspense>
      </AuthProvider>
    </CitiesProvider>
  </React.StrictMode>
);
