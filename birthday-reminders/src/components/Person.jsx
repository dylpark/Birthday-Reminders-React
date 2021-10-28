import React from "react";
import ProfilePic from "./ProfilePic";

function Person(props) {
  return (
    <div>
      <div></div>
      <div className="Details">
        <h2 className="Name">{props.name}</h2>
        <p className="Age">{props.age} years</p>
        <ProfilePic img={props.img} />
      </div>
    </div>
  );
}

export default Person;
