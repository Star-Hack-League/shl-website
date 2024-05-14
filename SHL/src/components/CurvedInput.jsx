import React, { useState } from "react";
import "../styles/CurvedInput.css";
import arrow from "/images/arrow.png";

const CurvedInput = ({ onEmailSubmit }) => {
  const [email, setEmail] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = () => {
    if (email.trim() !== "") {
      onEmailSubmit(email);
    }
  };

  return (
    <div className="input-dialog">
      <div className="input-container">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
        />
        <button className="submit-button" onClick={handleSubmit}>
          <img src={arrow} alt="Submit" className="arrow" />
        </button>
      </div>
    </div>
  );
};

export default CurvedInput;
