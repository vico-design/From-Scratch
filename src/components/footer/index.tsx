import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

const Footer = () => {
  return (
    <div className="footer-component">
      <Link to="/about">About us</Link>
      <a href="">Github</a>
      <a href="">Linkedin</a>
    </div>
  );
};

export default Footer;
