import { useState } from "react";

export default function Controls(props) {
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
        <span className="icon fas fa-list-ul"></span>
        <audio preload="metadata" id="audio" src={props.music}></audio>
      </div>
    </div>
  );
}
