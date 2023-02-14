import React from "react";
import "./ContentContentBlockSmall.css";

function ContentContentBlockSmall(props) {
  const { header, heLlWantToUseYo, className } = props;

  return (
    <div className={`content-content-block-small-1 ${className || ""}`}>
      <div className="content-block"></div>
      <div className="flex-col">
        <div className="flex-row-1">
          <div className="header-1 inter-semi-bold-black-16px">{header}</div>
          <div className="x8m-ago inter-normal-silver-14px">8m ago</div>
        </div>
        <div className="overlap-group-2">
          <p className="hell-want-to-use-yo inter-normal-black-14px">{heLlWantToUseYo}</p>
          <img className="divider-line" src="/img/divider-line.svg" alt="Divider Line" />
        </div>
      </div>
    </div>
  );
}

export default ContentContentBlockSmall;
