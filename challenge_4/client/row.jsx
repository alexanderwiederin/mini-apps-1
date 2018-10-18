import React from 'react';
import Cell from './cell.jsx';

var Row = ({row}) => {
  {row.map((cell) => {
    <div><Cell cell={cell} /></div>
  })}
}

export default Row;