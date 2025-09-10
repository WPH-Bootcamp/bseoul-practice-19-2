import React from "react";

type User = { name: string; age: number };
type ParentProps = { dataDiri: User };

// Komponen pertama
export const PropDrilling: React.FC = () => {
  const user = { name: "Risky", age: 1 };
  return <Parent dataDiri={user} />;
};

// Komponen kedua
function Parent({ dataDiri }: ParentProps) {
  return <Child dataDiri={dataDiri} />;
}

// Komponen Ketiga
function Child({ dataDiri }: ParentProps) {
  return <GrandChild dataDiri={dataDiri} />;
}

// Komponen Keempat
function GrandChild({ dataDiri }: ParentProps) {
  return (
    <h1>
      Hello {dataDiri.name}, your age is : {dataDiri.age}
    </h1>
  );
}
