import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import ArtistViewSlider from "./ArtistViewSlider";

const ViewSlider = ({ songs, id }) => {
  return (
    <div className="cont__slider">
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
          type: "fraction",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {songs.map((data, index) => {
          return (
            <SwiperSlide key={index}>
              <ArtistViewSlider data={data} id={id} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default ViewSlider;
