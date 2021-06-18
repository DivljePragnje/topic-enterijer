import "./Footer.scss";
import Newsletter from "../Newsletter/Newsletter";

import { Link } from "react-router-dom";
import { ABOUT_US, CONTACT_US, FAQ } from "../../utilities/constants";

export const Footer = () => {
  return (
    <div>
      <Newsletter />
      <div className="footer-container">
        <div className="about-us">
          <h3>ABOUT US</h3>
          <p>
            We have been building only the best in tech gear for the past 30
            years. Visit us today!
          </p>
          <p>
            <em>
              This is a demonstration store. No orders will be fulfilled. You
              can purchase products like these at SFBags.com.
            </em>
          </p>
        </div>
        <div className="costumers-service">
          <h3>COSUTMERS SEVICE</h3>
          <ul>
            <li>
              <Link
                style={{ color: "inherit", textDecoration: "inherit" }}
                to={`/${ABOUT_US}`}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                style={{ color: "inherit", textDecoration: "inherit" }}
                to={`/${FAQ}`}
              >
                FAQ
              </Link>
            </li>
            <li>
              <Link
                style={{ color: "inherit", textDecoration: "inherit" }}
                to={`/${CONTACT_US}`}
              >
                Contact us
              </Link>
            </li>
          </ul>
        </div>
        <div className="collection">
          <h3>COLLECTION</h3>
          <ul>
            <li>Tech bags</li>
            <li>Duffels and Totes</li>
            <li>Backpacks</li>
          </ul>
        </div>
        <div className="get-social">
          <h3>GET SOCIAL</h3>
          <ul>
            <li>
              <a
                href="https://www.instagram.com/topic_enterijer_kula"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i className="fa fa-instagram"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/Drvena-Stolarija-Topic-i-sinovi-1900219806666238/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i className="fa fa-facebook-f"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <p className="rights">© 2021. All rights reserved by Divlje Pragnje</p>
    </div>
  );
};
