import React from "react";
import css from "../../css/footer.module.css";
import { NavLink } from "react-router-dom";

import {
  Facebook,
  LinkedIn,
  YouTube,
  Instagram,
  CallOutlined,
} from "@mui/icons-material/";
const Footer = () => {
  return (
    <div className={css.wrapper}>
      <section className={css.contact_short}>
        <div className={css.shorts}>
          <div>
            <h4>Ready to get started?</h4>
            <h5>Talk to us today</h5>
          </div>

          <div>
            {/* btn classes are extra , no need for these */}
            <NavLink to="/">
              <button className={css.hireme_btn}>Get Started</button>
            </NavLink>
          </div>
        </div>
      </section>

      <footer>
        <div className={css.footer_top_section}>
          <div className={css.footer_about}>
            <h3>The Urdu Language Toolkit</h3>
            <p>
              Lorem ipsum dolor, sit amet asdasd consectetur adipisicing elit.{" "}
            </p>
          </div>

          <div className={css.footer_social}>
            <h3>Follow Us</h3>
            <div className={css.footer_social_icons}>
              <div>
                <a
                  href=""
                  // target="_blank"
                  rel="noreferrer"
                >
                  <LinkedIn className={css.icons} />
                </a>
              </div>
              <div>
                <a
                  href=""
                  // target="_blank"
                  rel="noreferrer"
                >
                  <Facebook className={css.icons} />
                </a>
              </div>
              <div>
                <a
                  href=""
                  // target="_blank"
                  rel="noreferrer"
                >
                  <YouTube className={css.icons} />
                </a>
              </div>
              <div>
                <a
                  href=""
                  // target="_blank"
                  rel="noreferrer"
                >
                  <Instagram className={css.icons} />
                </a>
              </div>
            </div>
          </div>

          <div className={css.footer_contact}>
            <h3>Call Us</h3>
            <a href="tel: +92 311 6689885">
              {" "}
              <CallOutlined />
            </a>{" "}
            <span>+92 311 6689885</span>
          </div>
        </div>

        <div className={css.footer_bottom_section}>
          <hr />
          <div className={css.all_rights}>
            <p>@{new Date().getFullYear()} Discountify. All Rights Reserved</p>
            <div>
              <p>PRIVACY POLICY</p>
              <p>TERMS & CONDITIONS</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
