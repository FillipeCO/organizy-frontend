import './App.css';
import Lista from './Lista';
import Signup from './Signup';
import Login from './Login';
import Home from './Home';
import Depesas from './Despesas';
import Receitas from './Receitas';
import TelaInicial from './TelaInicial';
import { BrowserRouter, Route, Routes, Outlet } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<TelaInicial />} />
        <Route exact path="/cadastro" element={<Signup />} />
        <Route path="/lista" element={<Lista />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/despesas" element={<Depesas />} />
        <Route path="/receitas" element={<Receitas />} />
      </Routes>
      <Outlet />
    </BrowserRouter>
  );
}

export default App;