import { Menu } from "../../components/Menu/Menu";
import { Quotes } from "../../components/Quotes/Quotes";
import { Video } from "../../components/Video/Video";
import Map from "../../components/Map/Map";
import { useLayoutEffect } from "react";

import "./HomeScreen.scss";

export default function HomeScreen() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div>
      <Menu />
      <Video />
      <div className="map-wrapper">
        <Map />
      </div>
      <Quotes />
    </div>
  );
}
