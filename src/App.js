import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home'; 
import SobreMim from './Pages/CadastrarCliente';
import Menu from './Components/Menu';
import PaginaPadrao from './Pages/PaginaPadrao';
import Comprar from 'Pages/Comprar';

function App() {
  return (
    
    <BrowserRouter>
      <Menu/>
      <Routes>
        <Route path='/' element={<PaginaPadrao/>}>
          <Route index element={<Home/>}/>
          <Route path='/comprar' element={<Comprar/>}/>
          <Route path='/sobremim' element={<SobreMim/>}/>
        </Route>
      </Routes>
    </BrowserRouter>  
  );
}

export default App;
