import React from 'react';
import Row from './row.jsx';

var Board = (props) => {

  console.log(props.board);

  return (
    <div>

    {props.board.map((row) => {
     return (<span>Boardelemetn worked</span>)
    })}

    </div>
  )
}
  


export default Board;





