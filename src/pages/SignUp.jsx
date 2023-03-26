import React, { useEffect, useState } from "react";
import css from "../css/signup.module.css";
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
import {Link} from 'react-router-dom'
const Signup = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [cPass, setCPass] = useState("");

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

  const signupSubmit = (e) => {
    e.preventDefault();
    console.log("The user Email is:", email, "and Pass is:",pass,"confoirm pass:,",cPass);
  };
  return (
    <div className={`${css.wrapper}`}>
      <Box className={`${css.form_wrapper}`}>
        <form onSubmit={signupSubmit} className={`${css.form}`} >
          <TextField
            id="outlined-basic"
            className="mb-4"
            type="text"
            required
            label="Email Address"
            variant="outlined"
            onChange={(e) => setEmail(e.target.value)}
          />
          <FormControl 
            className="mb-4"
           variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? "text" : "password"}
              label="Password"
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
              Confirm Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showCPassword ? "text" : "password"}
              label="Confirm Password"
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
          <div className="mb-3">
            <GoogleButton style={{width: '100%'}} type = "dark"/>
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
