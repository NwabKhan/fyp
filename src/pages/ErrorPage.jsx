import React from 'react'
import { useUserAuthContext } from "../context/UserAuthContet";

const ErrorPage = () => {
  const { user, logOut } = useUserAuthContext();

  const handleLogOut = async () => {
    try {
      await logOut();
    } catch (err) {}
  };
  return (
    <div>
      <h2>Welcome {user && user.email}.</h2>
      <button onClick={handleLogOut} className='btn btn-primary'>LogOut</button>
    </div>
  )
}

export default ErrorPage