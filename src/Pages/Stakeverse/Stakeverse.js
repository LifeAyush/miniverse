import React from "react";
import "./stakeverse.css";
import Navbar from "../../Components/Navbar/Navbar";
import snowflake from "../../assets/images/snowflake.svg";
import nft1 from "../../assets/images/nft1.svg";
import nft2 from "../../assets/images/nft2.svg";

const Stakeverse = () => {
  return (
    <div className="Stakeverse-container">
      <div className="imported-navbar">
        <Navbar />
      </div>
      <div className="Stakeverse-main">
        <div className="stakeverse-sidebar">
          <div className="stakeverse-sidebar-primary-box">
            <span className="stakeverse-sidebar-primary-box-title">
              Available for claim
            </span>
            <div className="stakeverse-sidebar-primary-box-cont">
              <span className="stakeverse-sidebar-primary-box-count">1249</span>
              <img src={snowflake} alt="Snowflakes" />
            </div>
            <button className="stakeverse-sidebar-primary-box-btn">
              Claim
            </button>
          </div>
          <div className="stakeverse-sidebar-secondary-box">
            <div className="stakeverse-sidebar-secondary-box-title">
              Total rewards earned
            </div>
            <div className="stakeverse-sidebar-secondary-box-cont">
              <span className="stakeverse-sidebar-secondary-box-count">
                30000
              </span>
              <img src={snowflake} alt="Snowflakes" />
            </div>
          </div>
          <div className="stakeverse-sidebar-secondary-box">
            <div className="stakeverse-sidebar-secondary-box-title">
              Staked nfts
            </div>
            <div className="stakeverse-sidebar-secondary-box-cont">
              <span className="stakeverse-sidebar-secondary-box-count">15</span>
              <img src={nft1} alt="Snowflakes" />
            </div>
          </div>
          <div className="stakeverse-sidebar-secondary-box">
            <div className="stakeverse-sidebar-secondary-box-title">
              Total NFTs
            </div>
            <div className="stakeverse-sidebar-secondary-box-cont">
              <span className="stakeverse-sidebar-secondary-box-count">25</span>
              <img src={nft2} alt="Snowflakes" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stakeverse;
