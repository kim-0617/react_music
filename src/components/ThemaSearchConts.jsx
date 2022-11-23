import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import themaSearchConts from "../utils/themaSearchConts.json";

const ThemaSearchConts = ({ list }) => {
  const [data, setData] = useState(themaSearchConts);

  // useEffect(() => {
  //   const config = {
  //     method: "get",
  //     url: `https://youtube-v31.p.rapidapi.com/playlists?id=${list}&part=snippet`,
  //     headers: {
  //       "X-RapidAPI-Key": "a1683076ebmsh2576547ca49e7fap19edfbjsnc3ec1e8a9602",
  //       "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  //     },
  //   };

  //   axios(config)
  //     .then(function (response) {
  //       setData(response.data);
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // }, []);

  return (
    <>
      <figure className="bgm">
        <Link
          to={`/themaSearch/${list}?src=${data.items[0].snippet.thumbnails.maxres.url}&${data.items[0].snippet.localized.title}`}
        >
          <img
            src={data.items[0].snippet.thumbnails.maxres.url}
            alt={data.items[0].snippet.localized.title}
          />
          <figcaption>
            <p className="bgm__title">
              {data.items[0].snippet.localized.title}
            </p>
            <p className="bgm__tag">{data.items[0].snippet.channelTitle}</p>
          </figcaption>
        </Link>
      </figure>
    </>
  );
};

export default ThemaSearchConts;
