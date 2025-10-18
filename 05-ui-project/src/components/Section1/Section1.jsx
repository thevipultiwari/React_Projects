import React from "react";
import LeftContent from "./LeftContent";
import RightContent from "./RightContent";

const Section1 = (props) => {
  return (
    <div className="flex items-center gap-8">
      <LeftContent />
      <RightContent user={props.user} />
    </div>
  );
};

export default Section1;
