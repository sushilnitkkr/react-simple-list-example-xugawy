import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './style.css';

function MyList(props) {
  const arr = props.data;
  const listItems = arr.map(val =>val*3);
  console.log(listItems[1])
  return <ul>{listItems}</ul>;
}

const arr = [2,3,1,7];
const el = <MyList data={arr} />; 

ReactDOM.render(
  el, 
  document.getElementById('root')
);