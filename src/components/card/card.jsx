export default function Card(props) {
  return (
    <div className="card">
      <div style={{ backgroundImage: `url(${props.albumcover})` }}></div>
      <p>Texto</p>
    </div>
  );
}
