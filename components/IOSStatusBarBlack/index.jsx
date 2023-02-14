import React from "react";
import "./IOSStatusBarBlack.css";

function IOSStatusBarBlack(props) {
  const { leftSide, battery } = props;

  return (
    <div className="i-os-status-bar-black">
      <img className="left-side" src={leftSide} alt="Left Side" />
      <div className="overlap-group">
        <img className="notch" src="/img/notch.svg" alt="Notch" />
        <div className="right-side">
          <img className="mobile-signal" src="/img/mobile-signal.svg" alt="Mobile Signal" />
          <img className="icon-signal" src="/img/wifi.svg" alt="icon-signal" />
          <img className="battery" src={battery} alt="Battery" />
        </div>
      </div>
    </div>
  );
}

export default IOSStatusBarBlack;
