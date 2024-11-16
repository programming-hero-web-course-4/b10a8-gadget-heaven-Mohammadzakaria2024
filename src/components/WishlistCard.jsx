import PropTypes from "prop-types";
import { HiXMark } from "react-icons/hi2";
import { useSearchParams } from "react-router-dom";
import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  REMOVE_FROM_WISHLIST,
} from "../context/actionType";
import useGlobalState from "../hooks/useGlobalState";
import Button from "./Button";

export default function WishlistCard({ product = {} }) {
  const { dispatch } = useGlobalState();
  const [searchParam] = useSearchParams();
  const activeTab = searchParam.get("tab");

  const { product_image, product_title, price, product_id, description } =
    product;

  return (
    <div className="card card-side bg-base-100 shadow-xl">
      <figure className="p-5">
        <img
          src={product_image}
          alt={product_title}
          className="max-h-40 rounded-lg"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{product_title}</h2>
        <p className="flex-grow-0 text-gray-500">{description}</p>
        <p className="flex-grow-0 font-semibold text-gray-600">
          Price: $ {price}
        </p>
        {activeTab === "wishlist" && (
          <Button
            type="primary"
            handleClick={() =>
              dispatch({ type: ADD_TO_CART, payload: product })
            }
          >
            Add to Cart
          </Button>
        )}
      </div>

      <div
        className="card-actions p-5"
        onClick={() =>
          dispatch({
            type:
              activeTab === "wishlist"
                ? REMOVE_FROM_WISHLIST
                : REMOVE_FROM_CART,
            payload: product_id,
          })
        }
      >
        <button className="rounded-full border border-red-500 p-1 text-xl text-red-500 active:scale-95">
          <HiXMark />
        </button>
      </div>
    </div>
  );
}

WishlistCard.propTypes = {
  product: PropTypes.object.isRequired,
};
