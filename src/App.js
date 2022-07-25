import logo from './Ethereum_logo.svg';
import Web3 from 'web3'
import { useState, useEffect } from 'react'
import './App.css';

function App() {

  const [account, setAccount] = useState()
  const [network, setNetwork] = useState()
  const [balance, setBalance] = useState()

  useEffect(()=>{

    const web3 = new Web3(Web3.givenProvider || 'http://localhost:8545');

    async function loadAccounts(){

      const accounts = await web3.eth.requestAccounts();

      setAccount(accounts[0])
    }

    loadAccounts()

    async function loadBalance(){
      const network = await web3.eth.net.getNetworkType();
      const balance = await web3.eth.getBalance(account);

      setNetwork(network)
      setBalance((balance/1e18).toFixed(3))
    }

    loadBalance()

  }, [account])

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Su numero de cuenta: {account}
        </p>

        <p>
          Usted esta conectado a la red ({network}) y posee ({balance})
        </p>
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
