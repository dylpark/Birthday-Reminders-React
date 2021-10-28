import react from "react";

function Details(props) {
  return (
    <div>
      <p>{props.id}</p>
      <h2 className="name">{props.name}</h2>
      <p className="age">{props.age}</p>
    </div>
  );
}

export default Details;
