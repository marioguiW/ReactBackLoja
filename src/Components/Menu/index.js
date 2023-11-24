import './Menu.css'
import MenuLink from '../MenuLink'
import { Outlet } from 'react-router-dom';

const Menu = () => {
    return(
        <>
            <div className='cabecalho'>
                <nav className='navbar'>
                    <MenuLink rota='/admin/produtos'>
                        Produtos
                    </MenuLink>
                    <MenuLink rota='/admin/cadastrarproduto'>
                        Cadastrar Produto
                    </MenuLink>
                    <MenuLink rota={'/user/comprar'}>
                        Comprar
                    </MenuLink> 
                    <MenuLink rota='/admin/cadastrarcliente'>
                        Cadastrar Cliente
                    </MenuLink>
                    <MenuLink rota='/admin/clientes'>
                        Clientes
                    </MenuLink>
                    
                </nav>
            </div>
            <div id="detail">
                <Outlet/>
            </div>
        </>
    )
}

export default Menu;