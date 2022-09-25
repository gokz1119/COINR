import './App.css';
import Signup from './Signup';
import Swap from './Swap';
import Withdraw from './Withdraw';
import Login from './Login';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Rates from './Rates';
import { useState } from 'react';
import contract from './contracts/abi.json';
import Help from './Help';

export const contractAddress = process.env.REACT_APP_CONTRACT_ADDRESS;
export const abi = contract["output"].abi;

function App() {
  const [walletAddress, setWalletAddress] = useState(null)
  return (
    <>
      <Router>
        <Routes>
          {walletAddress &&
            <>
              <Route path='/logout' element={<Login walletAddress={walletAddress} setWalletAddress={setWalletAddress} />} />
              <Route path='/swap' element={<Swap contractAddress={contractAddress} abi={abi} walletAddress={walletAddress} />} />
              <Route path='/withdraw' element={<Withdraw />} />
              <Route path='/rates' element={<Rates />} />
              <Route path='/signup' element={<Signup />} />
              <Route path='/help' element={<Help />} />
              <Route path='/' element={<Login walletAddress={walletAddress} setWalletAddress={setWalletAddress} />} />
            </>
          }
          {walletAddress == null &&
            <>
              <Route path='/logout' element={<Login walletAddress={walletAddress} setWalletAddress={setWalletAddress} />} />
              <Route path='/swap' element={<Login walletAddress={walletAddress} setWalletAddress={setWalletAddress} />} />
              <Route path='/withdraw' element={<Login walletAddress={walletAddress} setWalletAddress={setWalletAddress} />} />
              <Route path='/rates' element={<Login walletAddress={walletAddress} setWalletAddress={setWalletAddress} />} />
              <Route path='/signup' element={<Signup />} />
              <Route path='/help' element={<Help />} />
              <Route path='/' element={<Login walletAddress={walletAddress} setWalletAddress={setWalletAddress} />} />
            </>
          }
        </Routes>
      </Router>

    </>
  );
}

export default App;
