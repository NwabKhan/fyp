import React, { useEffect } from "react";
import images from "../../resources";
import css from "./landing.module.css";
import { Link } from "react-router-dom";
import LandingContact from "./LandingContact";
const LandingPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className={css.wrapper}>
      {/* first section */}
      <div className={`${css.landing_img_container}`}>
        <img
          className={`${css.landing_img}`}
          src={images.home.img_4}
          alt="LandingPage Section"
        />
        <div className={`${css.landing_img_content}`}>
          <h2 className="p-3">Advanced NLP for Urdu language</h2>
          <p>
            Detect toxic content, identify fake content, and clone voices in
            Urdu with our powerful NLP toolkit. <br />
            Transform your Urdu communication today
          </p>
          <Link to='/services'>
                <button className={css.start_btn}>Get Started</button>
          </Link>
        </div>
      </div>
      {/* this text will only show for small screens */}
      <div className={css.small_sceen}>
        <h4> Advanced Urdu Language Technology</h4>
        <p>
        Detect toxic content, identify fake content, and clone voices in
            Urdu with our powerful NLP toolkit. 
            Transform your Urdu communication today <br /> {" "}
            Our Urdu Language Toolkit incorporates cutting-edge technology to provide you with advanced features allowing you to communicate more effectively and safely in Urdu.
          purpose to deliver excellence and hid
        </p>
      </div>

      {/* second screen */}

      <div className={`${css.intro_container}`}>
        <div className={`${css.intro_content}`}>
          <div>
            <h3>
              who <br /> we are
            </h3>
            <img
              className={`${css.arrow}`}
              src={images.icons.arrow}
              alt="Move Forward"
            />
          </div>
          <h4>Transforming Urdu Communication with NLP</h4>
          <p>
            At our company, we're passionate about using technology to improve
            the way people communicate in Urdu. Our mission is to empower Urdu
            language users with advanced NLP technology and make Urdu
            communication more efficient and effective. <br /> Our team is made
            up of language and technology experts who are committed to providing
            the best Urdu language toolkit on the market. We're dedicated to
            delivering the most advanced NLP features and tools, while
            maintaining the highest standards of quality and user experience.
            Try it now and see the difference it can make for your Urdu language
            communication.
          </p>
        </div>
        <img
          className={`${css.intro_img}`}
          src={images.home.img_5}
          alt="Fake COntent Detection"
        />
      </div>

      {/* third screen */}
      <div className={`${css.mission_container}`}>
        <img
          className={`${css.mission_img}`}
          src={images.home.img_3}
          alt="Fake COntent Detection"
        />
        <div className={`${css.mission_content}`}>
          <div>
            <h3>
              We Build <br /> Future
            </h3>
            <img
              className={`${css.arrow}`}
              src={images.icons.arrow}
              alt="Move Forward"
            />
          </div>
          <div className={css.mission_wrapper}>
            <div className={css.mission}>
              <img src={images.icons.goal_1} alt="Our Goal" />
              <div className={css.mission_text}>
                <h6>Our Mission & Vision </h6>
                <p>
                  Our mission is to transform Urdu communication through
                  advanced technology, while our vision is to become a leading
                  provider of language solutions for Urdu speakers worldwide.
                </p>
              </div>
            </div>
            <div className={css.mission}>
              <img src={images.icons.goal_2} alt="Our Goal" />
              <div className={css.mission_text}>
                <h6> Our Approach </h6>
                <p>
                  We approach Urdu language processing with a rigorous,
                  research-driven methodology that allows us to continuously
                  innovate and improve our toolkit, ensuring it meets the needs
                  of our users and stays ahead of the curve in language
                  technology.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* fourth screen (our services) */}
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
                Our AI-powered system analyzes various factors such as the authenticity of sources, language patterns, and other indicators to flag any suspicious content. This helps prevent the spread of false information and promotes online integrity.
              </p>
              <Link to='/services/fake' className={css.service_link}>Try Now</Link>
            </div>
          </div>
          <div className={`${css.service} ${css.middle_service}`}>
            <div className={css.service_img_wrapper}>
              <img src={images.icons.product_2} alt="Produt" />
            </div>
            <div className={css.service_text}>
              <h5>Toxic Content Detection</h5>
              <p>
                Our system uses natural language processing (NLP) techniques to
                analyze text and identify hate speech, harassment, and other
                forms of toxic communication, creating a safer online
                environment.
              </p>
              <Link to='/services/toxic' className={css.service_link}>Try Now</Link>
            </div>
          </div>
          <div className={css.service}>
            <div className={css.service_img_wrapper}>
              <img src={images.icons.product_3} alt="Produt" />
            </div>
            <div className={css.service_text}>
              <h5>Voice Cloning</h5>
              <p>
                Our state-of-the-art voice cloning technology allows for the
                creation of highly realistic synthetic voices in Urdu. This
                technology can be used for applications such as dubbing,
                audiobooks, and virtual assistants, among others.
              </p>
              <Link to='/services/cloning' className={css.service_link}>Try Now</Link>
            </div>
          </div>
        </div>
      </div>

      {/* fifth screen (LandingContact us) */}
      <LandingContact />
    </div>
  );
};

export default LandingPage;
