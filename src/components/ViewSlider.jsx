import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";

const ViewSlider = () => {
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
        <SwiperSlide>
          <a href="/">
            <img src="assets/img/view_sub01.jpg" alt="소녀시대" />
            <em>[단독샷캠4K] 소녀시대 'F...</em>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="/">
            <img src="assets/img/view_sub01.jpg" alt="소녀시대" />
            <em>[단독샷캠4K] 소녀시대 'F...</em>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="/">
            <img src="assets/img/view_sub01.jpg" alt="소녀시대" />
            <em>[단독샷캠4K] 소녀시대 'F...</em>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="/">
            <img src="assets/img/view_sub01.jpg" alt="소녀시대" />
            <em>[단독샷캠4K] 소녀시대 'F...</em>
          </a>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ViewSlider;
