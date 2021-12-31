import Api from "../config/api";
import Card from "../components/card/card";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/header/header";
import Search from "../components/search/search";
import Content from "../components/content/content";
import Session from "../components/session/session";
import Controls from "../components/controls/controls";
const Main = () => {
  const [song, setSong] = useState([]);
  const [album, setAlbum] = useState([]);
  const [genre, setGenre] = useState([]);
  const [search, setSearch] = useState("Agnes Obel");
  const Nav = useNavigate();

  const SearchSong = (ev) => {
    setSearch(ev.target.value);
  };

  const Select = (fk) => {
    sessionStorage.setItem("fk", fk);
    Nav("/player");
  };

  useEffect(() => {
    Api.get(`search/song/${search}`).then((response) => {
      setSong(response.data);
    });
    Api.get("list/album").then((response) => {
      setAlbum(response.data);
    });
    Api.get("list/genre").then((response) => {
      setGenre(response.data);
    });
  }, [search]);

  return (
    <>
      <Header>
        <Search search={SearchSong} />
      </Header>
      <Content>
        <Session text="Genêro">
          {genre?.map((list) => (
            <Card
              key={list.id_genre}
              id={list.genre}
              text={list.genre}
              cardGenere="1"
              select={Select}
            />
          ))}
        </Session>
        <Session text="Álbum">
          {album?.map((list) => (
            <Card
              key={list.id_album}
              id={list.title_album}
              albumcover={list.albumcover}
              text={list.title_album}
              select={Select}
            />
          ))}
        </Session>
      </Content>
      <Controls
        title={song[0]?.title_song}
        music={song[0]?.file}
        artist={song[0]?.artist}
        id={song[0]?.id_song}
      />
    </>
  );
};
export default Main;
