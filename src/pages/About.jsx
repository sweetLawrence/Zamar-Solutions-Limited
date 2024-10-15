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
import Mike from "../assets/images/mike.png";
import Samuel from "../assets/images/samuel.png";
import { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../components/MinorComponents/Spinner";

const About = () => {
  const images = [Mission, Vision, Values];
  const teamImages = [Samuel, Frida, Mike];
  const [elapsedYears, setElapsedYears] = useState(0);
  const [teamMembers, setTeamMembers] = useState([]);

  useEffect(() => {
    const currentYear = new Date().getFullYear();
    const yearsElapsed = currentYear - 2017;
    setElapsedYears(yearsElapsed);
  }, []);

  useEffect(() => {

    const fetchTeamMembers = async () => {
      try {
        const response = await axios.get(
          "https://zamar.pockethost.io/api/collections/Team/records"
        );
        setTeamMembers(response.data.items);
        // console.log("Fetched Data [TEAM]", response.data.items);
      } catch (error) {
        console.error("Error fetching team members:", error);
      }
    };

    fetchTeamMembers();
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
              <span>Zamar Solutions</span> is a premier advertising agency
              specializing in brand activation and creating memorable
              experiences that resonate with audiences. We excel in both indoor
              and outdoor branding, crafting visually compelling solutions that
              effectively convey your brand's message. Our expertise also
              extends to digital marketing, where we design targeted strategies
              that enhance your online visibility and engagement. Through
              innovative digital screen advertising, we deliver dynamic content
              that captures attention and drives consumer interaction, ensuring
              your brand stands out in a crowded marketplace.
            </div>

            <div className="item">
              Our dedicated team is passionate about collaboration, working
              closely with clients to develop activation campaigns that inspire
              action and build lasting connections. At Zamar Solutions, we
              understand the importance of a holistic approach to advertising,
              seamlessly integrating various channels to amplify your brand's
              impact. We are committed to helping you navigate the evolving
              landscape of marketing and advertising, empowering your brand to
              thrive and achieve its goals.
            </div>
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
        <div className="mini-title stubborn">
          <p>Team Members</p>
          <div className="line"></div>
        </div>
        <div className="heading stubborn">
          <h1>Our Team</h1>
        </div>
        

        <div className="team-area">
          {teamMembers.length > 0 && (
            <>
              <TeamCard
                person={<img src={teamImages[0]} alt="Samuel Rakara" />}
                personName="Mr. Samuel Rakara"
                designation={"Founder"}
                profileContent={
                  teamMembers.find(
                    (member) => member.member_name === "Mr. Samuel Rakara"
                  )?.member_story || <Spinner />
                }
              />
              <TeamCard
                person={<img src={teamImages[1]} alt="Frider Gatavi" />}
                personName={"Ms. Frider Gatavi"}
                designation={"Head of Marketing"}
                profileContent={
                  teamMembers.find(
                    (member) => member.member_name === "Ms. Frider Gatavi"
                  )?.member_story ||  <Spinner />
                }
                orderClass={"reverse"}
              />
              <TeamCard
                person={<img src={teamImages[2]} alt="Mike Kusina" />}
                personName="Mr. Mike Kusina"
                designation={"Activation Operations"}
                profileContent={
                  teamMembers.find(
                    (member) => member.member_name === "Mr. Mike Kusina"
                  )?.member_story || <Spinner />
                }
              />
            </>
          )}
        </div>
      </div>
      {/* THE TEAM */}

      {/* STATISTICS */}
      <div className="statistics">
        <div className="stats">
          <div className="stat-item">
            <div className="kabox"></div>
            <div className="top">{elapsedYears - 1}+</div>
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
