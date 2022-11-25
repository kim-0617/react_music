import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import ArtistViewSlider from "./ArtistViewSlider";
import { Loader } from ".";

function randomValueFromArray(array) {
  const newArray = [];
  while (newArray.length !== 5) {
    const random = Math.floor(Math.random() * array.length);
    newArray.push(array.splice(random, 1)[0]);
  }
  return newArray;
}

const ViewSlider = ({ songs, id }) => {
  if (!songs) return <Loader />;

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
