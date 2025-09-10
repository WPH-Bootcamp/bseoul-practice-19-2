import React, { type ButtonHTMLAttributes } from "react";

type ButtonProps = {
  children: React.ReactNode;
};

type Props = ButtonProps & ButtonHTMLAttributes<HTMLButtonElement>;

const ButtonCustom: React.FC<Props> = ({ children, ...rest }) => {
  return <button {...rest}>{children}</button>;
};

export default ButtonCustom;
