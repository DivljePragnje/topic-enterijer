import { useState } from "react";
import { menuData } from "../../utilities/menuData";
import { MenuItem } from "./MenuItem/MenuItem";
import "./Menu.scss";

export const Menu = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const renderImages = () => {
    return menuData.map((content, index) => {
      const display = index === currentImage ? "visible" : "hidden";
      return (
        <div key={index} className={`image-background ${display}`}>
          <img src={content.image} alt="background" />
        </div>
      );
    });
  };

  const onHover = (id: number) => {
    setCurrentImage(id);
  };

  const renderMenuItems = () => {
    return menuData.map((item, index) => {
      return <MenuItem key={index} item={item} onHover={onHover} />;
    });
  };

  return (
    <div className="menu-container">
      {renderImages()}
      <div className="menu-items">{renderMenuItems()}</div>
    </div>
  );
};
