import React from "react";
import ThankYou from "./ThankYou";
import Header from "./Header";

const ConfirmationPage = (props) => {
  return (
    <div>
      <Header
        name={props.name}
        setName={props.setName}
        number={props.number}
        setNumber={props.setNumber}
        month={props.month}
        setMonth={props.setMonth}
        year={props.year}
        setYear={props.setYear}
        cvc={props.cvc}
        setCvc={props.setCvc}
      />
      <ThankYou />
    </div>
  );
};

export default ConfirmationPage;
