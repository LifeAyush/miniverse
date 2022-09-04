import React from "react";
import "./stakeverse.css";
import Navbar from "../../Components/Navbar/Navbar";
import snowflake from "../../assets/images/snowflake.svg";
import nft1 from "../../assets/images/nft1.svg";
import nft2 from "../../assets/images/nft2.svg";
import nftFace1 from "../../assets/images/nft-face1.svg";
const Stakeverse = () => {
  return (
    <div className="Stakeverse-container">
      <div className="imported-navbar">
        <Navbar />
      </div>
      <div className="Stakeverse-main">
        <div className="stakeverse-topbar">
          <div className="stakeverse-topbar-card-primary">
            <div className="stakeverse-topbar-card-primary-title">
              TOTAL REWARDS EARNED
            </div>
            <div className="stakeverse-topbar-card-primary-box">
              <span className="stakeverse-topbar-card-primary-box-text">
                8999
              </span>
              <img src={snowflake} alt="Snowflakes" />
            </div>
          </div>
          <div className="stakeverse-topbar-card-secondary">
            <span className="stakeverse-topbar-card-secondary-title">
              TOTAL nfts
            </span>
            <span className="stakeverse-topbar-card-secondary-number">198</span>
          </div>
          <div className="stakeverse-topbar-card-secondary">
            <span className="stakeverse-topbar-card-secondary-title">
              nFTS FOR STAKING
            </span>
            <span className="stakeverse-topbar-card-secondary-number">216</span>
          </div>
          <div className="stakeverse-topbar-card-claim">
            <span className="stakeverse-topbar-card-primary-title">
              Available for claim
            </span>
            <div className="stakeverse-topbar-card-claim-box">
              <span className="stakeverse-topbar-card-claim-number">
                1249
              </span>
              <img src={snowflake} alt="snowflakes" />
            </div>
            <button className="stakeverse-topbar-card-claim-btn">Claim</button>
          </div>
        </div>
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
        <div className="stakeverse-card-display">
          <div className="stakeverse-normal-card">
            <div className="stakeverse-noraml-card-img-div">
              <img src={nftFace1} alt="nft" />
              <div className="stakeverse-noraml-card-img-rank">
                <span>Rank: </span>
                <span>0000</span>
              </div>
            </div>
            <div className="stakeverse-noraml-card-text-div">
              <div className="stakeverse-noraml-card-text-div-title">
                Miniverse #0000
              </div>
              <div className="stakeverse-noraml-card-text-div-main">
                <div className="stakeverse-noraml-card-text-div-main-earned">
                  <span>Earned:</span>
                  <div className="stakeverse-noraml-card-text-div-main-earned-snowflake">
                    <span>6343</span>
                    <img src={snowflake} alt="Snowflakes" />
                  </div>
                </div>
                <div className="stakeverse-noraml-card-text-div-main-progressbar">
                  4/7 Days
                </div>
              </div>
            </div>
          </div>
          <div className="stakeverse-normal-card">
            <div className="stakeverse-noraml-card-img-div">
              <img src={nftFace1} alt="nft" />
              <div className="stakeverse-noraml-card-img-rank">
                <span>Rank: </span>
                <span>0000</span>
              </div>
            </div>
            <div className="stakeverse-noraml-card-text-div">
              <div className="stakeverse-noraml-card-text-div-title">
                Miniverse #0000
              </div>
              <div className="stakeverse-noraml-card-text-div-main">
                <div className="stakeverse-noraml-card-text-div-main-earned">
                  <span>Earned:</span>
                  <div className="stakeverse-noraml-card-text-div-main-earned-snowflake">
                    <span>6343</span>
                    <img src={snowflake} alt="Snowflakes" />
                  </div>
                </div>
                <div className="stakeverse-noraml-card-text-div-main-progressbar">
                  4/7 Days
                </div>
              </div>
            </div>
          </div>
          <div className="stakeverse-normal-card">
            <div className="stakeverse-noraml-card-img-div">
              <img src={nftFace1} alt="nft" />
              <div className="stakeverse-noraml-card-img-rank">
                <span>Rank: </span>
                <span>0000</span>
              </div>
            </div>
            <div className="stakeverse-noraml-card-text-div">
              <div className="stakeverse-noraml-card-text-div-title">
                Miniverse #0000
              </div>
              <div className="stakeverse-noraml-card-text-div-main">
                <div className="stakeverse-noraml-card-text-div-main-earned">
                  <span>Earned:</span>
                  <div className="stakeverse-noraml-card-text-div-main-earned-snowflake">
                    <span>6343</span>
                    <img src={snowflake} alt="Snowflakes" />
                  </div>
                </div>
                <div className="stakeverse-noraml-card-text-div-main-progressbar">
                  4/7 Days
                </div>
              </div>
            </div>
          </div>
          <div className="stakeverse-normal-card">
            <div className="stakeverse-noraml-card-img-div">
              <img src={nftFace1} alt="nft" />
              <div className="stakeverse-noraml-card-img-rank">
                <span>Rank: </span>
                <span>0000</span>
              </div>
            </div>
            <div className="stakeverse-noraml-card-text-div">
              <div className="stakeverse-noraml-card-text-div-title">
                Miniverse #0000
              </div>
              <div className="stakeverse-noraml-card-text-div-main">
                <div className="stakeverse-noraml-card-text-div-main-earned">
                  <span>Earned:</span>
                  <div className="stakeverse-noraml-card-text-div-main-earned-snowflake">
                    <span>6343</span>
                    <img src={snowflake} alt="Snowflakes" />
                  </div>
                </div>
                <div className="stakeverse-noraml-card-text-div-main-progressbar">
                  4/7 Days
                </div>
              </div>
            </div>
          </div>
          <div className="stakeverse-normal-card">
            <div className="stakeverse-noraml-card-img-div">
              <img src={nftFace1} alt="nft" />
              <div className="stakeverse-noraml-card-img-rank">
                <span>Rank: </span>
                <span>0000</span>
              </div>
            </div>
            <div className="stakeverse-noraml-card-text-div">
              <div className="stakeverse-noraml-card-text-div-title">
                Miniverse #0000
              </div>
              <div className="stakeverse-noraml-card-text-div-main">
                <div className="stakeverse-noraml-card-text-div-main-earned">
                  <span>Earned:</span>
                  <div className="stakeverse-noraml-card-text-div-main-earned-snowflake">
                    <span>6343</span>
                    <img src={snowflake} alt="Snowflakes" />
                  </div>
                </div>
                <div className="stakeverse-noraml-card-text-div-main-progressbar">
                  4/7 Days
                </div>
              </div>
            </div>
          </div>
          <div className="stakeverse-normal-card">
            <div className="stakeverse-noraml-card-img-div">
              <img src={nftFace1} alt="nft" />
              <div className="stakeverse-noraml-card-img-rank">
                <span>Rank: </span>
                <span>0000</span>
              </div>
            </div>
            <div className="stakeverse-noraml-card-text-div">
              <div className="stakeverse-noraml-card-text-div-title">
                Miniverse #0000
              </div>
              <div className="stakeverse-noraml-card-text-div-main">
                <div className="stakeverse-noraml-card-text-div-main-earned">
                  <span>Earned:</span>
                  <div className="stakeverse-noraml-card-text-div-main-earned-snowflake">
                    <span>6343</span>
                    <img src={snowflake} alt="Snowflakes" />
                  </div>
                </div>
                <div className="stakeverse-noraml-card-text-div-main-progressbar">
                  4/7 Days
                </div>
              </div>
            </div>
          </div>
          <div className="stakeverse-normal-card">
            <div className="stakeverse-noraml-card-img-div">
              <img src={nftFace1} alt="nft" />
              <div className="stakeverse-noraml-card-img-rank">
                <span>Rank: </span>
                <span>0000</span>
              </div>
            </div>
            <div className="stakeverse-noraml-card-text-div">
              <div className="stakeverse-noraml-card-text-div-title">
                Miniverse #0000
              </div>
              <div className="stakeverse-noraml-card-text-div-main">
                <div className="stakeverse-noraml-card-text-div-main-earned">
                  <span>Earned:</span>
                  <div className="stakeverse-noraml-card-text-div-main-earned-snowflake">
                    <span>6343</span>
                    <img src={snowflake} alt="Snowflakes" />
                  </div>
                </div>
                <div className="stakeverse-noraml-card-text-div-main-progressbar">
                  4/7 Days
                </div>
              </div>
            </div>
          </div>
          <div className="stakeverse-normal-card">
            <div className="stakeverse-noraml-card-img-div">
              <img src={nftFace1} alt="nft" />
              <div className="stakeverse-noraml-card-img-rank">
                <span>Rank: </span>
                <span>0000</span>
              </div>
            </div>
            <div className="stakeverse-noraml-card-text-div">
              <div className="stakeverse-noraml-card-text-div-title">
                Miniverse #0000
              </div>
              <div className="stakeverse-noraml-card-text-div-main">
                <div className="stakeverse-noraml-card-text-div-main-earned">
                  <span>Earned:</span>
                  <div className="stakeverse-noraml-card-text-div-main-earned-snowflake">
                    <span>6343</span>
                    <img src={snowflake} alt="Snowflakes" />
                  </div>
                </div>
                <div className="stakeverse-noraml-card-text-div-main-progressbar">
                  4/7 Days
                </div>
              </div>
            </div>
          </div>
          <div className="stakeverse-normal-card">
            <div className="stakeverse-noraml-card-img-div">
              <img src={nftFace1} alt="nft" />
              <div className="stakeverse-noraml-card-img-rank">
                <span>Rank: </span>
                <span>0000</span>
              </div>
            </div>
            <div className="stakeverse-noraml-card-text-div">
              <div className="stakeverse-noraml-card-text-div-title">
                Miniverse #0000
              </div>
              <div className="stakeverse-noraml-card-text-div-main">
                <div className="stakeverse-noraml-card-text-div-main-earned">
                  <span>Earned:</span>
                  <div className="stakeverse-noraml-card-text-div-main-earned-snowflake">
                    <span>6343</span>
                    <img src={snowflake} alt="Snowflakes" />
                  </div>
                </div>
                <div className="stakeverse-noraml-card-text-div-main-progressbar">
                  4/7 Days
                </div>
              </div>
            </div>
          </div>
          <div className="stakeverse-normal-card">
            <div className="stakeverse-noraml-card-img-div">
              <img src={nftFace1} alt="nft" />
              <div className="stakeverse-noraml-card-img-rank">
                <span>Rank: </span>
                <span>0000</span>
              </div>
            </div>
            <div className="stakeverse-noraml-card-text-div">
              <div className="stakeverse-noraml-card-text-div-title">
                Miniverse #0000
              </div>
              <div className="stakeverse-noraml-card-text-div-main">
                <div className="stakeverse-noraml-card-text-div-main-earned">
                  <span>Earned:</span>
                  <div className="stakeverse-noraml-card-text-div-main-earned-snowflake">
                    <span>6343</span>
                    <img src={snowflake} alt="Snowflakes" />
                  </div>
                </div>
                <div className="stakeverse-noraml-card-text-div-main-progressbar">
                  4/7 Days
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stakeverse;
