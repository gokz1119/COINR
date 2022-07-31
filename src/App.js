import './App.css';
import Signup from './Signup';
import Swap from './Swap';
import Withdraw from './Withdraw';
import Login from './Login';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Rates from './Rates';

export const contractAddress = "0x8f82274d2e11aabd6AAd56B24A49972Fa731B4cB";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/logout' element={<Login />} />
          <Route path='/swap' element={<Swap />} />
          <Route path='/withdraw' element={<Withdraw />} />
          <Route path='/rates' element={<Rates />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/' element={<Login />} />
        </Routes>
      </Router>

    </>
  );
}

export default App;
