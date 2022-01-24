import axios from "./axios";

export const characters = async (offset, searchValue) => {
  if (searchValue.length <= 0) {
    const result = await axios.get(
      `characters?ts=thesoer&apikey=c77859ebc96c8d8157fca2180842690a&hash=e8bdcd627f78a8712ee42d85605874b8&offset=${offset}`
    );
    return result;
  } else {
    const result = await axios.get(
      `characters?ts=thesoer&apikey=c77859ebc96c8d8157fca2180842690a&hash=e8bdcd627f78a8712ee42d85605874b8&offset=${offset}&nameStartsWith=${searchValue}`
    );
    return result;
  }
};
export const character = async (id) => {
  const result = await axios.get(
    `characters/${id}?ts=thesoer&apikey=c77859ebc96c8d8157fca2180842690a&hash=e8bdcd627f78a8712ee42d85605874b8`
  );
  return result;
};
