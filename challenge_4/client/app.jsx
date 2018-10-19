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
    this.setPlayer = this.setPlayer.bind(this);
    
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

  setPlayer() {
    var player = undefined;

    if(this.playerOne.turn) {
      player = this.playerOne.color;
    } else {
      player = this.playerTwo.color;
    }

    return player;
  }

  render() {


    return (
      <div>
      <span><button type="button">column 1</button></span>
      <span><button type="button">column 2</button></span>
      <span><button type="button">column 3</button></span>
      <span><button type="button">column 4</button></span>
      <span><button type="button">column 5</button></span>
      <span><button type="button">column 6</button></span>
      <span><button type="button">column 7</button></span>
      <div><Board board={this.state.board} /></div>
      <div></div>
      <div>Player One: {this.state.playerOne.turn.toString()}</div>
      <div></div>
      <div>Player Two: {this.state.playerTwo.turn.toString()}</div>
      </div>
    )
  }

}


ReactDOM.render(<App />, document.getElementById('app'));


