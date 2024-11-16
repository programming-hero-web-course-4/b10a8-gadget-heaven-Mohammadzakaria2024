import PropTypes from "prop-types";
import Button from "./Button";

export default function ProductCard({ product = {} }) {
  const { product_image, product_title, price, product_id } = product;

  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <figure className="p-4">
        <img src={product_image} alt={product_title} className="rounded-lg" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{product_title}</h2>
        <p className="text-gray-600">Price: {price}k</p>
        <div className="card-actions">
          <Button state={product} to={`/product/${product_id}`} type="outline">
            View Details
          </Button>
        </div>
      </div>
    </div>
  );
}

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
};
