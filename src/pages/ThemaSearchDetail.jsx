import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { ThemaDetailConts } from "../components";
import { DataContext } from "../context/DataContext";
import themaSearchDetail from "../utils/themaSearchDetail.json";

const ThemaSearchDetail = () => {
  const { name } = useParams();
  const query = window.location.search.split("&");
  const src = query[0].replace("?src=", "");
  const title = decodeURI(query[1].replace("%20", " "));

  const [data, setData] = useState(themaSearchDetail.items);
  // useEffect(() => {
  //   const config = {
  //     method: "get",
  //     url: `https://youtube-v31.p.rapidapi.com/playlistItems?playlistId=${name}&part=snippet&maxResults=10`,
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
    <DataContext.Provider value={data}>
      <section id="thema__search__detail">
        <div className="thema__search__detail__top">
          <div className="thema__search__detail__top__inner container">
            <img src={src} alt={name} />
            <h2>
              <p className="main__title">
                MD 추천 테마 <span>BGM</span>
              </p>
              <p className="sub__title">
                <span>{title}</span>
              </p>
            </h2>
          </div>
        </div>
        <div className="thema__search__detail__inner container">
          <div className="volume">
            <div className="bar">
              <div className="bar__btn"></div>
            </div>
          </div>

          <ThemaDetailConts data={data} />
        </div>
      </section>
    </DataContext.Provider>
  );
};

export default ThemaSearchDetail;
