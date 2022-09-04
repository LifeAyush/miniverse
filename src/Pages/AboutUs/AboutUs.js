import React, { useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import "./aboutUs.css";
import aboutusHero from "../../assets/images/aboutus-hero.svg";
import aboutusGraph from "../../assets/images/aboutus-graph.svg";
import aboutusEx from "../../assets/images/aboutus-exchange.svg";
import salesImg from "../../assets/images/salesbox-img.svg";
import snowflake from "../../assets/images/snowflake.svg";

const AboutUs = () => {
  const [more, setMore] = useState(1);
  return (
    <div className="AboutUs-container">
      <div className="imported-navbar">
        <Navbar />
      </div>
      <div className="AboutUs-Hero">
        <div className="AboutUs-Hero-img-div">
          <img
            src={aboutusHero}
            alt="Globe"
            className="AboutUs-Hero-img-div-img"
          />
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
          <p
            className={
              more
                ? "AboutUs-Hero-Text-div-para-mob elipses"
                : "AboutUs-Hero-Text-div-para-mob"
            }
            id="para"
            onClick={() => setMore(!more)}
          >
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
            <img
              src={aboutusEx}
              alt="Exchange"
              className="AboutUs-main-stat-box-img"
            />
            <div className="AboutUs-main-stat-box-text">
              <span className="AboutUs-main-stat-box-text-title">8999</span>
              <span className="AboutUs-main-stat-box-text-desc">Items</span>
            </div>
          </div>
          <div className="AboutUs-main-stat-box">
            <img
              src={aboutusEx}
              alt="Exchange"
              className="AboutUs-main-stat-box-img"
            />
            <div className="AboutUs-main-stat-box-text">
              <span className="AboutUs-main-stat-box-text-title">8999</span>
              <span className="AboutUs-main-stat-box-text-desc">Items</span>
            </div>
          </div>
          <div className="AboutUs-main-stat-box">
            <img
              src={aboutusEx}
              alt="Exchange"
              className="AboutUs-main-stat-box-img"
            />
            <div className="AboutUs-main-stat-box-text">
              <span className="AboutUs-main-stat-box-text-title">8999</span>
              <span className="AboutUs-main-stat-box-text-desc">Items</span>
            </div>
          </div>
          <div className="AboutUs-main-stat-box">
            <img
              src={aboutusEx}
              alt="Exchange"
              className="AboutUs-main-stat-box-img"
            />
            <div className="AboutUs-main-stat-box-text">
              <span className="AboutUs-main-stat-box-text-title">8999</span>
              <span className="AboutUs-main-stat-box-text-desc">Items</span>
            </div>
          </div>
        </div>
      </div>
      <div className="AboutUs-recent-sales">
        <span className="AboutUs-recent-sales-title">Recent Sales</span>
        <div className="AboutUs-sales-box">
          <img src={salesImg} alt="Nft" />
          <div className="AboutUs-sales-box-text">
            <div className="AboutUs-sales-box-text-title">
              Miniverse Globe #0000
            </div>
            <div className="AboutUs-sales-box-text-desc">@pragyam</div>
          </div>
          <div className="AboutUs-sales-box-snowflakes">
            <div className="AboutUs-sales-box-snowflakes-text">0000</div>
            <img src={snowflake} alt="Snowflakes" />
          </div>
        </div>
        <div className="AboutUs-sales-box">
          <img src={salesImg} alt="Nft" />
          <div className="AboutUs-sales-box-text">
            <div className="AboutUs-sales-box-text-title">
              Miniverse Globe #0000
            </div>
            <div className="AboutUs-sales-box-text-desc">@pragyam</div>
          </div>
          <div className="AboutUs-sales-box-snowflakes">
            <div className="AboutUs-sales-box-snowflakes-text">0000</div>
            <img src={snowflake} alt="Snowflakes" />
          </div>
        </div>
        <div className="AboutUs-sales-box">
          <img src={salesImg} alt="Nft" />
          <div className="AboutUs-sales-box-text">
            <div className="AboutUs-sales-box-text-title">
              Miniverse Globe #0000
            </div>
            <div className="AboutUs-sales-box-text-desc">@pragyam</div>
          </div>
          <div className="AboutUs-sales-box-snowflakes">
            <div className="AboutUs-sales-box-snowflakes-text">0000</div>
            <img src={snowflake} alt="Snowflakes" />
          </div>
        </div>
        <div className="AboutUs-sales-box">
          <img src={salesImg} alt="Nft" />
          <div className="AboutUs-sales-box-text">
            <div className="AboutUs-sales-box-text-title">
              Miniverse Globe #0000
            </div>
            <div className="AboutUs-sales-box-text-desc">@pragyam</div>
          </div>
          <div className="AboutUs-sales-box-snowflakes">
            <div className="AboutUs-sales-box-snowflakes-text">0000</div>
            <img src={snowflake} alt="Snowflakes" />
          </div>
        </div>
        <div className="AboutUs-sales-box">
          <img src={salesImg} alt="Nft" />
          <div className="AboutUs-sales-box-text">
            <div className="AboutUs-sales-box-text-title">
              Miniverse Globe #0000
            </div>
            <div className="AboutUs-sales-box-text-desc">@pragyam</div>
          </div>
          <div className="AboutUs-sales-box-snowflakes">
            <div className="AboutUs-sales-box-snowflakes-text">0000</div>
            <img src={snowflake} alt="Snowflakes" />
          </div>
        </div>
        <div className="AboutUs-sales-box">
          <img src={salesImg} alt="Nft" />
          <div className="AboutUs-sales-box-text">
            <div className="AboutUs-sales-box-text-title">
              Miniverse Globe #0000
            </div>
            <div className="AboutUs-sales-box-text-desc">@pragyam</div>
          </div>
          <div className="AboutUs-sales-box-snowflakes">
            <div className="AboutUs-sales-box-snowflakes-text">0000</div>
            <img src={snowflake} alt="Snowflakes" />
          </div>
        </div>
        <div className="AboutUs-sales-box">
          <img src={salesImg} alt="Nft" />
          <div className="AboutUs-sales-box-text">
            <div className="AboutUs-sales-box-text-title">
              Miniverse Globe #0000
            </div>
            <div className="AboutUs-sales-box-text-desc">@pragyam</div>
          </div>
          <div className="AboutUs-sales-box-snowflakes">
            <div className="AboutUs-sales-box-snowflakes-text">0000</div>
            <img src={snowflake} alt="Snowflakes" />
          </div>
        </div>
        <div className="AboutUs-sales-box">
          <img src={salesImg} alt="Nft" />
          <div className="AboutUs-sales-box-text">
            <div className="AboutUs-sales-box-text-title">
              Miniverse Globe #0000
            </div>
            <div className="AboutUs-sales-box-text-desc">@pragyam</div>
          </div>
          <div className="AboutUs-sales-box-snowflakes">
            <div className="AboutUs-sales-box-snowflakes-text">0000</div>
            <img src={snowflake} alt="Snowflakes" />
          </div>
        </div>
        <div className="AboutUs-sales-box">
          <img src={salesImg} alt="Nft" />
          <div className="AboutUs-sales-box-text">
            <div className="AboutUs-sales-box-text-title">
              Miniverse Globe #0000
            </div>
            <div className="AboutUs-sales-box-text-desc">@pragyam</div>
          </div>
          <div className="AboutUs-sales-box-snowflakes">
            <div className="AboutUs-sales-box-snowflakes-text">0000</div>
            <img src={snowflake} alt="Snowflakes" />
          </div>
        </div>
        <div className="AboutUs-sales-box">
          <img src={salesImg} alt="Nft" />
          <div className="AboutUs-sales-box-text">
            <div className="AboutUs-sales-box-text-title">
              Miniverse Globe #0000
            </div>
            <div className="AboutUs-sales-box-text-desc">@pragyam</div>
          </div>
          <div className="AboutUs-sales-box-snowflakes">
            <div className="AboutUs-sales-box-snowflakes-text">0000</div>
            <img src={snowflake} alt="Snowflakes" />
          </div>
        </div>
        <div className="AboutUs-sales-box">
          <img src={salesImg} alt="Nft" />
          <div className="AboutUs-sales-box-text">
            <div className="AboutUs-sales-box-text-title">
              Miniverse Globe #0000
            </div>
            <div className="AboutUs-sales-box-text-desc">@pragyam</div>
          </div>
          <div className="AboutUs-sales-box-snowflakes">
            <div className="AboutUs-sales-box-snowflakes-text">0000</div>
            <img src={snowflake} alt="Snowflakes" />
          </div>
        </div>
        <button className="AboutUs-recent-sales-button">See All</button>
      </div>
    </div>
  );
};

export default AboutUs;
