import CampoTexto from 'Components/CampoTexto'
import './ModalProduto.css'
import BotaoEnviar from 'Components/BotaoEnviar'

export default function ModalProduto({isOpen,valorId, setId, valorTitulo, setTitulo, valorCategoria,setCategoria, valorPreco,setPreco,valorQuantidade,setQuantidade, valorUnidadeMedida, setUnidadeMedida}){
    
    function aoAtualizarProduto(){
        console.log("teste")
    }


    if(isOpen){
        return (
            <div className='modal'>
                <h1>Produto: {valorId}</h1>
                <form onSubmit={aoAtualizarProduto} className='formulario-modal'>
                    <CampoTexto
                        tipo="text"
                        titulo={"Titulo"}
                        valor={valorTitulo}
                        aoAlterar={valor => setTitulo(valor)}
                    >Digite o Titulo do produto
                    </CampoTexto>
    
                    <CampoTexto
                        tipo="text"
                        titulo={"Categoria"}
                        valor={valorCategoria}
                        aoAlterar={valor => setCategoria(valor)}
                    >Digite a Categoria do produto
                    </CampoTexto>
    
                    <CampoTexto
                        tipo="number"
                        titulo={"Preço"}
                        valor={valorPreco}
                        aoAlterar={valor => setPreco(valor)}
                    >Digite o Preço do produto
                    </CampoTexto>
    
                    <div className='campo-duplo'>
                        <CampoTexto
                            tipo="text"
                            titulo={"Unidade de Medida"}
                            valor={valorUnidadeMedida}
                            aoAlterar={valor => setUnidadeMedida(valor)}
                        >Digite a unidade de medida do produto
                        </CampoTexto>
    
                        <CampoTexto
                            tipo="number"
                            titulo={"Quantidade no Estoque"}
                            valor={valorQuantidade}
                            aoAlterar={valor => setQuantidade(valor)}
                        >Digite a quantidade no estoque
                        </CampoTexto>
                    </div>
    
                    <BotaoEnviar conteudo="Atualizar"/>
                </form>
            </div>
        )
    }
}