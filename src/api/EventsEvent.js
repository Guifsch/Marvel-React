import axios from "./axios";

export const events = async (offset, searchValue) => {
  if (searchValue.length <= 0) {
    const result = await axios.get(
      `events?ts=thesoer&apikey=c77859ebc96c8d8157fca2180842690a&hash=e8bdcd627f78a8712ee42d85605874b8&offset=${offset}`
    );
    return result;
  } else {
    const result = await axios.get(
      `events?ts=thesoer&apikey=c77859ebc96c8d8157fca2180842690a&hash=e8bdcd627f78a8712ee42d85605874b8&offset=${offset}&nameStartsWith=${searchValue}`
    );
    return result;
  }
};
export const event = async (id) => {
  const result = await axios.get(
    `events/${id}?ts=thesoer&apikey=c77859ebc96c8d8157fca2180842690a&hash=e8bdcd627f78a8712ee42d85605874b8`
  );
  return result;
};
