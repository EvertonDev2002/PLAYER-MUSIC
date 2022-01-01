import "./controls.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Controls = (props) => {
  const Nav = useNavigate();
  const [play, setPlay] = useState(false);
  const [icon, setIcon] = useState("fa-play");

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
  };

  const OnClick = () => {
    if (sessionStorage.getItem("search") != null) {
      Nav("/player");
    }
  };

  return (
    <div className="sound">
      <div className="title">
        <p className="title-sog">{props.title}</p>
        <p className="artist">{props.artist}</p>
      </div>
      <div className="controls">
        <span className="fas fa-step-backward"></span>
        <span className={`fas ${icon}`} onClick={Play}></span>
        <span className="fas fa-step-forward"></span>
        <div className="volume">
          <span className="fas fa-volume-up"></span>
          <input
            min="0"
            max="1"
            step="0.1"
            type="range"
            id="volume"
            defaultValue="1"
          />
        </div>
        <span className="icon fas fa-list-ul" onClick={() => OnClick()}></span>
        <audio preload="metadata" id="audio" src={props.music}></audio>
      </div>
    </div>
  );
};

export default Controls;
