import "./App.css";
import Details from "./Details";
import Avatar from "./Avatar";

function App() {
  return (
    <div className="App">
      <header class="App-header"></header>
      <div class="Column-One"></div>

      <div class="Card-Container">
        Card Container
        <Details name="Dylan" age="20" />
        <Avatar img="" />
      </div>

      <div class="Column-Three"></div>
      <footer className="App-footer"></footer>
    </div>
  );
}

export default App;
