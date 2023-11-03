import './Menu.css'
import MenuLink from '../MenuLink'

const Menu = () => {
    return(
        <header className='cabecalho'>
            <nav className='navbar'>
                <MenuLink rota='/'>
                    Cadastrar Produto
                </MenuLink> 
                <MenuLink rota='/sobremim'>
                    Cadastrar Cliente
                </MenuLink>
            </nav>
        </header>
    )
}

export default Menu;