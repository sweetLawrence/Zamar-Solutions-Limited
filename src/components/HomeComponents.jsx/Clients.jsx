import ClientLogos from "../MinorComponents/ClientLogos";
import "../styles/clients.css";

const Clients = () => {
  return (
    <div className="clients">
      <h2>Our Clients</h2>
      <div className="client_logo_section">
        <ClientLogos />
      </div>
    </div>
  );
};

export default Clients;
