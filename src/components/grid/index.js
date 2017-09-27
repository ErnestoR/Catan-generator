import React from 'react';

import './style.css';
import Hexagon from './../hexagon';

const Grid = () => {
  const horizontalSize = 4;
  const verticalSize = 4;


  const renderColumns = (evenOdd) => {
    let result = [];

    for (let x = 1; x <= horizontalSize; x++) {
      result.push(<Hexagon/>);
    }

    return result
  };

  const renderRows = () => {
    let result = [];

    for (let x = 1; x <= verticalSize; x++) {
      result.push((
        <div className="row">
          {renderColumns()}
        </div>
      ));
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
