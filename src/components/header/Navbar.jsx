import React, { useState } from "react";
import { Box } from "@mui/system";
import css from "./header.module.css";
import { NavLink } from "react-router-dom";
import { Close } from "@mui/icons-material/";
import { Menu } from "@mui/icons-material/";
const Navbar = ({ isScrolled }) => {
  //Its is for the mobile screen. It remain false untill
  //we click on the "Menu" icon(show only under 500px)
  const [toggle, setToggle] = useState(false);

  let style;
  if (isScrolled) {
    style = {
      color: "red",
      borderBottom: "2px solid red",
    };
  } else {
    style = {
      color: "#454654",
      borderBottom: "2px solid #454654",
    };
  }
  return (
    <Box>
      <Box className={toggle ? `${css.active}` : ""}>
        <ul className={`${css.navbar_lists} ${isScrolled ? css.scrolled_navbar_lists : "" }`}>
          <li>
            <NavLink
              to="/"
              onClick={() => setToggle(false)}
              className={`${css.navbar_link} ${css.home_link}`}
              style={({ isActive }) => (isActive ? style : {})}
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/services"
              onClick={() => setToggle(false)}
              className={`${css.navbar_link}`}
              style={({ isActive }) => (isActive ? style : {})}
            >
              Services
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              onClick={() => setToggle(false)}
              className={`${css.navbar_link}`}
              style={({ isActive }) => (isActive ? style : {})}
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              onClick={() => setToggle(false)}
              className={`${css.navbar_link}`}
              style={({ isActive }) => (isActive ? style : {})}
            >
              About
            </NavLink>
          </li>
        </ul>

        {/* for small screens */}
        <div className={`${css.mobile_navbar_btn} ${isScrolled ? css.scrolled_navbar_btn : ""}`}>
          <Menu
            name="menu-outline"
            className={`${css.mobile_nav_icon}`}
            onClick={() => setToggle(true)}
          />
          <Close
            name="close-outline"
            className={`${css.mobile_nav_icon} ${css.close_outline}`}
            onClick={() => setToggle(false)}
          />
        </div>
      </Box>
    </Box>
  );
};

export default Navbar;
