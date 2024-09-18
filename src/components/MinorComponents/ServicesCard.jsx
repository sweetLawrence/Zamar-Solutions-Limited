import Button from "../Button";

const ServicesCard = ({ title, content, img }) => {
  return (
    <div className="service_card">
      <div className="heading">
        <h2>{title}</h2>
      </div>
      <div className="content_section">
        <div className="content">{content}</div>
      </div>
      <div className="btn_section">
        <Button content={"Learn More"} />
      </div>
      <div className="bg_image">
        <img src={img} alt="Nala Noodles Images" />
      </div>
      <div className="overlay">{/* Another Overlay */}</div>
    </div>
  );
};

export default ServicesCard;
