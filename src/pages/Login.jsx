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
import {useUserAuthContext} from '../context/UserAuthContet'

const Login = () => {

  const {logIn, googleSignin} = useUserAuthContext()

  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");

  const [showPassword, setShowPassword] = useState(false); //for the icon in pass field

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const navigate = useNavigate()
  const loginSubmit = async(e) => {
    e.preventDefault();
    setError('')
    try{
      await logIn(email, pass)
      navigate('/')
    }catch(err){
      setError(err.message)
    }
  };

  const handleGoogleLogin = async(e)=>{
    e.preventDefault()
    try{
      await googleSignin()
      navigate('/')
    }catch(err){
      setError(err.message)
    }
  }
  return (
    <div className={`${css.wrapper}`}>
      <Box className={`${css.form_wrapper}`}>
      {error && <p className={`${css.error}`}>{error}</p>}
        <form onSubmit={loginSubmit} className={`${css.form}`} >
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
              required
              type={showPassword ? "text" : "password"}
              label="Password *"
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
          <button className={`${css.form_btn} btn btn-primary`}>Login</button>
          <hr />
          <div className={`${css.google_btn} mb-3`}>
            <GoogleButton onClick={handleGoogleLogin} style={{width: '100%'}} type = "dark"/>
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
