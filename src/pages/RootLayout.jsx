import { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { Outlet, useLoaderData } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { SET_PRODUCTS } from "../context/actionType";
import useGlobalState from "../hooks/useGlobalState";

export default function RootLayout() {
  const { dispatch } = useGlobalState();
  const products = useLoaderData();

  useEffect(() => {
    dispatch({ type: SET_PRODUCTS, payload: products });
  }, [dispatch, products]);

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
}
