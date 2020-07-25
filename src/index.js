import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
let movies = require('./components/data/movies')


ReactDOM.render(<App movies={movies} />, document.getElementById('app'));