import React from "react";
import images from "../../resources";
import css from "../../css/home.module.css";
import Section4 from "./section4/Section4";

const Hero = () => {
  return (
    <div>
      <div className={`${css.img_1_container}`}>
        <img
          className={`${css.img_1}`}
          src={images.home.img_1}
          alt="Hero Section"
        />
        <div className={`${css.img_1_content}`}>
          <h3>About Us</h3>
          <p>
            We are a team of passionate developers committed to developing
            innovative <br /> solutions to detect and combat fake content, toxic
            content and voice cloning. <br /> Our aim is to build a safer online
            environment for all users.
          </p>
        </div>
      </div>

      <div className={`${css.img_2_container}`}>
        <div className={`${css.img2_content}`}>
          <div>
            <h3>
              We are
              <br /> Tech
            </h3>
            <img
              className={`${css.arrow}`}
              src={images.icons.arrow}
              alt="Move Forward"
            />
          </div>
          <h4>FTVc Founders</h4>
          <p>
            Our team comprises of skilled professionals who are dedicated to
            bringing innovative solutions to the table. We have a diverse set of
            experts who possess expertise in different domains, enabling us to
            provide comprehensive solutions to complex problems. Together, we
            strive to deliver outstanding results while maintaining the highest
            level of integrity and transparency in our operations.
          </p>
        </div>
        <img
          className={`${css.img_2}`}
          src={images.home.img_2}
          alt="Fake COntent Detection"
        />
      </div>

      <Section4 />

      <div className={css.product_wrapper}>
        <div>
          <h3>
            our main <br /> services
          </h3>
          <img
            className={`${css.arrow}`}
            src={images.icons.arrow}
            alt="Move Forward"
          />
        </div>
        <div className={css.products}>
          <div className={css.product}>
            <img src={images.icons.product_1} alt="Product" />
            <h4>Some Heading</h4>
            <p>
              Here asbad a asdbas das asdh asdas dashd a sd asd asd asd a
              Signupasd a asdasdjasjd asda sdas dasda sdjasd sd
            </p>
          </div>
          <div className={`${css.product} ${css.middle_product}`}>
            <img src={images.icons.product_4} alt="Product"  />
            <h4>Some Heading</h4>
            <p>
              Here asbad a asdbas das asdh asdas dashd a sd asd asd asd a
              Signupasd a asdasdjasjd asda sdas dasda sdjasd sd Here asbad a
              asdbas das asdh asdas dashd a sd asd asd asd a Signupasd a
              asdasdjasjd asda sdas dasda sdjasd sd Here asbad a asdbas das asdh
              asdas dashd a sd asd asd asd a Signupasd a asdasdjasjd asda sdas
              dasda sdjasd sd
            </p>
          </div>
          <div className={css.product}>
            <img src={images.icons.product_3} alt="Product"  />
            <h4>Some Heading</h4>
            <p>
              Here asbad a asdbas das asdh asdas dashd a sd asd asd asd a
              Signupasd a asdasdjasjd asda sdas dasda sdjasd sd
            </p>
          </div>
        </div>
      </div>

      <div className="d-flex flex-column align-items-center text-center mt-2">
        <h3 className="fw-bold text-danger">
          Sounds Great?! Let’s work together!
        </h3>
        <button className={css.contact_btn}>Contact Now</button>
      </div>
    </div>
  );
};

export default Hero;
