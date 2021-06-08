export const MenuItem = (props: any) => {
  const { item, onHover } = props;
  const { title, description } = item;

  const handleMouseEnter = () => {
    onHover(item.id);
  };

  return (
    <div className="menu-item" onMouseEnter={handleMouseEnter}>
      <div className="background" />
      <div className="menu-caption">
        <h1 className="title">{title}</h1>
        <span className="description">{description}</span>
      </div>
    </div>
  );
};
