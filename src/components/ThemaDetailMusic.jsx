import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";
import themaSearchDetailSong from "../utils/themaSearchDetailSong.json";

function getTimeStringSeconds(seconds) {
  let hour, min, sec;
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
  return [hour + ":" + min + ":" + sec, seconds];
}

function ThemaDetailMusic({ detail, index }) {
  // console.log(detail);
  const [data, setData] = useState();
  const [sec, setSec] = useState(0);
  const [total, setTotal] = useState(1);

  const onClickPlayer = (e) => {
    e.preventDefault();
    const target = e.target.classList[1];
    const iframe = document.querySelectorAll("iframe")[Number(target)];
    iframe.contentWindow.postMessage(
      '{"event":"command","func":"' + "pauseVideo" + '","args":""}',
      "*"
    );
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

  useEffect(() => {
    if (total) {
      setTotal(getTimeStringSeconds(data.contentDetails.duration)[1]);
    }

    setSec((prev) => prev++);
    // console.log(getTimeStringSeconds(data.contentDetails.duration)[1]);
  }, [sec, total]);

  useEffect(() => {
    const config = {
      method: "get",
      url: `https://youtube-v31.p.rapidapi.com/videos?part=contentDetails,snippet,statistics&id=${detail.snippet.resourceId.videoId}`,
      headers: {
        "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY3,
        "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
      },
    };

    axios(config)
      .then(function (response) {
        setData(response.data.items[0]);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

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
          {data.snippet.tags.slice(0, 3).map((tag, index) => (
            <li key={index}>
              <Link to="/"># {tag}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="thema__icon">
        <Link to="/" title="play" className="play"></Link>
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
