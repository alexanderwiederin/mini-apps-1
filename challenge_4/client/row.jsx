import React from 'react';
import Cell from './cell.jsx';

var Row = ({row}) => {
  return (
    <div>
    <span>
    {row.map((cell) => {
      return <Cell cell={cell} />
    })}
    </span>
    </div>

  )
}

export default Row;