import React from "react";
import images from "../../resources";
import css from "../../css/home.module.css";
const HeroSection = () => {
  return (
    <div>
      <div className={`${css.img_1_container}`}>
        <img className={`${css.img_1}`} src={images.home.img_1} />
        <div className={`${css.img_1_content}`}>
            <h3>On The images</h3>
            <p>loasdbas asdbhasbd as dasd  asda s asd asdh as da sdada sd hasdsdnasja as ajsf <br /> afh skjdhfjfjhsdfsjdsdhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhj asd asdh asdashd adha sd</p>
        </div>  
      </div>
      <div className={`${css.img_2_container}`}>
        <div className={`${css.img2_content}`}>
            <h3>On The images</h3>
            <p>loasdbas asdbhasbd as dasd  asda s asd asdh as da sdada sd hasdsdnasja as ajsf <br /> afh skjdhfjfjhsdfsjdsdhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhj asd asdh asdashd adha sd</p>
        </div>  
        <img className={`${css.img_2}`} src={images.home.img_2} />
      </div>
    </div>
  );
};

export default HeroSection;
