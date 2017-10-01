import React from 'react';

import './style.css';
import Hexagon from './../hexagon';

const Grid = () => {

  return (
    <div id="grid" className="clear">
      <div className="row">
        <Hexagon/>
        <Hexagon/>
        <Hexagon/>
      </div>
      <div className="row">
        <Hexagon/>
        <Hexagon/>
        <Hexagon/>
        <Hexagon/>
      </div>
      <div className="row">
        <Hexagon/>
        <Hexagon/>
        <Hexagon/>
        <Hexagon/>
        <Hexagon/>
      </div>
      <div className="row">
        <Hexagon/>
        <Hexagon/>
        <Hexagon/>
        <Hexagon/>
      </div>
      <div className="row">
        <Hexagon/>
        <Hexagon/>
        <Hexagon/>
      </div>
    </div>
  )
};

export default Grid;
