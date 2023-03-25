import React from "react";

const Button = ({ children, type }) => {
  return (
    <button type="submit" className="button">
      {children}
    </button>
  );
};

export default Button;
