import useGlobalState from "../hooks/useGlobalState";
import WishlistCard from "./WishlistCard";

export default function Wishlist() {
  const { state } = useGlobalState();
  const { wishlist } = state || {};

  return (
    <div className="mt-5 space-y-5">
      <h1 className="text-2xl font-bold">Wishlist</h1>
      {wishlist.length > 0 &&
        wishlist.map((product) => (
          <WishlistCard key={product.product_id} product={product} />
        ))}
    </div>
  );
}
