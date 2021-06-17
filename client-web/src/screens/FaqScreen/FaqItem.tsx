import { useState } from "react";
import "./FaqScreen.scss";

export default function FaqItem(props: any) {
  const { item } = props;

  const [isActive, setIsActive] = useState(false);

  const handleActivation = () => {
    setIsActive(isActive ? false : true);
  };

  const renderSpan = () => {
    return isActive ? <span>-</span> : <span>+</span>;
  };

  return (
    <div className="faq-item">
      <div className="faq-item-header" onClick={handleActivation}>
        <h3>{item.title}</h3>
        {renderSpan()}
      </div>
      <div className={`faq-item-description ${isActive ? "" : "deactive"}`}>
        <p>{item.description}</p>
      </div>
    </div>
  );
}
