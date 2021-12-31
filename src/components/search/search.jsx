import "./search.css";
const Search = (props) => {
  return (
    <input
      className="search"
      type="text"
      placeholder="Pesquisar"
      onChange={props.search}
    />
  );
};
export default Search;
