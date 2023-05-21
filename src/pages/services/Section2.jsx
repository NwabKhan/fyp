import React, { useState } from "react";
import css from "./services.module.css";
import Section1 from "./Section1";
import MusicPlayerSlider from "./VoiceOutput";
import axios from "axios";
import { KeyboardBackspace } from "@mui/icons-material";
import { Link } from "react-router-dom";
const Section2 = ({ title, cloning, service }) => {
  const urduRegex = /^[\u0600-\u06FF\s]+$/;

  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

  const [result, setResult] = useState("")

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

  const submitText = ()=>{

    let link;
    if(service == "fake")
      link = "http://localhost:3000/predict/faketext/" 
    else if(service == "toxic")
      link = "http://localhost:3000/predict/toxictext/" 

    console.log("Submitting")
    axios.post(link, {
      text: inputValue
    })
    .then((res)=>{
      console.log(res)
      if(service == "fake")
        setResult(res.data ? "Sentence is real" : "Sentence is fake")
      else if(service == "toxic")
        setResult("Sentence is " + res.data)
    })
    .catch((err)=>{
      console.log(err)
      setResult("Some Error Occured")
    })
  }


  const submitVoice = ()=>{

    let link;
    if(service == "fake")
      link = "http://localhost:3000/predict/fakevoice/" 
    else if(service == "toxic")
      link = "http://localhost:3000/predict/toxicvoice/" 

    console.log("Submitting")
    let formData = new FormData()
    formData.append("file", selectedFile)
    axios.post(link, formData, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    })
    .then((res)=>{
      console.log(res)
      if(service == "fake")
        setResult(res.data ? "Sentence is real" : "Sentence is fake")
      else if(service == "toxic")
        setResult("Sentence is " + res.data)
    })
    .catch((err)=>{
      console.log(err)
      setResult("Some Error Occured")
    })
  }

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
            <button onClick={submitText} type="button">Submit</button>
          </form>
          {/* {result && (
            <p>
              Prediction: <strong>{result}</strong>
            </p>
          )} */}
        </div>
        <div className={css.audio_input}>
          <h3 style={{textAlign: 'center', marginBottom: '1rem', fontSize: '1.5rem'}}>OR</h3>
          <h3>Upload Voice Clip (in .wav format):</h3>
          <form>
            <input
              required
              type="file"
              id="voice-clip"
              accept="audio/wav"
              onChange={handleFileSelect}
            />
            <br />
            <button onClick={submitVoice} type="button">Submit</button>
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
              {/* آپ کا دیا ہوا متن جعلی ہے۔ */}
              {result}
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
