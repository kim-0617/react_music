import React from "react";
import { Link } from "react-router-dom";

const VideoConts = ({ video, name }) => {
  return (
    <>
      <div className="artist__pop">
        <Link to={`/artistView/${video.id}`}>
          <img src={video.thumbnail} alt={video.name} />
          <div className="artist__desc">
            <p className="tit">{video.title}</p>
            <p className="art">{name}</p>
          </div>
        </Link>
      </div>
    </>
  );
};

const ArtistConts = ({ videos, name }) => {
  return (
    <div className="artist__cont">
      <h3>{name}</h3>
      <div className="artist__result">
        {videos.map((video, index) => (
          <VideoConts key={video.id} video={video} name={name} />
        ))}
      </div>
    </div>
  );
};

export default ArtistConts;
