import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";
import { getDownUrl } from "./TagBox";
import Loader from "./Loader";
import themaSearchDetailSong from "../utils/themaSearchDetailSong.json";

function getTimeStringSeconds(seconds) {
  let hour = 0,
    min = 0,
    sec = 0;
  seconds = seconds.replace("PT", "");

  if (seconds.includes("H")) {
    hour = Number(seconds.slice(0, seconds.indexOf("H")));
    seconds = seconds.slice(seconds.indexOf("H") + 1);
  }

  if (seconds.includes("M")) {
    min = Number(seconds.slice(0, seconds.indexOf("M")));
    seconds = seconds.slice(seconds.indexOf("M") + 1);
  }

  if (seconds.includes("S")) {
    sec = Number(seconds.slice(0, seconds.indexOf("S")));
    seconds = seconds.slice(seconds.indexOf("S") + 1);
  }
  seconds = 3600 * hour + 60 * min + sec;

  hour = parseInt(seconds / 3600);
  min = parseInt((seconds % 3600) / 60);
  sec = seconds % 60;

  if (hour.toString().length == 1) hour = "0" + hour;
  if (min.toString().length == 1) min = "0" + min;
  if (sec.toString().length == 1) sec = "0" + sec;

  if (Number(hour)) {
    return [hour + ":" + min + ":" + sec, seconds];
  } else {
    return [min + ":" + sec, seconds];
  }
}

function ThemaDetailMusic({ detail, index, volume }) {
  const [data, setData] = useState(null);
  const [sec, setSec] = useState(0);
  const [total, setTotal] = useState(null);

  const onClickDown = (e) => {
    e.preventDefault();
    getDownUrl(data.id).then((result) => (window.location.href = result));
  };

  const onClickPlayer = (e) => {
    e.preventDefault();
    const target = e.target.classList[1];
    const iframe = document.querySelectorAll("iframe")[Number(target)];
    iframe.contentWindow.postMessage(
      '{"event":"command","func":"' + "pauseVideo" + '","args":""}',
      "*"
    );
  };

  const onReady = function () {
    document
      .querySelectorAll(".player")
      .forEach((frame) => (frame.style.left = "5px"));
  };

  const onProgress = (e) => {
    setSec((prevState) => (prevState += 1));
  };

  const onPause = (e) => {
    document
      .querySelectorAll(".start")
      [index].setAttribute("src", "../assets/img/start.svg");
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
      [index].setAttribute(
        "src",
        "https://raw.githubusercontent.com/kim-0617/react_music/124c9515d8cc5b4ccbb6d5f432bceb0c9ee82c50/src/assets/img/start.svg"
      );
  };

  useEffect(() => {
    if (data) {
      setTotal(getTimeStringSeconds(data.contentDetails.duration)[1]);
    }

    setSec((prev) => prev++);
    // console.log(getTimeStringSeconds(data.contentDetails.duration)[1]);
  }, [sec, total]);

  useEffect(() => {
    // const config = {
    //   method: "get",
    //   url: `https://youtube-v31.p.rapidapi.com/videos?part=contentDetails,snippet,statistics&id=${detail.snippet.resourceId.videoId}`,
    //   headers: {
    //     "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
    //     "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
    //   },
    // };
    // axios(config)
    //   .then(function (response) {
    //     setData(response.data.items[0]);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });

    const config = {
      method: "get",
      url: `https://youtube-v31.p.rapidapi.com/videos?part=contentDetails,snippet&id=${detail.snippet.resourceId.videoId}`,
      headers: {
        // "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY2,
        "X-RapidAPI-Key": "a1683076ebmsh2576547ca49e7fap19edfbjsnc3ec1e8a9602",
        "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
      },
    };
    const axiosResult = async () => {
      const response = await axios(config);
      return response;
    };
    axiosResult()
      .then((res) => setData(res.data.items[0]))
      .catch((err) =>
        console.log("아 못받아오네", detail.snippet.resourceId.videoId, err)
      );
  }, [detail.id]);

  if (!data) return null;

  return (
    <div className="thema__search__detail__box">
      <img src={data.snippet.thumbnails.medium.url} alt={data.snippet.title} />
      <div className="thema__duration">
        <div className="duration__top">
          <img src="../assets/img/start.svg" alt="start" className="start" />
          <ReactPlayer
            className="player"
            url={`https://www.youtube.com/watch?v=${data.id}`}
            width={50}
            height={50}
            controls
            onProgress={onProgress}
            onPause={onPause}
            onPlay={onPlay}
            onReady={onReady}
            onEnded={onEnded}
            volume={volume / 100}
            style={{ left: "-500px", transition: "6000ms" }}
          />
          <div className="progress">
            <div className="bar" style={{ width: `${(sec / total) * 100}%` }}>
              <div className="bar__btn"></div>
            </div>
          </div>
          <div className="duration__time">
            {getTimeStringSeconds(data.contentDetails.duration)[0]}
          </div>
        </div>

        <div className="duration__bot">
          <p>{data.snippet.title}</p>
          <span>by. {data.snippet.channelTitle}</span>
        </div>
      </div>

      <div className="thema__tags">
        <ul>
          {data?.snippet?.tags?.slice(0, 3).map((tag, index) => (
            <li key={index}>
              <Link to="/"># {tag}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="thema__icon">
        <Link to="/" title="play" className="play" onClick={onClickDown}></Link>
        <Link
          to="/"
          title="stop"
          className={`stop ${index}`}
          onClick={onClickPlayer}
        ></Link>
        <a
          href={`https://www.youtube.com/watch?v=${detail.snippet.resourceId.videoId}`}
          title="youtube"
          className="youtube"
        ></a>
      </div>
    </div>
  );
}

export default ThemaDetailMusic;
