import { Link } from "react-router-dom";
import React from "react";

const Sidebar = () => {
  function hideSidebar() {
    const sideBar = document.querySelector(".side_bar");
    sideBar.style.display = "none";
  }

  return (
    <>
      <nav className="side_bar">
        <ul>
          <li onClick={hideSidebar}>
            <a href="#">
              <img className="aalu" src="./image/close.png" alt="Image"></img>
            </a>
          </li>
          <li>
            <Link to="/home">Solutions</Link>
          </li>
          <li>
            <a href="#">Portfolio</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
        </ul>
      </nav>
      <Link className="action_button" to="/contact-us">
        <button
          type="button"
          className="btn btn-outline-info"
          onClick={() => console.log("clicked")}
        >
          Contact Us
        </button>
      </Link>
    </>
  );
};

export default Sidebar;
