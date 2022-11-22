import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";
import axios from "axios";

function TagBox({ video, index }) {
  const [info, setInfo] = useState(null);
  const [sec, setSec] = useState(0);
  const [total, setTotal] = useState(null);
  const videoID = video.snippet.resourceId.videoId;

  const onClickPlayer = (e) => {
    e.preventDefault();
    const target = e.target.classList[1];
    const iframe = document.querySelectorAll("iframe")[Number(target) + 1];
    iframe.contentWindow.postMessage(
      '{"event":"command","func":"' + "pauseVideo" + '","args":""}',
      "*"
    );
  };

  const onProgress = (e) => {
    setSec((prevState) => prevState += 1);
  };

  useEffect(() => {
    let total = document.querySelectorAll(".duration__time")[index]?.innerText.split(":");
    if (total) {
      setTotal(Number(total[0]) * 60 + Number(total[1]));
    }
    setSec((prev) => prev++);
  }, [sec]);

  useEffect(() => {
    if (!videoID) return;
    const myHeaders = new Headers();
    myHeaders.append("X-RapidAPI-Key", "45464e034emsh06e4b4a562fb65ep146392jsn535eb2dff4cc");
    myHeaders.append("X-RapidAPI-Host", 'youtube-v31.p.rapidapi.com');

    const requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };
    fetch(`https://youtube-v31.p.rapidapi.com/videos?part=contentDetails,snippet&id=${videoID}`, requestOptions)
      .then(response => response.json())
      .then(result => setInfo(result?.items[0]))
      .catch(error => console.log('error', error));
  }, [videoID]);

  console.log(info)
  if (!info?.snippet) return <div>Loading...</div>;

  return (
    <div className={`tag__box show`}>
      <img src={info?.snippet.thumbnails.medium.url} alt="01" />
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

          <div className="progress">
            <div className="bar" style={{ width: `${(sec / total) * 100}%` }}>
              <div className="bar__btn"></div>
            </div>
          </div>
          <div className="duration__time">
            {info?.contentDetails.duration.replace("PT", "").at(-3) ===
              "M"
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
          <p>
            {info.snippet.title.slice(6)} &nbsp;
            <span>{info?.snippet.description.split(" ")[0]}</span>
          </p>
        </div>
      </div>
      <div className="tag__tags">
        <ul>
          {info?.snippet?.tags?.slice(0, 4).map((tag, index) => (
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
