import { useState } from "react";
import "./Newsletter.scss";

export default function Newsletter() {
  const [email, setEmail] = useState("");

  const handleNewsletter = () => {
    //TODO: Handle newsletter
  };

  return (
    <div className="newsletter-container">
      <div className="image-container">
        <img src="/images/others/newsletter.jpg" />
      </div>
      <div className="join-container">
        <h1>Stay in loop</h1>
        <p>
          Sign up for our weekly newsletter and receive exclusive coupons and
          special offers.
        </p>
        <form onSubmit={handleNewsletter}>
          <input
            type="email"
            placeholder="Email"
            required
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <button className="button">
            <span>SUBMIT</span>
          </button>
        </form>
      </div>
    </div>
  );
}
