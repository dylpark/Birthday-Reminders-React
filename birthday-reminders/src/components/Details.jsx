import React from "react";
import Avatar from "./Avatar";

function Details(props) {
  return (
    <div>
      <div></div>
      <div className="Details">
        <h2 className="Name">{props.name}</h2>
        <p className="Age">{props.age}</p>
        <Avatar img={props.img} />
      </div>
    </div>
  );
}

export default Details;
