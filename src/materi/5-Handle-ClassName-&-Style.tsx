import React, { type CSSProperties, type ReactNode } from "react";
import clsx from "clsx";
import styles from "./css/CustomButton.module.css";

type CustomButtonProps = {
  children: ReactNode;
  size: "small" | "medium" | "large";
  variant: "primary" | "secondary" | "red";
  disabled?: boolean;
  className?: string;
  style?: CSSProperties;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

type CustomInputProps = React.InputHTMLAttributes<HTMLInputElement>;
type CustomFormProps = React.FormHTMLAttributes<HTMLFormElement>;
type CustomTableProps = React.TableHTMLAttributes<HTMLTableElement>;

const CustomButton: React.FC<CustomButtonProps> = ({
  children,
  size,
  variant,
  className,
  ...rest
}) => {
  return (
    <>
      <button
        className={clsx(
          styles.button,
          styles[size],
          styles[variant],
          className
        )}
        {...rest}
      >
        {children}
      </button>
    </>
  );
};

export default CustomButton;
