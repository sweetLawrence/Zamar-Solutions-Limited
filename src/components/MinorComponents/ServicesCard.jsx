import Button from "../Button";
import Nala from "../../assets/images/nalanoodles.png";

const ServicesCard = () => {
  return (
    <div className="service_card">
      <div className="heading">
        <h2>1. Brand Activation</h2>
      </div>
      <div className="content_section">
        <div className="content">
         Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab nulla itaque deleniti voluptatibus, dicta labore. At eum dignissimos hic nostrum sunt eaque tempore sit totam alias! Temporibus ab, vitae fugiat consectetur consequatur quae eveniet eaque quaerat, quod ipsa distinctio laudantium.
        </div>
      </div>
      <div className="btn_section">
        <Button content={"Learn More"} />
      </div>
      <div className="bg_image">
        <img src={Nala} alt="Nala Noodles Images" />
      </div>
      <div className="overlay">{/* Another Overlay */}</div>
    </div>
  );
};

export default ServicesCard;
