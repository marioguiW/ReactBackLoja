import CampoTexto from 'Components/CampoTexto';
import './Home.css'
import BotaoEnviar from 'Components/BotaoEnviar';
import { useEffect, useState } from 'react';

const Home = ()=> {
    const [titulo, setTitulo] = useState('');
    const [categoria, setCategoria] = useState('');
    const [preco, setPreco] = useState('');
    const [unidadeMedida, setUnidadeMedida] = useState('');


    const aoCadastrarProduto = (evento) => {
        evento.preventDefault();
        console.log(titulo,categoria,preco,unidadeMedida);
        postProduto()
    }

    

    const postProduto = ()=>{
        fetch("https://localhost:7148/produto/produtos", {
            method: 'POST',
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                Titulo: titulo,
                Categoria: categoria,
                Preco: preco,
                UnidadeMedida: unidadeMedida
            })
        })
    }

    return(
        <div className='home'>
            <form onSubmit={aoCadastrarProduto} className='formulario'>
                <CampoTexto
                    tipo="text"
                    titulo={"Titulo"}
                    valor={titulo}
                    aoAlterar={valor => setTitulo(valor)}
                >Digite o Titulo do produto
                </CampoTexto>

                <CampoTexto
                    tipo="text"
                    titulo={"Categoria"}
                    valor={categoria}
                    aoAlterar={valor => setCategoria(valor)}
                >Digite a Categoria do produto
                </CampoTexto>

                <CampoTexto
                    tipo="number"
                    titulo={"Preço"}
                    valor={preco}
                    aoAlterar={valor => setPreco(valor)}
                >Digite o Preço do produto
                </CampoTexto>

                <CampoTexto
                    tipo="text"
                    titulo={"Unidade de Medida"}
                    valor={unidadeMedida}
                    aoAlterar={valor => setUnidadeMedida(valor)}
                >Digite a unidade de medida do produto
                </CampoTexto>

                <BotaoEnviar conteudo="Cadastrar"/>
            </form>
        </div>
    )
}

export default Home;