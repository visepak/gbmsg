import React from 'react';
import ReactDOM from 'react-dom';
//import App from './App';

const component = (innerHTML) => <h1>{innerHTML}</h1>;


ReactDOM.render(
   component('Title'),
    document.getElementById('root'),
);