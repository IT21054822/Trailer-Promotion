
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Products from './Components/Products';
import Signup from './Components/Signup';

function App() {
  return (
    <BrowserRouter>
    
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Products' element={<Products/>}/>
      <Route path='/Signup' element={<Signup/>}/>
      </Routes>
      <Navbar/>
      
      </BrowserRouter>
  );
}

export default App;
