import React from "react";

import "./App.css";

import CitySearch from "./CitySearch";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>SheCodes React Project 1</p>
      </header>

      <CitySearch />

      <footer className="App-footer">
        <p>
          <span className="Footer-emoji">🔗</span>{" "}
          <a
            className="App-link"
            href="/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open-sourced
          </a>{" "}
          Code |{" "}
          <a
            className="App-link"
            href="/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Robyn Young
          </a>{" "}
          <span className="Footer-emoji">👩‍💻</span>
        </p>
      </footer>
    </div>
  );
}

export default App;
