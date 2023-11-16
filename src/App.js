import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import CadastrarProduto from './Pages/CadastrarProduto'; 
import CadastrarCliente from './Pages/CadastrarCliente';
import Menu from './Components/Menu';
import PaginaPadrao from './Pages/PaginaPadrao';
import Comprar from 'Pages/Comprar';
import Produtos from 'Pages/Produtos';

function App() {
  return (
    
    <BrowserRouter>
      <Menu/>
      <Routes>
        <Route path='/' element={<PaginaPadrao/>}>
          <Route path='/cadastrarproduto' element={<CadastrarProduto/>}/>
          <Route path='/comprar' element={<Comprar/>}/>
          <Route path='/produtos' element={<Produtos/>}/>
          <Route path='/cadastrarcliente' element={<CadastrarCliente/>}/>
        </Route>
      </Routes>
    </BrowserRouter>  
  );
}

export default App;
