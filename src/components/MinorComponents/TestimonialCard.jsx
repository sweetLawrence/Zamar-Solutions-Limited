import Button from "../Button";

const TestimonialCard = () => {
  return (
    <div className="testimonial_card">
      <div className="dp">
        <img src="https://via.placeholder.com/150" alt="dp" />
      </div>
      <div className="header">
        <div className="name">Lawrence Tsungu</div>
        <div className="title">CEO, Pawtech Labs</div>
      </div>
      <div className="content">
       " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit
        consequatur ullam possimus, facilis culpa nulla perspiciatis illum
        "
       
      </div>
      {/* <div className="btn_section">
        <Button content={}/>
      </div> */}
    </div>
  );
};

export default TestimonialCard;
