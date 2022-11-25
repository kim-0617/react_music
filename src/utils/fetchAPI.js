import axios from "axios";

const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
  url: BASE_URL,
  params: {
    maxResults: "10",
  },
  // headers: {
  //   'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
  //   'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
  // },
  headers: {
    "X-RapidAPI-Key": "a1683076ebmsh2576547ca49e7fap19edfbjsnc3ec1e8a9602",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

const fetchAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};

export default fetchAPI;
