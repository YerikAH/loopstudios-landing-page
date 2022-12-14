import React from "react";
import "./styles/nav.css";
import logo from "../images/logo.svg";
import ham from "../images/icon-hamburger.svg";
import closeHam from "../images/icon-close.svg";
import Menu from "./Menu";

function Nav({menu, handleMenu}) {
  return (
    <>
      <nav>
        <ul className="first-part">
          <span>
            <img className="logo" src={logo} alt="logo" />
          </span>
          <span className="menu-mobile">
            <span className="my_cursor">
              <img src={ham} alt="open the menu" onClick={handleMenu} />
              <img
                className="myHam"
                src={closeHam}
                style={{ display: "none" }}
                alt="close the menu"
                onClick={handleMenu}
              />
            </span>
          </span>
          <div className="menu-desktop">
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
        </ul>
        {menu && <Menu />}
      </nav>
    </>
  );
}

export default Nav;
