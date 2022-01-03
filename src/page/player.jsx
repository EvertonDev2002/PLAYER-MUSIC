import Api from "../config/api";
import { useEffect, useState } from "react";
import Track from "../components/track/track";
import Header from "../components/header/header";
import Column from "../components/column/column";
import Search from "../components/search/search";
import Content from "../components/content/content";
import Controls from "../components/controls/controls";
import Albumcover from "../components/albumcover/albumcover";
const Player = () => {
  const [song, setSong] = useState([]);
  const [id, setId] = useState(Number);
  const [album, setAlbum] = useState([]);
  const [search, setSearch] = useState(sessionStorage.getItem("search"));

  /* console.log(sessionStorage.getItem("album")) */

  const SearchSong = (ev) => {
    setSearch(ev.target.value);
  };

  const Select = (ID) => {
    for (let i = 0; i < album.length; i++) {
      if (ID === album[i].id_song) {
        if (album[i] !== undefined) {
          setId(album[i].id_song);
          sessionStorage.setItem("search", album[i].title_song);
          break;
        }
      }
    }
  };

  const Prev = () => {
    for (let i = 0; i < album.length; i++) {
      if (id === album[i].id_song) {
        const nextIndex = i - 1;

        if (album[nextIndex] !== undefined) {
          setId(album[nextIndex].id_song);
          sessionStorage.setItem("search", album[nextIndex].title_song);
          break;
        }
      }
    }
  };
  const Next = () => {
    for (let i = 0; i < album.length; i++) {
      if (id === album[i].id_song) {
        const nextIndex = i + 1;

        if (album[nextIndex] !== undefined) {
          setId(album[nextIndex].id_song);
          sessionStorage.setItem("search", album[nextIndex].title_song);
          break;
        }
      }
    }
  };

  useEffect(() => {
    Api.get(`search/song/${search}`).then((response) => {
      setAlbum(response.data);
    });
  }, [search]);

  /* console.log(album) */

  useEffect(() => {
    if (id !== undefined && id !== 0) {
      Api.get(`list/song?id=${id}`).then((response) => {
        setSong(response.data[0]);
      });
    }
  }, [id]);

  return (
    <>
      <Header>
        <Search search={SearchSong} />
      </Header>
      <Content direction={"normal"}>
        <Column text={"Próximas"}>
          {album?.map((list) => (
            <Track
              key={list.id_song}
              id={list.id_song}
              photo={list.albumcover}
              select={Select}
              title={list.title_song}
              duration={list.duration}
            />
          ))}
        </Column>
        <Albumcover bg={song[0]?.albumcover} lyrics={song[0]?.lyrics} />
      </Content>
      <Controls
        title={song[0]?.title_song}
        music={song[0]?.file}
        artist={song[0]?.artist}
        next={Next}
        prev={Prev}
      />
    </>
  );
};
export default Player;
