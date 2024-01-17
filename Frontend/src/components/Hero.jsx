import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/swiper-bundle.css";
import { Swiper, SwiperSlide } from "swiper/react";
const Hero = () => {
  return (
    <>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        // pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        direction="horizontal"
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          <div className="hero hero1">
            <p>Tasty & Delicious Food</p>
            <button>Book a table</button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="hero hero2">
            <p>Tasty & Delicious Food</p>
            <button>Book a table</button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="hero hero3">
            <p>Tasty & Delicious Food</p>
            <button>Book a table</button>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Hero;
