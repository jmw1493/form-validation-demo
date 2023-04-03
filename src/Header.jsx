import React from "react";
import './Header.css';

const Header = (props) => {
  return (
    <div className="header">
      <div className="stacked-cards">
        <div className="card-back">
          <div className="mag-strip"></div>
          <div className="cvc-panel">
            <p className="cvc-code">{props.cvc}</p>
          </div>
        </div>
        <div className="card-front">
          <div className="logos">
            <div className="card-logo"></div>
            <div className="card-logo-small"></div>
          </div>
          <p className="cc-number">{props.number}</p>
          <div className="cc-name-date">
            <p className="cc-name">{props.name}</p>
            <p className="cc-date">{props.month + "/" + props.year}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
