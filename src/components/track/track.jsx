import "./track.css";
const Track = (props) => {
  const Duration = (ev) => {
    const date = new Date();
    date.setMinutes(ev);
    const durationMinutes = date.toISOString().substr(11, 5);
    return durationMinutes;
  };

  return (
    <div
      id={`e${props.id}`}
      className="container-track"
      onClick={() => props.select(props.id)}
    >
      <div>
        <span
          className="photo"
          style={{ backgroundImage: `url(${props.photo})` }}
        ></span>
        <p>{props.title}</p>
      </div>
      <p>{Duration(props.duration)}</p>
    </div>
  );
};
export default Track;
