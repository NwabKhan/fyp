import { Routes, Route, Navigate } from "react-router-dom";
import { useUserAuthContext } from "../context/UserAuthContet";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { user } = useUserAuthContext();

  return (
    <Routes>
      <Route
        {...rest}
        render={(props) => {
          return user?.emailVerified ? (
            <Component {...props} />
          ) : (
            <Navigate to="/login" />
          );
        }}
      ></Route>
    </Routes>
  );
};

export default PrivateRoute;
