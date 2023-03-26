import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import { UserAuthContextProvider } from "./context/UserAuthContet";
import VerifyEmail from "./pages/VerifyEmail";
import ProtectedRoute from "./pages/ProtectedRoute";
import PrivateRoute from "./pages/PrivateRoute";
const App = () => {
  return (
    <BrowserRouter>
      <UserAuthContextProvider>
        <Routes>
          <Route>
            <Route
              path="/home"
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route exact path="/" element={<PrivateRoute />}>
              <Route exact path="/" element={<Home />} />
            </Route>
            <Route path="/verification" element={<VerifyEmail />} />
            {/* <Route path="/*" element={<ErrorPage />} /> */}
          </Route>
        </Routes>
      </UserAuthContextProvider>
    </BrowserRouter>
  );
};

export default App;
