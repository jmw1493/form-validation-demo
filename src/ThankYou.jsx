import React from "react";
import "./ThankYou.css";

const ThankYou = () => {
  return (
    <div className="confirmation">
      <div className="check-container">
        <span className="check">✓</span>
      </div>

      <p className="thankyou">THANK YOU!</p>
      <p className="details">We've added your card details</p>
      <button className="confirm-btn">Continue</button>
    </div>
  );
};

export default ThankYou;
