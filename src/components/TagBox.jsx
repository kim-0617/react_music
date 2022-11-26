import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";
import axios from "axios";
import Loader from "./Loader";
import song from "../utils/song.json";

export async function getDownUrl(videoID) {
  const config = {
    method: "get",
    url: `https://youtube-music1.p.rapidapi.com/get_download_url?id=${videoID}&ext=mp3`,
    headers: {
      "X-RapidAPI-Key": "45464e034emsh06e4b4a562fb65ep146392jsn535eb2dff4cc",
      "X-RapidAPI-Host": "youtube-music1.p.rapidapi.com",
    },
  };

  const response = await axios(config);
  return response.data.result.download_url;
}

function TagBox({ video, index }) {
  const [info, setInfo] = useState(song.items[0]);
  const [sec, setSec] = useState(0);
  const [total, setTotal] = useState(null);
  const videoRef = useRef(null);
  const videoID = video.snippet.resourceId.videoId;

  const onClickDown = (e) => {
    e.preventDefault();
    getDownUrl(videoID).then((result) => (window.location.href = result));
  };

  const onClickPlayer = (e) => {
    e.preventDefault();
    const target = e.target.classList[1];
    const iframe = document.querySelectorAll("iframe")[Number(target) + 1];
    iframe.contentWindow.postMessage(
      '{"event":"command","func":"' + "pauseVideo" + '","args":""}',
      "*"
    );
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

  const onReady = function () {
    document
      .querySelectorAll(".player")
      .forEach((frame) => (frame.style.left = "8px"));
  };

  const forwardHandler = (time) => {
    // console.log("ref호출", videoRef.current);
    videoRef.current.seekTo(time);
  };

  const onProgress = (e) => {
    setSec((prevState) => parseInt((prevState += 1)));
  };

  const onPlay = (e) => {
    document
      .querySelectorAll(".start")
    [index].setAttribute("src", "../assets/img/playing.svg");
  };

  const onEnded = (e) => {
    setSec(0);
    document
      .querySelectorAll(".start")
    [index].setAttribute("src", "../assets/img/start.svg");
  };

  const onPause = (e) => {
    document
      .querySelectorAll(".start")
    [index].setAttribute("src", "../assets/img/start.svg");
  };

  useEffect(() => {
    let total = document
      .querySelectorAll(".duration__time")
    [index]?.innerText.split(":");
    if (total) {
      setTotal(Number(total[0]) * 60 + Number(total[1]));
    }
    setSec((prev) => prev++);
  }, [sec]);

  useEffect(() => {
    if (!videoID) return;
    const config = {
      method: "get",
      url: `https://youtube-v31.p.rapidapi.com/videos?part=contentDetails,snippet&id=${videoID}`,
      headers: {
        // "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY3,
        "X-RapidAPI-Key": "99537b4135msh872cdd3d69a7615p12863djsn27ae508efff7",
        "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
      },
    };
    const fectchResult = async () => {
      const response = await axios(config);
      setInfo(response.data.items[0]);
    };
    fectchResult();
  }, [videoID]);

  if (!info?.snippet) return <Loader />;

  return (
    <div className={`tag__box show`}>
      <img src={info?.snippet.thumbnails.medium.url} alt="01" />
      <div className="tag__duration">
        <div className="duration__top">
          <img src="assets/img/start.svg" alt="start" className="start" />
          <ReactPlayer
            ref={videoRef}
            className="player"
            url={`https://www.youtube.com/watch?v=${videoID}`}
            width={50}
            height={50}
            controls
            onProgress={onProgress}
            onPlay={onPlay}
            onPause={onPause}
            onReady={onReady}
            onEnded={onEnded}
            style={{ left: "-500px", transition: "6000ms" }}
          />

          <div className="progress" onClick={onClickBar}>
            <div className="bar" style={{ width: `${(sec / total) * 100}%` }}>
              <div className="bar__btn"></div>
            </div>
          </div>
          <div className="duration__time">
            {info?.contentDetails.duration.replace("PT", "").at(-3) === "M"
              ? info?.contentDetails.duration
                .replace("PT", "")
                .replace("M", ":0")
                .replace("S", "")
              : info?.contentDetails.duration
                .replace("PT", "")
                .replace("M", ":")
                .replace("S", "")}
          </div>
        </div>

        <div className="duration__bot">
          <p className="title">{info.snippet.title}</p>
          <span className="desc">{info?.snippet.description}</span>
        </div>
      </div>
      <div className="tag__tags">
        <ul>
          {info?.snippet?.tags?.slice(0, 4).map((tag, index) => (
            <li key={tag}>
              <Link to={`/tagSearch/분위기/${tag}`}>{"#" + tag}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="tag__icon">
        <Link to="/" title="play" className="play" onClick={onClickDown}></Link>
        <Link
          to="/"
          title="stop"
          className={`stop ${index}`}
          onClick={onClickPlayer}
        ></Link>
        <a
          href={`https://www.youtube.com/watch?v=${videoID}`}
          title="youtube"
          className="youtube"
        ></a>
      </div>
    </div>
  );
}

export default TagBox;
