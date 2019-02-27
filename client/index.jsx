import React from 'react';
import ReactDOM from 'react-dom';
import App from './app.jsx'
import registerServiceWorker from './registerServiceWorker.js';

ReactDOM.render(<App />, document.getElementById('amenities'))

registerServiceWorker();