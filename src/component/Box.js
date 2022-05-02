import React from "react";

const Box = (props) => {
  console.log(props);
  return (
    <div className="box">
      <h1>{props.title}</h1>
      <img className="img" src={props.item && props.item.img} />
      <h2>누가이겼나?</h2>
    </div>
  );
};

export default Box;
