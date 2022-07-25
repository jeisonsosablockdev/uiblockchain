import logo from './Ethereum_logo.svg';
import Web3 from 'web3'
import { useState } from 'react'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Conectandose con el API.
        </p>
        <a
          className="App-link"
          href="https://web3js.readthedocs.io"
          target="_blank"
          rel="noopener noreferrer"
        >
          web3.JS
        </a>
      </header>
    </div>
  );
}

export default App;
