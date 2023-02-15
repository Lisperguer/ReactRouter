import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Error } from "./pages/Error";
import { Home } from "./pages/Home";
import { ProductDetailPage } from "./pages/ProductDetailPage";
import { Products } from "./pages/Products";
import { RootLayout } from "./pages/RootLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Home /> },
      { path: "products", element: <Products /> },
      { path: "products/:productId", element: <ProductDetailPage/>}
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
