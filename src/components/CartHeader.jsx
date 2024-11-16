import { useState } from "react";
import { HiAdjustmentsVertical } from "react-icons/hi2";
import useGlobalState from "../hooks/useGlobalState";
import Button from "./Button";
import Modal from "./Modal";
import PaymentSuccess from "./PaymentSuccess";

export default function CartHeader() {
  const [open, setOpen] = useState(false);

  const { state, dispatch } = useGlobalState();
  const { cart } = state || {};

  const totalCost = cart.reduce((acc, product) => acc + product.price, 0);

  return (
    <div className="flex items-center justify-between">
      <h1 className="text-2xl font-bold">Cart</h1>
      <div className="flex items-center justify-center gap-5">
        <h2 className="text-xl font-semibold">
          Total cost: {totalCost.toFixed(2)}
        </h2>
        <div className="flex justify-center gap-5">
          <Button
            type="gradient-outline"
            handleClick={() => dispatch({ type: "SORT_BY_PRICE" })}
          >
            Sort by Price <HiAdjustmentsVertical />
          </Button>
          <Button
            type="gradient"
            handleClick={() => setOpen(!open)}
            disabled={totalCost === 0}
          >
            Purchase
          </Button>
        </div>
      </div>
      <Modal open={open}>
        <PaymentSuccess setOpen={setOpen} />
      </Modal>
    </div>
  );
}
