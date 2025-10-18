import React from "react";
import RightCard from "./RightCard";

const RightContent = (props) => {
  console.log(props.user);
  return (
    <div className="h-full p-4 w-2/3 flex overflow-x-auto gap-10 ">
      {props.user.map((elem, idx) => {
        return (
          <RightCard
            key={idx}
            id={idx}
            img={elem.img}
            tag={elem.tag}
            intro={elem.intro}
          />
        );
      })}
    </div>
  );
};

export default RightContent;
