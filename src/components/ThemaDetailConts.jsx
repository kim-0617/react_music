import React from "react";

const ThemaDetailConts = () => {
  return (
    <div className="thema__search__detail__music">
      <div className="thema__search__detail__box">
        <img src="./assets/img/tag01.png" alt="01" />

        <div className="thema__duration">
          <div className="duration__top">
            <img src="./assets/img/start.svg" alt="start" />
            <div className="progress">
              <div className="bar">
                <div className="bar__btn"></div>
              </div>
            </div>
            <div className="duration__time">3:00</div>
          </div>

          <div className="duration__bot">
            <p>
              햇살속을 걸으며 by. <span>우케</span>
            </p>
          </div>
        </div>

        <div className="thema__tags">
          <ul>
            <li>
              <a href="/">#빠른</a>
            </li>
            <li>
              <a href="/">#경쾌한</a>
            </li>
            <li>
              <a href="/">#신이난</a>
            </li>
            <li>
              <a href="/">#재미있는</a>
            </li>
          </ul>
        </div>

        <div className="thema__icon">
          <i title="play" className="play"></i>
          <i title="stop" className="stop"></i>
          <i title="youtube" className="youtube"></i>
        </div>
      </div>
    </div>
  );
};

export default ThemaDetailConts;
