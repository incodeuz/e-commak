import React from "react";

const Input = ({
  type,
  width,
  height,
  placeholder,
  onChange,
  name,
  className,
}) => {
  return (
    <input
      type={type}
      name={name}
      style={{ width, height }}
      placeholder={placeholder}
      onChange={onChange}
      className={`${className} input`}
    />
  );
};

export default Input;
