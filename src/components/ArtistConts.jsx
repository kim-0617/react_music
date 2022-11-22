import React from "react";

const ArtistConts = () => {
  return (
    <div className="artist__cont">
      <h3>BLACKPINK</h3>
      <div className="artist__result">
        <div className="artist__pop">
          <a href="/artistView">
            <img src="assets/img/artist.jpg" alt="마지막처럼" />
            <div className="artist__desc">
              <p className="tit">마지막처럼</p>
              <p className="art">BLACKPINK</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ArtistConts;
