import Add from "./page/add";
import Main from "./page/main";
import Player from "./page/player";
import { Routes, Route, BrowserRouter } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/player" element={<Player />} />
        <Route path="/add" element={<Add />} />
      </Routes>
    </BrowserRouter>
  );
}
