import React from "react";

import logo from "../../assets/MV Logo1.png";

import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-left">
        <i className="fa-solid fa-at" />
        <div className="footer-left-text">matej.verbuc@gmail.com</div>
      </div>
      <div className="footer-logo">
        <img alt="logo" src={logo} />
      </div>
      <div className="footer-right">
        <i className="fa-solid fa-phone" />
        <div className="footer-left-text">070-388-348</div>
      </div>
    </div>
  );
};

export default Footer;
