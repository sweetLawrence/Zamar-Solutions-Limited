import { useState, useEffect } from "react";
import axiosInstance from "../utils/axios";

const useFetchTestimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [images, setImages] = useState([]);

  const imageUrlConstructor = (collectionId, id, image) => {
    return `https://zamar.pockethost.io/api/files/${collectionId}/${id}/${image}`;
  };

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
      console.error("Error fetching services:", error);
    }
  };

  useEffect(() => {
    fetchTestimonials();
  }, []);

  console.log(testimonials)

  return { testimonials, images };
};

export default useFetchTestimonials;
