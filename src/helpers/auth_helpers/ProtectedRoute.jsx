import React from "react";
import { Navigate } from "react-router-dom";
import { useUserAuthContext } from "../../context/UserAuthContet";
const ProtectedRoute = ({ children }) => {
  const { user } = useUserAuthContext();

  console.log("Check user in Private: ", user);
  if (!user) {
    return <Navigate to="/login" />;
  }
  return children;
};

export default ProtectedRoute;