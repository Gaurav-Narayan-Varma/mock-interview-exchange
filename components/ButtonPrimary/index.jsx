import React from "react";
import "./ButtonPrimary.css";

function ButtonPrimary(props) {
  const { children, className } = props;

  return (
    <div className={`button-primary ${className || ""}`}>
      <div className="i-love-it inter-semi-bold-white-16px">{children}</div>
    </div>
  );
}

export default ButtonPrimary;
