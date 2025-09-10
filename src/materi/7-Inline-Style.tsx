import React from "react";

type Props = {
  name?: string;
};

const ExampleInlineStyle: React.FC<Props> = ({ name = "Unknown" }) => {
  return (
    <div
      style={{
        backgroundColor: "red",
        width: "200px",
        height: "200px",
        color: "white",
        lineHeight: "200px",
        textAlign: "center",
        fontSize: 25,
        fontWeight: "bold",
      }}
    >
      {name}
    </div>
  );
};

export default ExampleInlineStyle;
