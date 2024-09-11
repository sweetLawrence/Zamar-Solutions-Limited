import Button from "../Button";
import TestimonialCard from "../MinorComponents/TestimonialCard";
import "../styles/testimonials.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const Testimonials = () => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };
  return (
    <div className="testimonials">
      <div className="title_section">
        <h1>Don’t believe us, believe them</h1>
      </div>
      <div className="cards_section">
        <Swiper
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          spaceBetween={50}
          slidesPerView={3}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          className="cards_section"
        >
          <SwiperSlide>
            <TestimonialCard />
          </SwiperSlide>

          <SwiperSlide>
            <TestimonialCard />
          </SwiperSlide>

          <SwiperSlide>
            <TestimonialCard />
          </SwiperSlide>

          <SwiperSlide>
            <TestimonialCard />
          </SwiperSlide>

          <SwiperSlide>
            <TestimonialCard />
          </SwiperSlide>

          <SwiperSlide>
            <TestimonialCard />
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="btnSection">
        <Button content={"Talk to us"} />
      </div>
    </div>
  );
};

export default Testimonials;
