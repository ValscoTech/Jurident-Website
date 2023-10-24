import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
// import { GiRocketThruster } from "react-icons/gi";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { NavLink } from "react-router-dom";
import log from "../../assets/new jd 2.png";
import { UserContext } from "../../context/user.context";
import { signOutUser } from "../../utils/firebase.utils";
import ModeBtn from "../DarkMode_Btn/Mode_btn";
function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const handleSignOut = () => signOutUser();
  const { currentUser } = useContext(UserContext);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <nav className="navbar bg-slate-50 dark:bg-[#060125]">
          <div className="navbar-container ">
            <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
              <img src={log} className="navbar-icon" />
              JURIDENT
            </Link>
            <div className="menu-icon" onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    "nav-links dark:text-white" + (isActive ? " activated" : "")
                  }
                  onClick={closeMobileMenu}
                >
                  Home
                </NavLink>
              </li>
              {currentUser && (
                <li className="nav-item">
                  <NavLink
                    to="/Services"
                    className={({ isActive }) =>
                      "nav-links " +
                      (isActive
                        ? " text-[#09bef0]"
                        : "text-black dark:text-white")
                    }
                    onClick={closeMobileMenu}
                  >
                    Services
                  </NavLink>
                </li>
              )}
              <li className="nav-item">
                <NavLink
                  to="/Blogs"
                  className={({ isActive }) =>
                    "nav-links " +
                    (isActive ? "text-[#09bef0]" : "text-black dark:text-white")
                  }
                  onClick={closeMobileMenu}
                >
                  Blogs
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/News"
                  className={({ isActive }) =>
                    "nav-links " +
                    (isActive
                      ? " text-[#09bef0]"
                      : "text-black dark:text-white")
                  }
                  onClick={closeMobileMenu}
                >
                  News
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/About"
                  className={({ isActive }) =>
                    "nav-links " +
                    (isActive
                      ? " text-[#09bef0]"
                      : "text-black dark:text-white")
                  }
                  onClick={closeMobileMenu}
                >
                  About us
                </NavLink>
              </li>
              <li className="nav-item">
                {currentUser ? (
                  <NavLink
                    to="/login"
                    className={({ isActive }) =>
                      "nav-links " +
                      (isActive
                        ? "text-[#09bef0]"
                        : "text-black dark:text-white")
                    }
                    onClick={handleSignOut}
                  >
                    Logout
                  </NavLink>
                ) : (
                  <NavLink
                    to="/login"
                    className={({ isActive }) =>
                      "nav-links " +
                      (isActive
                        ? "text-[#09bef0]"
                        : "text-black dark:text-white")
                    }
                    onClick={closeMobileMenu}
                  >
                    Login
                  </NavLink>
                )}
              </li>
              <li className="nav-item flex align-middle ">
                <ModeBtn />
              </li>
            </ul>
          </div>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
