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
    "X-RapidAPI-Key": "7912914007msh898956536fa7e61p1eabc1jsn965ed895d49f",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

const fetchAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};

export default fetchAPI;
