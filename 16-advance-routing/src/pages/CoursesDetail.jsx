import React from "react";
import { useParams } from "react-router-dom";

const CoursesDetail = () => {

    const params = useParams();
    console.log(params);
    
  return (
    <div>
      <h1 className="absolute top-1/2 left-1/2 text-6xl font-bold underline -translate-y-1/2 -translate-x-1/2 text-white whitespace-nowrap uppercase">
              { params.id} Courses Detail
      </h1>
    </div>
  );
};

export default CoursesDetail;
