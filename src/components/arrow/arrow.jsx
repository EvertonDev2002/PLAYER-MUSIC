import "./arrow.css";
const Arrow = (props) => {
  if (props.arrow === "right") {
    return (
      <span
        className="fas fa-chevron-circle-right arrow"
        onClick={() => props.clickNext()}
      ></span>
    );
  } else if (props.arrow === "left") {
    return (
      <span
        className="fas fa-chevron-circle-left arrow"
        onClick={() => props.clickBack()}
      ></span>
    );
  }
};
export default Arrow;
