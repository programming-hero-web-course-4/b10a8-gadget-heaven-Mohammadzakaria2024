import { Outlet } from "react-router-dom";
import ProductCategories from "./ProductCategories";

export default function Products() {
  return (
    <section className="-mt-40" id="products">
      <div className="container mx-auto max-w-7xl">
        <h1 className="mb-5 py-4 text-center text-xl font-bold lg:text-4xl">
          Explore Cutting-Edge Gadgets
        </h1>
        <div className="flex flex-wrap gap-5">
          <ProductCategories />
          <Outlet />
        </div>
      </div>
    </section>
  );
}
