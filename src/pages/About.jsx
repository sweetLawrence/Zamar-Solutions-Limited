import "./styles/about.css";
// import Team from "../assets/images/office.jpeg";
import Team from "../assets/images/about.jpg";
import People from "../assets/images/zamarpple.jpeg";
import MissionCard from "../components/MinorComponents/MissionCard";
import { valuesdata } from "../Data/valuesdata";

import Mission from "../assets/images/mission.png";
import Vision from "../assets/images/vision.png";
import Values from "../assets/images/values.png";
import TeamCard from "../components/MinorComponents/TeamCard";

import Frida from "../assets/images/frider.png";
import Mike from '../assets/images/mike.png'
import Samuel from "../assets/images/samuel.png";
import { useEffect, useState } from "react";

const About = () => {
  const images = [Mission, Vision, Values];
  const teamImages = [Samuel, Frida,Mike];
  const [elapsedYears, setElapsedYears] = useState(0);

  useEffect(() => {
    const currentYear = new Date().getFullYear();
    const yearsElapsed = currentYear - 2017;
    setElapsedYears(yearsElapsed);
  }, []);

  return (
    <div className="about-page">
      <div className="upper">
        <img className="about-image" src={Team} alt="people" />
        <div className="the-title">About Us</div>
        <div className="overlay"></div>
      </div>

      {/* HISTORY ENDS HERE */}
      <div className="history-section">
        <div className="left">
          <div className="round"></div>
          <div className="blob-div">
            <img src={People} alt="pipo" />
          </div>
          <div className="r-bottom"></div>
        </div>

        <div className="right">
          <div className="mini-title">
            <p>Who Are We</p>
            <div className="line"></div>
          </div>

          <div className="heading">
            <h1>About Zamar Solutions</h1>
          </div>

          <div className="content">
            <div className="item">
              <span>Zamar Solutions</span> is Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Corrupti impedit, at tenetur
              nesciunt possimus aut nihil numquam praesentium suscipit ullam
              aspernatur animi facere cupiditate voluptatum nulla distinctio eum
              in maiores enim ipsam! Quasi blanditiis maxime omnis aut quo
              suscipit sunt nisi? Pariatur quasi corporis atque voluptas et
              molestias facere, aperiam ducimus itaque, fugit consectetur
            </div>

            <div className="item">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              eos dignissimos sint autem maxime veritatis atque incidunt itaque
              ipsam quis mollitia quisquam, sapiente quibusdam nobis deserunt
              similique vitae eum quam repellat nesciunt maiores! Alias, eos
              labore aliquid distinctio corrupti facere consectetur officiis
              voluptatibus pariatur beatae dignissimos molestiae qui
            </div>
            {/* 
            <div className="item">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
              illo voluptas iure ducimus quis. Aliquam sed, perspiciatis numquam
              explicabo fugit id consectetur laudantium recusandae, vero ea nisi
              maiores, quo deleniti et debitis assumenda. Impedit sunt facere
              quo reiciendis, atque quaerat? Consequatur laborum accusamus nulla
              tempora, rem eaque rerum veritatis inventore quia nam velit,
              dolorum sit magnam esse quis nisi! Laborum, provident voluptatibus
              soluta veritatis officiis, nihil quaerat inventore aliquid
              voluptas harum aliquam doloribus natus officia consectetur
              necessitatibus laudantium doloremque. Facilis vero obcaecati
              repellendus eius aut ratione possimus aliquid quae ex animi ipsa
              delectus voluptatibus, nostrum magnam ea praesentium dolores eos.
            </div> */}
          </div>
        </div>
      </div>

      {/* HISTORY ENDS HERE */}

      {/* VISION MISSION */}
      <div className="mission-vision">
        <div className="mini-title">
          <p>Mission and Vision</p>
          <div className="line"></div>
        </div>

        <div className="heading">
          <h1>Vision and Mission Statements</h1>
        </div>

        <div className="cards-area">
          <MissionCard
            img={<img src={images[0]} alt="" />}
            title={"Mission"}
            inline_content={"Building brands, empowering teams"}
          />

          <MissionCard
            img={<img src={images[1]} alt="" />}
            title={"Vision"}
            inline_content={"To be corporate retail solutions provider"}
          />

          <MissionCard
            img={<img src={images[2]} alt="" />}
            title={"Values"}
            contentType={"list"}
            list_content={valuesdata}
          />
        </div>
      </div>
      {/* VISION MISSION */}

      {/* THE TEAM */}
      <div className="team-members">
        <div className="mini-title">
          <p>Team Members</p>
          <div className="line"></div>
        </div>
        <div className="heading">
          <h1>Our Team</h1>
        </div>

        <div className="team-area">
          <TeamCard
            person={<img src={teamImages[0]} />}
            personName="Mr. Samuel Rakara"
            designation={"Founder"}
          />
          <TeamCard
            person={<img src={teamImages[1]} />}
            personName={"Ms. Frider Gatavi"}
            designation={"Head of Marketing"}
            orderClass={"reverse"}
          />
          <TeamCard
            person={<img src={teamImages[2]} />}
            personName="Mr. Mike Kusina"
            designation={"Activation Operations"}
          />
        </div>
      </div>
      {/* THE TEAM */}

      {/* STATISTICS */}
      <div className="statistics">
        
        <div className="stats">
        <div className="stat-item">
        <div className="kabox"></div>
          <div className="top">{elapsedYears-1}+</div>
          <div className="bottom">Years in Business</div>
        </div>
        <div className="stat-item">
          <div className="top">15+</div>
          <div className="bottom">Clients Served</div>
        </div>
        <div className="stat-item">
          <div className="top">5+</div>
          <div className="bottom">Industries Covered</div>
        </div>
        <div className="stat-item">
          <div className="top">95%</div>
          <div className="bottom">Customer Satisfaction rate</div>
        </div>
        </div>
        
      </div>
      {/* STATISTICS */}
    </div>
  );
};

export default About;
