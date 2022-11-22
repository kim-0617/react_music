import React from "react";
import { Link } from "react-router-dom";

const ThemaSearchConts = () => {
  return (
    <div className="bgm__inner">
      <figure className="bgm">
        <Link to="/themaSearchDetail">
          <img src="./assets/img/card/b01.png" alt="b01" />
          <figcaption>
            <p className="bgm__title">
              일상에 지친 당신을 위한 노래 즐거운 노래 모음
            </p>
            <p className="bgm__tag">BGM</p>
          </figcaption>
        </Link>
      </figure>

      <figure className="bgm">
        <Link to="/themaSearchDetail">
          <img src="./assets/img/card/b02.png" alt="b02" />
          <figcaption>
            <p className="bgm__title">
              기분이 편안해지는 귀여운 음악 모음(1시간)
            </p>
            <p className="bgm__tag">오늘의 일기</p>
          </figcaption>
        </Link>
      </figure>

      <figure className="bgm">
        <Link to="/themaSearchDetail">
          <img src="./assets/img/card/b03.png" alt="b03" />
          <figcaption>
            <p className="bgm__title">
              뉴에이지 피아노 힐링 음악 모음 | 공부, 작업 휴식...
            </p>
            <p className="bgm__tag">DUGGY MUSIC</p>
          </figcaption>
        </Link>
      </figure>
    </div>
  );
};

export default ThemaSearchConts;
