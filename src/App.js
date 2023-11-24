import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route, useSearchParams, Navigate, Outlet} from 'react-router-dom'
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
    const [user, setUser] = useState(null);

    const handleLogin = () => {
        setUser(sessionStorage.getItem("login"));
    }
    console.log(user)
    const handleLogout = () => setUser(null);

    
    const ProtectedRoute = ({
        user,
        redirectPath = '/cadastrarproduto',
        children,
      }) => {
        if (!user.isAdmin) {
            console.log("passou, é um admin")
            console.log(user)
          return <Navigate to={redirectPath} replace />;
        }
        console.log("nao é admin")
        console.log(user.isADmin)
        return children ? children : <Outlet />;
      };
    
    return (
        <>
            {user ? (
                <button onClick={handleLogout}>Log out</button>
            ) : (
                <></>
            )}
                
            <BrowserRouter>
                <Routes>
                    <Route
                        path='/cadastrarproduto'
                        element={
                            <ProtectedRoute
                                user={user}
                                redirectPath='/'>
                                <CadastrarProduto/>
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path='/cadastrarcliente'
                        element={<CadastrarCliente/>}    
                    />
                    <Route
                        path='/clientes'
                        element={
                            <ProtectedRoute
                                user={user}
                                redirectPath='/'
                            >
                                <Clientes />
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path='/comprar'
                        element={
                            <ProtectedRoute
                                user={user}
                                redirectPath='/'
                            >
                                <Comprar />
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path='/pagina-de-sucesso'
                        element={<SucessPage/>}
                    />
                    <Route 
                        path='/clientes'
                        element={<Clientes/>}
                        />
                    <Route path="*" element={<Login setUser={setUser}/>} />
                    <Route path="/" element={<Login setUser={setUser}/>} />
                </Routes>
            </BrowserRouter>  
        </>
    );
}

export default App;
