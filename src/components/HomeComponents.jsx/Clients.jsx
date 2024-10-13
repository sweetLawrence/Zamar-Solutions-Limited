import ClientLogos from "../MinorComponents/ClientLogos";
import "../styles/clients.css";
import Button from "../Button";
import { useNavigate } from "react-router-dom";

const Clients = () => {
  const navigeshen = useNavigate();
  return (
    <div className="clients">
      <h2>Our Clients</h2>
      <div className="client_logo_section">
        <ClientLogos />
      </div>
      <div className="taltToUs">
        <Button
          content={"Talk to us"}
          onClick={() => navigeshen("/talk-to-us")}
        />
      </div>
    </div>
  );
};

export default Clients;
