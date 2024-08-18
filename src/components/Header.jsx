import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="container">
      <header>
        <Link to="/">
          <img className="T2_home" src="/image/Asset1.png" alt="T2 Home" />
        </Link>
        <div>
          <nav className="nav_bar">
            <a href="/home">Solutions</a>
            <a href="#">Portfolio</a>
            <a href="#">About</a>
            <a href="#">Blog</a>
          </nav>
        </div>
        <Link className="acttion_button" to="/contact-us">
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
