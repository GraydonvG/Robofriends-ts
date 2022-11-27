import React from 'react';
import './Scroll.css';

const Scroll = (props) => {
  return <div id="div">{props.children}</div>; //style={{ overflowY: 'hidden', border: '1px solid black', height: '40vh' }}
};

export default Scroll;
