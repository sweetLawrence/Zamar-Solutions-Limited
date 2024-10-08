import {useEffect, useState} from "react";
import axiosInstance from "../../utils/axios";
import {imageUrlConstructor} from "../../utils/imageUrl";

const ClientLogos = () => {
    const [logos, setLogos] = useState([]);

    async function fetchLogos() {
        try {
            const response = await axiosInstance.get(
                "/api/collections/Clients/records"
            );

            const data = response.data;
            const items = data.items[0];
            const logos = items.field;
            const logoArray = new Array();

            logos.map((logo) => {
                let imgUrls = imageUrlConstructor(items.collectionId, items.id, logo);
                logoArray.push(imgUrls);
            });

            setLogos(logoArray);
        } catch (error) {
            console.error("Error", error);
        }
    }

    useEffect(() => {
        fetchLogos()
            .catch(() => {
                // empty
            })
        ;
    }, []);

    return (
        <div className="client-logos">
            {logos.map((logo, index) => (
                <div key={index} className="card">
                    <img src={logo} alt="Client Logo"/>
                </div>
            ))}
        </div>
    );
};

export default ClientLogos;
