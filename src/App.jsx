import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Cookies from "js-cookie";
import { Provider } from "react-redux";
import { Store } from "./App/Store";

import Navbar from "./Routers/Navbar";
import HomePage from "./Pages/HomePage";
import CartPage from "./Pages/CartPage";
import AboutPage from "./Pages/AboutPage";
import ContactPage from "./Pages/ContactPage";
import LoginPage from "./Routers/LoginPage";
import Protected from "./Routers/Protected";
import IntroPage from "./Pages/IntroPage";

function App() {
  const [auth, setIsAuth] = useState(!!Cookies.get("authToken"));

  // Auto logout 1 minute after login
  useEffect(() => {
    if (auth) {
      const timer = setTimeout(() => {
        Cookies.remove("authToken");
        setIsAuth(false);
        alert("Session expired! You are logged out.");
      }, 60000); // 1 min

      return () => clearTimeout(timer);
    }
  }, [auth]);

  return (
    <Provider store={Store}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<IntroPage />} />
          <Route
            path="/home"
            element={
              <Protected auth={auth}>
                <HomePage />
              </Protected>
            }
          />
          <Route
            path="/carts"
            element={
              <Protected auth={auth}>
                <CartPage />
              </Protected>
            }
          />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/login" element={<LoginPage setIsAuth={setIsAuth} />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
