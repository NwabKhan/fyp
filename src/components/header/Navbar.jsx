import React, { useState } from "react";
import { Box } from "@mui/system";
import css from "../../css/home.module.css";
import { NavLink } from "react-router-dom";
import { Close } from "@mui/icons-material/";
import { Menu } from "@mui/icons-material/";
const Navbar = () => {
  //Its is for the mobile screen. It remain false untill
  //we click on the "Menu" icon(show only under 500px)
  const [toggle, setToggle] = useState(false);

  return (
    <Box>
      <Box className={toggle ? `${css.active} ` : ""}>
        <ul className={`${css.navbar_lists}`}>
          <li>
            <NavLink
              to="/"
              onClick={() => setToggle(false)}
              className={`${css.navbar_link}`}

              // the styling of the active link. We can also make the object like this
              //  ? {color: "red", background: "green"}:{ color: "green", background: "red"}
              style={({ isActive }) => ({
                color: isActive ? "green" : "red",
              })}
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/service"
              onClick={() => setToggle(false)}
              className={`${css.navbar_link}`}
              style={({ isActive }) => ({
                color: isActive ? "green" : "red",
              })}
            >
              Services
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              onClick={() => setToggle(false)}
              className={`${css.navbar_link}`}
              style={({ isActive }) => ({
                color: isActive ? "green" : "red",
              })}
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              onClick={() => setToggle(false)}
              className={`${css.navbar_link}`}
              style={({ isActive }) => ({
                color: isActive ? "green" : "red",
              })}
            >
              About
            </NavLink>
          </li>
        </ul>

        {/* for small screens */}
        <div className={`${css.mobile_navbar_btn}`}>
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
