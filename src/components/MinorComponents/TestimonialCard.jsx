import Button from "../Button";

const TestimonialCard = ({name,title,content,img}) => {
  return (
    <div className="testimonial_card">
      <div className="dp">
        <img src={img} alt="" />
      </div>
      <div className="header">
        <div className="name">{name}</div>
        <div className="title">{title}</div>
      </div>
      <div className="content">
       {/* " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit
        consequatur ullam possimus, facilis culpa nulla perspiciatis illum
        " */}
        "{content}"
      
       
      </div>
      {/* <div className="btn_section">
        <Button content={}/>
      </div> */}
    </div>
  );
};

export default TestimonialCard;
