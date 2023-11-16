import Produto from "Components/Produto";
import "./Produtos.css";
import { useEffect, useState } from "react";
import ModalProduto from "Components/ModalProduto";

export default function Produtos(){

    const [produtos, setProdutos] = useState([])

    function aoDeletar(id){
      fetch(`https://localhost:7148/produto/produtos/${id}`, {
        method: "DELETE",
        headers: {
          'content-type': 'application/json;charset=utf-8',
        }
      });
      console.log(id)
      setProdutos(produtos.filter(produto => produto.Id != id))
      console.log(produtos)
    }

    useEffect(() => {
        fetch(`https://localhost:7148/produto/produtos`, {
          method: "GET",
          headers: {
            'content-type': 'application/json;charset=utf-8',
          }
        })
        .then(resposta => resposta.json())
        .then(dados => {
          console.log(dados)
          const novoProduto = dados.map( produto => (
            {
              Id: produto.id,
              Titulo: produto.titulo,
              Categoria: produto.categoria,
              Preco: produto.preco,
              Quantidade: produto.quantidade,
              UnidadeMedida: produto.unidadeMedida
            }
          ))

          setProdutos([...produtos, ...novoProduto])
          
        });
      }, []);


    return (
        <div className="produtos">
            <table className="tabela-produtos">
                <tr className="titulo">
                    <td>Id</td>
                    <td colSpan={2}>Titulo</td>
                    <td>Categoria</td>
                    <td>Preço</td>
                    <td>Quantidade Disp.</td>
                </tr>

                {produtos.map(produto => (
                  
                  <Produto
                      key={produto.Id} // Adicionei a propriedade key, que é necessária quando você faz um loop em elementos React
                      Id={produto.Id}
                      Titulo={produto.Titulo}
                      Categoria={produto.Categoria}
                      Preco={produto.Preco}
                      Quantidade={produto.Quantidade}
                      UnidadeMedida={produto.unidadeMedida}
                      Deletar={aoDeletar}
                    />
                    ))}
                  
                    <ModalProduto
                      produtos={produtos}
                    />
            </table>
        </div>
    )
}