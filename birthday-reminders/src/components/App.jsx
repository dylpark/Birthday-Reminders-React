import React from "react";
import "./App.css";
import Person from "./Person";
import contacts from "../contacts";

const loadContacts = (contacts) => {
  return (
    <Person
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
      <header class="App-Header"></header>
      <div class="Column-One"></div>
      <div class="Column-Two">
        <div class="Card-Container">{contacts.map(loadContacts)}</div>
      </div>
      <div class="Column-Three"></div>
      <footer className="App-Footer"></footer>
    </div>
  );
}

export default App;
