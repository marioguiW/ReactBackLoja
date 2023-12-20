
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
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
    const [user, setUser] = useState(null);

    const handleLogin = () => {
        setUser(sessionStorage.getItem("login"));
    }
    console.log(user)
    const handleLogout = () => setUser(null);

    
    const ProtectedRouteAdmin = ({
        user,
        redirectPath = '/',
        children,
      }) => {
        if (!user) {
            console.log("passou, não é admin")
            console.log(user)
          return <Navigate to={redirectPath} replace />;
        }if(user && user.isAdmin == true){
            console.log(user) 
            return children ? children : <Outlet />;
        }if(user && user.isAdmin == false){
            return <Comprar/>
        }
      };
       
    
    return (
        <>
            <BrowserRouter>
                <ToastContainer
                        position="bottom-right"
                        autoClose={5000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme="light"
                    />
                <Routes>
                    <Route
                        path='/cadastrarproduto'
                        element={
                            <>
                                <Menu/>
                                {user ? (
                                    <button onClick={handleLogout}>Log out</button>
                                    ) : (
                                        <></>
                                )}
                
                                <ProtectedRouteAdmin
                                    user={user}
                                    redirectPath='/'>
                                    <CadastrarProduto notification={true}/>
                                </ProtectedRouteAdmin>
                            </>
                        }
                    />
                    <Route
                        path='/cadastrarcliente'
                        element={<CadastrarCliente/>}    
                    />
                    <Route
                        path='/clientes'
                        element={
                            <>
                                <Menu/>
                                {user ? (
                                    <button onClick={handleLogout}>Log out</button>
                                    ) : (
                                        <></>
                                )}
                                <ProtectedRouteAdmin
                                    user={user}
                                    redirectPath='/'
                                >
                                    <Clientes />
                                </ProtectedRouteAdmin>
                            </>
                        }
                    />
                    <Route
                        path='/produtos'
                        element={
                            <>
                                <Menu/>
                                {user ? (
                                    <button onClick={handleLogout}>Log out</button>
                                    ) : (
                                        <></>
                                )}
                                <ProtectedRouteAdmin
                                    user={user}
                                    redirectPath='/'
                                >
                                    <Produtos />
                                </ProtectedRouteAdmin>
                            </>
                        }
                    />
                    <Route
                        path='/comprar'
                        element={
                            <ProtectedRouteAdmin
                                user={user}
                                redirectPath='/wtf'
                            >
                                <Comprar notification={true}/>
                            </ProtectedRouteAdmin>
                        }
                    />
                    <Route
                        path='/pagina-de-sucesso'
                        element={<SucessPage/>}
                    />
                    <Route 
                        path='/login/sucessfull'
                        element={<Login notification={true} user={user} setUser={setUser}/>}
                    />
                    <Route path="*" element={<Login user={user} setUser={setUser}/>} />
                    <Route path="/" element={<Login user={user} setUser={setUser}/>} />
                </Routes>
            </BrowserRouter>  
        </>
    );
}

export default App;
