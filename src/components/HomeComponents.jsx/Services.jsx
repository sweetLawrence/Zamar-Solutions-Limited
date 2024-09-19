import useFetchServices from "../../hooks/useFetchServices";
import ServicesCard from "../MinorComponents/ServicesCard";
import "../styles/services.css";

const Services = () => {
  const { services, images } = useFetchServices();
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

      </div>
    </div>
  );
};

export default Services;
