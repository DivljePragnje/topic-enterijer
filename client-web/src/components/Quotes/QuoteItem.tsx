export const QuoteItem = (props: any) => {
  const { image, author, quote } = props.contact;

  return (
    <div className="quote-item-container">
      <div className="quote-block">
        <i className="fa fa-quote-left" />
        <p className="quote">{quote}</p>
      </div>
      <div className="quote-triangle" />
      <div className="quote-author">
        <img src={image} />
        <cite>{author}</cite>
      </div>
    </div>
  );
};
