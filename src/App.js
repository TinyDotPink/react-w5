import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Weather from "./Weather.js";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>React Weather App</h1>
        <Weather defaultCity="Berlin" />
        <footer>
          This project was coded by Christine and is
          <a
            href="https://github.com/TinyDotPink/react-w5"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            open-sourced.
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
