import React, { useState } from "react";
import "./navbar.css";
import { Link, useLocation } from "react-router-dom";
import navTitle from "../../assets/images/nav-title.svg";
import bell from "../../assets/images/bell.svg";
import snowflake from "../../assets/images/snowflake.svg";
import mmIcon from "../../assets/images/mm-icon.svg";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgClose } from "react-icons/cg";

const Navbar = () => {
  const locator = useLocation();
  const [open, setOpen] = useState(0);
  return (
    <>
      <div className="navbar">
        <div className="nav-links">
          <Link
            to="/"
            className={
              locator.pathname === "/"
                ? "nav-active-state"
                : "nav-passive-state"
            }
          >
            About us
          </Link>
          <Link
            to="/minimarket"
            className={
              locator.pathname === "/minimarket"
                ? "nav-active-state"
                : "nav-passive-state"
            }
          >
            MiniMarket
          </Link>
          <Link
            to="/stakeverse"
            className={
              locator.pathname === "/stakeverse"
                ? "nav-active-state"
                : "nav-passive-state"
            }
          >
            Stakeverse
          </Link>
        </div>
        <div className="nav-title">
          <img src={navTitle} alt="Miniverse" />
        </div>
        <div className="nav-utils">
          <div className="nav-utils-notification">
            <img src={bell} alt="Notifications" />
          </div>
          <div className="nav-utils-coins">
            <span className="nav-utils-coins-text">400</span>
            <img src={snowflake} alt="Snowflakes" />
          </div>
          <div className="nav-utils-user">
            <span className="nav-utils-user-text">0xD44f...694</span>
            <img src={mmIcon} alt="MetaMask" />
          </div>
        </div>
      </div>
      <div className="mobile-nav">
        <div className="mob-nav-title">
          <img src={navTitle} alt="Miniverse" />
        </div>
        <div className="mob-nav-menu" onClick={() => setOpen(!open)}>
          {open ? <CgClose /> : <GiHamburgerMenu />}
        </div>
        <div className={open ? "mob-nav-menu-display" : "none"}>
          <div className="mob-nav-links">
            <Link
              to="/"
              className={
                locator.pathname === "/"
                  ? "nav-active-state"
                  : "nav-passive-state"
              }
            >
              About us
            </Link>
            <Link
              to="/minimarket"
              className={
                locator.pathname === "/minimarket"
                  ? "nav-active-state"
                  : "nav-passive-state"
              }
            >
              MiniMarket
            </Link>
            <Link
              to="/stakeverse"
              className={
                locator.pathname === "/stakeverse"
                  ? "nav-active-state"
                  : "nav-passive-state"
              }
            >
              Stakeverse
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
