import React, {useState} from "react";
import css from "./services.module.css";
import Section1 from "./Section1";
// import MusicPlayerSlider from "./VoiceOutput";

const Section2 = ({ title }) => {

  const urduRegex = /^[\u0600-\u06FF\s]+$/;
  const [inputValue, setInputValue] = useState('');
  const handleInputChange = (e) => {
    const value = e.target.value;
    if (urduRegex.test(value)) {
      setInputValue(value);
    } else {
      alert('Please enter only Urdu characters!');
    }
  }

  // const handleKeyPress = (e) => {
  //   const charCode = e.which || e.keyCode;
  //   // Check if the pressed key is an English character
  //   if ((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)) {
  //     e.preventDefault();
  //     alert("Please type in Urdu characters only.");
  //   }
  // };

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
              onChange={handleInputChange}
              value={inputValue}
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

        <div>
          <h3>Result:</h3>
          {/* <p style={{fontSize: '1.25rem', textAlign: 'center' , color: 'white', padding: '1rem 2rem', backgroundColor: 'hsl(352, 81%, 58%)', borderRadius: '1rem'}}>آپ کا دیا ہوا متن جعلی ہے۔</p> */}

          {/* <h3>Generated Cloned Voice Clip :</h3> */}

          {/* <MusicPlayerSlider /> */}
        </div>
      </div>
    </div>
  );
};

export default Section2;
