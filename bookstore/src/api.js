import axios from "axios";

export function fetchBookByKey(key) {
  return axios.get(`https://openlibrary.org/works/${key}.json`).then((data) => {
    return data;
  });
}
