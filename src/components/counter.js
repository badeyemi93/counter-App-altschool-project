import React, { useState } from "react";
import NotFound from "./NotFound"; // Import the NotFound component

const Counter = () => {
  const [number, setNumber] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");
  const [show404, setShow404] = useState(false); // State to toggle 404 page

  function increment() {
    setNumber((previousValue) => previousValue + 1);
  }

  function reset() {
    setNumber(0);
  }

  function decrement() {
    setNumber((previousValue) => previousValue - 1);
  }

  function setValue() {
    const parsedValue = parseInt(inputValue, 10);
    if (!isNaN(parsedValue)) {
      setNumber(parsedValue);
      setError("");
    } else {
      setError("Invalid input. Please enter a valid number.");
    }
  }

  // Toggle the 404 page
  const toggle404Page = () => {
    setShow404(!show404);
  };

  return (
    <div className="container border p-5">
      <div className="d-flex justify-content-end">
        <button className="btn btn-sm btn-primary" onClick={toggle404Page}>
          404 Page
        </button>
      </div>

      {show404 ? (
        <NotFound />
      ) : (
        <>
          <h3>Your Count is:</h3>
          <h1>{number}</h1>
          <div>
            <button className="btn btn-sm btn-success m-2" onClick={increment}>
              Increment
            </button>
            <button className="btn btn-sm btn-warning m-2" onClick={reset}>
              Reset
            </button>
            <button className="btn btn-sm btn-danger m-2" onClick={decrement}>
              Decrement
            </button>
          </div>
          <div className="mt-3">
            <input
              type="number"
              className="form-control d-inline-block"
              placeholder="Enter number"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <button className="btn btn-sm btn-info ml-2" onClick={setValue}>
              Set Value
            </button>
            {error && <p className="text-danger">{error}</p>}
          </div>
        </>
      )}
    </div>
  );
};

export default Counter;
