// import Button from "../Button";
// import TestimonialCard from "../MinorComponents/TestimonialCard";
// import "../styles/testimonials.css";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/pagination";
// import { Pagination } from "swiper/modules";
// import useFetchTestimonials from "../../hooks/useFetchTestimonials";
// import { useEffect, useState } from "react";

// const Testimonials = () => {
//   let { testimonials, images } = useFetchTestimonials();

//   const [slidesPerView, setSlidesPerView] = useState(3);
//   const [spaceBetween, setSpaceBetween] = useState(50);

//   useEffect(() => {
//     const updateSliderSettings = () => {
//       const screenWidth = window.innerWidth;

//       if (screenWidth < 500) {
//         setSlidesPerView(1);
//         setSpaceBetween(150);
//       } else {
//         setSlidesPerView(3);
//         setSpaceBetween(50);
//       }
//     };

//     updateSliderSettings();

//     window.addEventListener("resize", updateSliderSettings);

//     return () => window.removeEventListener("resize", updateSliderSettings);
//   }, []);

//   const pagination = {
//     clickable: true,
//     renderBullet: function (index, className) {
//       return '<span class="' + className + '">' + (index + 1) + "</span>";
//     },
//   };

//   return (
//     <div className="testimonials">
//       <div className="title_section">
//         <h1>Don’t believe us? Believe them</h1>
//       </div>
//       <div className="cards_section">
//         <Swiper
//           pagination={{
//             clickable: true,
//           }}
//           modules={[Pagination]}
    
//           spaceBetween={spaceBetween}
//           slidesPerView={slidesPerView}

//           onSlideChange={() => console.log("slide change")}
//           onSwiper={(swiper) => console.log(" ")}
//           className="cards_section"
//         >{testimonials.map((testimonial, index) => (
//           <SwiperSlide>
//               <TestimonialCard
//                 name={testimonial.name}
//                 title={testimonial.title}
//                 content={testimonial.testimonial}
//                 img={images[index]}
//               />

//           </SwiperSlide>
//            ))}
         
//         </Swiper>
//       </div>

//       <div className="btnSection">
//         <Button content={"Talk to us"} />
//       </div>
//     </div>
//   );
// };

// export default Testimonials;


import Button from "../Button";
import TestimonialCard from "../MinorComponents/TestimonialCard";
import "../styles/testimonials.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import useFetchTestimonials from "../../hooks/useFetchTestimonials";
import { useEffect, useState } from "react";
import CircularProgress from '@mui/material/CircularProgress'; // Material UI loading spinner

const Testimonials = () => {
  let { testimonials, images, isLoading } = useFetchTestimonials(); // Use isLoading state

  const [slidesPerView, setSlidesPerView] = useState(3);
  const [spaceBetween, setSpaceBetween] = useState(50);

  useEffect(() => {
    const updateSliderSettings = () => {
      const screenWidth = window.innerWidth;

      if (screenWidth < 500) {
        setSlidesPerView(1);
        setSpaceBetween(150);
      } else {
        setSlidesPerView(3);
        setSpaceBetween(50);
      }
    };

    updateSliderSettings();
    window.addEventListener("resize", updateSliderSettings);

    return () => window.removeEventListener("resize", updateSliderSettings);
  }, []);

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

      {/* Show Loading Spinner while testimonials are loading */}
      {isLoading ? (
        <div className="testimonials_loading" style={{ textAlign: "center", padding: "50px" }}>
          <CircularProgress size={80} /> {/* Spinner component */}
          <p >Loading testimonials...</p>
        </div>
      ) : (
        <div className="cards_section">
          <Swiper
            pagination={{ clickable: true }}
            modules={[Pagination]}
            spaceBetween={spaceBetween}
            slidesPerView={slidesPerView}
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <TestimonialCard
                  name={testimonial.name}
                  title={testimonial.title}
                  content={testimonial.testimonial}
                  img={images[index]}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}

      <div className="btnSection">
        <Button content={"Talk to us"} />
      </div>
    </div>
  );
};

export default Testimonials;
