import React from "react";
import css from "../landing/landing.module.css";
import { Link } from "react-router-dom";
import images from '../../resources/index'
import Section1 from "./Section1";
const Services = () => {
  return (
    <div className={css.wrapper}>
      <Section1 />
      <div className={css.services_wrapper}>
        <div className={css.services_title}>
          <h3>
            The Services <br /> we Provide
          </h3>
          <img
            className={`${css.arrow}`}
            src={images.icons.arrow}
            alt="Move Forward"
          />
        </div>
        <div className={css.services}>
          <div className={css.service}>
            <div className={css.service_img_wrapper}>
              <img src={images.icons.product_1} alt="Produt" />
            </div>
            <div className={css.service_text}>
              <h5>Fake Content Detection</h5>
              <p>
              We use advanced algorithms and machine learning techniques to identify and flag any suspicious or misleading content, including deepfakes and manipulated media, to help protect our clients from potential reputational harm and legal liability.
              </p>
              <Link to='fake' className={css.service_link}>Try Now</Link>
            </div>
          </div>
          <div className={`${css.service} ${css.middle_service}`}>
            <div className={css.service_img_wrapper}>
              <img src={images.icons.product_2} alt="Produt" />
            </div>
            <div className={css.service_text}>
              <h5>Toxic Content Detection</h5>
              <p>
              Our software can identify and flag any potentially harmful or offensive language in user-generated content, helping to create a safer and more welcoming online environment.
              </p>
              <Link to='toxic' className={css.service_link}>Try Now</Link>
            </div>
          </div>
          <div className={css.service}>
            <div className={css.service_img_wrapper}>
              <img src={images.icons.product_3} alt="Produt" />
            </div>
            <div className={css.service_text}>
              <h5>Voice Cloning</h5>
              <p>
              Our state-of-the-art voice cloning technology enables our clients to create synthetic voices that sound like real people, which can be used for a variety of applications, from virtual assistants to personalized customer service interactions and many more.
              </p>
              <Link to='cloning' className={css.service_link}>Try Now</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
