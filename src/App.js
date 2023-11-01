import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home'; 
import SobreMim from './Pages/SobreMim';
import Menu from './Components/Menu';
import PaginaPadrao from './Pages/PaginaPadrao';

function App() {
  return (
    
    <BrowserRouter>
      <Menu/>
      <Routes>
        <Route path='/' element={<PaginaPadrao/>}>
          <Route index element={<Home/>}/>
          <Route path='/sobremim' element={<SobreMim/>}/>
        </Route>
      </Routes>
    </BrowserRouter>  
  );
}

export default App;
