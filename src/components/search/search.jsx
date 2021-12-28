export default function Search(props) {
  return <input className="search" type="text" placeholder="Pesquisar" onChange={() => props.search()} />;
}
