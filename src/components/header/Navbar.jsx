import React, { useState } from "react";
import { Box } from "@mui/system";
import css from "../../css/home.module.css";
import { NavLink } from "react-router-dom";
import {Close} from '@mui/icons-material/';
import {Menu} from '@mui/icons-material/';
const Navbar = () => {
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
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/service"
              onClick={() => setToggle(false)}
              className={`${css.navbar_link}`}
            >
              Services
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              onClick={() => setToggle(false)}
              className={`${css.navbar_link}`}
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              onClick={() => setToggle(false)}
              className={`${css.navbar_link}`}
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
