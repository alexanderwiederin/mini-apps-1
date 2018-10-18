import React from 'react';
import Row from './row.jsx';

var Board = ({board}) => {

  console.log(board);

  return (
    <div>
    {board.map((row, i) => {
     return (
      <div>
        <Row row={row} key={i.toString()} />
      </div>)
    })}
    </div>
  )
}
  


export default Board;





