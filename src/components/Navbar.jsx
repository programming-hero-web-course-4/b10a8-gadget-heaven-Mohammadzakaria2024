import { HiOutlineHeart, HiOutlineShoppingCart } from "react-icons/hi2";
import { Link, NavLink, useLocation, useParams } from "react-router-dom";
import { navItems } from "../data";
import useGlobalState from "../hooks/useGlobalState";
import NavbarIcons from "./NavbarIcons";

export default function Navbar() {
  const { state } = useGlobalState();
  const { wishlist, cart } = state || {};

  const { category } = useParams();
  const location = useLocation();
  const isHome =
    location.pathname === "/" || location.pathname === `/${category}`;

  return (
    <nav
      className={`${isHome && "bg-brand"} mt-2 rounded-t-xl -outline outline-offset-2 outline-base-300 sm:p-2 md:mx-3 lg:mx-10`}
    >
      <div className="container mx-auto max-w-7xl">
        <div className="navbar">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className={`${isHome ? "text-white" : "text-black"} mr-2 md:text-xl lg:hidden`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu dropdown-content menu-sm z-[1] mt-3 w-52 rounded-box bg-base-100 p-2 shadow"
              >
                {navItems.map((item) => (
                  <li key={item.name}>
                    <NavLink to={item.path}>{item.name}</NavLink>
                  </li>
                ))}
              </ul>
            </div>
            <Link
              className={`${isHome ? "text-white" : "text-black"} text-nowrap text-sm font-semibold md:text-xl`}
            >
              Gadget Heaven
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              {navItems.map((item) => (
                <li key={item.name}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      isActive
                        ? `${isHome ? "bg-transparent font-bold !text-white underline visited:text-white hover:!bg-transparent focus:!bg-transparent active:!bg-transparent" : "font-bold !text-brand hover:!bg-transparent focus:!bg-transparent active:!bg-transparent"}`
                        : `${isHome ? "text-white hover:!bg-transparent focus:!bg-transparent active:!bg-transparent" : "text-black hover:!bg-transparent focus:!bg-transparent active:!bg-transparent"}`
                    }
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          <div className="navbar-end space-x-2">
            <NavbarIcons total={cart.length} to="/dashboard?tab=cart">
              <HiOutlineShoppingCart />
            </NavbarIcons>

            <NavbarIcons total={wishlist.length} to="/dashboard?tab=wishlist">
              <HiOutlineHeart />
            </NavbarIcons>
          </div>
        </div>
      </div>
    </nav>
  );
}
