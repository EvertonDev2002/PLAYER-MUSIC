import "./controls.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Controls = (props) => {
  const Nav = useNavigate();
  const [play, setPlay] = useState(false);
  const [iconPlay, setIconPLay] = useState("fa-play");
  const [iconVolume, setIconeVolume] = useState("fa-volume-up");

  const Play = () => {
    const audio = document.querySelector("#audio");
    if (play === false) {
      audio.pause();
      setIconPLay("fa-play");
      setPlay(true);
    } else {
      audio.play();
      setIconPLay("fa-pause");
      setPlay(false);
    }
  };

  const OnClick = () => {
    if (sessionStorage.getItem("search") != null) {
      sessionStorage.setItem("search", props.album);
      Nav("/player");
    }
  };

  const Volume = (ev) => {
    const volumeInput = document.querySelector("#volume");
    const audio = document.querySelector("#audio");
    if (ev === "mute" || volumeInput.value < 0.1) {
      if (ev) {
        if (volumeInput.value === "0") {
          audio.volume = 1
          volumeInput.stepUp(10);
          setIconeVolume("fa-volume-up");
        } else {
          audio.volume = 0
          volumeInput.stepDown(10);
          setIconeVolume("fa-volume-mute");
        }
      } else {
        audio.volume = volumeInput.value;
        setIconeVolume("fa-volume-mute");
      }
    } else if (volumeInput.value > 0.5) {
      audio.volume = volumeInput.value;
      setIconeVolume("fa-volume-up");
    } else if (volumeInput.value <= 0.5) {
      audio.volume = volumeInput.value;
      setIconeVolume("fa-volume-down");
    }
  };

  return (
    <div className="sound">
      <div className="title">
        <p className="title-sog">{props.title}</p>
        <p className="artist">{props.artist}</p>
      </div>
      <div className="controls">
        <span
          className="fas fa-step-backward"
          onClick={() => props.prev()}
        ></span>
        <span className={`fas ${iconPlay}`} onClick={Play}></span>
        <span
          className="fas fa-step-forward"
          onClick={() => props.next()}
        ></span>
        <div className="volume">
          <span
            className={`fas ${iconVolume}`}
            onClick={() => Volume("mute")}
          ></span>
          <input
            min="0"
            max="1"
            step="0.1"
            type="range"
            id="volume"
            defaultValue="1"
            onChange={() => Volume()}
          />
        </div>
        <span className="icon fas fa-list-ul" onClick={() => OnClick()}></span>
        <audio preload="metadata" id="audio" src={props.music}></audio>
      </div>
    </div>
  );
};

export default Controls;
