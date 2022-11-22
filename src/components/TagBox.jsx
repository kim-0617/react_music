import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";
import ReactAudioPlayer from "react-audio-player";
import axios from "axios";
import song from "../utils/song.json";

function TagBox({ video, index }) {
  const [info, setInfo] = useState(song);
  const duration = useRef("");
  const videoID = video.snippet.resourceId.videoId;

  const onClickPlayer = (e) => {
    e.preventDefault();
    const target = e.target.classList[1];
    const iframe = document.querySelectorAll("iframe")[target];
    iframe.contentWindow.postMessage(
      '{"event":"command","func":"' + "stopVideo" + '","args":""}',
      "*"
    );
  };

  const onProgress = (e) => {
    let total = document.querySelector(".duration__time").innerText.split(":");
    total = Number(total[0]) * 60 + Number(total[1]);
    document.querySelector(".bar").style.width = "40%";

    console.log("실행");
  };

  // const onClickPlayer = (e) => {
  //   console.log(e.target.value);
  // };

  // useEffect(() => {
  //   let headersList = {
  //     "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY3,
  //     "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  //   };

  //   let reqOptions = {
  //     url: `https://youtube-v31.p.rapidapi.com/videos?part=contentDetails,snippet,statistics&id=${videoID}`,
  //     method: "GET",
  //     headers: headersList,
  //   };

  //   async function fetchResults() {
  //     let response = await axios.request(reqOptions);
  //     setInfo(response);
  //   }
  //   fetchResults();
  // }, []);

  if (!info) return null;
  // console.log("info : ", info, "\n videoID : ", videoID);

  return (
    <div className="tag__box">
      <img src={info.items[0].snippet.thumbnails.medium.url} alt="01" />
      <div className="tag__duration">
        <div className="duration__top">
          <img src="assets/img/start.svg" alt="start" />
          <ReactPlayer
            className="player"
            url={`https://www.youtube.com/watch?v=${videoID}`}
            width={50}
            height={50}
            controls
            onProgress={onProgress}
          />
          {/* ytp-time-current ytp-time-duration */}
          <div className="progress">
            <div className="bar">
              <div className="bar__btn"></div>
            </div>
          </div>
          <div className="duration__time">
            {info.items[0].contentDetails.duration.replace("PT", "").at(-3) ===
            "M"
              ? info.items[0].contentDetails.duration
                  .replace("PT", "")
                  .replace("M", ":0")
                  .replace("S", "")
              : info.items[0].contentDetails.duration
                  .replace("PT", "")
                  .replace("M", ":")
                  .replace("S", "")}
          </div>
        </div>

        <div className="duration__bot">
          <p>
            {info.items[0].snippet.title.slice(6)} &nbsp;
            <span>{info.items[0].snippet.description.split(" ")[0]}</span>
          </p>
        </div>
      </div>
      <div className="tag__tags">
        <ul>
          {info.items[0].snippet.tags.slice(0, 4).map((tag, index) => (
            <li key={tag}>
              <Link to="/">{"#" + tag}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="tag__icon">
        <Link to="/" title="play" className="play"></Link>
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
