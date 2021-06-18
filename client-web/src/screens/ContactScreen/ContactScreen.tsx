import { useLayoutEffect } from "react";
import Map from "../../components/Map/Map";
import Header from "../../components/Header/Header";
import "./ContactScreen.scss";

export default function ContactScreen() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div className="contact-container">
      <Header image={"/images/headers/contact-us.jpg"} />
      <div className="map-wrapper">
        <Map />
      </div>
    </div>
  );
}
