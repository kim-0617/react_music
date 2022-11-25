import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Loader, ViewSlider } from "../components";
import { UrlContext } from "../context/UrlContext";
import artistDetail from "../utils/artistDetail.json";

const ArtistView = () => {
  const { name } = useParams();
  const [detail, setDetail] = useState(null);
  const [songs, setSongs] = useState(null);
  const [url, setUrl] = useState(
    `https://www.youtube.com/watch?v=${window.location.search.replace(
      "?&id=",
      ""
    )}`
  );
  const [text, setText] = useState("");

  useEffect(() => {
    document
      .querySelectorAll(".header__right li")[0]
      .querySelector("a")
      .classList.remove("active");

    document
      .querySelectorAll(".header__right li")[1]
      .querySelector("a")
      .classList.remove("active");

    document
      .querySelectorAll(".header__right li")[2]
      .querySelector("a")
      .classList.add("active");

    const config = {
      method: "get",
      url: `https://youtube-music1.p.rapidapi.com/v2/get_album?album_id=${name}`,
      headers: {
        "X-RapidAPI-Key": "7912914007msh898956536fa7e61p1eabc1jsn965ed895d49f",
        // "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
        "X-RapidAPI-Host": "youtube-music1.p.rapidapi.com",
      },
    };

    axios(config)
      .then(function (response) {
        setDetail(response.data.result);
        setText(
          `${response.data.result.title} - ${response.data.result.artists[0].name}`
        );
        setSongs(response.data.result.songs.slice(0, 5));
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [name]);

  if (!detail || !songs) return <Loader />;
  // console.log(songs, songs?.length);

  return (
    <UrlContext.Provider value={{ setUrl, setText }}>
      <section id="artist__view">
        <div className="artist__inner container">
          <h2 className="title">아티스트 검색</h2>
          <div className="artist__play">
            <h3>{detail.artists[0].name}</h3>
            <div className="view__cont">
              <div className="cont__main">
                <ReactPlayer url={url} width={"100%"} height={600} controls />
                <div className="view__desc">
                  <em>
                    <p className="view__title">{text}</p>
                    <p className="view__channel">관련 영상</p>
                  </em>
                </div>
              </div>
              <div className="cont__sub">
                <ViewSlider
                  songs={songs}
                  id={window.location.search.replace("?&id=", "")}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </UrlContext.Provider>
  );
};

export default ArtistView;
