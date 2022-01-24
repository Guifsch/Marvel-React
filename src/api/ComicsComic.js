import axios from "./axios";

export const comics = async (offset, searchValue) => {
  if (searchValue.length <= 0) {
    const result = await axios.get(
      `comics?ts=thesoer&apikey=c77859ebc96c8d8157fca2180842690a&hash=e8bdcd627f78a8712ee42d85605874b8&offset=${offset}`
    );
    return result;
  } else {
    const result = await axios.get(
      `comics?ts=thesoer&apikey=c77859ebc96c8d8157fca2180842690a&hash=e8bdcd627f78a8712ee42d85605874b8&offset=${offset}&titleStartsWith=${searchValue}`
    );
    return result;
  }
};
export const comic = async (id) => {
  const result = await axios.get(
    `comics/${id}?ts=thesoer&apikey=c77859ebc96c8d8157fca2180842690a&hash=e8bdcd627f78a8712ee42d85605874b8`
  );
  return result;
};
