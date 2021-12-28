export default function Card(props) {
  if (props.cardGenere === "1") {
    return (
      <div className="card">
        <div className="bg"></div>
        <p>{props.text}</p>
      </div>
    );
  } else {
    return (
      <div className="card">
        <div
          className="filter"
          style={{ backgroundImage: `url(${props.albumcover})` }}
        ></div>
        <p>{props.text}</p>
      </div>
    );
  }
}
