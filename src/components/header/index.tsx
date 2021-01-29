import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="header-component">
      <Link to="/about">About</Link>
      <a href="">Github</a>
      <a href="">Linkedin</a>
    </div>
  );
};

export default Header;
