import PropTypes from "prop-types";
import { useLocation, useParams } from "react-router-dom";

export default function FloatSection({ children }) {
  const { category } = useParams();
  const location = useLocation();
  const isHome = location.pathname === "/" || category;

  return (
    <section className={`${isHome ? "-top-60" : "-top-36"} relative`}>
      <div className="container mx-auto max-w-7xl">
        <div
          className={`${isHome ? "max-w-[80%] overflow-hidden border border-white bg-base-100/25 backdrop-blur-xl" : "w-full"} mx-auto rounded-xl p-5 xl:max-w-[90%]`}
        >
          {children}
        </div>
      </div>
    </section>
  );
}

FloatSection.propTypes = {
  children: PropTypes.node.isRequired,
};
