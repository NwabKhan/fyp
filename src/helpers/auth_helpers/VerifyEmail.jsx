import React, { useState, useEffect } from "react";
import { useUserAuthContext } from "../../context/UserAuthContet";
import { useNavigate } from "react-router-dom";
import css from "../../css/form.module.css";

const VerifyEmail = () => {
  const { user, timeActive, setTimeActive, emailVerification } =
    useUserAuthContext();
  const [time, setTime] = useState(60);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      user
        ?.reload()
        .then(() => {
          if (user?.emailVerified) {
            clearInterval(interval);
            navigate("/login");
          }
        })
        .catch((err) => {
          console.log("Error i VerifyEmail is: ", err.message)
        });
    }, 1000);
  }, [navigate, user]);

  useEffect(() => {
    let interval = null;
    if (timeActive && time !== 0) {
      interval = setInterval(() => {
        setTime((time) => time - 1);
      }, 1000);
    } else if (time === 0) {
      setTimeActive(false);
      setTime(60);
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [timeActive, time]);

  const resendEmailVerification = () => {
    emailVerification()
      .then(() => {
        navigate("/verification");
        setTimeActive(true);
      })
      .catch((err) => {
        console.log("Error i VerifyEmail is: ", err.message)
      });
  };

  return (
    <div className={`${css.wrapper} text-center`}>
      <div className={`${css.form_wrapper}`}>
        <h3>Verify your Email Address</h3>
        <p>
          A Verification email has been sent to:
          <br />
          <strong>{user?.email}</strong>
        </p>
        <p className="">
          Please follow the instruction in the email to verify your account
        </p>
        <div className="d-flex justify-content-evenly">
          <button className="btn btn-dark" onClick={()=>{
            navigate('/signup')
          }}>Go Back</button>
          <button
            className="btn btn-dark"
            onClick={resendEmailVerification}
            disabled={timeActive}
          >
            Resend Email {timeActive && time}
          </button>
        </div>
      </div>
    </div>
  );
};

export default VerifyEmail;
