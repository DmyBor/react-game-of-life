import React, { Component } from 'react';

import constants from './Constants.jsx'
import TopMenu from './TopMenu.jsx';
import Board from './Board.jsx';
import BottomMenu from './BottomMenu.jsx';

class Game extends Component {
  constructor(props) {
    super(props);

    this.state = {
      board: [],
      size: [constants.rows, constants.cols],
      timerId: constants.clearTimer,
      speed: constants.startSpeed,
      topMenu: {
        generation: constants.baseGeneration,
        button: constants.nonButton
      },
      bottomMenu: {
        header: constants.mediumField,
        footer: constants.fastButton
      },
    }

    this.startGame = this.startGame.bind(this);
    this.pauseGame = this.pauseGame.bind(this);
    this.clearGame = this.clearGame.bind(this);
    this.changeSpeed = this.changeSpeed.bind(this);
    this.setActiveCell = this.setActiveCell.bind(this);
    this.generateBoard = this.generateBoard.bind(this);
    this.startAlgorithm = this.startAlgorithm.bind(this);
  }

  componentWillMount() {
    this.generateBoard(constants.rows, constants.cols);
  }

  startAlgorithm() {
    let oldboard = this.state.board.slice();
    let newBoard = [];
    let rows = oldboard.length - 1;

    for (let i = 0 ; i <= rows; i++) {
      let prevRow = i === 0 ? rows : i - 1;
      let nextRow = i === rows ? 0 : i + 1;
      let cols = oldboard[i].length - 1;

      for (let j = 0; j <= cols; j++) {
        let prevCol = j === 0 ? cols : j - 1;
        let nextCol = j === cols ? 0 : j + 1;
        let neighbors = 0;

        if ( oldboard[prevRow][prevCol] === 'alive' || oldboard[prevRow][prevCol] === 'old' ) neighbors++;
        if ( oldboard[prevRow][j] === 'alive' || oldboard[prevRow][j] === 'old' ) neighbors++;
        if ( oldboard[prevRow][nextCol] === 'alive' || oldboard[prevRow][nextCol] === 'old' ) neighbors++;
        if ( oldboard[i][prevCol] === 'alive' || oldboard[i][prevCol] === 'old' ) neighbors++;
        if ( oldboard[i][nextCol] === 'alive' || oldboard[i][nextCol] === 'old' ) neighbors++;
        if ( oldboard[nextRow][prevCol] === 'alive' || oldboard[nextRow][prevCol] === 'old' ) neighbors++;
        if ( oldboard[nextRow][j] === 'alive' || oldboard[nextRow][j] === 'old' ) neighbors++;
        if ( oldboard[nextRow][nextCol] === 'alive' || oldboard[nextRow][nextCol] === 'old' ) neighbors++;

        if ( oldboard[i][j] === 'alive' || oldboard[i][j] === 'old' ) {
          if (newBoard[i] === undefined) newBoard[i] = [];          
          if (neighbors === 3 || neighbors === 2) newBoard[i][j] = 'old';
          else newBoard[i][j] = 'dead';
        } else {
          if (newBoard[i] === undefined) newBoard[i] = [];                    
          if (neighbors === 3) newBoard[i][j] = 'alive';
          else newBoard[i][j] = 'dead';
        }
      }
    }
    this.setState({
      board: newBoard
    })
  }

  startGame() {
    let timerId = setInterval( () => {
      this.startAlgorithm();
      this.setState(prevState => {
        return {
          topMenu: {
            generation: prevState.topMenu.generation+1,
            button: prevState.topMenu.button
          }
        }
      })
    }, this.state.speed);

    this.setState(prevState => {
      return {
        timerId: timerId,
        topMenu: {
          generation: prevState.topMenu.generation,
          button: constants.runButton
        }
      }
    })
  }

  pauseGame() {
    if (this.state.timerId === 0) return ;
    
    clearInterval(this.state.timerId)
    this.setState(prevState => {
      return {
        timerId: constants.clearTimer,
        topMenu: {
          generation: prevState.topMenu.generation,
          button: constants.pauseButton
        }
      }
    });
  }

  clearGame() {
    clearInterval(this.state.timerId);
    this.setState({
      timerId: constants.clearTimer,
      topMenu: {
        generation: constants.baseGeneration,
        button: constants.clearButton
      }
    });
    this.generateBoard(this.state.size[0], this.state.size[1]);
    setTimeout( () => this.setState(prevState => {
      return {
        topMenu: {
          generation: prevState.topMenu.generation,
          button: constants.nonButton
        }
      }
    }), 200);  
  }

  setActiveCell(row, cell) {
    let board = this.state.board;

    if (board[row][cell] === 'alive' || board[row][cell] === 'old') board[row][cell] = 'dead'
    else board[row][cell] = 'alive'
    this.setState({
      board: board
    });
  }

  changeSpeed(speed) {
    this.setState(prevState => {
      return {
        speed: speed,
        bottomMenu: {
          header: prevState.bottomMenu.header,
          footer: speed === constants.fast ? constants.fastButton : speed === constants.medium ? constants.mediumButton : constants.slowButton
        }
      }
    }, 
    () => {
      if (this.state.timerId !== constants.clearTimer ) {
        this.pauseGame();
        this.startGame();
      }
    });
  }

  generateBoard(rows, cols) {
    let board = [];
    for (let i = 0; i < cols; i++) {
      board[i] = [];
      for (let j = 0; j < rows; j++) {
        board[i][j] = 'dead';
      }
    }
    clearInterval(this.state.timerId);
    this.setState((prevState) => {
      return {
        board: board,
        size: [rows, cols],
        timerId: constants.clearTimer,
        topMenu: {
          generation: constants.baseGeneration,
          button: constants.nonButton
        },
        bottomMenu: {
          header: rows === 50 ? constants.smallField : rows === 70 ? constants.mediumField : constants.largeField,
          footer: prevState.bottomMenu.footer
        }
      }
    });
  }

  render () {
    return (
      <div className="game">
        <TopMenu 
          topPanel={this.state.topMenu}
          onStart={this.startGame}
          onPause = {this.pauseGame}
          onClear={this.clearGame}
        />
        <Board 
          board={this.state.board}
          setCell={this.setActiveCell}
          cell={this.state.bottomMenu.header === constants.smallField ? '12' : this.state.bottomMenu.header === constants.mediumField ? '11' : '8'}
        />
        <BottomMenu 
          changeField={this.generateBoard}
          changeSpeed={this.changeSpeed}
          bottomButtons={this.state.bottomMenu}
        />
      </div> 
    );
  }
}

export default Game;