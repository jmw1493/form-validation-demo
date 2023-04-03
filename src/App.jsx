import React, { useState } from "react";
import "./App.css";
import Header from "./Header";
import Form from "./Form";
import ConfirmationPage from "./ConfirmationPage";

const App = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [cvc, setCvc] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);

  return (
    <div className="container">
      {formSubmitted ? (
        <ConfirmationPage
          name={name}
          setName={setName}
          number={number}
          setNumber={setNumber}
          month={month}
          setMonth={setMonth}
          year={year}
          setYear={setYear}
          cvc={cvc}
          setCvc={setCvc}
        />
      ) : (
        <div>
          <Header
            name={name}
            setName={setName}
            number={number}
            setNumber={setNumber}
            month={month}
            setMonth={setMonth}
            year={year}
            setYear={setYear}
            cvc={cvc}
            setCvc={setCvc}
          />
          <Form
            name={name}
            setName={setName}
            number={number}
            setNumber={setNumber}
            month={month}
            setMonth={setMonth}
            year={year}
            setYear={setYear}
            cvc={cvc}
            setCvc={setCvc}
            setFormSubmitted={setFormSubmitted}
          />
        </div>
      )}
    </div>
  );
};

export default App;
