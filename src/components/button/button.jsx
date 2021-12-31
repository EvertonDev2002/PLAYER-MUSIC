import "./button.css";
const Button = (props) => {
  return (
    <button className="button" type="submit" onClick={props.submit}>
      {props.text}
    </button>
  );
};
export default Button;
