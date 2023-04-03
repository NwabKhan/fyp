import React from "react";
import css from "../../css/landing.module.css";
import images from "../../resources";
import {
  CallOutlined,
  MailOutlineOutlined,
  LocationOnOutlined,
  Facebook,
  LinkedIn,
  YouTube,
  Instagram,
} from "@mui/icons-material/";
const Contact = () => {
  return (
    <div className={css.container}>
      <div className={css.inner_container}>
        <div className={css.contact_wrapper}>
          <div className={css.greeting_text}>
            <h4 className="fw-bold">Say Hi!</h4>
            <h5>We’d like to talk with you.</h5>
          </div>

          <div className={css.form_container}>
            <div className={css.contact_form}>
              <form method="POST" className={css.contact_inputs}>
                <label>You Name</label>
                <input
                  type="text"
                  placeholder="Username"
                  name="name"
                  required
                  autoComplete="off"
                />
                <label>Your Email</label>
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  required
                  autoComplete="off"
                />
                <label>Your Message</label>
                <textarea
                  type="text"
                  name="message"
                  placeholder="Write your message"
                  required
                  autoComplete="off"
                  cols="10"
                  rows="10"
                ></textarea>
                <input className={css.btn} type="submit" value="Send" />
              </form>
            </div>
          </div>
        </div>

        <div className={css.contact_img_wrapper}>
          <div className={css.contact_img}>
            <img src={images.home.img_7} />
          </div>
          <div className={css.contact_img_text}>
            <h2 className="fw-bold">Contact Us</h2>
            <p className="fw-300">
              Fill up the form and our Team will get back to you within 24
              hours.
            </p>
            <p>
              <a href="tel:+923347226393">
                <CallOutlined className={css.cursor} />
              </a>
              <span>(+92) 334 7226393</span>
            </p>
            <p>
              <a href="mailto:khan.baloch.6393@gmail.com">
                <MailOutlineOutlined className={css.cursor} />
              </a>
              <span>khan.baloch.6393@gmail.com</span>
            </p>
            <p>
            <a href="https://www.google.com/maps/place/Military+College+of+Signals,+NUST/@33.579206,73.0517926,15.35z/data=!4m10!1m2!2m1!1smcsRawalpindi,+Rawalpindi!3m6!1s0x38df9369c223da7f:0xa69202fe0256feee!8m2!3d33.5775066!4d73.0632468!15sChptY3MgUmF3YWxwaW5kaSwgUmF3YWxwaW5kaZIBCnVuaXZlcnNpdHngAQA!16zL20vMDlsanZj">
              <LocationOnOutlined className={css.cursor} />
            </a>
              <span>MCS, Rawalpindi</span>
            </p>

            <div className="d-flex justify-content-evenly">
              <a href="https://www.facebook.com/profile.php?id=100040263232662"><Facebook className={css.cursor} /></a>
              <a href="https://www.linkedin.com/in/muhammad-junaid-648591232/"><LinkedIn className={css.cursor} /></a>
              <a href="https://www.facebook.com/profile.php?id=100040263232662"><YouTube className={css.cursor} /></a>            
              <a href="https://www.facebook.com/profile.php?id=100040263232662"><Instagram className={css.cursor}/></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
