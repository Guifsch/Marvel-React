import axios from "./axios";
import { md5Complete } from "./md5";
const publicKey = process.env.REACT_APP_MARVEL_PUBLIC_KEY;
const ts = process.env.REACT_APP_MARVEL_TS;

export const characters = async (offset, searchValue) => {
  if (searchValue.length <= 0) {
    const result = await axios.get(
      `characters?ts=${ts}&apikey=${publicKey}&hash=${md5Complete}&offset=${offset}`
    );
    return result;
  } else {
    const result = await axios.get(
      `characters?ts=${ts}&apikey=${publicKey}&hash=${md5Complete}&offset=${offset}&nameStartsWith=${searchValue}`
    );
    return result;
  }
};
export const character = async (id) => {
  const result = await axios.get(
    `characters/${id}?ts=${ts}&apikey=${publicKey}&hash=${md5Complete}`
  );
  return result;
};
