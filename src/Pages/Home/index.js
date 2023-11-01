import CampoTexto from 'Components/CampoTexto';
import './Home.css'
import BotaoEnviar from 'Components/BotaoEnviar';

const Home = ()=> {
    return(
        <div className='home'>
            <form className='formulario'>
                <CampoTexto tipo="text" titulo={"Titulo"}>Digite o Titulo do produto</CampoTexto>
                <CampoTexto tipo="text" titulo={"Categoria"}>Digite a Categoria do produto</CampoTexto>
                <CampoTexto tipo="number" titulo={"Preço"}>Digite o Preço do produto</CampoTexto>
                <CampoTexto tipo="text" titulo={"Unidade de Medida"}>Digite a unidade de medida do produto</CampoTexto>
                <BotaoEnviar conteudo="Cadastrar"/>
            </form>
        </div>
    )
}

export default Home;