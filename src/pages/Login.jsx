import React, { useEffect, useState } from "react";
import css from "../css/login.module.css";
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
const Login = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const [showPassword, setShowPassword] = useState(false); //for the icon in pass field

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const loginSubmit = (e) => {
    e.preventDefault();
    console.log("The user Email is:", email, "and Pass is:", pass);
  };
  return (
    <div className={`${css.wrapper}`}>
      <Box className={`${css.form_wrapper}`}>
        <form onSubmit={loginSubmit} className={`${css.form}`} >
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
              required
              type={showPassword ? "text" : "password"}
              label="Password"
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
          <button className="btn btn-primary">Login</button>
          <hr />
          <div className="mb-3">
            <GoogleButton style={{width: '100%'}} type = "dark"/>
          </div>
          <div className="text-center" >
            <h6 className="fw-500 fs-6">Not have any account? <br /> <Link to='/signup'>SignUp</Link> here</h6>
          </div>
        </form>
      </Box>
    </div>
  );
};

export default Login;
