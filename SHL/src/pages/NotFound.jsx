import React from "react";
import "../styles/NotFound.css";
import TopNav from "../components/TopNav";
import Footer from "../components/Footer";
import notFound from '/images/notFound.png';
import LandingSection from "../components/Landing/LandingSection";

function NotFound() {
  return (
    <div className="container">
      <TopNav />
      <div className="page-container">
        <div className="landing-section-wrapper">
          <LandingSection image={notFound} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default NotFound;