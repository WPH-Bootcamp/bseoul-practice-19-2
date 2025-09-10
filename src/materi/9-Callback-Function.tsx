import React, { useState } from "react";

const CounterProblem: React.FC = () => {
  const [count, setCount] = useState(0); // Birth

  const wrongHandleIncrementTwice = () => {
    setCount(count + 1);
    setCount(count + 1);
  };

  const rightHandleIncrementTwice = () => {
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
  };

  const handleNilaiDefault = () => {
    setCount(0);
  };
  console.log(count);

  
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "30%",
        justifyContent: "center",
      }}
    >
      Count : {count}
      <div style={{ display: "flex" }}>
        <button onClick={wrongHandleIncrementTwice}>+ wrong</button>
        <button onClick={rightHandleIncrementTwice}>+ right</button>
        <button onClick={handleNilaiDefault}>nilai default</button>
      </div>
    </div>
  );
};

export default CounterProblem;
