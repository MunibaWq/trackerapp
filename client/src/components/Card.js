import React from "react";
import "./Card.css";

const Card = () => {
  return (
    <div className="container">
      <div>
        <h5>IP Address</h5>
        <p>IP Address goes here</p>
      </div>
      <hr />
      <div>
        <h5>Location</h5>
        <p>Location goes here</p>
      </div>
      <hr />
      <div>
        <h5>Time Zone</h5>
        <p>Time Zone goes here</p>
      </div>
      <hr />
      <div>
        <h5>ISP</h5>
        <p>ISP goes here</p>
      </div>
    </div>
  );
};

export { Card };
