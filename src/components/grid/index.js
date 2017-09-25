import React from 'react';

import './style.css';
import Hexagon from './../hexagon';

const Grid = () => {
  const horizontalSize = 1;
  const verticalSize = 1;


  const renderHex = (evenOdd) => {
    let result = [];

    for (let x = 1; x <= horizontalSize; x++) {
      result.push(<Hexagon/>);
    }

    return result
  };

  const renderRows = () => {
    let result = [];

    for (let x = 1; x <= verticalSize; x++) {
      result.push(
        renderHex()
      );
    }

    return result
  };


  return (
    <div id="grid" className="clear">
      {renderRows()}
    </div>
  )
};

export default Grid;
