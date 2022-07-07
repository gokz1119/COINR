import './App.css';
import NavBar from './NavBar';
import Signup from './Signup';
import Swap from './Swap';
import Withdraw from './Withdraw';
import Login from './Login';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Rates from './Rates';

function App() {
  return (
    <>
      <Router>
        <Routes>
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
