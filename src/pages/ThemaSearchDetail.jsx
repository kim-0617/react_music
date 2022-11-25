import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Loader, ThemaDetailConts } from "../components";
import themaSearchDetail from "../utils/themaSearchDetail.json";

const ThemaSearchDetail = () => {
  const { name } = useParams();
  const query = window.location.search.split("&");
  const src = query[0].replace("?src=", "");
  const title = decodeURI(query[1].replace("%20", " "));
  const [data, setData] = useState(null);
  const [volume, setVolume] = useState(50);

  useEffect(() => {
    const config = {
      method: "get",
      url: `https://youtube-v31.p.rapidapi.com/playlistItems?playlistId=${name}&part=snippet`,
      headers: {
        "X-RapidAPI-Key": "7912914007msh898956536fa7e61p1eabc1jsn965ed895d49f",
        // "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
        "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
      },
    };
    axios(config)
      .then(function (response) {
        setData(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const onClickVolume = (e) => {
    let progressWidth = e.currentTarget.clientWidth; // 진행바 전체 길이
    let clickedOffsetX = e.clientX - 135; // 진행바 기준으로 측정되는 X좌표

    setVolume((clickedOffsetX / progressWidth) * 100);
  };

  if (!data) return <Loader />;

  return (
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
        <div className="volume" onClick={onClickVolume}>
          <div className="bar" style={{ width: `${volume}%` }}>
            <div className="bar__btn"></div>
          </div>
        </div>

        <ThemaDetailConts data={data} volume={volume} />
      </div>
    </section>
  );
};

export default ThemaSearchDetail;
