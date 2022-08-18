import React from "react";
import "./styles/section-three.css";
function SeccionThree() {
  return (
    <section>
      <div className="section-three_title">
        <h2>OUR CREATIONS</h2>
        <div className="section-three_button_center_desktop">
          <button>SEE ALL</button>
        </div>
      </div>
      <div className="section-three_grid">
        <div className="three-grid_child">
          <div className="three-grid_child__image_deep">
            <div className="bg-gradient_three">
              <h4>
                DEEP <br />
                EARTH
              </h4>
            </div>
          </div>
        </div>
        <div className="three-grid_child">
          <div className="three-grid_child__image_night">
            <div className="bg-gradient_three">
              <h4>
                NIGHT <br />
                ARCADE
              </h4>
            </div>
          </div>
        </div>
        <div className="three-grid_child">
          <div className="three-grid_child__image_soccer">
            <div className="bg-gradient_three">
              <h4>
                SOCCER <br />
                TEAM VR
              </h4>
            </div>
          </div>
        </div>
        <div className="three-grid_child">
          <div className="three-grid_child__image_grid">
            <div className="bg-gradient_three">
              <h4>
                THE <br />
                GRID
              </h4>
            </div>
          </div>
        </div>
        <div className="three-grid_child">
          <div className="three-grid_child__image_above">
            <div className="bg-gradient_three">
              <h4>
                FROM UP <br />
                ABOVE VR
              </h4>
            </div>
          </div>
        </div>
        <div className="three-grid_child">
          <div className="three-grid_child__image_pocket">
            <div className="bg-gradient_three">
              <h4>
                POCKET <br />
                BOREALIS
              </h4>
            </div>
          </div>
        </div>
        <div className="three-grid_child">
          <div className="three-grid_child__image_curios">
            <div className="bg-gradient_three">
              <h4>
                THE <br />
                CURIOSITY
              </h4>
            </div>
          </div>
        </div>
        <div className="three-grid_child">
          <div className="three-grid_child__image_make">
            <div className="bg-gradient_three">
              <h4>
                MAKE IT <br />
                FISHEYE
              </h4>
            </div>
          </div>
        </div>
      </div>
      <div className="section-three_button_center">
        <button>SEE ALL</button>
      </div>
    </section>
  );
}

export default SeccionThree;
