import React, { useState, useEffect } from "react";
import "./App.css";

function CounterApp() {
  const [countNumber, setCountNumber] = useState(0);
  const [increaseValue, setIncreaseValue] = useState(1);
  const [isDecreaseMode, setIsDecreaseMode] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [background, setBackground] = useState("white");

  const handleButtonClick = () => {
    if (!isDecreaseMode) {
      const newCount = countNumber + increaseValue;
      setCountNumber(newCount);

      if (newCount === 10) {
        setIncreaseValue(10);
      } else if (newCount === 100) {
        setIncreaseValue(100);
      } else if (newCount >= 1000) {
        setIsDecreaseMode(true);
      }
    } else {
      const newCount = countNumber - increaseValue;
      setCountNumber(newCount);

      if (newCount === 100) {
        setIncreaseValue(10);
      } else if (newCount === 10) {
        setIncreaseValue(1);
      }
    }
  };

  useEffect(() => {
    setShowMessage(true);

    if (countNumber === 10 || countNumber === 100 || countNumber === 1000) {
      setShowMessage(true);
    }

    return () => {
      setShowMessage(false);
    };
  }, [countNumber]);

  useEffect(() => {
    if (countNumber === 10) {
      setBackground("#252201 ");
    } else if (countNumber === 100) {
      setBackground("#52f805");
    } else if (countNumber === 1000) {
      setBackground("#ff2d08");
    }
  }, [countNumber]);

  return (
    <div className="container" style={{ backgroundColor: background }}>
      {showMessage && (
        <div className="popup">
          {countNumber === 0 ? "Hello" : ` The Number Is ${countNumber}`}
        </div>
      )}

      <h1>Counter: {countNumber}</h1>
      <button onClick={handleButtonClick}>
        {isDecreaseMode ? "Decrease" : `Increase${increaseValue}`}
      </button>
    </div>
  );
}

export default CounterApp;
