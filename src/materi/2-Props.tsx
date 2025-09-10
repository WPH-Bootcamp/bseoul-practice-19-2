import React from "react";

interface Adress {
  street: string;
  city: string;
  zip: string;
}

type UserProfileProps = {
  name?: string;
  age: number;
  address: Adress;
};

const UserProfile: React.FC<UserProfileProps> = ({
  name = "Guest",
  age,
  address: { street, city, zip },
}) => {
  return (
    <div style={{ backgroundColor: "red", color: "white", width: "200px" }}>
      <h1>{name}</h1>
      <p>{age}</p>
      <h2>Address : </h2>
      <p>
        {street}, {city}, {zip}
      </p>
    </div>
  );
};

export default UserProfile;
