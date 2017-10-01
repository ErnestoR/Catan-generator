import React from 'react';

import './style.css';
import Hexagon from './../hexagon';

const Grid = () => {
  const size = 3;

  const renderHex = index => {
    const hex = [];
    const cycles = 2 * size - 1 - Math.abs(size - index);


    for (let x = 1; x <= cycles; x++) {
      hex.push(
        <Hexagon key={x}/>
      )
    }

    return hex;
  };

  const renderRow = () => {
    let row = [];

    for (let x = 1; x <= size * 2 - 1; x++) {
      row.push(
        (
          <div className="row" key={x}>
            {renderHex(x)}
          </div>
        )
      )
    }

    return row;
  };

  return (
    <div id="grid" className="clear">
      {renderRow()}
    </div>
  )
};

export default Grid;
