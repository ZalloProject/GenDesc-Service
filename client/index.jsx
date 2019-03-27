import React from 'react';
import ReactDOM from 'react-dom';

fetch(`/houses/${Math.floor(Math.random()*100)}`)
    .then(res => res.json())
    .then(house => console.log(house[0]))
    .catch(err => console.log(err));

ReactDOM.render(<div>Hello world</div>, document.getElementById('app'));