import axios from "./axios";
import { md5Complete } from "./md5";
const publicKey = process.env.REACT_APP_MARVEL_PUBLIC_KEY;
const ts = process.env.REACT_APP_MARVEL_TS;

export const creators = async (offset, searchValue) => {
  if (searchValue.length <= 0) {
    const result = await axios.get(
      `creators?ts=${ts}&apikey=${publicKey}&hash=${md5Complete}&offset=${offset}`
    );
    return result;
  } else {
    const result = await axios.get(
      `creators?ts=${ts}&apikey=${publicKey}&hash=${md5Complete}&offset=${offset}&nameStartsWith=${searchValue}`
    );
    return result;
  }
};
export const creator = async (id) => {
  const result = await axios.get(
    `creators/${id}?ts=${ts}&apikey=${publicKey}&hash=${md5Complete}`
  );
  return result;
};
