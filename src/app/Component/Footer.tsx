import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <span className="footer-title"></span>
        <p className="footer-text">
          {new Date().getFullYear()} All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
