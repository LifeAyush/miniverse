import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import "./aboutUs.css";
import aboutusHero from "../../assets/images/aboutus-hero.svg";
import aboutusGraph from "../../assets/images/aboutus-graph.svg"
import aboutusEx from "../../assets/images/aboutus-exchange.svg"

const AboutUs = () => {
  return (
    <div className="AboutUs-container">
      <div className="imported-navbar">
        <Navbar />
      </div>
      <div className="AboutUs-Hero">
        <div className="AboutUs-Hero-img-div">
          <img src={aboutusHero} alt="Globe" className="AboutUs-Hero-img-div-img"/>
        </div>
        <div className="AboutUs-Hero-Text-div">
          <h1 className="AboutUs-Hero-Text-div-heading">MINIVERSE</h1>
          <p className="AboutUs-Hero-Text-div-para">
            Blvck Genesis is a collection of 9,999 Blvck avatar NFTs living on
            the Ethereum blockchain. With hundreds of artistic elements, high
            fashion traits and monochrome aesthetics, each graphic is crafted by
            Julian O'hayon, French designer and founder of global lifestyle
            brand,Ts living on the Ethereum blockchain. With hundreds of
            artistic elements, high fashion traits and monochrome aesthetics,
            each graphic is crafted by Julian O'hayon, French designer and
            founder of global lifestyle brand,
          </p>
        </div>
      </div>
      <div className="AboutUs-main">
        <div className="AboutUs-main-graph">
          <img src={aboutusGraph} alt="Graph" />
        </div>
        <div className="AboutUs-main-stats">
          <div className="AboutUs-main-stat-box">
            <img src={aboutusEx} alt="Exchange" className="AboutUs-main-stat-box-img"/>
            <div className="AboutUs-main-stat-box-text">
              <span className="AboutUs-main-stat-box-text-title">8999</span>
              <span className="AboutUs-main-stat-box-text-desc">Items</span>
            </div>
          </div>
          <div className="AboutUs-main-stat-box">
            <img src={aboutusEx} alt="Exchange" className="AboutUs-main-stat-box-img"/>
            <div className="AboutUs-main-stat-box-text">
              <span className="AboutUs-main-stat-box-text-title">8999</span>
              <span className="AboutUs-main-stat-box-text-desc">Items</span>
            </div>
          </div>
          <div className="AboutUs-main-stat-box">
            <img src={aboutusEx} alt="Exchange" className="AboutUs-main-stat-box-img"/>
            <div className="AboutUs-main-stat-box-text">
              <span className="AboutUs-main-stat-box-text-title">8999</span>
              <span className="AboutUs-main-stat-box-text-desc">Items</span>
            </div>
          </div>
          <div className="AboutUs-main-stat-box">
            <img src={aboutusEx} alt="Exchange" className="AboutUs-main-stat-box-img"/>
            <div className="AboutUs-main-stat-box-text">
              <span className="AboutUs-main-stat-box-text-title">8999</span>
              <span className="AboutUs-main-stat-box-text-desc">Items</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
