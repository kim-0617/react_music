import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { ArtistContext } from "../context/ArtistContext";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import { SearchBar, ArtistConts, ArtistSlider, Loader } from "../components";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { recomSingers } from "../components/HeaderCont";
import artistSearch from "../utils/artistSearch.json";

const ArtistSearch = () => {
  const { name } = useParams();
  const [recom, setRecom] = useState(recomSingers);
  const [artist, setArtist] = useState(null);

  useEffect(() => {
    const config = {
      method: "get",
      url: `https://youtube-music1.p.rapidapi.com/v2/search?query=${name}`,
      headers: {
        "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY3,
        "X-RapidAPI-Host": "youtube-music1.p.rapidapi.com",
      },
    };

    axios(config)
      .then(function (response) {
        setArtist(response.data.result.songs);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [name]);

  if (!artist) return <Loader />;

  return (
    <ArtistContext.Provider value={{ artist, setArtist }}>
      <section id="artist__search">
        <div className="artist__inner container">
          <h2 className="title">아티스트 검색</h2>
          <SearchBar />
          <div className="artist__top">
            <h2>
              <em>추천</em> 아티스트
            </h2>
            <div className="artist__slider">
              <Swiper
                slidesPerView={3}
                centeredSlides={true}
                spaceBetween={10}
                pagination={{
                  type: "fraction",
                }}
                navigation={true}
                initialSlide={1}
                modules={[Pagination, Navigation]}
                className="mySwiper"
              >
                {recom.map((data, index) => {
                  return (
                    <SwiperSlide key={index}>
                      <ArtistSlider data={data} />
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
            <ArtistConts videos={artist} name={name} />
          </div>
        </div>
      </section>
    </ArtistContext.Provider>
  );
};

export default ArtistSearch;
