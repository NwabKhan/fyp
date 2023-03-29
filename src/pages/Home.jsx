import React from "react";
import { useUserAuthContext } from "../context/UserAuthContet";
const Home = () => {
  const { user, logOut } = useUserAuthContext();

  const handleLogOut = async () => {
    try {
      await logOut();
    } catch (err) {}
  };
  return (
    <>
      <h2>Welcome {user && user.email}.</h2>
      <button onClick={handleLogOut} className='btn btn-primary'>LogOut</button>
    </>
  );
};

export default Home;
