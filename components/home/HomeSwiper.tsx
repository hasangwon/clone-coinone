import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Navigation, Pagination, Scrollbar } from "swiper/modules";

const HomeSwiper = () => {
  return (
    <div className="relative flex items-center swiper-container">
      <div className="absolute top-0 left-0 w-1/3 h-full opacity-30 z-30 bg-black">123</div>
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-30 z-30 bg-black">123</div>

      <Swiper modules={[Navigation, Pagination, Scrollbar]} spaceBetween={30} slidesPerView={3} centeredSlides={true} loop={true} navigation pagination={{ clickable: true }} scrollbar={{ draggable: true }} onSwiper={(swiper) => console.log(swiper)} onSlideChange={() => console.log("slide change")}>
        <SwiperSlide>
          <div className="h-[15rem] bg-red-100">이미지 1</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[15rem] bg-red-100">이미지 2</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[15rem] bg-red-100">이미지 3</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[15rem] bg-red-100">이미지 4</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[15rem] bg-red-100">이미지 5</div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HomeSwiper;
