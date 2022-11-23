import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ArtistSlider({ data }) {
  const [img, setImg] = useState(null);

  // 이미지 불러오는 코드 추가
  useEffect(() => {}, []);

  return (
    <>
      <Link to={`/artistSearch/${data}`}>
        <img src="../assets/img/slider_bg01.jpg" alt="BLACKPINK" />
        <p className="slider__title">{data}</p>
      </Link>
    </>
  );
}

export default ArtistSlider;
