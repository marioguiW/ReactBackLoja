import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Menu from 'Components/Menu';
import ErrorPage from 'Pages/ErrorPage';
import Produtos from 'Pages/Produtos';
import Clientes from 'Pages/Clientes';
import CadastrarProduto from 'Pages/CadastrarProduto';
import CadastrarCliente from 'Pages/CadastrarCliente';
import Comprar from 'Pages/Comprar';
import Login from 'Pages/Login';
import isAuthenticated from 'authUser';
import App from './App.js'

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Login/>,
//     errorElement: <ErrorPage/>,
//   },
//   {
//     path: "user",
//     element: isAuthenticated() ? <Menu/> : <Login/>,
//     children:
//     [
//       {
//         path:"comprar",
//         element: <Comprar/>
//       }
//     ]
//   },
//   {
//     path: "admin",
//     element: <Menu/>,
//     children:
//     [
//       {
//         path: "cadastrarproduto",
//         element: <CadastrarProduto/>
//       },
//       {
//         path: "cadastrarcliente",
//         element: <CadastrarCliente/>
//       }
//     ]
//   }
// ]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.Fragment>
    <App/>
  </React.Fragment>
);

