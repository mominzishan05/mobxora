import React from "react";
import { useNavigate } from "react-router-dom";
import "../Css/IntroPage.css";
// import introImg from "../Images/intro.png";

const IntroPage = () => {
  const navigate = useNavigate();

  return (
    <div className="intro-container">
      {/* Left Side - Text */}
      <div className="intro-left">
        <h1 className="intro-title">Welcome to My App 🚀</h1>
        <p className="intro-subtitle">
          Discover amazing products with smooth experience.
        </p>

        <div className="btn-group">
          {/* <button className="intro-btn">Get Started</button> */}
          <button
            className="intro-btn shop-btn"
            onClick={() => navigate("/home")}
          >
            Shop Now
          </button>
        </div>
      </div>

      {/* Right Side - Image */}
      <div className="intro-right">
        <img
          src="https://png.pngtree.com/png-clipart/20230924/original/pngtree-phone-icon-with-shopping-cart-vector-illustration-shop-black-and-white-png-image_12754663.png"
          alt="Intro Banner"
          className="intro-image"
        />
      </div>
    </div>
  );
};

export default IntroPage;
