import React from "react";
import { Formik } from "formik";
import "./Form.css";

const Form = (props) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    props.setFormSubmitted(true);
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <label className="cardholder-name" htmlFor="name">
          CARDHOLDER NAME
        </label>
        <input
          type="text"
          id="name"
          value={props.name}
          placeholder="e.g. Jane Appleseed"
          onChange={(event) => {
            props.setName(event.target.value);
          }}
        />

        <label htmlFor="cardNumber">CARD NUMBER</label>
        <input
          type="text"
          id="number"
          maxLength={19}
          value={props.number}
          placeholder="e.g. 1234 5678 9123 0000"
          onChange={(event) => {
            const { value } = event.target;
            props.setNumber(
              value
                .replace(/\s/g, "")
                .match(/.{1,4}/g)
                ?.join(" ")
            );
          }}
        />

        <div className="security-details">
          <div className="security-details-row">
            <label htmlFor="expmonth">EXP. DATE</label>
            <input
              type="text"
              id="month"
              maxLength={2}
              value={props.month}
              placeholder="MM"
              onChange={(event) => {
                props.setMonth(event.target.value);
              }}
            />
          </div>

          <div className="security-details-row">
            <label htmlFor="expyear">(MM/YY)</label>
            <input
              type="text"
              id="year"
              maxLength={2}
              value={props.year}
              placeholder="YY"
              onChange={(event) => {
                props.setYear(event.target.value);
              }}
            />
          </div>
          <div className="security-details-row">
            <label htmlFor="cvc">CVC</label>
            <input
              type="text"
              id="cvc"
              maxLength={3}
              value={props.cvc}
              placeholder="e.g. 123"
              onChange={(event) => {
                props.setCvc(event.target.value);
              }}
            />
          </div>
        </div>

        <button type="submit" className="confirm-btn">
          Confirm
        </button>
      </form>
    </div>
  );
};

export default Form;
