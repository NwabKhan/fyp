import React from "react";
import images from "../../resources";
import css from "../../css/home.module.css";

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
    </div>
  );
};

export default Hero;
