import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";

const HomeSwiper = () => {
  return (
    <div className="h-[10rem] flex items-center">
      <Swiper modules={[Navigation, Pagination, Scrollbar, A11y]} spaceBetween={20} slidesPerView={3} navigation pagination={{ clickable: true }} scrollbar={{ draggable: true }} onSwiper={(swiper) => console.log(swiper)} onSlideChange={() => console.log("slide change")}>
        <SwiperSlide>Slide 1asdasdasdas</SwiperSlide>
        <SwiperSlide>Slide 2asdlkasdasjdlaj</SwiperSlide>
        <SwiperSlide>Slide 3asdasd</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        ...
      </Swiper>
    </div>
  );
};

export default HomeSwiper;
