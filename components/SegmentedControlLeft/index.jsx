import React from "react";
import SegmentedControlStructure from "../SegmentedControlStructure";
import "./SegmentedControlLeft.css";

function SegmentedControlLeft(props) {
  const { segmentedControlStructureProps } = props;

  return (
    <div className="segmented-control-left">
      <SegmentedControlStructure
        search={segmentedControlStructureProps.search}
        posts={segmentedControlStructureProps.posts}
        photos={segmentedControlStructureProps.photos}
      />
    </div>
  );
}

export default SegmentedControlLeft;
