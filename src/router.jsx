import Main from "./page/main"
import Player from "./page/player"
import { Routes, Route, BrowserRouter } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/questions" element={<Player/>} />
      </Routes>
    </BrowserRouter>
  );
}