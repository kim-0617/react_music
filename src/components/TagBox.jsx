import React from "react";
import { Link } from "react-router-dom";

function TagBox({ bgm, index }) {
  if (index === 0) return null;
  const tags = bgm.tags.split("#").filter((x) => x !== "");
  return (
    <div className="tag__box">
      <img src={bgm.img} alt="01" />

      <div className="tag__duration">
        <div className="duration__top">
          <img src="assets/img/start.svg" alt="start" />
          <div className="progress">
            <div className="bar">
              <div className="bar__btn"></div>
            </div>
          </div>
          <div className="duration__time">{bgm.time}</div>
        </div>

        <div className="duration__bot">
          <p>
            {bgm.title} &nbsp;
            <span>{bgm.musition}</span>
          </p>
        </div>
      </div>

      <div className="tag__tags">
        <ul>
          {tags.map((tag, idx) => (
            <li key={tag + idx}>
              <Link to="/">{`#${tag}`}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="tag__icon">
        <Link to="/" title="play" className="play"></Link>
        <Link to="/" title="stop" className="stop"></Link>
        <Link to="/" title="youtube" className="youtube"></Link>
      </div>
    </div>
  );
}

export default TagBox;
