import Api from "../config/api";
import { useState } from "react";
import Input from "../components/input/input";
import Column from "../components/column/column";
import Header from "../components/header/header";
import Button from "../components/button/button";
import Content from "../components/content/content";
import Controls from "../components/controls/controls";
import Albumcover from "../components/albumcover/albumcover";
const Add = () => {
  const initialValue = {
    title_album: "",
    albumcover: "",
    artist: "",
    genre: " ",
    lyrics: "",
    file: "",
    title_song: "",
    duration: "",
  };

  const [values, setValues] = useState(initialValue);
  const [duration, setDuration] = useState();

  const OnChange = (ev) => {
    const { name, value } = ev.target;
    const duration = document.querySelector("#audio").duration;
    setDuration(duration);
    setValues({ ...values, [name]: value });
  };

  const Refresh = () => {
    window.location.reload();
  };

  const OnSubmit = (ev) => {
    setValues((values.duration = duration));
    console.log(values);
    ev.preventDefault();
    Api.post("create/song", values).then((response) => {
      alert(`Adicionado com sucesso!`);
      Refresh();
    });
  };

  return (
    <>
      <Header />
      <Content direction={"normal"}>
        <Column text={"Adicionar"}>
          <Input
            type={"text"}
            name={"title_song"}
            id={"song"}
            placeholder={"Título da música"}
            change={OnChange}
          />
          <Input
            type={"text"}
            name={"artist"}
            id={"artist"}
            placeholder={"Artista"}
            change={OnChange}
          />
          <Input
            type={"url"}
            name={"file"}
            id={"file"}
            change={OnChange}
            placeholder={"Música"}
          />
          <Input
            type={"url"}
            name={"albumcover"}
            id={"albumcover"}
            placeholder={"Capa do álbum"}
            change={OnChange}
          />
          <Input
            type={"text"}
            name={"lyrics"}
            id={"lyrics"}
            placeholder={"Letra"}
            change={OnChange}
          />
          <Input
            type={"text"}
            name={"duration"}
            readOnly={"readOnly"}
            id={"duration"}
            placeholder={"Duração"}
            value={duration}
          />
          <Input
            type={"text"}
            name={"title_album"}
            id={"album"}
            placeholder={"Título do álbum"}
            change={OnChange}
          />
          <Input
            type={"text"}
            name={"genre"}
            id={"genre"}
            change={OnChange}
            placeholder={"Gênero"}
          />
          <Button submit={OnSubmit} text={"Adicionar"} />
        </Column>
        <Albumcover bg={values?.albumcover} lyrics={values?.lyrics} />
      </Content>
      <Controls
        title={values?.title_song}
        music={values?.file}
        artist={values?.artist}
      />
    </>
  );
};
export default Add;
