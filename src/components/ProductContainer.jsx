import { useLocation } from "react-router-dom";
import useGlobalState from "../hooks/useGlobalState";
import ProductCard from "./ProductCard";

export default function ProductContainer() {
  const { pathname } = useLocation();
  const { state } = useGlobalState();
  const { products = [] } = state || {};

  const path = pathname.substring(1);

  return (
    <div className="grid flex-1 gap-4 rounded-xl max-sm:px-2 sm:grid-cols-2 lg:grid-cols-3">
      {products.length > 0 &&
        products
          .filter((product) => product.category === path || !path)
          .map((product) => (
            <ProductCard key={product.product_id} product={product} />
          ))}
    </div>
  );
}
