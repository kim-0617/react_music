import React from "react";
import { SearchBar } from "../components";

const TagSearch = () => {
  return (
    <section id="tag__search">
      <div className="tag__inner container">
        <h2 className="title">태그 검색</h2>

        <div className="tag__search">
          <SearchBar />
          <ul className="tag__list">
            <li>
              <a href="/">
                분위기 <em>+</em>
              </a>
            </li>
            <li className="active">
              <a href="/">
                테마 <em>+</em>
              </a>
            </li>
            <li>
              <a href="/">
                템포 <em>+</em>
              </a>
            </li>
            <li>
              <a href="/">
                음악장르 <em>+</em>
              </a>
            </li>
            <li>
              <a href="/">
                악기 <em>+</em>
              </a>
            </li>
          </ul>
          <ul className="tag__list__detail">
            <li>
              <a href="/">#밝은</a>
            </li>
            <li>
              <a href="/">#경쾌한</a>
            </li>
            <li>
              <a href="/">#상큼한</a>
            </li>
            <li>
              <a href="/">#귀여운</a>
            </li>
            <li>
              <a href="/">#코믹한</a>
            </li>
            <li>
              <a href="/">#로맨틱</a>
            </li>
            <li>
              <a href="/">#희망찬</a>
            </li>
            <li>
              <a href="/">#웅장한</a>
            </li>
            <li>
              <a href="/">#발랄한</a>
            </li>
          </ul>
        </div>

        <div className="search"></div>
        <div className="volume">
          <div className="bar">
            <div className="bar__btn"></div>
          </div>
        </div>

        <div className="tag__music">
          <div className="tag__box">
            <img src="assets/img/tag01.png" alt="01" />

            <div className="tag__duration">
              <div className="duration__top">
                <img src="assets/img/start.svg" alt="start" />
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

            <div className="tag__tags">
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

            <div className="tag__icon">
              <i title="play" className="play"></i>
              <i title="stop" className="stop"></i>
              <i title="youtube" className="youtube"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TagSearch;
