import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { CLEAR_CART } from "../context/actionType";
import useGlobalState from "../hooks/useGlobalState";

export default function PaymentSuccess({ setOpen }) {
  const { state, dispatch } = useGlobalState();
  const { cart } = state || {};

  const navigate = useNavigate();

  const totalCost = cart.reduce((acc, product) => acc + product.price, 0);

  return (
    <div className="flex flex-col items-center rounded-xl bg-base-100 p-8">
      <img src="/assets/Group.png" alt="success icon" className="w-16" />
      <h1 className="mt-5 text-2xl font-semibold">Payment Successfully</h1>
      <div className="divider my-1" />
      <p className="text-base text-gray-600">Thanks for purchasing.</p>
      <p className="text-base text-gray-600">Total: {totalCost.toFixed(2)}</p>
      <button
        className="mt-5 w-full rounded-full bg-base-300 py-2 text-sm font-semibold"
        onClick={() => {
          dispatch({ type: CLEAR_CART });
          setOpen((open) => !open);
          navigate("/");
        }}
      >
        Close
      </button>
    </div>
  );
}

PaymentSuccess.propTypes = {
  setOpen: PropTypes.func,
};
