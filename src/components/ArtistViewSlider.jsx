import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Loader } from ".";
import { UrlContext } from "../context/UrlContext";

function ArtistViewSlider({ data, id }) {
  const [img, setImg] = useState(null);
  const [etc, setEtc] = useState(null);
  const { setUrl, setText } = useContext(UrlContext);

  const SwitchPlayer = (e) => {
    e.preventDefault();
    setUrl(`https://www.youtube.com/watch?v=${data.id}`);
    setText(data.name);
  };

  useEffect(() => {
    const config = {
      method: "get",
      url: `https://youtube-v31.p.rapidapi.com/videos?part=snippet&id=${data.id}`,
      headers: {
        // "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY3,
        "X-RapidAPI-Key": "a1683076ebmsh2576547ca49e7fap19edfbjsnc3ec1e8a9602",
        "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
      },
    };

    axios(config)
      .then(function (response) {
        setImg(response.data.items[0].snippet.thumbnails.high.url);
        setEtc(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [data.id]);

  if (!img) return <Loader />;

  return (
    <>
      <Link to={`/`} onClick={SwitchPlayer}>
        <img src={img} alt={data.id} />
        <em>{data.name}</em>
      </Link>
    </>
  );
}

export default ArtistViewSlider;
