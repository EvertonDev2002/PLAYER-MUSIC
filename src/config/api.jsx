import axios from "axios";
const instance = axios.create({
  baseURL: "https://ex-player.herokuapp.com",
  headers: { "Content-Type": "application/json", Accept: "application/json" },
});
export default instance;
/*  */