import React from "react";
import { Link } from "react-router-dom";

function ArtistSlider({ data }) {
  return (
    <>
      <Link to={`/artistSearch/${data}`}>
        <img src={`../assets/img/singer/${data}.jpg`} alt={data} />
        <p className="slider__title">{data}</p>
      </Link>
    </>
  );
}

export default ArtistSlider;
