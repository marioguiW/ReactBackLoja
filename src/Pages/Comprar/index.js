import SelectOptionsCliente from 'Components/SelectOptionsCliente'
import './Comprar.css'
import { useEffect, useState } from 'react'
import BotaoEnviar from 'Components/BotaoEnviar';
import Contador from 'Components/Contador';
import SelectOptionsProduto from 'Components/SelectOptionsProduto';

export default function Comprar(){

    const [clientes, setClientes] = useState([])

    const [clienteSelecionado, setClienteSelecionado] = useState('');

    const [clienteId, setClienteId] = useState('')

    const [produtos, setProdutos] = useState([])

    const [produtoSelecionado, setProdutoSelecionado] = useState('');
    
    const [produtoId, setProdutoId] = useState('')

    const [contador, setContador] = useState(1)


    useEffect(() => {
        fetch(`https://localhost:7148/cliente/clientes`, {
          method: "GET",
          headers: {
            'content-type': 'application/json;charset=utf-8',
          }
        })
        .then(resposta => resposta.json())
        .then(dados => {
          const novosClientes = dados.map(dado => ({
            Nome: dado.nome, 
            Id: dado.id, 
            EnderecoId: dado.enderecoId,
          }));
          setClientes([...clientes, ...novosClientes]);
        });
      }, []);

      useEffect(() => {
        fetch(`https://localhost:7148/produto/produtos`, {
          method: "GET",
          headers: {
            'content-type': 'application/json;charset=utf-8',
          }
        })
        .then(resposta => resposta.json())
        .then(dados => {
          const novosProdutos = dados.map(dado => ({
            Titulo: dado.titulo, 
            Id: dado.id, 
          }));
          setProdutos([...produtos, ...novosProdutos]);
        });
      }, []);

      console.log(clienteSelecionado)

      const aoComprar = (evento)=>{
        evento.preventDefault();
        console.log(clienteSelecionado, produtoSelecionado, contador)

        fetch("https://localhost:7148/compra/compras", {
                method: 'POST',
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({
                    Quantidade: contador,
                    ClienteId: clienteId,
                    ProdutoId: produtoId
                })
            })

            setContador(1);
            alert("Compra Realizada!")
      }

    return(
        <div className='comprar'>
            <form onSubmit={aoComprar} className='formulario'>
                <SelectOptionsCliente
                    titulo={'Clientes'}
                    itens={clientes}
                    valor={clienteSelecionado}
                    aoAlterado={valor => setClienteSelecionado(valor)}
                    pegaId={valor => setClienteId(valor)}
                />
                <SelectOptionsProduto
                    titulo={'Produtos'}
                    itens={produtos}
                    valor={produtoSelecionado}
                    aoAlterado={valor => setProdutoSelecionado(valor)}
                    pegaId={valor => setProdutoId(valor)}
                />
                <Contador
                    contador={contador}
                    setContador={setContador}
                />
                
                <BotaoEnviar conteudo="Realizar Compra"/>
            </form>
        </div>
    )
} 