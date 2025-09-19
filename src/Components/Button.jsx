import React from 'react';

const Button = ({btnName}) => {
    return (
        <button>
            <span className="btn rounded-l-full rounded-r-full py-1 bg-green-200 px-4">
             {btnName}
            </span>
          </button>
    );
};

export default Button;