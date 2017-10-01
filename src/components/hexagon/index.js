import React from "react";

import './style.css';

const hexagon = () => {
  let randomNum = () => Math.floor(Math.random() * 1000);
  let color =  ('00' + randomNum()).slice(-3) ;

  const styles = {
    backgroundColor : `#${color}`
  };

  return (
    <div className="hexagon" style={styles}>
    </div>
  )
};

export default hexagon;
