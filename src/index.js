import React from 'react';
import ReactDom from 'react-dom';
import './index.css';
import App from './components/App';
if (module.hot) module.hot.accept();
ReactDom.render(<App />, document.getElementById('root'));
