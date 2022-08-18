import React from "react";
/* images */
import vrDes from "../images/desktop/image-interactive.jpg";
import vrMob from "../images/mobile/image-interactive.jpg";
/* style */

import "./styles/section-two.css";
function SeccionTwo() {
  return (
    <section className="section-two">
      <div className="section-two-grid">
        <div className="two-grid_image">
          <img
            className="mobil-seccion-two"
            src={vrMob}
            alt="somebody with VR glass"
          />
          <img
            className="desktop-seccion-two"
            src={vrDes}
            alt="somebody with VR glass"
          />
        </div>
        <div className="two-grid_text">
          <div className="two-grid_text_box">
            <h2> THE LEADER IN INTERACTIVE VR </h2>
            <p>
              {" "}
              Founded in 2011, Loopstudios has been producing world-class
              virtual reality projects for some of the best companies around the
              globe. Our award-winning creations have transformed businesses
              through digital experiences that bind to their brand.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SeccionTwo;
