import React from "react";
import images from "../../resources";
import css from "../../css/home.module.css";
import Section4 from "./section4/Section4";
import { Link } from "react-router-dom";

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
          <Link style={{ display: "grid" }} className={css.product} to="/services/fake">
            <div >
              <img src={images.icons.product_1} alt="Product" />
              <h4>Fake Content Detection</h4>
              <p>
                With this service, our system can detect whether the content
                provided to us is genuine or fake. Our state-of-the-art machine
                learning algorithms are trained to recognize and identify fake
                content, ensuring that your information is always reliable and
                trustworthy.
              </p>
            </div>
          </Link>
          <Link className={`${css.product} ${css.middle_product}`} style={{ display: "grid" }} to="/services/toxic">
            <div >
              <img src={images.icons.product_4} alt="Product" />
              <h4>Toxic Content Detection</h4>
              <p>
                Our system can also detect toxic or inappropriate content to
                ensure that your platform is safe for all users. Using advanced
                natural language processing techniques, we can identify and
                filter out content that is harmful or offensive, protecting your
                users from harm.
              </p>
            </div>
          </Link>
          <Link className={css.product} to="/services/cloning">
            <div >
              <img src={images.icons.product_3} alt="Product" />
              <h4>Voice Cloning</h4>
              <p>
                Our voice cloning technology allows you to generate a synthetic
                voice that sounds like any person of your choosing. This can be
                useful for creating custom text-to-speech solutions, or for
                voiceovers in videos or podcasts. Our system uses advanced deep
                learning algorithms to create a highly realistic and
                natural-sounding voice that can be customized to your needs.
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
