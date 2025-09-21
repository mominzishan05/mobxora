import React, { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import "../Css/LoginPage.css";

const LoginPage = ({ setIsAuth }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const response = await axios.get("https://dummyjson.com/users");
    const users = response.data.users;

    // Match username & password
    const user = users.find(
      (u) => u.username === username && u.password === password
    );

    user &&
      (() => {
        Cookies.set("authToken", "dummyToken123", { expires: 0.0007 }); 
        setIsAuth(true);
        navigate("/");
      })();
  };

  return (
    <div className="login-page">
      <div className="login-box">
        <h1>Login</h1>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Login</button>
        </form>
        <p className="signup-text">
          Don't have an account? <a href="/signup">Sign Up</a>
        </p>
        <p className="signup-text">
          Username <a href="/signup">emilys</a>
        </p>
        <p className="signup-text">
          Password <a href="/signup">emilyspass</a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
