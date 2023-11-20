import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route, useSearchParams, Navigate} from 'react-router-dom'
import CadastrarProduto from './Pages/CadastrarProduto'; 
import CadastrarCliente from './Pages/CadastrarCliente';
import Menu from './Components/Menu';
import PaginaPadrao from './Pages/PaginaPadrao';
import Comprar from 'Pages/Comprar';
import Produtos from 'Pages/Produtos';
import Login from 'Pages/Login';
import { useState } from 'react';
import SucessPage from 'Pages/SucessPage';
import Clientes from 'Pages/Clientes';

function App() {

  function verificaLogin(){ 
    const funfo = sessionStorage.getItem("login")
    console.log(funfo)
      if(funfo){
        console.log(true)
        return true
      }else{
        console.log(false)
        return false
      }
  }



  return (
    
    <BrowserRouter>
      <Menu/>
      <Routes>
        <Route path='/' element={<PaginaPadrao/>}>
          <Route path='/cadastrarproduto' element={<CadastrarProduto/>}/>
          <Route path='/comprar' element={<Comprar/>}/>
          <Route path='/produtos' element={<Produtos/>}/>
          <Route path='/cadastrarcliente' element={<CadastrarCliente />}/>
          <Route
            path='/pagina-de-sucesso'
            element={verificaLogin() ? <SucessPage /> : <Navigate to='/login' />}
          />
          <Route 
            path='/clientes'
            element={verificaLogin() ? <Clientes/> : <Navigate to={'/login'}/>}
            />
          <Route path="*" element={<Login/>} />
          <Route path="/" element={<Login/>} />
    
        </Route>
      </Routes>
    </BrowserRouter>  
  );
}

export default App;
