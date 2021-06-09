import { useState } from "react";
import { contactData } from "../../utilities/contactData";
import { QuoteItem } from "./QuoteItem";
import "./Quotes.scss";

export const Quotes = () => {
  const renderQuotes = () => {
    return contactData.map((contact, index) => {
      return <QuoteItem contact={contact} key={index} />;
    });
  };

  return (
    <div>
      <div className="qoutes-container">
        <h1>COSTUMERS LOVE</h1>
        <cite>We take pride in our quality and service</cite>
        <div className="quote-container">
          <div className="slide-track">
            {renderQuotes()}
            {renderQuotes()}
          </div>
        </div>
      </div>
    </div>
  );
};
