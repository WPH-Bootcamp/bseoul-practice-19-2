// 1. Class Component
import React from "react";

interface GreetingWithClassProps {
  name?: string;
}

export class GreetingWithClass extends React.Component<GreetingWithClassProps> {
  static defaultProps = {
    name: "Unknown",
  };
  render() {
    return <h1>Hello , {this.props.name}</h1>;
  }
}

// 2. Functional Component
type GreetingWithFunctionProps = {
  name?: string;
  age?: number;
};

export const GreetingWithFunction: React.FC<GreetingWithFunctionProps> = ({
  name = "Unknown",
  age = 20,
}) => {
  return (
    <h1>
      Hello, {name} {age}
    </h1>
  );
};

// FC = Functional Component

interface MainComponentProps {
  name?: string;
  age?: number;
}

const MainComponent: React.FC<MainComponentProps> = ({ name, age }) => {
  return (
    <>
      <GreetingWithClass name={name} />
      <GreetingWithFunction name={name} age={age} />
    </>
  );
};

export default MainComponent;
