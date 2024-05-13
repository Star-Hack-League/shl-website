import React from "react";
import "../styles/NotFound.css";

function NotFound() {
  return (
    <div className="container">
      <div className="navbarContainer">
        <h1 className="title">Star Hack Alliance</h1>
        <div className="navbar-item-container">
          <a href="./" className="no-underline">
            <p className="navbar-items">Home</p>
          </a>
          <a href="./partner" className="no-underline">
            <p className="navbar-items">Partner</p>
          </a>
          <a href="./events" className="no-underline">
            <p className="navbar-items">Events</p>
          </a>
        </div>
      </div>
      <div className="notFound">NOT<br/>FOUND</div>
      <h1 className="tilted">
        <span>4</span>
        <span>0</span>
        <span>4</span>
      </h1>
    </div>
  );
}

export default NotFound;