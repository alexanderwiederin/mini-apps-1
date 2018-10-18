import React from 'react';
import ReactDOM from 'react-dom';
import Board from './board.jsx';

var BLANK = 0;
var RED = 1;
var YELLOW = 2;


class App extends React.Component {

  constructor() {
    super();

    this.width = 7;
    this.height = 6;
    this.state = {

      board: this.newBoard(this.height, this.width),

      playerOne: {
        turn: true,
        color: RED
      },

      playerTwo: {
      turn: false,
      color: YELLOW
      },
    };
    this.reset = this.reset.bind(this);
    
  }


  reset() {
    var playerOne = {
      turn: true,
      color: RED
    };

    var playerTwo = {
      turn: false,
      color: RED
    };

    var board = this.newBoard(this.height, this.width);
    this.setState({board, playerOne, playerTwo});
  }

  newBoard (height, width) {
    var board = [];
    for (var i = 0; i < height; i++) {
      var row = [];
        for (var j = 0; j < width; j++) {
          row.push(BLANK);
        }
      board.push(row);
    }
    return board;
  }

  render() {
    return (
      <div><Board board={this.state.board} /></div>
    )
  }

}


ReactDOM.render(<App />, document.getElementById('app'));


