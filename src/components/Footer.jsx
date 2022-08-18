import React from "react";
/* style */
import "./styles/footer.css";

/* images */
import logo from "../images/logo.svg";

import face from "../images/icon-facebook.svg";
import inst from "../images/icon-instagram.svg";
import pint from "../images/icon-pinterest.svg";
import twi from "../images/icon-twitter.svg";

function Footer() {
  return (
    <footer>
      <div className="grid-area_footer">
        <div className="grid-area_footer_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="grid-area_footer_seccions">
          <ul>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Careers</a>
            </li>
            <li>
              <a href="">Events</a>
            </li>
            <li>
              <a href="">Products</a>
            </li>
            <li>
              <a href="">Support</a>
            </li>
          </ul>
        </div>
        <div className="grid-area_footer_social">
          <ul>
            <li>
              <a href="">
                <img src={face} alt="facebook" />
              </a>
            </li>
            <li>
              <a href="">
                <img src={twi} alt="twitter" />
              </a>
            </li>
            <li>
              <a href="">
                <img src={pint} alt="pinterest" />
              </a>
            </li>
            <li>
              <a href="">
                <img src={inst} alt="instagram" />
              </a>
            </li>
          </ul>
        </div>
        <div className="grid-area_footer_copy">
          <p>© 2022 Loopstudios. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
