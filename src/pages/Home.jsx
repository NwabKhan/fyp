import React, { useEffect } from "react";
const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
    <h4>Home Page</h4>
    </>
  );
};

export default Home;
