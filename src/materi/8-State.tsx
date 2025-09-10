import React, { useState } from "react";

const Counter: React.FC = () => {
  /* 
    Struktur State Functional Component:
        const [state, setState] = useState("nilai default")

    */
  const [count, setCount] = useState(0);
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
        <button onClick={() => setCount(count + 1)}>+</button>
        <button onClick={() => setCount(count - 1)}>-</button>
      </div>
    </div>
  );
};

export default Counter;
