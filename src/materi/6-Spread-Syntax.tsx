import React from "react";

type CustomCardProps = {
  product?: string;
  price: number;
  status: "available" | "unavailable";
};

const CustomCard: React.FC<CustomCardProps> = ({
  product = "None",
  price,
  status,
}) => {
  return (
    <div>
      {product}, {price}, {status}
    </div>
  );
};

export default CustomCard;
