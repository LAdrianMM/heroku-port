import React from "react";
import "./Footer.css";
import { Fade } from "react-reveal";
import { contactPageData } from "../../portfolio.js";
import SocialMedia from "../socialMedia/SocialMedia";
/* eslint-disable jsx-a11y/accessible-emoji */

export default function Footer(props) {
  return (
    <div className="footer-div" style={{ color: props.theme.secondaryText }}>
      <Fade>
       <div className='footer-contact'>
        <p className="contact-title" style={{ color: props.theme.text }}>
          {contactPageData.contactSection.title}
        </p>
        <ul className='contact-ul'>
          <li><p>{contactPageData.contactSection.email}</p></li>
          <li><p>{contactPageData.contactSection.phone}</p></li>
          <li><p>{contactPageData.contactSection.address}</p></li>
        </ul>
        <SocialMedia />
       </div>
        <p className="footer-text" style={{ color: props.theme.secondaryText }}>
          All rights reserved &copy; 
        </p>
      </Fade>
    </div>
  );
}
