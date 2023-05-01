import React, { useState } from "react";
import css from "./services.module.css";
import Section1 from "./Section1";
import MusicPlayerSlider from "./VoiceOutput";
import axios from "axios";
import { KeyboardBackspace } from "@mui/icons-material";
import { Link } from "react-router-dom";
const Section2 = ({ title, cloning }) => {
  const urduRegex = /^[\u0600-\u06FF\s]+$/;

  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleInputChange = (e) => {
    const value = e.target.value;
    if (urduRegex.test(value)) {
      setInputValue(value);
      setError(false);
    } else {
      setError(true);
    }
  };

  const handleFileSelect = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  console.log("first", cloning)

  return (
    <div>
      <Section1 />
      <Link to="/services" className={css.back_arrow_wrapper}>
        <KeyboardBackspace className={css.back_arrow} />
      </Link>
      <div className={css.section2}>
        <h2>{title}</h2>
        <div className={css.text_input}>
          <h3>Enter Text Input:</h3>
          <form>
            {error && <p className={css.error}>Please Type in Urdu only!!</p>}
            <textarea
              placeholder="اپنا متن یہاں درج کریں۔"
              id="input-text"
              rows="6"
              cols="50"
              onChange={handleInputChange}
              value={inputValue}
              required
            />
            <br />
            <button type="submit">Submit</button>
          </form>
          {/* {result && (
            <p>
              Prediction: <strong>{result}</strong>
            </p>
          )} */}
        </div>
        <div className={css.audio_input}>
          <h3 style={{textAlign: 'center', marginBottom: '1rem', fontSize: '1.5rem'}}>OR</h3>
          <h3>Upload Voice Clip:</h3>
          <form>
            <input
              required
              type="file"
              id="voice-clip"
              accept="audio/wav"
              onChange={handleFileSelect}
            />
            <br />
            <button type="submit">Submit</button>
          </form>
        </div>

        { !cloning ? (
          <div>
            <h3>Result:</h3>
            <p
              style={{
                fontSize: "1.25rem",
                textAlign: "center",
                color: "white",
                padding: "1rem 2rem",
                backgroundColor: "hsl(352, 81%, 58%)",
                borderRadius: "1rem",
              }}
            >
              آپ کا دیا ہوا متن جعلی ہے۔
            </p>
          </div>
        ) : (
          <div>
            <h3>Generated Cloned Voice Clip :</h3>
            <MusicPlayerSlider />
          </div>
        )}
      </div>
    </div>
  );
};

export default Section2;
