
import Api from "./config/api";
import Card from "./components/card/card";
import { useEffect, useState } from "react";
import Header from "./components/header/header";
import Search from "./components/search/search";
import Content from "./components/content/content";
import Session from "./components/session/session";
import Controls from "./components/controls/controls";
export default function App() {
  const [song, setSong] = useState([]);
  const [album, setAlbum] = useState([]);
  const [genre, setGenre] = useState([]);
  const [search, setSearch] = useState("");

  const SearchSong = () => {
    setSearch();
  };
  
  useEffect(() => {
    Api.get("list/song").then((response) => {
      setSong(response.data);
    });
    Api.get(`/search/song/${search}`).then((response) => {
      setSong(response.data);
    });
    Api.get("/list/album").then((response) => {
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
            <Card key={list.id_song} text={list.genre} cardGenere="1" />
          ))}
        </Session>
        <Session text="Álbum">
          {album?.map((list) => (
            <Card
              key={list.id_song}
              albumcover={list.albumcover}
              text={list.title_album}
            />
          ))}
        </Session>
      </Content>
      <Controls
       title={song[0]?.title_song}
        music={song[0]?.file}
        artist={song[0]?.artist}
      />
    </>
  );
}
