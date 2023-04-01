import React from "react";
import images from "../../resources";
import css from "../../css/home.module.css";
import Signup from "./../../pages/SignUp";

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
          <h3>Our Main headings will go there </h3>
          <p>
            loasdbas asdbhasbd as dasd asda s asd asdh as da sdada sd
            hasdsdnasja as ajsf <br /> afh
            skjdhfjfjhsdfsjdsdhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhj asd
            asdh asdashd adha sd
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
          <h4>Good to go and here you will find something intresting</h4>
          <p>
            loasdbas asdbhasbd as dasd asda s asd asdh as da sdada sd
            hasdsdnasja as ajsf afh skjdhfjfjhsdfsjdsdhhhh hhhhh hhhhhhhhhh hhh
            hhhhhhhhhh hhhhhhh hhhhhhj asd asdh asdashd adha sd
          </p>
        </div>
        <img
          className={`${css.img_2}`}
          src={images.home.img_2}
          alt="Fake COntent Detection"
        />
      </div>

      <div className={`${css.img_2_container}`}>
        <img
          className={`${css.img_2}`}
          src={images.home.img_3}
          alt="Fake COntent Detection"
        />
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
          <h4>Good to go and here you will find something intresting</h4>
          <p>
            loasdbas asdbhasbd as dasd asda s asd asdh as da sdada sd
            hasdsdnasja as ajsf afh skjdhfjfjhsdfsjdsdhhhh hhhhh hhhhhhhhhh hhh
            hhhhhhhhhh hhhhhhh hhhhhhj asd asdh asdashd adha sd
          </p>
        </div>
      </div>

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
            <img src={images.icons.product_1} />
            <h4>Some Heading</h4>
            <p>
              Here asbad a asdbas das asdh asdas dashd a sd asd asd asd a
              Signupasd a asdasdjasjd asda sdas dasda sdjasd sd
            </p>
          </div>
          <div className={`${css.product} ${css.middle_product}`}>
            <img src={images.icons.product_2} />
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
            <img src={images.icons.product_3} />
            <h4>Some Heading</h4>
            <p>
              Here asbad a asdbas das asdh asdas dashd a sd asd asd asd a
              Signupasd a asdasdjasjd asda sdas dasda sdjasd sd
            </p>
          </div>
        </div>
      </div>

      <div className="d-flex flex-column align-items-center text-center mt-2">
        <h3 className="fw-bold text-danger">Sounds Great?! Let’s work together!</h3>
        <button className={css.contact_btn}>Contact Now</button>
      </div>
    </div>
  );
};

export default Hero;
