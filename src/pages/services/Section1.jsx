import React from "react";
import css from "./services.module.css";
import images from '../../resources/index'
import { Link } from "react-router-dom";
const Section1 = () => {
  return (
    <div className={css.wrapper}>
      <div className={`${css.landing_img_container}`}>
      <img
        className={`${css.landing_img}`}
        src={images.home.img_8}
        alt="LandingPage Section"
      />
      <div className={`${css.landing_img_content}`}>
        <h2>Expert support and guidance to help you achieve your goals.</h2>
        <p>
          Detect toxic content, identify fake content, and clone voices in Urdu
          with our powerful NLP toolkit. <br />
          Transform your Urdu communication today
        </p>
        <Link to="/services">
          <button className={css.start_btn}>Start Now</button>
        </Link>
      </div>
    </div>
    </div>
  );
};

export default Section1;
