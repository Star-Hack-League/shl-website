import React from 'react';

const TopNav = () => {
  return (
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
  );
};

export default TopNav;