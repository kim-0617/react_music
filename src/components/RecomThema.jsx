import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import themaSearch from "../utils/themaSearch.json";

function RecomThema({ id }) {
  const [data, setData] = useState(themaSearch);

  //   useEffect(() => {
  //     const options = {
  //       method: "GET",
  //       url: "https://youtube-v31.p.rapidapi.com/playlists",
  //       params: {
  //         id: id,
  //         part: "snippet",
  //       },
  //       headers: {
  //         "X-RapidAPI-Key": "a1683076ebmsh2576547ca49e7fap19edfbjsnc3ec1e8a9602",
  //         "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  //       },
  //     };

  //     axios
  //       .request(options)
  //       .then(function (response) {
  //         setData(response.data);
  //       })
  //       .catch(function (error) {
  //         console.error(error);
  //       });
  //   }, []);

  return (
    <figure className="play">
      <a href={`https://www.youtube.com/playlist?list=${id}`}>
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
      </a>
    </figure>
  );
}

export default RecomThema;
