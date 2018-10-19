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
    this.getColumn = this.getColumn.bind(this);
    this.setPiece = this.setPiece.bind(this);
    
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

    if(this.state.playerOne.turn) {
      player = this.state.playerOne.color;
    } else {
      player = this.state.playerTwo.color;
    }

    return player;
  }

  getAllRows() {
    return this.state.board;
  }

  getColumn(targetColumn) {
    var result = [];
    this.state.board.forEach((row) => {
      row.forEach((piece, column) => {
        targetColumn === column ? result.push(piece) : null;
      });
    });
    return result;
  }

  setPiece(targetColumnNumber) {
    var player = this.setPlayer();
    console.log('player ', player);
    var board = this.getAllRows();
    var playerOne = this.state.playerOne;
    var playerTwo = this.state.playerOne;

    var targetColumn = this.getColumn(targetColumnNumber);

    for (var i = 0; i < targetColumn.length; i++) {
      if (i === targetColumn.length - 1 && targetColumn[i] === BLANK) {
        board[i][targetColumnNumber] = player;
      } else if (targetColumn[i] !== BLANK) {
        board[i - 1][targetColumnNumber] = player;
        console.log(board);
        break;
      }
    }

    playerOne.turn = !playerOne.turn;
    console.log('playerOne', playerOne);
    playerTwo.turn = !playerTwo.turn;
    console.log('playerTwo', playerTwo);
    this.setState({playerOne, playerTwo, board});
  }

  render() {


    return (
      <div>
      <span><button type="button" onClick={() => this.setPiece(0)}>column 0</button></span>
      <span><button type="button" onClick={() => this.setPiece(1)}>column 1</button></span>
      <span><button type="button" onClick={() => this.setPiece(2)}>column 2</button></span>
      <span><button type="button" onClick={() => this.setPiece(3)}>column 3</button></span>
      <span><button type="button" onClick={() => this.setPiece(4)}>column 4</button></span>
      <span><button type="button" onClick={() => this.setPiece(5)}>column 5</button></span>
      <span><button type="button" onClick={() => this.setPiece(6)}>column 6</button></span>
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


