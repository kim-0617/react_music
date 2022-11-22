import React from "react";
import { ThemaDetailConts } from "../components";

const ThemaSearchDetail = () => {
  return (
    <section id="thema__search__detail">
      <div className="thema__search__detail__top">
        <div className="thema__search__detail__top__inner container">
          <img src="./assets/img/card/b01.png" alt="b01" />
          <h2>
            <p className="main__title">
              MD 추천 테마 <span>BGM</span>
            </p>
            <p className="sub__title">
              <span>#즐거운</span> BGM 모음
            </p>
          </h2>
        </div>
      </div>
      <div className="thema__search__detail__inner container">
        <div className="volume">
          <div className="bar">
            <div className="bar__btn"></div>
          </div>
        </div>

        <ThemaDetailConts />
      </div>
    </section>
  );
};

export default ThemaSearchDetail;
