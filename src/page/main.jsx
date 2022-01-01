import Api from "../config/api";
import Card from "../components/card/card";
import { useEffect, useState } from "react";
import Arrow from "../components/arrow/arrow";
import { useNavigate } from "react-router-dom";
import Header from "../components/header/header";
import Search from "../components/search/search";
import Content from "../components/content/content";
import Session from "../components/session/session";
import Controls from "../components/controls/controls";
const Main = () => {
  const Nav = useNavigate();
  const [song, setSong] = useState([]);
  const [track, setTrack] = useState();
  const [album, setAlbum] = useState([]);
  const [genre, setGenre] = useState([]);
  const [search, setSearch] = useState(sessionStorage.getItem("search"));
  const [albumPage, setAlbumPage] = useState(1);
  const [genrePage, setGenrePage] = useState(1);
  const [albumCount, setAlbumCount] = useState(Number);
  const [genreCount, setGenreCount] = useState(Number);

  const SearchSong = (ev) => {
    setSearch(ev.target.value);
    sessionStorage.setItem("search", ev.target.value);
    sessionStorage.setItem("id", track.id_song);
  };

  const Select = (fk) => {
    sessionStorage.setItem("search", fk);
    Nav("/player");
  };
  const OnClickArrowAlbum = () => {
    if (albumPage <= 1) {
      if (albumCount.count > 5) {
        setAlbumPage(albumPage + 1);
      }
    } else {
      setAlbumPage(albumPage - 1);
    }
  };

  const OnClickArrowGenre = () => {
    if (genrePage <= 1) {
      if (genreCount.count > 5) {
        setGenrePage(genrePage + 1);
      }
    } else {
      setGenrePage(genrePage - 1);
    }
  };

  useEffect(() => {
    Api.get(`search/song/${search}`).then((response) => {
      setSong(response.data);
      setTrack(response.data[0]);
    });
    Api.get(`/list/album?page=${albumPage}`).then((response) => {
      setAlbum(response.data[0]);
      setAlbumCount(response.data[1]);
    });
    Api.get(`list/genre?page=${genrePage}`).then((response) => {
      setGenre(response.data[0]);
      setGenreCount(response.data[1]);
    });
  }, [search, albumPage, genrePage]);

  return (
    <>
      <Header>
        <Search search={SearchSong} />
      </Header>
      <Content>
        <Session text="Genêro">
          <Arrow arrow={"left"} clickBack={OnClickArrowGenre} />
          {genre?.map((list) => (
            <Card
              key={list.id_genre}
              id={list.genre}
              text={list.genre}
              cardGenere="1"
              select={Select}
            />
          ))}
          <Arrow arrow={"right"} clickNext={OnClickArrowGenre} />
        </Session>
        <Session text="Álbum">
          <Arrow arrow={"left"} clickBack={OnClickArrowAlbum} />
          {album?.map((list) => (
            <Card
              key={list.id_album}
              id={list.title_album}
              albumcover={list.albumcover}
              text={list.title_album}
              select={Select}
            />
          ))}
          <Arrow arrow={"right"} clickNext={OnClickArrowAlbum} />
        </Session>
      </Content>
      <Controls
        title={song[0]?.title_song}
        music={song[0]?.file}
        artist={song[0]?.artist}
      />
    </>
  );
};
export default Main;
