import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../images/logo2.png";
const NavBar = () => {
  return (
    <div className="navbar py-6 md:px-24 bg-base-100 shadow-lg">
      <div className="navbar lg:justify-start md:justify-start sm:justify-between justify-between">
        <div className="dropdown ">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <NavLink
                to="/home"
                className={({ isActive }) =>
                  isActive
                    ? `bg-transparent text-lg text-[#209CEE] hover:text-[#209CEE] `
                    : `bg-transparent text-lg text-gray-900 hover:text-[#209CEE]  `
                }
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/statistics"
                className={({ isActive }) =>
                  isActive
                    ? `bg-transparent text-lg text-[#209CEE] hover:text-[#209CEE] `
                    : `bg-transparent text-lg text-gray-900 hover:text-[#209CEE] `
                }
              >
                Statistics
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blog"
                className={({ isActive }) =>
                  isActive
                    ? `bg-transparent text-lg text-[#209CEE] hover:text-[#209CEE] `
                    : `bg-transparent text-lg text-gray-900 hover:text-[#209CEE]  `
                }
              >
                Blog
              </NavLink>
            </li>
          </ul>
        </div>
        <Link
          to=""
          className="hover:bg-transparent  normal-case text-2xl font-bold"
        >
          <img src={logo} alt="" />
          <span className="ml-2">Primo Quiz</span>
        </Link>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          <li>
            <NavLink
              to="/home"
              className={({ isActive }) =>
                isActive
                  ? `bg-transparent text-lg text-[#209CEE] hover:text-[#209CEE] `
                  : `bg-transparent text-lg text-gray-900 hover:text-[#209CEE] `
              }
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/statistics"
              className={({ isActive }) =>
                isActive
                  ? `bg-transparent text-lg text-[#209CEE] hover:text-[#209CEE]  `
                  : `bg-transparent text-lg text-gray-900 hover:text-[#209CEE] `
              }
            >
              Statistics
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blog"
              className={({ isActive }) =>
                isActive
                  ? `bg-transparent text-lg text-[#209CEE] hover:text-[#209CEE]  `
                  : `bg-transparent text-lg text-gray-900 hover:text-[#209CEE] `
              }
            >
              Blog
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
