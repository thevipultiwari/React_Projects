import React from "react";
import RightCardContent from "./RightCardContent";

const RightCard = (props) => {
    console.log(props.id)
  return (
    <div className="h-110 shrink-0 overflow-hidden w-63 500 rounded-3xl relative">
      <img
        className="h-full w-full object-cover"
        src={props.img}
        alt="prof-1"
      />
      <RightCardContent id={props.id} tag={props.tag} intro={props.intro} />
    </div>
  );
};

export default RightCard;
