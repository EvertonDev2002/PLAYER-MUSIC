import "./theme/theme.css";
import Api from "./config/api.jsx";
import { useEffect, useState } from "react";
import Header from "./components/header/header";
import Search from "./components/search/search";
import Content from "./components/content/content";
import Card from "./components/card/card";
import Session from "./components/session/session";
import Controls from "./components/controls/controls";
export default function App() {
  const [date, setData] = useState(1);
/*   const [play, setPlay] = useState(false);
  const [icon, setIcon] = useState("fa-play"); */
  /*
  const Play = () => {
    const audio = document.querySelector("#audio");
    if (play === false) {
      audio.pause();
      setIcon("fa-play");
      setPlay(true);
    } else {
      audio.play();
      setIcon("fa-pause");
      setPlay(false);
    }
  };*/

  useEffect(() => {
    Api.get("list/song").then((response) => {
      setData(response.data[1]);
    });
  }, []);

  console.log(date)
  return (
    <>
      <Header>
        <Search />
      </Header>
      <Content>
        <Session text="Genêro">
          <Card albumcover={date.albumcover} />
          <Card albumcover={date.albumcover} />
          <Card albumcover={date.albumcover} />
          <Card albumcover={date.albumcover} />
          <Card albumcover={date.albumcover} />
          <Card albumcover={date.albumcover} />
        </Session>
        <Session text="Álbum">
          <Card albumcover={date.albumcover} />
          <Card albumcover={date.albumcover} />
          <Card albumcover={date.albumcover} />
          <Card albumcover={date.albumcover} />
          <Card albumcover={date.albumcover} />
          <Card albumcover={date.albumcover} />
        </Session>
      </Content>
      <Controls title={date.title_song} music={date.file} artist={date.artist}/>
    </>
  );
}
