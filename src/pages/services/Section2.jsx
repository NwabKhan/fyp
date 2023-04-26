import React from "react";
import css from "./services.module.css";
import Section1 from "./Section1";

const Section2 = ({title}) => {
  return (
    <div>
      <Section1 />
      <div className={css.section2}>
        <h2>{title}</h2>
        <div className={css.text_input}>
          <h3>Enter Text Input:</h3>
          <form>
            <textarea
              placeholder="اپنا متن یہاں درج کریں۔"
              id="input-text"
              rows="6"
              cols="50"
            />
            <br />
            <button type="submit">Submit</button>
          </form>
        </div>
        <div className={css.audio_input}>
          <h3>Upload Voice Clip:</h3>
          <form>
            <input type="file" id="voice-clip" />
            <br />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Section2;
