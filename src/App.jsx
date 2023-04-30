import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
import LandingPage from "./pages/landing/LandingPage";
import Services from "./pages/services/Services";
import Cloning from './pages/cloning/Cloning';
import Toxic from './pages/toxic/Toxic';
import Fake from './pages/fake/Fake';

const App = () => {
  return (
    <BrowserRouter>
      <UserAuthContextProvider>
        <Header />
        <div style={{ marginTop: "4rem" }}>
          <Routes>
            <Route exact path="/" style={{ marginTop: "20px" }}>
              <Route exact path="/" element={<LandingPage />} />
              <Route exact path="/about" element={<About />} />
              <Route exact path="/contact" element={<Contact />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />

              <Route
                exact
                path="/services"
                element={
                  <ProtectedRoute>
                    <Services />
                  </ProtectedRoute>
                }
              />

              <Route
                exact
                path="/services/fake"
                element={
                  <ProtectedRoute>
                    <Fake />
                  </ProtectedRoute>
                }
              />
              <Route
                exact
                path="/services/toxic"
                element={
                  <ProtectedRoute>
                    <Toxic />
                  </ProtectedRoute>
                }
              />
              <Route
                exact
                path="/services/cloning"
                element={
                  <ProtectedRoute>
                    <Cloning />
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
