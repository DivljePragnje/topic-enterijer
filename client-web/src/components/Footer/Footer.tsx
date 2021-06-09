import "./Footer.scss";

export const Footer = () => {
  return (
    <div>
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
            <li>About Us</li>
            <li>Warranty & Returns</li>
            <li>FAQ</li>
            <li>Contact Us</li>
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
              <i className="fa fa-instagram"></i>
            </li>
            <li>
              <i className="fa fa-facebook-f"></i>
            </li>
          </ul>
        </div>
      </div>
      <p className="rights">© 2021. All rights reserved by Divlje Pragnje</p>
    </div>
  );
};
