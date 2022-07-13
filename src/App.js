import './App.css';
import Signup from './Signup';
import Swap from './Swap';
import Withdraw from './Withdraw';
import Login from './Login';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Rates from './Rates';
import AccountDetailsInput from './AccountDetailsInput';

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
          <Route path='/accountdetails' element={<AccountDetailsInput />} />
          <Route path='/' element={<Login />} />
        </Routes>
      </Router>

    </>
  );
}

export default App;
