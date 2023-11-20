import './Menu.css'
import MenuLink from '../MenuLink'

const Menu = () => {
    return(
        <header className='cabecalho'>
            <nav className='navbar'>
                <MenuLink rota='/produtos'>
                    Produtos
                </MenuLink>
                <MenuLink rota='/cadastrarproduto'>
                    Cadastrar Produto
                </MenuLink>
                <MenuLink rota={'/comprar'}>
                    Comprar
                </MenuLink> 
                <MenuLink rota='/cadastrarcliente'>
                    Cadastrar Cliente
                </MenuLink>
                <MenuLink rota='/clientes'>
                    Clientes
                </MenuLink>
                
            </nav>
        </header>
    )
}

export default Menu;