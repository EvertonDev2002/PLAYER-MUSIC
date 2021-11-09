import "./App.css";
import Api from "./api.jsx";
import { useEffect, useState } from "react";

export default function App() {
  const [date, setData] = useState(1);
  const [play, setPlay] = useState(false);
  const[icon, setIcon] = useState("fa-play")
  
  const Play = () => {
    const audio = document.querySelector("#audio");
    if (play === false) {
      audio.pause();
      setIcon("fa-play")
      setPlay(true);
    } else {
      audio.play();
      setIcon("fa-pause")
      setPlay(false);
    }
  };
  useEffect(() => {
    Api.get('list_song').then((response) => {
      setData(response.data[1]);
    });
  }, []);
  console.log(date)
  

  return (
    <div className="center">
      <div
        className="background"
        style={{ backgroundImage: `url(${date.albumcover})` }}
      ></div>
      audio
      <div className="div-player">
        <div
          className="albumcover"
          style={{ backgroundImage: `url(${date.albumcover})` }}
        >
          <p>{`${date.artist} - ${date.title_song} - ${date.title_album}`}</p>
        </div>
        <div className="controler">
         {/*  <span className="icon fas fa-step-backward"></span> */}
          <span className={ `icon play fas ${icon}`} onClick={() => Play()}></span>
         {/*  <span className="icon fas fa-step-forward"></span> */}
        </div>
        <audio id="audio" src={date.file} preload="true"></audio>
      </div>
    </div>
  );
}
