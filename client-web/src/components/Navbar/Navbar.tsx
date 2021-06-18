import { Link } from "react-router-dom";
import { ABOUT_US, CONTACT_US } from "../../utilities/constants";
import "./Navbar.scss";

export const Navbar = () => {
  return (
    <div>
      <header className="navbar">
        <a href="/">
          <img
            src={`/images/logos/topic-name-white.png`}
            alt="Logo"
            width="100"
            height="100"
          />
        </a>
        <div className="topnav" id="myTopnav">
          <Link to="/" className="link active">
            HOME
          </Link>
          <Link to="/catalog" className="link">
            CATALOG
          </Link>
          <Link to={`/${ABOUT_US}`} className="link">
            ABOUT US
          </Link>
          <Link to={`/${CONTACT_US}`} className="link">
            CONTACT US
          </Link>
        </div>
      </header>
    </div>
  );
};
