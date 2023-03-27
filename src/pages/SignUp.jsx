import React, { useState } from "react";
import css from "../css/form.module.css";
import TextField from "@mui/material/TextField";
import {
  FormControl,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Box } from "@mui/system";
import GoogleButton from 'react-google-button'
import {Link, useNavigate} from 'react-router-dom'
import { Alert } from 'react-bootstrap';
import {useUserAuthContext} from '../context/UserAuthContet'

const Signup = () => {

  const {signUp, emailVerification, setTimeActive} = useUserAuthContext()
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [cPass, setCPass] = useState("");
  const [error, setError] = useState("");

  const [showPassword, setShowPassword] = useState(false); //for the icon in pass field
  const [showCPassword, setShowCPassword] = useState(false); //for the icon in pass field

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleClickShowCPassword = () => setShowCPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const handleMouseDownCPassword = (event) => {
    event.preventDefault();
  };

  //To check both pass are same
  const validatePassword = () => {
    let isValid = true
    if (pass !== '' && cPass !== ''){
      if (pass !== cPass) {
        isValid = false
        setError('Passwords does not match')
      }
    }
    return isValid
  }

  const navigate = useNavigate()

  const signupSubmit = async(e) => {
    e.preventDefault();
    setError('')
    try{
      if(validatePassword()) {
        // Create a new user with email and password using firebase
          signUp(email, pass)
          .then(() => {
            emailVerification()
            .then(() => {
              setTimeActive(true)
              navigate("/verification");
            }).catch((err) => setError(err.message))
          })
      }
    }catch(err){
      setError(err.message)
    }
  };
  return (
    <div className={`${css.wrapper}`}>
      <Box className={`${css.form_wrapper}`}>
      {error && <Alert variant="danger">{error}</Alert>}

        <form onSubmit={signupSubmit} className={`${css.form}`} >
          <TextField
            id="outlined-basic"
            className="mb-4"
            type="email"
            required
            label="Email Address"
            variant="outlined"
            onChange={(e) => setEmail(e.target.value)}
          />
          <FormControl 
            className="mb-4"
           variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">
              Password *
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? "text" : "password"}
              label="Password *"
              required
              onChange={(e) => setPass(e.target.value)}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
          <FormControl 
            className="mb-4"
           variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">
              Confirm Password *
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showCPassword ? "text" : "password"}
              label="Confirm Password *"
              required
              onChange={(e) => setCPass(e.target.value)}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowCPassword}
                    onMouseDown={handleMouseDownCPassword}
                    edge="end"
                  >
                    {showCPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
          <button className="btn btn-primary">Signup</button>
          <hr />
          <div className={`${css.google_btn} mb-3`}>
            <GoogleButton label="SignUp with Google" style={{width: '100%'}} type = "dark"/>
          </div>
          <div className="text-center" >
            <h6 className="fw-500 fs-6">Already have an account? <br /> <Link to='/login'>Login</Link> here</h6>
          </div>
        </form>
      </Box>
    </div>
  );
};

export default Signup;
