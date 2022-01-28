import axios from "./axios";
import { md5Complete } from "./md5";
const publicKey = process.env.REACT_APP_MARVEL_PUBLIC_KEY;
const ts = process.env.REACT_APP_MARVEL_TS;

export const stories = async (offset) => {
  const result = await axios.get(
    `stories?ts=${ts}&apikey=${publicKey}&hash=${md5Complete}&offset=${offset}`
  );
  return result;
};
export const storie = async (id) => {
  const result = await axios.get(
    `stories/${id}?ts=${ts}&apikey=${publicKey}&hash=${md5Complete}`
  );
  return result;
};
