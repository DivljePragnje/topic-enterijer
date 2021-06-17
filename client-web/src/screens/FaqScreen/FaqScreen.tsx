import FaqItem from "./FaqItem";
import { FAQData } from "../../utilities/FAQData";
import Header from "../../components/Header/Header";
import "./FaqScreen.scss";

export default function FaqScreen() {
  const renderFaqList = () => {
    return FAQData.map((elem) => {
      return <FaqItem item={elem} />;
    });
  };

  return (
    <div>
      <Header image={"/images/headers/contact-us.jpg"} />
      <div className="faq-container">{renderFaqList()}</div>
    </div>
  );
}
