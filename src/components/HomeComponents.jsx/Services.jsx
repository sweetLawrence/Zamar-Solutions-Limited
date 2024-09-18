import { useEffect, useState } from "react";
import useFetchServices from "../../hooks/useFetchServices";
import ServicesCard from "../MinorComponents/ServicesCard";
import "../styles/services.css";
import axiosInstance from "../../utils/axios";

const Services = () => {
  const [services, setServices] = useState([]);
  const [images, setImages] = useState([]);
  // const services = useFetchServices();

  function imageUrlConstructor(collectionId, id, image) {
    return `https://zamar.pockethost.io/api/files/${collectionId}/${id}/${image}`;
  }

  async function fetchServices() {
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
  }

  useEffect(() => {
    fetchServices();
  }, []);

  console.log("XXXX", services);
  console.log("A",images);
  return (
    <div className="services">
      <div className="title">
        <h1>Our Services</h1>
      </div>
      <div className="cards_section">
        {services.length > 0 ? (
          services.map((data, index) => (
            <ServicesCard
              key={index}
              title={data.title}
              content={data.content}
              img={images[index]}
            />
          ))
        ) : (
          <p>No services available.</p>
        )}

        {/* <ServicesCard />
        <ServicesCard />
        <ServicesCard />
        <ServicesCard /> */}
      </div>
    </div>
  );
};

export default Services;
