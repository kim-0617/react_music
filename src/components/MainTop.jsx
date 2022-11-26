import React, { useState, useEffect, useRef } from "react";
import ReactPlayer from "react-player";
import { getDownUrl } from "./TagBox";
import { Link } from "react-router-dom";
import axios from "axios";
import Loader from "./Loader";

const candidate = [
  "버즈",
  "VOS",
  "SG워너비",
  "씨야",
  "가비앤제이",
  "다비치",
]

const MainTop = () => {
  const [video, setVideo] = useState(null);
  const [sec, setSec] = useState(0);
  const [total, setTotal] = useState(null);
  const videoRef = useRef(null);

  const onClickDown = (e) => {
    e.preventDefault();
    getDownUrl(video.id).then((result) => (window.location.href = result));
  };

  const onClickBar = (e) => {
    let progressWidth = e.currentTarget.clientWidth; // 진행바 전체 길이
    let clickedOffsetX = e.nativeEvent.offsetX; // 진행바 기준으로 측정되는 X좌표
    // console.log("click", progressWidth, clickedOffsetX);
    // console.log("click", (clickedOffsetX / progressWidth) * 100);
    e.currentTarget.firstElementChild.style.width = `${(clickedOffsetX / progressWidth) * 100
      }%`;
    setSec(
      (total * parseInt(e.currentTarget.firstElementChild.style.width)) / 100
    );
    forwardHandler(
      (total * parseInt(e.currentTarget.firstElementChild.style.width)) / 100
    );
    videoRef.current.player.isPlaying = true;
  };

  const forwardHandler = (time) => {
    // console.log("ref호출", videoRef.current);
    videoRef.current.seekTo(time);
  };

  useEffect(() => {
    let headersList = {
      // "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
      "X-RapidAPI-Key": "7912914007msh898956536fa7e61p1eabc1jsn965ed895d49f",
      "X-RapidAPI-Host": "youtube-music1.p.rapidapi.com",
      Accept: "*/*",
    };

    let reqOptions = {
      url: `https://youtube-music1.p.rapidapi.com/v2/search?query=${candidate[Math.floor(Math.random() * candidate.length)]}&part=snippet&maxResults=1`,
      method: "GET",
      headers: headersList,
    };

    const fetchResult = async () => {
      let response = await axios.request(reqOptions);
      setVideo(response.data.result.songs[0]);
    };
    fetchResult();
  }, []);

  useEffect(() => {
    setTotal(video?.duration);
    setSec((prev) => prev++);
  }, [sec]);

  const onProgress = (e) => {
    setSec((prevState) => (prevState += 1));
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
  };

  if (!video) return <Loader />;

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
              ref={videoRef}
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
                <li>#가슴아픈</li>
                <li>#우울한</li>
                <li>#희망찬</li>
              </ul>
            </div>
            <div className="main__playBtn">
              <div className="play__btn" onClick={onClickPlayer}>
                <i title="재생" className="play" id="play"></i>
                <i title="stop" className="stop" id="stop"></i>
              </div>
              <div className="progress__box">
                <div className="progress" onClick={onClickBar}>
                  <div
                    className="bar"
                    style={{ width: `${(sec / total) * 100}%` }}
                  >
                    <div className="bar__btn"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="main__icon">
              <Link to="/" onClick={onClickDown}>
                <img src="./assets/img/link_icon.svg" alt="음악바로가기" />
              </Link>
              <Link to="/" onClick={onClickShutDown}>
                <img src="./assets/img/mute_icon.svg" alt="소리끄기" />
              </Link>
              <a
                href={`https://www.youtube.com/watch?v=${video.id}`}
                title="youtube"
                className="youtube"
              >
                <img src="assets/img/youtube_icon.svg" alt="채널로바로가기" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainTop;
