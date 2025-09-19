import React from "react";
import Button from "../Components/Button";
import ButtonGreen from "../Components/ButtonGreen";
import Heading from "../Components/Heading";

const Banner = () => {
    const headingInfo = {
        h1Name : "Get Paid Faster Instant Cash  for Businesses!",
        pName : "Stop waiting months for credit card payments. CASA helps business owners access cash instantly by converting card transactions into immediate funds.",
        btn : "Fast, secure, hastle-free"

    }
  return (
    <div>
      <div className="flex flex-col justify-center items-center space-y-2">
        <Heading heading={headingInfo}/>
        <ButtonGreen btnName={'Get Started'}/>
      </div>
    </div>
  );
};

export default Banner;
