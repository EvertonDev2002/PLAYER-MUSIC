import "./albumcover.css";
const Albumcover = (props) => {
  return (
    <div className="container-albumcover">
      <div
        className="albumcover"
        style={{ backgroundImage: `url(${props.bg})` }}
      ></div>
      <div className="container-lyrics">
        <p>{props.lyrics}</p>
      </div>
    </div>
  );
};
export default Albumcover;
