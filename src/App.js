import logo from './logo.svg';
import './App.css';
import NavBar from './Navbar';
import Home from './Home';
import Signup from './Signup';
import Login from './login';
import SellerDashboard from './SellerDashboard';
import Payment from './paymentPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<NavBar/>}>
      <Route path='/home' element={<Home/>}></Route>
      <Route path='/signup' element={<Signup/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/pay/:price/:id' element={<Payment></Payment>}></Route>
      <Route path='/seller' element={<SellerDashboard/>}></Route>
      </Route>
    </Routes>
    </BrowserRouter>
  );
}
export default App;
