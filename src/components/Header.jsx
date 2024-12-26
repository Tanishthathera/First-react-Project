import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
import React from "react";

const Header = () => {
  const sideBarRef = React.createRef();

  function showSidebar() {
    sideBarRef.current.style.display = "flex";
  }

  return (
    <div>
      <header className=" header ">
        <Link to="/">
          <img className="T2_home" src="/image/Asset1.png" alt="T2 Home" />
        </Link>
        <nav className=" nav_bar">
          <ul>
            <li className="hideOnMobile">
              <Link to="/home">Solutions</Link>
            </li>
            <li className="hideOnMobile">
              <a href="#">Portfolio</a>
            </li>
            <li className="hideOnMobile">
              <a href="#">About</a>
            </li>
            <li className="hideOnMobile">
              <a href="#">Blog</a>
            </li>
          </ul>
        </nav>
        <Link className="action_button hideOnMobile" to="/contact-us">
          <button
            type="button"
            className="btn btn-outline-info"
            onClick={() => console.log("clicked")}
          >
            Contact Us
          </button> 
        </Link>
        <li className="menu-button" onClick={showSidebar}>
          <a href="#">
            <img className="aalu" src="./image/menu.png" alt="Image"></img>
          </a>
        </li>
        <div className="side_bar" ref={sideBarRef}>
          <Sidebar />
        </div>
      </header>

      <hr />
    </div>
  );
};

export default Header;
