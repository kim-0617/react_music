import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";
import Loader from "./Loader";
import { getDownUrl } from "./TagBox";

function getTimeStringSeconds(seconds) {
  let hour, min, sec;

  hour = parseInt(seconds / 3600);
  min = parseInt((seconds % 3600) / 60);
  sec = seconds % 60;

  if (hour.toString().length == 1) hour = "0" + hour;
  if (min.toString().length == 1) min = "0" + min;
  if (sec.toString().length == 1) sec = "0" + sec;

  if (hour == 0) {
    return min + ":" + sec;
  } else {
    return hour + ":" + min + ":" + sec;
  }
}

function TagSearchBox({ keyword, song, index, volume }) {
  const [sec, setSec] = useState(0);
  const [total, setTotal] = useState(1);
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);

  const onClickDown = (e) => {
    e.preventDefault();
    getDownUrl(song.id).then((result) => (window.location.href = result));
  };

  const onReady = function () {
    document
      .querySelectorAll(".player")
      .forEach((frame) => (frame.style.left = "10px"));
  };

  const onClickBar = (e) => {
    let progressWidth = e.currentTarget.clientWidth; // 진행바 전체 길이
    let clickedOffsetX = e.nativeEvent.offsetX; // 진행바 기준으로 측정되는 X좌표
    // console.log(playing, videoRef.current.player.isPlaying)
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
    setPlaying(true);
    videoRef.current.player.isPlaying = true;
  };

  useEffect(() => {
    if (total) {
      setTotal(song.duration);
    }

    setSec((prev) => prev++);
    // console.log(getTimeStringSeconds(data.contentDetails.duration)[1]);
  }, [sec, total]);

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

  const forwardHandler = (time) => {
    // console.log("ref호출", videoRef.current);
    videoRef.current.seekTo(time);
    setPlaying(true);
    videoRef.current.player.isPlaying = true;
  };


  const onPause = (e) => {
    document
      .querySelectorAll(".start")
    [index].setAttribute(
      "src",
      "https://raw.githubusercontent.com/kim-0617/react_music/124c9515d8cc5b4ccbb6d5f432bceb0c9ee82c50/src/assets/img/start.svg"
    );
  };

  const onPlay = (e) => {
    document
      .querySelectorAll(".start")
    [index].setAttribute(
      "src",
      "https://raw.githubusercontent.com/kim-0617/react_music/124c9515d8cc5b4ccbb6d5f432bceb0c9ee82c50/src/assets/img/playing.svg"
    );
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

  // if (!song) return <Loader />;

  return (
    <>
      <div className="tag__box" key={song.id}>
        <img src={song.thumbnail} alt={song.id} />

        <div className="tag__duration">
          <div className="duration__top">
            <img
              src="https://raw.githubusercontent.com/kim-0617/react_music/124c9515d8cc5b4ccbb6d5f432bceb0c9ee82c50/src/assets/img/start.svg"
              alt="start"
              className="start"
            />
            <ReactPlayer
              ref={videoRef}
              className="player"
              url={`https://www.youtube.com/watch?v=${song.id}`}
              width={50}
              height={50}
              controls
              onProgress={onProgress}
              onPause={onPause}
              onPlay={onPlay}
              onReady={onReady}
              volume={volume / 100}
              onEnded={onEnded}
              playing={playing}
              style={{ left: "-500px", transition: "6000ms" }}
            />
            <div className="progress" onClick={onClickBar}>
              <div className="bar" style={{ width: `${(sec / total) * 100}%` }}>
                <div className="bar__btn"></div>
              </div>
            </div>
            <div className="duration__time">
              {getTimeStringSeconds(song.duration)}
            </div>
          </div>

          <div className="duration__bot">
            <p>
              {song.title} by. <span>{song.artists[0].name}</span>
            </p>
          </div>
        </div>

        <div className="tag__tags">
          <ul>
            <li>
              <Link to={`/tagSearch/${keyword}`}># {keyword}</Link>
            </li>
          </ul>
        </div>

        <div className="tag__icon">
          <Link
            to="/"
            title="play"
            className="play"
            onClick={onClickDown}
          ></Link>
          <Link
            to="/"
            title="stop"
            className={`stop ${index}`}
            onClick={onClickPlayer}
          ></Link>
          <a
            href={`https://www.youtube.com/watch?v=${song.id}`}
            title="youtube"
            className="youtube"
          ></a>
        </div>
      </div>
    </>
  );
}

export default TagSearchBox;
