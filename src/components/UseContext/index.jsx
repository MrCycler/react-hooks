import React from "react";
import { useGlobalContext } from "./context/GlobalContext";
import "./styles.css";

const UseContext = () => {
  const { color, value } = useGlobalContext();

  return (
    <div className="use_context">
      <h1>UseContext</h1>
      <div style={{ color: color }}>{value}</div>
    </div>
  );
};

export default UseContext;
