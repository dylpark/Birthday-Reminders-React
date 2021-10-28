import React from "react";
import Avatar from "./Avatar";

function Details(props) {
  return (
    <div>
      <div></div>
      <div>
        <h2 className="name">{props.name}</h2>
        <p className="age">{props.age}</p>
        <Avatar img={props.img} />
      </div>
    </div>
  );
}

export default Details;
