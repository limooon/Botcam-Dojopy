import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from './FirsrtApp';
import {Hellow} from './Hellow';
import {Conter} from './conterApp';
import './style.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Conter value={0}/>
  </React.StrictMode>
);