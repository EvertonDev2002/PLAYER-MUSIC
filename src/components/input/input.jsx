import "./input.css";
const Input = (props) => {
  if (props.readOnly === "readOnly") {
    return (
      <input
        type={props.type}
        name={props.name}
        readOnly
        id={props.id}
        className="input"
        placeholder={props.placeholder}
        value={props.value}
      />
    );
  } else {
    return (
      <input
        type={props.type}
        name={props.name}
        id={props.id}
        className="input"
        placeholder={props.placeholder}
        onChange={props.change}
      />
    );
  }
};
export default Input;
