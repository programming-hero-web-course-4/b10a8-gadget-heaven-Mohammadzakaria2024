import { Link, useParams } from "react-router-dom";
import { productsCategory } from "../data";

export default function ProductCategories() {
  const { category } = useParams();

  return (
    <ul className="fle h-fit w-full space-y-3 rounded-xl bg-white p-4 max-sm:mx-2 md:w-60">
      <li
        className={`${!category ? "bg-brand text-white" : "bg-base-300 text-gray-600"} rounded-full text-sm`}
      >
        <Link to="/" className="block h-full w-full px-6 py-3 text-left">
          All Products
        </Link>
      </li>

      {productsCategory.map((c) => (
        <li
          key={c.name}
          className={`${category === c.category ? "bg-brand text-white" : "bg-base-300 text-gray-600"} rounded-full text-sm`}
        >
          <Link
            to={c.category}
            className="block h-full w-full px-6 py-3 text-left"
          >
            {c.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
