import { useState, useEffect } from "react";
import axiosInstance from "../utils/axios";

const useFetchServices = () => {
  const [services, setServices] = useState([]);
  const [images, setImages] = useState([]);

  const imageUrlConstructor = (collectionId, id, image) => {
    return `https://zamar.pockethost.io/api/files/${collectionId}/${id}/${image}`;
  };

  const fetchServices = async () => {
    try {
      const response = await axiosInstance.get(
        "/api/collections/Services/records"
      );
      const data = response.data.items;
      setServices(data);

      const imageUrls = data.map((service) =>
        imageUrlConstructor(service.collectionId, service.id, service.image)
      );
      setImages(imageUrls);
    } catch (error) {
      console.error("Error fetching services:", error);
    }
  };

  useEffect(() => {
    fetchServices();
  }, []);

  return { services, images };
};

export default useFetchServices;
