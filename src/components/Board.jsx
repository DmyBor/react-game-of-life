import React, { Component } from 'react';

import '../styles/board.css';

class Board extends Component {
  constructor(props) {
    super(props);

    this.state = {
      board: this.props.board
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      board: nextProps.board
    })
  }

  render () {
    return (
      <table className="board">
        <tbody>
          {
            this.state.board.map( (item, index) => (
                <tr key={index}>
                  {item.map( (cell, cellIndex) => (
                    <td
                      style={{
                        width: this.props.cell + 'px',
                        height: this.props.cell +  'px'
                      }}
                      onClick={() => this.props.setCell(index, cellIndex)}
                      key={cellIndex}
                      className={`board__cell ${cell}`}
                    ></td>
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