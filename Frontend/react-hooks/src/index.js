import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

const [first,second,third] =["Alex","ALi","Anna"]
console.log(first);
root.render(
  <React.StrictMode>
    <App name="utsav" clawss="1" address="Lidcombe" subject="chemistry"/>
  </React.StrictMode>
);

