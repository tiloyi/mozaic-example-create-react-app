import logo from "./logo.svg";
import "./App.css";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div class="container">
          <button type="button" class="mc-button">
            <span class="mc-button__label">Ceci est un bouton Mozaic!</span>
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
