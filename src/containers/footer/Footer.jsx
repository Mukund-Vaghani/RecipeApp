import React from 'react';
import './footer.css';
import swadistLogo from "../../assest/logo.svg";

const Footer = () => {
  return (
    <div className="swadist__footer section__padding">
      <div className="swadist__footer-heading">
        <h1 className="gradient__text">
          Do you want to step in the future before others
        </h1>
      </div>
      <div className="swadist__footer-btn">
        <p>Request Early Access</p>
      </div>
      <div className="swadist__footer-links">
        <div className="swadist__footer-links_logo">
          <img src={swadistLogo} alt="Logo" />
          <p>Crechterwood K12 182 DK Alknjkcb,<br/> All Rights Reserved</p>
        </div>
        <div className="swadist__footer-links_div">
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>
        <div className="swadist__footer-links_div">
          <h4>Company</h4>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>
        <div className="swadist__footer-links_div">
          <h4>Get in Touch</h4>
          <p>Creacherwoord K12 182 Dk Alknjkcb</p>
          <p>8141166241</p>
          <p>info@payme.net</p>
        </div>  
      </div>
      <div className='swadist__footer-copyright'>
        <p>@2022 SWADIST. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer