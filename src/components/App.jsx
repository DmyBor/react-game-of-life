import React, { Component } from 'react';

import Game from "./Game.jsx";

import '../styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <a className="App-header_link" rel="noopener noreferrer" href="https://www.math.cornell.edu/~lipa/mec/lesson6.html" target="_blank">
            ReactJS Game of Life (click to learn more)
          </a>
        </header>
        
        <Game />

        <footer className="App-footer">
          "Feel free to add cells while it's running. The cells in light red are younger, dark red are older. Enjoy!"
        </footer>
      </div>
    );
  }
}

export default App;
