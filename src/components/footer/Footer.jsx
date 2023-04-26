import React, {useState, useEffect} from "react";
import { Link, NavLink } from "react-router-dom";
import css from "./footer.module.css";
import resources from '../../resources/index'
import { Star } from "@mui/icons-material";
import { Facebook, Instagram, GitHub, Twitter } from "@mui/icons-material";


const Footer = () => {

  return (
    <div className={`${css.wrapper}`}>
      <div className={css.top_part}>

        <div className={css.first}>

          <img src={resources.icons.logo1} alt="LOGO" /> 
          <p>
            Our latest news, articles, and resources, we will sent to your inbox
            weekly.
          </p>
          <form className={css.subscribe}>
            <input type="email" required placeholder="Enter you Email" />
            <button>Subscribe</button>
          </form>
          <h4>10/10 Overall rating</h4>
          <div className={css.stars}>
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
          </div>
        </div>

        <div className={css.second}>
          <h3>Primary Pages</h3>
          <div className={`${css.link_div}`}>
            <NavLink to="/" className={css.link}>
              Home
            </NavLink>
            <NavLink to="/About" className={css.link}>
              About Us
            </NavLink>
            <NavLink to="/Services" className={css.link}>
              Services
            </NavLink>
            <NavLink to="/Carrer" className={css.link}>
              Carrer
            </NavLink>
            <NavLink to="/Integrations" className={css.link}>
              Integrations
            </NavLink>
            <NavLink to="/Integration Single" className={css.link}>
              Integration Single
            </NavLink>
          </div>
        </div>
        <div className={css.second}>
          <h3>Pages</h3>
          <div className={`${css.link_div}`}>
            <NavLink to="/Pricing" className={css.link}>
              Pricing
            </NavLink>
            <NavLink to="/News" className={css.link}>
              News
            </NavLink>
            <NavLink to="/NewsDetails" className={css.link}>
              News Details
            </NavLink>
            <NavLink to="/Contact" className={css.link}>
              Contact
            </NavLink>
            <NavLink to="/CareerSingle" className={css.link}>
              Career Single
            </NavLink>
            <NavLink to="/ServiceSingle" className={css.link}>
              Service Single
            </NavLink>
          </div>
        </div>
        <div className={css.second}>
          <h3>Template</h3>
          <div className={`${css.link_div}`}>
            <NavLink to="/Contact" className={css.link}>
              Contact
            </NavLink>
            <NavLink to="/Support" className={css.link}>
              Support
            </NavLink>
            <NavLink to="/SupportSingle" className={css.link}>
              Support Single
            </NavLink>
            <NavLink to="/OurTeam" className={css.link}>
              Our Team
            </NavLink>
            <NavLink to="/UserLogin" className={css.link}>
              User Login
            </NavLink>
            <NavLink to="/CareerSingle" className={css.link}>
              Career   Single
            </NavLink>
          </div>
        </div>

      </div>
      <hr className={css.hr} />
      <div className={css.bottom_part}>
        <p>
          @{new Date().getFullYear()} FTVc Rights Reserved. Designed By{" "}
          <Link className={css.link}>M.Junad</Link>
        </p>
        <div className={css.social_icons}>
          <Facebook className={css.icon} />
          <Instagram className={css.icon}  />
          <Twitter className={css.icon}  />
          <GitHub className={css.icon}  />
        </div>
      </div>
    </div>
  );
};

export default Footer;
