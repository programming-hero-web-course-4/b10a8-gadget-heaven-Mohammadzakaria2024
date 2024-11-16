import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { HelmetProvider } from "react-helmet-async";
import ProductContainer from "./components/ProductContainer";
import { GlobalStateProvider } from "./context/GlobalStateProvider";
import ContactUs from "./pages/ContactUs";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import ProductDetails from "./pages/ProductDetails";
import RootLayout from "./pages/RootLayout";
import Statistics from "./pages/Statistics";
import { getProducts } from "./utils/loaders";



const router = createBrowserRouter([
  {
    path: "/",
    loader: getProducts,
    element: <RootLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
        children: [
          { index: true, element: <ProductContainer /> },
          { path: ":category", element: <ProductContainer /> },
        ],
      },
      {
        path: "/product/:productId",
        element: <ProductDetails />,
      },
      {
        path: "/statistics",
        element: <Statistics />,
      },
      {
        path: "/dashboard/",
        element: <Dashboard />,
      },
      {
        path: "/contact-us",
        element: <ContactUs />,
      },
    ],
  },
]);

function App() {
  return (
    <HelmetProvider>
      <GlobalStateProvider>
        <RouterProvider router={router} />
      </GlobalStateProvider>
    </HelmetProvider>
  );
}

export default App;
