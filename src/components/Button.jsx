import React from "react";

const Button = ({ styles }) => {
  return (
    <button type="button" className={`bg-blue-gradient  cursor-pointer w-[120px] h-[60px] rounded-[10px] ${styles} font-poppins font-medium text-[18px] text-primary outline-none feature-card`}> Get Started
    </button>
  );
};

export default Button;
