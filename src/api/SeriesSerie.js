import axios from "./axios";
import { md5Complete } from "./md5";
const publicKey = process.env.REACT_APP_MARVEL_PUBLIC_KEY;
const ts = process.env.REACT_APP_MARVEL_TS;

export const series = async (offset, searchValue) => {
  if (searchValue.length <= 0) {
    const result = await axios.get(
      `series?ts=${ts}&apikey=${publicKey}&hash=${md5Complete}&offset=${offset}`
    );
    return result;
  } else {
    const result = await axios.get(
      `series?ts=${ts}&apikey=${publicKey}&hash=${md5Complete}&offset=${offset}&titleStartsWith=${searchValue}`
    );
    return result;
  }
};
export const serie = async (id) => {
  const result = await axios.get(
    `series/${id}?ts=${ts}&apikey=${publicKey}&hash=${md5Complete}`
  );
  return result;
};
