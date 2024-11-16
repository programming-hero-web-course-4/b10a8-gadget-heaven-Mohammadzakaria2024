import useGlobalState from "../hooks/useGlobalState";
import CartHeader from "./CartHeader";
import WishlistCard from "./WishlistCard";

export default function Cart() {
  const { state } = useGlobalState();
  const { cart } = state || {};

  return (
    <div className="mt-5 space-y-5">
      <CartHeader />
      {cart.length > 0 &&
        cart.map((product) => (
          <WishlistCard key={product.product_id} product={product} />
        ))}
    </div>
  );
}
