import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="container">
      <header className="header">
        <Link to="/">
          <img className="T2_home" src="/image/Asset1.png" alt="T2 Home" />
        </Link>
        <nav className="nav_bar">
          <ul>
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
      </header>

      <hr />
    </div>
  );
};

export default Header;
