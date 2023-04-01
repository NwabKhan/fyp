import React from 'react'
import { useUserAuthContext } from "../context/UserAuthContet";
import Hero from '../components/home_helpers/Hero';

const ErrorPage = () => {
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
      <Hero />
    </div>
  )
}

export default ErrorPage