import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ABOUT_US, CONTACT_US } from "../../utilities/constants";
import "./StickyNavbar.scss";

export const StickyNavbar = () => {
  const [visibility, setVisibility] = useState(false);

  useEffect(() => {
    document.addEventListener("scroll", (e) => {
      let scrolled = document.scrollingElement?.scrollTop;
      if (scrolled && scrolled >= 200) {
        setVisibility(true);
      } else {
        setVisibility(false);
      }
    });
  }, []);

  return (
    <nav
      className={` stickyNav-container ${visibility ? "visible" : "hidden"}`}
    >
      <div className="menu-wrapper">
        <div>
          <a href="/">
            <img
              src={`/images/logos/topic-house-white.png`}
              alt="Logo"
              width="50"
              height="50"
            />
          </a>
        </div>
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
        <div>
          <img
            src={`/images/logos/topic-house-white.png`}
            alt="Logo"
            width="50"
            height="50"
          />
        </div>
      </div>
    </nav>
  );
};
