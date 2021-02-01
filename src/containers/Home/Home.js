import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

export const Home = () => {
  return (
    <div className="home-wrapper">
      <h1 className="title">BOARD LIST SIMPLE APPLICATION</h1>
      <Link className="link-btn" to="/dashboard">
        GO TO DASHBOARD
      </Link>
    </div>
  );
};
