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
  const [track, setTrack] = useState();
  const [Selectsong, setSelectsong] = useState([]);
  const [search, setSearch] = useState(sessionStorage.getItem("search"));

  const SearchSong = (ev) => {
    setSearch(ev.target.value);
  };

  const Select = (track) => {
    setTrack(track);
  };

  useEffect(() => {
    Api.get(`search/song/${search}`).then((response) => {
      setSong(response.data);
    });
  }, [search]);

  useEffect(() => {
    Api.get(`search/song/${track}`).then((response) => {
      setSelectsong(response.data);
    });
  }, [track]);

  return (
    <>
      <Header>
        <Search search={SearchSong} />
      </Header>
      <Content direction={"normal"}>
        <Column text={"Próximas"}>
          {song?.map((list) => (
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
        <Albumcover
          bg={Selectsong[0]?.albumcover}
          lyrics={Selectsong[0]?.lyrics}
        />
      </Content>
      <Controls
        title={Selectsong[0]?.title_song}
        music={Selectsong[0]?.file}
        artist={Selectsong[0]?.artist}
      />
    </>
  );
};
export default Player;
