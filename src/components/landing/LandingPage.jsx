import React from "react";
import images from "../../resources";
import css from "../../css/landing.module.css";
import {Link} from "react-router-dom"
const LandingPage = () => {
  return (
    <div>
      <div className={`${css.landing_img_container}`}>
        <img
          className={`${css.landing_img}`}
          src={images.home.img_4}
          alt="LandingPage Section"
        />
        <div className={`${css.landing_img_content}`}>
          <h2>Disocver a world of opportunities</h2>
          <p>
            We empower a diverse IT service-oriented workforce where strong
            individuals are unified by a clear common purpose <br /> to deliver
            excellence and high level of customer satisfaction.
          </p>
          <button className={css.btn}>Get Started</button>
        </div>
      </div>
        <div className={css.small_sceen}>
          <h4>Food Luck</h4>
          <p>
            loremas sad aad as We empower a diverse IT service-oriented
            workforce where strong individuals are unified by a clear common
            purpose <br /> to deliver excellence and hi We empower a diverse IT
            service-oriented workforce where strong individuals are unified by a
            clear common purpose <br /> to deliver excellence and hid
          </p>
        </div>

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
          <h4>Technology investments as a differentiator</h4>
          <p>
            No forced partnership technology here. We focus on the right
            solution to drive our clients’ business forward and employ a
            technology-agnostic approach for all needed stages of the activity
            cycle, allowing access to current, robust, and advanced solutions.
            Paramount to this is ensuring the security and compliant use of all
            information. In the end, it’s not just technology; we ensure our
            methodologies, staff, industry knowledge, and governance align with
            the technology to drive the right client results.
          </p>
        </div>
        <img
          className={`${css.intro_img}`}
          src={images.home.img_5}
          alt="Fake COntent Detection"
        />
      </div>

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
                  As experienced professionals in the field of software
                  development, user experience, and marketing performance, we
                  are aware of the hard work, dedication, and overall diligence
                  required to prosper in modern-day business.
                </p>
              </div>
            </div>
            <div className={css.mission}>
              <img src={images.icons.goal_2} alt="Our Goal" />
              <div className={css.mission_text}>
                <h6> Our Approach </h6>
                <p>
                  As a result, we offer our clients with the development of CRM
                  cloud systems, bespoke website development and design, project
                  and R&D management, custom development, and system
                  integration.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

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
              <img src={images.icons.product_1} />
            </div>
            <div className={css.service_text}>
              <h5>Fake Content Detection</h5>
              <p>
                Here asbad a asdbas das asdh asdas dashd a sd asd asd asd a
                Signupasd a asdasdjasjd asda sdas dasda sdjasd sd Here asbad a
                asdbas das asdh asdas dashd a sd asd asd asd a Signupasd a
                asdasdjasjd asda sdas dasda sdjasd sd
              </p>
              <Link className={css.service_link}>Learn More...</Link>

            </div>
          </div>
          <div className={`${css.service} ${css.middle_service}`}>
            <div className={css.service_img_wrapper}>
              <img src={images.icons.product_2} />
            </div>
            <div className={css.service_text}>
              <h5>Toxic Content Detection</h5>
              <p>
                Here asbad ada sd ajsd asdj a as as aa asdbas das asdh asdas
                dashd a sd asd asd asd a Signupasd a asdasdjasjd asda sdas dasda
                sdjasd sd
              </p>
              <Link className={css.service_link}>Learn More...</Link>

            </div>
          </div>
          <div className={css.service}>
            <div className={css.service_img_wrapper}>
              <img src={images.icons.product_3} />
            </div>
            <div className={css.service_text}>
              <h5>Voice Cloning</h5>
              <p>
                Here asbad a asdbas das asdh asdas dashd a sd asd asd asd a
                Signupasd a asdasdjasjd asda sdas dasda sdjasd sd
              </p>
              <Link className={css.service_link}>Learn More...</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
