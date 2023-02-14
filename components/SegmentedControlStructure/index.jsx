import React from "react";
import "./SegmentedControlStructure.css";

function SegmentedControlStructure(props) {
  const { search, posts, photos } = props;

  return (
    <div className="segmented-control-structure">
      <div className="overlap-group1">
        <div className="search inter-medium-silver-16px">{search}</div>
        <div className="overlap-group-1">
          <div className="posts">{posts}</div>
        </div>
      </div>
      <div className="photos inter-medium-silver-16px">{photos}</div>
    </div>
  );
}

export default SegmentedControlStructure;
