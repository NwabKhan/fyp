import React, {useState} from "react";
import { Box } from '@mui/system';
import css from '../css/home.module.css'
import {NavLink} from 'react-router-dom'
const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <Box>
      <Box className={`${{toggle} ? css.active : "" }`}>
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
              to="/products"
              onClick={() => setToggle(false)}
              className={`${css.navbar_link}`}
            >
              Products
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
        {/* <div className="mobile-navbar-btn">
          <AiOutlineMenu
            name="menu-outline"
            className="mobile-nav-icon"
            onClick={() => setToggle(true)}
          />
          <AiOutlineClose
            name="close-outline"
            className="mobile-nav-icon close-outline"
            onClick={() => setToggle(false)}
          />
        </div> */}
      </Box>
    </Box>
  );
};

export default Navbar;
