import React, { createContext, useState } from "react";

export const ContextN6 = createContext([]);

const ContextApi = ({ children }) => {
  const [data, setData] = useState([]);

  return (
    <ContextN6.Provider value={[data, setData]}>{children}</ContextN6.Provider>
  );
};

export default ContextApi;
