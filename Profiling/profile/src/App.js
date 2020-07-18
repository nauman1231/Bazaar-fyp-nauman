import React from 'react';
import logo from './logo.svg';
import './App.css';
import {reactLocalStorage} from 'reactjs-localstorage';
 

function App() {
  reactLocalStorage.set('nauman', 'sheikh');
  return (
    <div id="app">
    
    </div>
  );
}

export default App;
