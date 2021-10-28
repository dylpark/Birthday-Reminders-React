import React from "react";
import "./App.css";
import Details from "./Details";
import contacts from "../contacts";

const loadContacts = (contacts) => {
  return (
    <Details
      id={contacts.id}
      name={contacts.name}
      age={contacts.age}
      img={contacts.imgURL}
    />
  );
};

function App() {
  return (
    <div className="App">
      <header class="App-header"></header>
      <div class="Column-One"></div>

      <div class="Card-Container">
        Card Container
        {contacts.map(loadContacts)}
      </div>
      <div class="Column-Three"></div>
      <footer className="App-footer"></footer>
    </div>
  );
}

export default App;
