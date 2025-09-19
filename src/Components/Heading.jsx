import React from 'react';
import Button from './Button';

const Heading = () => {
    return (
        <div className="flex flex-col justify-center items-center lg:w-2/3 w-full space-y-2">
          <Button btnName={'Fast, secure, hastle-free'}/>
          <h1 className="font-bold text-4xl text-center">
            Get Paid Faster Instant Cash <br></br> for Businesses!
          </h1>
          <p className="text-center text-base">
            Stop waiting months for credit card payments. CASA helps business
            owners access cash instantly by converting card transactions into
            immediate funds.
          </p>
        </div>
    );
};

export default Heading;