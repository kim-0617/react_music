import React from "react";
import ReactPlayer from "react-player";

const MainTop = () => {
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
            <ReactPlayer />
          </div>
          <div className="player__right">
            <p className="you__title">
              <img src="assets/img/song_icon.svg" alt="음악 아이콘" />
              Random BGM
            </p>
            <h3>발걸음</h3>
            <em>by. 브금master</em>
            <div className="main__tag">
              <ul>
                <li>#청량한</li>
                <li>#경쾌한</li>
                <li>#희망찬</li>
                <li>#몽환적인</li>
                <li>#귀여운</li>
                <li>#귀여운</li>
                <li>#발랄한</li>
              </ul>
            </div>
            <div className="main__playBtn">
              <div className="play__btn">
                <i title="재생" className="play" id="play"></i>
                <i title="stop" className="stop" id="stop"></i>
              </div>
              <div className="progress__box">
                <div className="progress">
                  <div className="bar">
                    <div className="bar__btn"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="main__icon">
              <a href="/">
                <img src="./assets/img/link_icon.svg" alt="음악바로가기" />
              </a>
              <a href="/">
                <img src="./assets/img/mute_icon.svg" alt="소리끄기" />
              </a>
              <a href="/">
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
