import "./card.css";
const Card = (props) => {
  if (props.cardGenere === "1") {
    return (
      <div className="card" onClick={() => props.select(props.id)}>
        <div className="bg"></div>
        <p>{props.text}</p>
      </div>
    );
  } else {
    return (
      <div className="card" onClick={() => props.select(props.id)}>
        <div
          className="filter"
          style={{ backgroundImage: `url(${props.albumcover})` }}
        ></div>
        <p>{props.text}</p>
      </div>
    );
  }
};
export default Card;
