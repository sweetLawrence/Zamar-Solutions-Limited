import Button from "../Button";
import TestimonialCard from "../MinorComponents/TestimonialCard";
import "../styles/testimonials.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import useFetchTestimonials from "../../hooks/useFetchTestimonials";

const Testimonials = () => {
  let { testimonials, images } = useFetchTestimonials();

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };
  return (
    <div className="testimonials">
      <div className="title_section">
        <h1>Don’t believe us? Believe them</h1>
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
        >{testimonials.map((testimonial, index) => (
          <SwiperSlide>
            {/* {testimonials.map((testimonial, index) => ( */}
              <TestimonialCard
                name={testimonial.name}
                title={testimonial.title}
                content={testimonial.testimonial}
                img={images[index]}
              />
            {/* ))} */}
          </SwiperSlide>
           ))}
          {/* <SwiperSlide>
            <TestimonialCard />
          </SwiperSlide>
          <SwiperSlide>
            <TestimonialCard />
          </SwiperSlide> */}

          {/* <SwiperSlide>
            <TestimonialCard />
          </SwiperSlide>

          <SwiperSlide>
            <TestimonialCard />
          </SwiperSlide>

          <SwiperSlide>
            <TestimonialCard />
          </SwiperSlide> */}
        </Swiper>
      </div>

      <div className="btnSection">
        <Button content={"Talk to us"} />
      </div>
    </div>
  );
};

export default Testimonials;
