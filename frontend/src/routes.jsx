import { Navigate, useRoutes } from "react-router";
import AppLayout from "./layout/app-layout";
import Home from "./pages/home";
import { paths } from "./paths";
import CreateProduct from "./pages/create-product";

export default function Router() {
  return useRoutes([
    {
      path: "/",
      element: (
        <AppLayout>
          <Home />
        </AppLayout>
      ),
    },
    {
      path: paths.createProduct,
      element: (
        <AppLayout>
          <CreateProduct />
        </AppLayout>
      ),
    },
    { path: "*", element: <Navigate to="/404" replace /> },
  ]);
}
