export default function Header(props) {
  return (
    <header className="hearder">
      <span>Player Music</span>
      {props.children}
    </header>
  );
}
