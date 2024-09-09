import { nav_data } from "../Data/navdata";
import Button from "./Button";
import Logo from "./Logo";
import "./styles/navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo_section">
        <Logo />
      </div>
      <div className="navigation_section">
        {nav_data
          ? nav_data.map((item, index) => {
              return <div className="item">{item}</div>;
            })
          : "Hello"}
        <div className="btn_section">
          <Button content={"Talk to us"} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
