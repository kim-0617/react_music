import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import fetchAPI from "../utils/fetchAPI";
import axios from "axios";

const MainTop = () => {
  const [video, setVideo] = useState(null);
  const [sec, setSec] = useState(0);
  const [total, setTotal] = useState(null);

  useEffect(() => {
    let headersList = {
      "X-RapidAPI-Key": "7912914007msh898956536fa7e61p1eabc1jsn965ed895d49f",
      "X-RapidAPI-Host": "youtube-music1.p.rapidapi.com",
      "Accept": "*/*"
    }

    let reqOptions = {
      url: "https://youtube-music1.p.rapidapi.com/v2/search?query=버즈&part=snippet&maxResults=1",
      method: "GET",
      headers: headersList,
    }

    const fetchResult = async () => {
      let response = await axios.request(reqOptions);
      setVideo(response.data.result.songs[0]);
    }
    fetchResult();
  }, []);

  useEffect(() => {
    setTotal(video?.duration);
    setSec((prev) => prev++);
  }, [sec]);

  const onProgress = (e) => {
    setSec((prevState) => prevState += 1);
  };

  const onClickShutDown = (e) => {
    e.preventDefault();
    const iframe = document.querySelectorAll("iframe")[0];
    iframe.contentWindow.postMessage(
      '{"event":"command","func":"' + "pauseVideo" + '","args":""}',
      "*"
    );
  };
  const onClickPlayer = (e) => {

    e.preventDefault();
    const iframe = document.querySelector("iframe");
    iframe.contentWindow.postMessage(
      '{"event":"command","func":"' + "playVideo" + '","args":""}',
      "*"
    );
  }

  if (!video) return null;
  return (
    <section id="youtube__recom">
      <div className="container">
        <h2 className="main__title">
          <em>MUSIC</em> PLAYING
        </h2>
        <p className="main__sub">
          <em>MUSIC PLAYING</em>에서 자유롭게 추천해드려요!
        </p>
        <div className="main__youtube__music">
          <div className="player__left">
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${video.id}`}
              width={700}
              height={400}
              controls
              onProgress={onProgress}
            />
          </div>
          <div className="player__right">
            <p className="you__title">
              <img src="assets/img/song_icon.svg" alt="음악 아이콘" />
              Random BGM
            </p>
            <h3>{video.title}</h3>
            <em>by. {video.artists[0].name}</em>
            <div className="main__tag">
              <ul>
                <li>#청량한</li>
                <li>#경쾌한</li>
                <li>#희망찬</li>
              </ul>
            </div>
            <div className="main__playBtn">
              <div className="play__btn" onClick={onClickPlayer}>
                <i title="재생" className="play" id="play"></i>
                <i title="stop" className="stop" id="stop"></i>
              </div>
              <div className="progress__box">
                <div className="progress">
                  <div className="bar" style={{ width: `${(sec / total) * 100}%` }}>
                    <div className="bar__btn"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="main__icon">
              <a href="/" >
                <img src="./assets/img/link_icon.svg" alt="음악바로가기" />
              </a>
              <a href="/" onClick={onClickShutDown}>
                <img src="./assets/img/mute_icon.svg" alt="소리끄기" />
              </a>
              <a
                href={`https://www.youtube.com/watch?v=${video.id}`}
                title="youtube"
                className="youtube"
              ><img src="assets/img/youtube_icon.svg" alt="채널로바로가기" /></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainTop;
