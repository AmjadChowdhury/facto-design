import React from "react";
import Button from "../Components/Button";
import ButtonGreen from "../Components/ButtonGreen";
import Heading from "../Components/Heading";

const Banner = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center space-y-2">
        <Heading/>
        <ButtonGreen btnName={'Get Started'}/>
      </div>
    </div>
  );
};

export default Banner;
