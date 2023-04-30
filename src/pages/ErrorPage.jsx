import React, { useEffect } from 'react'
import { useUserAuthContext } from "../context/UserAuthContet";
// import Hero from '../components/home_helpers/Hero';
// import LandingPage from './landing/LandingPage';

const ErrorPage = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { user, logOut } = useUserAuthContext();

  const handleLogOut = async () => {
    try {
      await logOut();
    } catch (err) {}
  };
  return (
    <div>
      {/* <h2>Welcome {user && user.email}.</h2>
      <button onClick={handleLogOut} className='btn btn-primary'>LogOut</button> */}
      {/* <Hero /> */}
      <h2>Error is HEre</h2>
    </div>
  )
}

export default ErrorPage