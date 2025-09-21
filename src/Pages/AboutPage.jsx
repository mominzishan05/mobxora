import React from "react";
import "../Css/AboutPage.css";

const AboutPage = () => {
  return (
    <div className="about-container">
      <h1>About Us</h1>
      <p className="about-intro">
        At <span>MobileShop</span>, we are passionate about bringing the latest
        smartphones, gadgets, and accessories to our customers. Since our
        inception, we’ve been committed to offering not just products but an
        entire experience of trust, quality, and affordability.
      </p>

      <div className="about-sections">
        <div className="about-card">
          <h2>Our Mission</h2>
          <p>
            To empower people with the best of technology at their fingertips.
            Our mission is to make every mobile and gadget purchase smooth,
            transparent, and budget-friendly. We ensure that our customers never
            compromise on quality while staying within their budget.
          </p>
        </div>

        <div className="about-card">
          <h2>Our Vision</h2>
          <p>
            To become a household name in mobile shopping by delivering
            cutting-edge technology and unbeatable customer service. We envision
            a future where MobileShop is the first choice for every tech
            enthusiast.
          </p>
        </div>

        <div className="about-card">
          <h2>Why Choose Us?</h2>
          <ul>
            <li>✔ Wide range of the latest smartphones & accessories</li>
            <li>✔ Affordable prices with exciting offers</li>
            <li>✔ Trusted by thousands of happy customers</li>
            <li>✔ Fast delivery & easy returns</li>
            <li>✔ 24/7 customer support</li>
          </ul>
        </div>
      </div>

      <div className="about-extra">
        <h2>Our Journey</h2>
        <p>
          From a small store to one of the most loved online destinations for
          mobiles and gadgets, our journey has been nothing short of amazing.
          Every milestone is a reminder of our dedication and the trust our
          customers place in us. With each passing year, we strive to add more
          value, more variety, and more happiness to your shopping experience.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
