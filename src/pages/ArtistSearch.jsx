import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import { SearchBar, ArtistConts } from "../components";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const ArtistSearch = () => {
  return (
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
              spaceBetween={30}
              pagination={{
                type: "fraction",
              }}
              navigation={true}
              modules={[Pagination, Navigation]}
              className="mySwiper"
            >
              <SwiperSlide>
                <a href="/artistView">
                  <img src="assets/img/slider_bg01.jpg" alt="BLACKPINK" />
                  <p className="slider__title">BLACKPINK</p>
                </a>
              </SwiperSlide>
              <SwiperSlide>
                <a href="/artistView">
                  <img src="assets/img/slider_bg01.jpg" alt="BLACKPINK" />
                  <p className="slider__title">BLACKPINK</p>
                </a>
              </SwiperSlide>
            </Swiper>
          </div>
          <ArtistConts />
        </div>
      </div>
    </section>
  );
};

export default ArtistSearch;
