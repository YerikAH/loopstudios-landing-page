import React from "react";
import "./styles/menu.css";
import logo from "../images/logo.svg";
function Menu() {
  return (
    <div className="menu-center">
      <ul className="menu-center_ul">
        <img src={logo} alt="logo" />
        <div className="my_list">
          <li>
            <a href="">ABOUT</a>
          </li>
          <li>
            <a href="">CAREERS</a>
          </li>
          <li>
            <a href="">EVENTS</a>
          </li>
          <li>
            <a href="">PRODUCTS</a>
          </li>
          <li>
            <a href="">SUPPORT</a>
          </li>
        </div>
      </ul>
    </div>
  );
}

export default Menu;
