import axios from "axios";

const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
  url: BASE_URL,
  params: {
    maxResults: "5",
  },
  // headers: {
  //   'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
  //   'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
  // },
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY2,
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

const fetchAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};

export default fetchAPI;
