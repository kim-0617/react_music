import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import themaSearch from "../utils/themaSearch.json";
import Loader from "./Loader";

function RecomThema({ id }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://youtube-v31.p.rapidapi.com/playlists",
      params: {
        id: id,
        part: "snippet",
      },
      headers: {
        "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY1,
        "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        setData(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  if (!data) return <Loader />;
  console.log(data);

  return (
    <figure className="play">
      <Link
        to={`/themaSearch/${id}?src=${data.items[0].snippet.thumbnails.high.url}&${data.items[0].snippet.localized.title}`}
      >
        <img
          src={data.items[0].snippet.thumbnails.medium.url}
          alt={`playlist - ${data.items[0].id}`}
        />
        <figcaption>
          <p className="play__title">
            {data.items[0].snippet.localized.description}
          </p>
          <p className="play__tag">{data.items[0].snippet.localized.title}</p>
        </figcaption>
      </Link>
    </figure>
  );
}

export default RecomThema;
