import React from 'react';
import "./Footer.css";
import footerImg from "../../assets/footerImg.png";

const Footer = () => {
  return (
    <footer>
      <img src={footerImg} alt="footerImg" />
    <h3>Paircraft</h3>
    <p>Terms of Use  |  Privacy  Policy</p>
    <p>Copyright © 2025 Paircraft All rights reserved.</p>
    </footer>
  )
}

export default Footer
