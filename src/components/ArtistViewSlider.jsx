import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function ArtistViewSlider({ data }) {
  const [img, setImg] = useState(null);

  useEffect(() => {
    const config = {
      method: "get",
      url: `https://youtube-v31.p.rapidapi.com/videos?part=snippet&id=${data.id}`,
      headers: {
        "X-RapidAPI-Key": "a1683076ebmsh2576547ca49e7fap19edfbjsnc3ec1e8a9602",
        "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
      },
    };

    axios(config)
      .then(function (response) {
        setImg(response.data.items[0].snippet.thumbnails.high.url);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [data.id]);

  if (!img) return <div>Loading...</div>;
  return (
    <>
      <Link to={`/artistView/${data.id}`}>
        <img src={img} alt={data.id} />
        <em>{data.name}</em>
      </Link>
    </>
  );
}

export default ArtistViewSlider;
