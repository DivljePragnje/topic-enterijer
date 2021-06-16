import { useLayoutEffect } from "react";
import Header from "../../components/Header/Header";
import Newsletter from "../../components/Newsletter/Newsletter";
import "./AboutScreen.scss";

export default function AboutScreen() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div className="about-container">
      <Header image={"/images/headers/contact-us.jpg"} />
      <div className="about-text">
        <h1>Welcome to our world</h1>
        <p>
          Our story began in 2001 in a small studio in the middle of nowhere.
          With only one desk and next to no free time, our brand was born. Our
          passion for unique design and collaboration brought our vision, and
          products, to life.
        </p>
        <p>
          Our products bring together the finest materials and stunning design
          to create something very special. We believe in quality, care, and
          creating unique products that everyone can enjoy. Colorful, creative,
          and inspired by what we see every day, each product represents what we
          love about the world we live in. We hope they’ll inspire you too.
        </p>
      </div>
      <Newsletter />
    </div>
  );
}
