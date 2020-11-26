// import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './views/App';

// Styles:
import '@fortawesome/fontawesome-free/css/all.css';
import './styles/index.scss';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);

// reportWebVitals(console.log);
