import PropTypes from "prop-types";
import { useLocation, useSearchParams } from "react-router-dom";
import Button from "./Button";

export default function Hero({ title, description, className }) {
  const [searchParam, setSearchParam] = useSearchParams();
  const activeTab = searchParam.get("tab") || "cart";
  const location = useLocation();
  const isDashboard = location.pathname === "/dashboard";

  function handleClick(value) {
    searchParam.set("tab", value);
    setSearchParam(searchParam);
  }

  return (
    <section className="bg-brand">
      <div
        className={`container mx-auto max-w-7xl space-y-5 pt-10 ${className}`}
      >
        <h1 className="text-center text-4xl font-bold text-base-100">
          {title}
        </h1>
        <p className="mx-auto max-w-2xl text-center text-sm text-base-300">
          {description}
        </p>

        {isDashboard && (
          <div className="flex items-center justify-center gap-5 py-5">
            <Button
              type={activeTab === "cart" ? "default" : "outline-base"}
              handleClick={() => handleClick("cart")}
            >
              Cart
            </Button>
            <Button
              type={activeTab === "wishlist" ? "default" : "outline-base"}
              handleClick={() => handleClick("wishlist")}
            >
              Wishlist
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  className: PropTypes.string,
};
