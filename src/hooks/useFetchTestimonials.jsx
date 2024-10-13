// import { useState, useEffect } from "react";
// import axiosInstance from "../utils/axios";
// import { imageUrlConstructor } from "../utils/imageUrl";

// const useFetchTestimonials = () => {
//   const [testimonials, setTestimonials] = useState([]);
//   const [images, setImages] = useState([]);

//   const fetchTestimonials = async () => {
//     try {
//       const response = await axiosInstance.get(
//         "/api/collections/Testimonials/records"
//       );
//       const data = response.data.items;
//       setTestimonials(data);

//       const imageUrls = data.map((service) =>
//         imageUrlConstructor(service.collectionId, service.id, service.image)
//       );
//       setImages(imageUrls);
//     } catch (error) {
//       console.error("Error fetching services:", error);
//     }
//   };

//   useEffect(() => {
//     fetchTestimonials();
//   }, []);

//   // console.log(testimonials)

//   return { testimonials, images };
// };

// export default useFetchTestimonials;



import { useState, useEffect } from "react";
import axiosInstance from "../utils/axios";
import { imageUrlConstructor } from "../utils/imageUrl";

const useFetchTestimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // New loading state

  const fetchTestimonials = async () => {
    try {
      const response = await axiosInstance.get(
        "/api/collections/Testimonials/records"
      );
      const data = response.data.items;
      setTestimonials(data);

      const imageUrls = data.map((service) =>
        imageUrlConstructor(service.collectionId, service.id, service.image)
      );
      setImages(imageUrls);
    } catch (error) {
      console.error("Error fetching testimonials:", error);
    } finally {
      setIsLoading(false); // Stop loading once the data is fetched
    }
  };

  useEffect(() => {
    fetchTestimonials();
  }, []);

  return { testimonials, images, isLoading }; // Return isLoading
};

export default useFetchTestimonials;
