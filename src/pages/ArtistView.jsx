import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { useParams } from "react-router-dom";
import axios from "axios";
import { ViewSlider } from "../components";
import artistDetail from "../utils/artistDetail.json";

const ArtistView = () => {
  const { name } = useParams();
  const [detail, setDetail] = useState(artistDetail.result);

  // useEffect(() => {
  //   var config = {
  //     method: "get",
  //     url: `https://youtube-music1.p.rapidapi.com/v2/get_album?album_id=${name}`,
  //     headers: {
  //       "X-RapidAPI-Key": "a1683076ebmsh2576547ca49e7fap19edfbjsnc3ec1e8a9602",
  //       "X-RapidAPI-Host": "youtube-music1.p.rapidapi.com",
  //     },
  //   };

  //   axios(config)
  //     .then(function (response) {
  //       setDetail(JSON.stringify(response.data));
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // }, [name]);

  return (
    <section id="artist__view">
      <div className="artist__inner container">
        <h2 className="title">아티스트 검색</h2>
        <div className="artist__play">
          <h3>{detail.artists[0].name}</h3>
          <div className="view__cont">
            <div className="cont__main">
              <ReactPlayer
                url={`https://www.youtube.com/watch?v=${name}`}
                width={"100%"}
                height={600}
                controls
              />
              <div className="view__desc">
                <em>
                  <p className="view__title">{`${detail.title} - ${detail.artists[0].name}`}</p>
                  <p className="view__channel">관련 영상</p>
                </em>
              </div>
            </div>
            <div className="cont__sub">
              <ViewSlider songs={detail.songs} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArtistView;
