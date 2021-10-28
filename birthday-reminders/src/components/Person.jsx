import React from "react";
import ProfilePic from "./ProfilePic";

function Person(props) {
  return (
    <div>
      <div></div>
      <div className="Person">
        <ProfilePic img={props.img} />
        <div>
          <h2 className="Name">{props.name}</h2>
          <p className="Age">{props.age} years</p>
        </div>
      </div>
    </div>
  );
}

export default Person;
