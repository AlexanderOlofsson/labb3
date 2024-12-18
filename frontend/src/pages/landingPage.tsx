import React from "react";
import Product from "../components/Product";
import Background from "../components/Background";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <Background />

      <div className="content">
        <Product />
      </div>
    </div>
  );
};

export default LandingPage;
