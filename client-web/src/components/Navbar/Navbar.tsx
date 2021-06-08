import { useCallback } from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";

export const Navbar = () => {
  const onClick = useCallback(() => {
    console.log("IDEMO");
  }, []);

  return (
    <div className="navbar">
      <img
        src={`/images/logos/topic-name-white.png`}
        alt="Logo"
        width="100"
        height="100"
      />
      <div className="topnav" id="myTopnav">
        <Link to="/" className="link active">
          HOME
        </Link>
        <Link to="/news" className="link">
          NEWS
        </Link>
        <Link to="/contact" className="link">
          CONTACT
        </Link>
        <Link to="/about" className="link">
          ABOUT
        </Link>
      </div>
    </div>
  );
};
