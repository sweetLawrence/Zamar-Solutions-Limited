import React, { useEffect, useState, useMemo } from "react";
import "./styles/careers.css";
import Office from "../assets/images/office.jpeg";
import OpenPositions from "../components/MinorComponents/OpenPositions";
import axios from "axios";

const Careers = () => {
  const [positions, setPositions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [lastFetchedData, setLastFetchedData] = useState([]);

  // Function to fetch careers data
  const fetchCareers = async () => {
    try {
      const response = await axios.get(
        "https://zamar.pockethost.io/api/collections/Careers/records"
      );
      return response.data.items || [];
    } catch (error) {
      console.error("Error fetching careers data:", error);
      return [];
    }
  };

  useEffect(() => {
    // Initial data fetch
    const initialFetch = async () => {
      const data = await fetchCareers();
      setPositions(data);
      setLastFetchedData(data);
      setLoading(false);
    };
    
    initialFetch();

    // Set up the interval to fetch data every minute
    const interval = setInterval(async () => {
      const newData = await fetchCareers();
      
      // Compare with the memoized last fetched data
      if (JSON.stringify(newData) !== JSON.stringify(lastFetchedData)) {
        setPositions(newData);
        setLastFetchedData(newData); // Update memoized data
      }
    }, 60000); // 60000ms = 1 minute

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, [lastFetchedData]);

  return (
    <div className="careers">
      <div className="upper-section">
        <div className="bg_image">
          <img src={Office} alt="An Office Image" />
        </div>
        <div className="overlay"></div>
        <div className="text-area">
          <h1 className="heading">Careers</h1>
          <div className="s-text">
            We are always looking to grow with talent whenever possible
          </div>
        </div>
      </div>

      <div className="lower-section">
        <div className="statement">
          Zamar Solutions is an equal opportunity employer and selects
          candidates on merit through fair and open competition from widest
          range of eligible candidates.
        </div>
        <div className="title">
          <h2>How to Apply</h2>
          <div className="application-instructions">
            <p className="instruction">
              - All the applications should be addressed to the{" "}
              <span style={{ color: "#18d95f" }}>
                Human Resource, Zamar Solutions, PO Box 00-0000, Ramco
              </span>
            </p>
            <p className="instruction">
              - Applications should reach the office before or on the specified
              deadline. (Physical copy)
            </p>
            <p className="instruction">
              - Include a copy of all relevant documents like:
            </p>
            <ul className="requirements">
              <li>National ID</li>
              <li>Valid certificate of good conduct</li>
              <li>Tax compliance certificate</li>
            </ul>
          </div>
        </div>

        <div className="title positions">
          <h2>Open Positions</h2>

          <div className="open-positions">
            {loading ? (
              <p>Loading...</p>
            ) : positions.length > 0 ? (
              positions.map((position) => (
                <OpenPositions
                  key={position.id}
                  title={position.title}
                  deadline={position.deadline}
                  roles={position.roles_and_qualifications.roles}
                  qualifications={position.roles_and_qualifications.qualifications}
                />
              ))
            ) : (
              <p className="no-open-positions">No open positions yet.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Careers;
