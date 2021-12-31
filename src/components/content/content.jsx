import "./content.css";
const Content = (props) => {
  if (props.direction === "normal") {
    return (
      <div className="container-playlist">
        <div>{props.children}</div>
      </div>
    );
  } else {
    return (
      <div className="content">
        <div>{props.children}</div>
      </div>
    );
  }
};
export default Content;
