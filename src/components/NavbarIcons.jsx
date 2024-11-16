import PropTypes from "prop-types";
import { Link, useLocation, useParams } from "react-router-dom";

export default function NavbarIcons({ to, total, children }) {
  const { category } = useParams();
  const location = useLocation();
  const isHome =
    location.pathname === "/" || location.pathname === `/${category}`;

  return (
    <Link
      to={to}
      className={`${isHome ? "border-none bg-white" : "border-2 border-base-300"} relative rounded-full p-2 text-sm md:p-3 md:text-lg`}
    >
      {total > 0 && (
        <span className="top- absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-400 text-center text-xs text-white md:h-6 md:w-6">
          {total}
        </span>
      )}
      {/* <HiOutlineShoppingCart /> */}
      {children}
    </Link>
  );
}

NavbarIcons.propTypes = {
  children: PropTypes.node,
  total: PropTypes.number,
  to: PropTypes.string,
};
