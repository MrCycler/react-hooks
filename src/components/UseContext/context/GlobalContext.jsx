import React, { useContext } from "react";

const GlobalContext = React.createContext(null);

export const GlobalContextProvider = (props) => {
  return (
    <GlobalContext.Provider value={{ color: "red", value: 2 }}>
      {props.children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error("GlobalContext provider is required");
  }
  return context;
};
