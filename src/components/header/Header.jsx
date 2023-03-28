import React from "react";
import Navbar from "./Navbar";
import {NavLink} from 'react-router-dom'
import css from '../../css/home.module.css'

const Header = () => {
  return (
    <div className = {`${css.header}`}>
      <NavLink className="text-dark" to="/">
        <h5>LOGO</h5>
      </NavLink>
      <Navbar />
    </div>
  );
};

export default Header;
