
import React, { useState } from "react";
import "./styles/talk-to-us.css";
import Button from "../components/Button";

const TalkToUs = () => {
  const [showMessageArea, setShowMessageArea] = useState(false);
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

 
    const submissionData = {
      name: name,
      contact: contact,
      message: showMessageArea ? message : null, 
      requestCallback: !showMessageArea, 
    };


    console.log("Submission Data:", submissionData);


    setName("");
    setContact("");
    setMessage("");
    setShowMessageArea(false); 
  }

  return (
    <div className="talk-to-us">
      <div className="round1">
        <svg
          className="curve"
          width="210"
          height="56"
          viewBox="0 0 210 56"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M209.5 30.5C188.5 51.5 166.5 61.5 136 51C105.5 40.5 108 -16.5 66 7C32.4 25.8 8.66667 26.8333 1 25"
            stroke="#00ABE7"
            strokeOpacity="0.71"
          />
        </svg>

        <svg
          className="plane"
          width="104"
          height="47"
          viewBox="0 0 104 47"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19.8004 41.7848L0.0783342 16.1098L103.824 0.681121L29.0299 45.2221C29.0299 45.2221 25.6269 46.8989 23.0414 45.5922C20.4558 44.2855 19.8004 41.7848 19.8004 41.7848Z"
            fill="#00ABE7"
          />
        </svg>
      </div>
      <div className="round2"></div>
      <div className="form-element">
        <form onSubmit={handleSubmit}>
          <h2>Let Us Reach Out</h2>
          <div className="input-element">
            <input
              type="text"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="input-element">
            <input
              type="text"
              placeholder="Phone/Email/Whatsapp/Social link"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              required
            />
          </div>

          {showMessageArea && (
            <div className="input-element">
              <textarea
                placeholder="Type your message here..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
            </div>
          )}

          <div className="btn-sec">
            {!showMessageArea && (
              <Button content={"Request Callback"} widenWidth={"widenWidth"} />
            )}
          </div>

          <div className="activate-textarea" onClick={() => setShowMessageArea(!showMessageArea)}>
            <h3>
              {showMessageArea
                ? "I want to request a callback"
                : "I want to send a message instead"}
            </h3>
          </div>

          {showMessageArea && (
            <div className="btn-sec">
              <Button content={"Submit"} widenWidth={"widenWidth"} />
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default TalkToUs;
