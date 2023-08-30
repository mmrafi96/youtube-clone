import axios from "axios";

const BASE_URL = "https://youtube-v3-alternative.p.rapidapi.com";
const options = {
  params: {
    geo: "IN",
    lang: "en",
  },
  headers: {
    "X-RapidAPI-Key": "7483bb90abmsha0ed758e0f36307p1b227ejsn5b7fb4cfbaca",
    "X-RapidAPI-Host": "youtube-v3-alternative.p.rapidapi.com'",
  },
};

export const fetchDataFromApi = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
};
