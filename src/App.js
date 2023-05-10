import './App.css';
import Lista from './Lista';
import Signup from './Signup';
import Login from './Login';
import Home from './Home';
import { BrowserRouter, Route, Routes, Outlet } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Signup />} />
        <Route path="/lista" element={<Lista />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
      <Outlet />
    </BrowserRouter>
  );
}

export default App;