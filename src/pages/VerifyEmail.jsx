import React, { useState, useEffect } from "react";
import { useUserAuthContext } from "../context/UserAuthContet";
import { useNavigate } from "react-router-dom";
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
          alert(err.message);
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
        navigate('/verification')
        setTimeActive(true);
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <div className="center">
      <div className="verifyEmail">
        <h1>Verify your Email Address</h1>
        <p>
          <strong>A Verification email has been sent to:</strong>
          <br />
          <span>{user?.email}</span>
        </p>
        <span>Follow the instruction in the email to verify your account</span>
        <button onClick={resendEmailVerification} disabled={timeActive}>
          Resend Email {timeActive && time}
        </button>
      </div>
    </div>
  );
};

export default VerifyEmail;
