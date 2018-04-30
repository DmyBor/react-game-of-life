import React, { Component } from 'react';

import TopMenu from './TopMenu.jsx';
import Board from './Board.jsx';
import BottomMenu from './BottomMenu.jsx';

class Game extends Component {
  render () {
    return (
      <div className="game">
        <TopMenu />
        <Board />
        <BottomMenu />
      </div> 
    );
  }
}

export default Game;