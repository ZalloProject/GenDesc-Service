import React from 'react';
import ReactDOM from 'react-dom';
import GenDesc from './app.jsx';

fetch(`/houses/${Math.floor(Math.random() * 98)}`)
  .then(res => res.json())
  .then(house => ReactDOM.render(<GenDesc house={house} />, document.getElementById('app')));
