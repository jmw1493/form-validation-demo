import React from "react";
import "./Form.css";

const Form = (props) => {
  const formSubmitClickHandler = (event) => {
    event.preventDefault();
    props.setFormSubmitted(true);
  };

  return (
    <div className="form-container">
      <form onSubmit={formSubmitClickHandler}>
        <label className="cardholder-name" htmlFor="name">
          CARDHOLDER NAME
        </label>
        <input
          className="name"
          type="text"
          value={props.name}
          placeholder="e.g. Jane Appleseed"
          onChange={(event) => {
            props.setName(event.target.value);
            if (!event.target.value) {
              props.setErrorMessage("This field is required.");
            } else {
              props.setErrorMessage("");
            }
          }}
          // required
          style={{ border: props.errorMessage ? "1px solid red" : "" }}
        />
        {props.errorMessage && (
          <div style={{ color: "red" }}>{props.errorMessage}</div>
        )}
        {/* <p className="name-alert">Can't be blank</p> */}

        <label htmlFor="number">CARD NUMBER</label>
        <input
          className="number-input"
          type="text"
          value={props.number}
          placeholder="e.g. 1234 5678 9123 0000"
          onChange={(event) => {
            props.setNumber(event.target.value);
          }}
          required
        />
        {/* <p className="alert">Wrong format, numbers only</p> */}

        <div className="security-details">
          <div className="security-details-row">
            <label htmlFor="expmonth">EXP. DATE</label>
            <input
              className="date-input"
              type="text"
              maxLength="2"
              value={props.month}
              placeholder="MM"
              onChange={(event) => {
                props.setMonth(event.target.value);
              }}
              required
            />
            {/* <p className="alert">Can't be blank</p> */}
          </div>
          <div className="security-details-row">
            <label htmlFor="expyear">(MM/YY)</label>
            <input
              className="date-input"
              type="text"
              maxLength="2"
              value={props.year}
              placeholder="YY"
              onChange={(event) => {
                props.setYear(event.target.value);
              }}
              required
            />
            {/* <p className="alert">Can't be blank</p> */}
          </div>
          <div className="security-details-row">
            <label htmlFor="cvc">CVC</label>
            <input
              className="cvc-input"
              type="text"
              minLength="3"
              value={props.cvc}
              placeholder="e.g. 123"
              onChange={(event) => {
                props.setCvc(event.target.value);
              }}
              required
            />
            {/* <p className="alert">Can't be blank</p> */}
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
