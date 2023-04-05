import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import { UserAuthContextProvider } from "./context/UserAuthContet";
import VerifyEmail from "./helpers/auth_helpers/VerifyEmail";
import ProtectedRoute from "./helpers/auth_helpers/ProtectedRoute";
import ErrorPage from "./pages/ErrorPage";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <UserAuthContextProvider>
        <Header />
        <div style={{marginTop: '4rem'}}>
          <Routes>
            <Route exact path="/" style={{ marginTop: "20px" }}>
              <Route
                exact
                path="/about"
                element={
                  <ProtectedRoute>
                    <About />
                  </ProtectedRoute>
                }
              />
              <Route exact path="/home" element={<Home />} />
              <Route
                exact
                path="/contact"
                element={
                  <ProtectedRoute>
                    <Contact />
                  </ProtectedRoute>
                }
              />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
              <Route
                exact
                path="/"
                element={
                  <ProtectedRoute>
                    <Home />
                  </ProtectedRoute>
                }
              />
              <Route
                exact
                path="/verification"
                element={
                  <ProtectedRoute>
                    <VerifyEmail />
                  </ProtectedRoute>
                }
              />
              <Route path="/*" element={<ErrorPage />} />
            </Route>
          </Routes>
          <Footer />
        </div>
      </UserAuthContextProvider>
    </BrowserRouter>
  );
};

export default App;
