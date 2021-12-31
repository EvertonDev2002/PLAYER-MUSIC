import "./column.css";
const Column = (props) => {
  return (
    <div className="container-column">
      <p className="legend">{props.text}</p>
      <div className="column">{props.children}</div>
    </div>
  );
};
export default Column;
