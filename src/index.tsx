import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ToastProvider from './components/Notifications/ToastProvider';

ReactDOM.render(
  <React.StrictMode>
    <ToastProvider>
      <App />
    </ToastProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
