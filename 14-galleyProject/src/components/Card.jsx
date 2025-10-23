import React from "react";

const Card = (props) => {
  console.log(props);

  return (
    <div>
      <div className="h-40 w-44 overflow-hidden rounde-xl">
        <a href={props.elem.url} target="_blank" rel="noopener noreferrer">
          <img
            className="h-full w-full object-cover cursor-pointer"
            src={props.elem.download_url}
            alt="img"
          />
        </a>
      </div>
      <h2 className="font-bold text-lg">{props.elem.author}</h2>
    </div>
  );
};

export default Card;
