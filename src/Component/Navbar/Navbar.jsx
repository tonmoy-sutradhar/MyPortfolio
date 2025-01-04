// import logo from "../../assets/logo.png";

import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo2.png";
const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink className="hover:text-cyan-400 transition cursor-pointer">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink className="hover:text-cyan-400 transition cursor-pointer">
          About
        </NavLink>
      </li>
      <li>
        <NavLink className="hover:text-cyan-400 transition cursor-pointer">
          Project
        </NavLink>
      </li>
      <li>
        <NavLink className="hover:text-cyan-400 transition cursor-pointer">
          Blog
        </NavLink>
      </li>
      <li>
        <NavLink className="hover:text-cyan-400 transition cursor-pointer">
          Contact
        </NavLink>
      </li>
    </>
  );
  return (
    // navbar bg-gradient-to-r from-cyan-500 to-blue-500 px-6
    //
    <div className="navbar sticky top-0 bg-gradient-to-r from-slate-900 to-slate-900 bg-opacity-90 px-6 z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            className="gap-3 menu-sm font-bold  text-white dropdown-content bg-base-600 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <button>
          <img className="w-12 h-12 rounded-full" src={logo} alt="" />
        </button>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu-horizontal gap-6 font-bold px-1 text-white">
          {links}
        </ul>
      </div>
      <div className="navbar-end">
        <a
          href="https://github.com/tonmoy-sutradhar"
          target="blank"
          className="btn bg-lime-400"
        >
          Learn More
        </a>
      </div>
    </div>
  );
};

export default Navbar;
