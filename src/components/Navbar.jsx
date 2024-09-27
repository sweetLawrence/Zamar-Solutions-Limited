import { useState } from "react";
import { nav_data } from "../Data/navdata";
import Button from "./Button";
import Logo from "./Logo";
import MenuIcon from "@mui/icons-material/Menu";

import "./styles/navbar.css";
import MobileNav from "./MobileNav";

const Navbar = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  function activateMobileNav() {
    setMobileNavOpen(!mobileNavOpen);
  }

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

      <div className="hambuger_menu" onClick={activateMobileNav}>
        <MenuIcon style={{ fontSize: "2.5em" }} />
        {mobileNavOpen && (
          <div className="mobile_menu">
            <MobileNav />
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
