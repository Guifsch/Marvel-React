import axios from "./axios";

export const stories = async (offset) => {
  const result = await axios.get(
    `stories?ts=thesoer&apikey=c77859ebc96c8d8157fca2180842690a&hash=e8bdcd627f78a8712ee42d85605874b8&offset=${offset}`
  );
  return result;
};
export const storie = async (id) => {
  const result = await axios.get(
    `stories/${id}?ts=thesoer&apikey=c77859ebc96c8d8157fca2180842690a&hash=e8bdcd627f78a8712ee42d85605874b8`
  );
  return result;
};
