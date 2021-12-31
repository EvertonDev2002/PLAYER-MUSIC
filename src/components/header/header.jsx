import "./header.css";
import { useNavigate } from "react-router-dom";
const Header = (props) => {
  const Nav = useNavigate();
  const OnClick = () => {
    Nav("/");
  };
  return (
    <header className="hearder">
      <span onClick={OnClick}>Player Music</span>
      {props.children}
    </header>
  );
};
export default Header;
