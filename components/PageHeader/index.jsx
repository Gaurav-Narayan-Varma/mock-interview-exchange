import React from "react";
import "./PageHeader.css";

function PageHeader(props) {
  const { settings, title, logout } = props;

  return (
    <div className="page-header">
      <div className="settings inter-medium-white-16px">{settings}</div>
      <h1 className="title">{title}</h1>
      <div className="logout inter-medium-white-16px">{logout}</div>
    </div>
  );
}

export default PageHeader;
