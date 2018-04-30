import React, { Component } from 'react';

import '../styles/board.css';

class Board extends Component {
  constructor(props) {
    super(props);

    this.board = [];
    const rows = 70;
    const cols = 50;

    for (let i = 0; i < cols; i++) {
      this.board[i] = [];
      for (let j = 0; j < rows; j++) {
        if (j % 29 === 0 && i % 13 === 0) this.board[i][j] = 'alive';
        else this.board[i][j] = 'dead';
      }
    }

  }

  render () {
    return (
      <table className="board">
        <tbody>
          {
            this.board.map( (item, index) => (
                <tr key={index}>
                  {item.map( (cell, cellIndex) => (
                    <td key={cellIndex} className={`board__cell ${cell}`}></td>
                  ))}
                </tr>
            ))
          }
        </tbody>
      </table>
    );
  }
}

export default Board;