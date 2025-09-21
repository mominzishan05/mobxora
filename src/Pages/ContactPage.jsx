import React from "react";
import "../Css/ContactPage.css";

const ContactPage = () => {
  return (
    <>
      <h1>Contact Us</h1>
      <div className="contact-container">
        <div className="contact-card">
          <h3>Our Address</h3>
          <p>New Gauripada, Bhiwandi - 421302</p>
        </div>
        <div className="contact-card">
          <h3>Email Us</h3>
          <p>mominzishan05@gmail.com</p>
        </div>
        <div className="contact-card">
          <h3>Call Us</h3>
          <p>+91 9309086040</p>
        </div>
      </div>

      <div className="contact-form">
        <h3>Send us a message</h3>
        <form>
          <input type="text" placeholder="Your Name"  />
          <input type="email" placeholder="Your Email"  />
          <textarea placeholder="Your Message" ></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </>
  );
};

export default ContactPage;
