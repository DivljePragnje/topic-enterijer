import "./Header.scss";

export default function Header(props: any) {
  const { image } = props;
  return (
    <div className="header-wrapper">
      <img src={image}></img>

      <div className="path">Dsadsadsa</div>
    </div>
  );
}
