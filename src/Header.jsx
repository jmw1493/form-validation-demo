import React from "react";
import "./Header.css";
import CardLogo from "../images/card-logo.svg";
import CardFront from "../images/bg-card-front.png";
import CardBack from "../images/bg-card-back.png";
import HeaderBackground from "../images/bg-main-mobile.png";

const Header = (props) => {
  return (
    // <div className="header">
    <div>
      <div>
        <img className="header-background-image" src={HeaderBackground} />
      </div>

      <div className="cards-div">
        <div className="card-back-div">
          <img className="card-back" src={CardBack} />
          <p className="cvc-code">000</p>
        </div>

        <div className="card-front-div">
          <img className="card-front" src={CardFront} />
          <img className="card-logo" src={CardLogo} />
          <p className="cc-number">{props.number}</p>
          <div className="date-info">
            <p className="cc-name">{props.name.toUpperCase()}</p>
            <p className="cc-date">{props.month + "/" + props.year}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
