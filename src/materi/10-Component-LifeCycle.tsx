import React, { useState, useEffect } from "react";

const ComponentLifeCycle: React.FC = () => {
  const [second, setSecond] = useState(0); // Mounting Phase

  useEffect(() => {
    console.log("Mouted (Birth)");
    const id = setInterval(() => setSecond((s) => s + 1), 1000);

    return () => {
      console.log("Unmouted (Death)");
      clearInterval(id);
    };
  }, []);

  useEffect(() => {
    console.log("Updating (Growth)", second);
  }, [second]);
  return <div>Time : {second}</div>;
};

export default ComponentLifeCycle;
