import React from "react";
import "./App.css";

function ProfilePic(props) {
  return <img className="Circle-Avatar" src={props.img} alt="avatar_img" />;
}

export default ProfilePic;
