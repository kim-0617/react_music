import React from "react";
import ReactPlayer from "react-player";
import { ViewSlider } from "../components";

const ArtistView = () => {
  return (
    <section id="artist__view">
      <div className="artist__inner container">
        <h2 className="title">아티스트 검색</h2>
        <div className="artist__play">
          <h3>소녀시대</h3>
          <div className="view__cont">
            <div className="cont__main">
              <ReactPlayer />
              <div className="view__desc">
                <em>
                  <p className="view__title">
                    Girls' Generation 소녀시대 'FOREVER 1' MV
                  </p>
                  <p className="view__channel">SMTOWN</p>
                </em>
              </div>
            </div>
            <div className="cont__sub">
              <ViewSlider />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArtistView;
