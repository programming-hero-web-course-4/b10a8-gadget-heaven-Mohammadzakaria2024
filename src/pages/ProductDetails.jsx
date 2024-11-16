import { Helmet } from "react-helmet-async";
import { HiOutlineHeart, HiOutlineShoppingCart } from "react-icons/hi2";
import ReactStars from "react-rating-stars-component";
import { useLocation } from "react-router-dom";
import Button from "../components/Button";
import FloatSection from "../components/FloatSection";
import Hero from "../components/Hero";
import { ADD_TO_CART, ADD_TO_WISHLIST } from "../context/actionType";
import useGlobalState from "../hooks/useGlobalState";

export default function ProductDetails() {
  const {
    state: { wishlist },
    dispatch,
  } = useGlobalState();
  const { state = {} } = useLocation();

  const {
    product_title,
    price,
    availability,
    description,
    specification,
    rating,
    product_image,
  } = state;

  return (
    <>
      <Helmet>
        <title>Gadget Heaven | {product_title}</title>
      </Helmet>

      <Hero
        title="Product Details"
        description="Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!"
        className="pb-40"
      />
      <FloatSection>
        <div className="card bg-base-100 shadow-xl lg:card-side">
          <figure className="p-5">
            <img
              src={product_image}
              alt={product_title}
              className="max-h-[500px] w-full rounded-xl object-cover"
            />
          </figure>
          <div className="card-body space-y-2">
            <h2 className="card-title">{product_title}</h2>
            <p className="flex-grow-0 font-semibold text-gray-700">
              Price: ${price}
            </p>
            <span
              className={`${
                availability
                  ? "border-success bg-success/15 text-success"
                  : "border-error bg-error/15 text-error"
              } w-fit rounded-full border px-4 py-2 text-sm font-semibold`}
            >
              {availability ? "In Stock" : "Not In Stock"}
            </span>
            <p className="flex-grow-0 text-sm text-gray-600">{description}</p>
            <div className="space-y-3">
              <p className="flex-grow-0 text-sm font-semibold text-gray-700">
                Specification:
              </p>
              <ol className="ml-5 list-decimal space-y-2 text-sm text-gray-600">
                {specification?.map((spec, index) => (
                  <li key={index}>{spec}</li>
                ))}
              </ol>
            </div>

            <div>
              <p className="flex-grow-0 text-sm font-semibold text-gray-700">
                Rating:
              </p>
              <div className="flex items-center gap-2">
                <ReactStars
                  count={5}
                  size={30}
                  activeColor="#ffd700"
                  isHalf={true}
                  value={rating}
                  edit={false}
                />
                <span className="rounded-full bg-base-300 px-3 py-1 text-sm">
                  {rating}
                </span>
              </div>
            </div>

            <div className="card-actions items-center">
              <Button
                type="primary"
                handleClick={() =>
                  dispatch({ type: ADD_TO_CART, payload: state })
                }
              >
                Add To Card <HiOutlineShoppingCart className="text-xl" />
              </Button>
              <button
                className="rounded-full border p-2 text-xl transition-transform active:scale-75 disabled:cursor-not-allowed disabled:opacity-50"
                onClick={() =>
                  dispatch({ type: ADD_TO_WISHLIST, payload: state })
                }
                disabled={wishlist.includes(state)}
              >
                <HiOutlineHeart />
              </button>
            </div>
          </div>
        </div>
      </FloatSection>
    </>
  );
}
