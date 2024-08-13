import { FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { GiIndiaGate } from "react-icons/gi";
import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="footer_container">
        <div className="footer_column">
          <h3>SERVICE</h3>

          <a href="#">Mobile App Development</a>
          <a href="#">Web Development</a>
          <a href="#">Data Engineering</a>
          <a href="#">Zoho Offerings</a>
          <a href="#">DevOps</a>
          <a href="#">Digital Marketing</a>
        </div>

        <div className="footer_div">
          <a href="#">Blockchain Development</a>
          <a href="#">Cloud Computing</a>
          <a href="#">Web3 Development</a>
          <a href="#">iOS App Development</a>
          <a href="#">Android App Development</a>
          <a href="#">Fintech Development</a>
        </div>

        <div className="footer_column">
          <h3>About</h3>

          <a href="#">Company Overview</a>
          <a href="#">Portfolio</a>
          <a href="#">Why Systango?</a>
          <a href="#">Partnerships</a>
          <a href="#">Investors</a>
        </div>

        <div className="footer_column">
          <h3>Our Solutions</h3>

          <a href="#">Intelligent Document Processing</a>
          <a href="#">Contextual Chatbots</a>
          <a href="#">Learning Management System</a>
          <a href="#">Wealth Management Platform</a>
        </div>
      </div>
      <hr />

      <div className="location">
        <a href="#Googlemap">
          <GiIndiaGate />
        </a>
        <span>INDIA</span>
      </div>
      <hr />

      <div className="copyright">© 2024 www.xyz.com. All rights reserved.</div>

      <div className="social_link">
        <a href="#Instagram">
          <FaInstagram />
        </a>
        <a href="#X">
          <FaXTwitter />
        </a>
        <a href="#Facebook">
          <FaFacebook />
        </a>
        <a href="#Linkedin">
          <FaLinkedin />
        </a>
      </div>
    </footer>
  );
};
export default Footer;
