import "./App.css";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { actions } from "./store";

function App() {
  const [number, setNumber] = useState(0);

  const handleNumberChange = (e) => {
    setNumber(e.target.value);
  };
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const increment = () => {
    dispatch(actions.increment());
  };

  const submitNumber = () => {
    dispatch(actions.addby(parseInt(number)));
  };
  const decrement = () => {
    dispatch(actions.decrement());
  };
  return (
    <div className="mainContainer">
      <h1>Counter App</h1>
      <h2>{counter}</h2>
      <div className="buttons">
        <button onClick={increment} className="myBtn">
          Increment
        </button>
        <button onClick={decrement} className="myBtn">
          Decrement
        </button>
        <input
          className="input-counter"
          onChange={handleNumberChange}
          type="number"
          value={number}
          placeholder="Enter any number to add in the counter"
        />
        <button onClick={submitNumber} className="myBtn submit">
          Submit
        </button>
      </div>
    </div>
  );
}

export default App;
