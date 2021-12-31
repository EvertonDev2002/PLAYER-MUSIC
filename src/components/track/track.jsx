import "./track.css";
const Track = (props) => {
  return (
    <div
      id={`e${props.id}`}
      className="container-track"
      onClick={() => props.select(props.title)}
    >
      <div>
        <span
          className="photo"
          style={{ backgroundImage: `url(${props.photo})` }}
        ></span>
        <p>{props.title}</p>
      </div>
      <p>{props.duration}</p>
    </div>
  );
};
export default Track;
