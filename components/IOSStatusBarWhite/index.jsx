import React from "react";
import IOSStatusBarBlack from "../IOSStatusBarBlack";
import "./IOSStatusBarWhite.css";

function IOSStatusBarWhite(props) {
  const { iOSStatusBarBlackProps } = props;

  return (
    <div className="i-os-status-bar-white">
      <IOSStatusBarBlack leftSide={iOSStatusBarBlackProps.leftSide} battery={iOSStatusBarBlackProps.battery} />
    </div>
  );
}

export default IOSStatusBarWhite;
