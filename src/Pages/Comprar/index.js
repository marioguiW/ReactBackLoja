import CardProduto from 'Components/CardProduto'
import './Comprar.css'
import { useEffect, useState } from 'react'


export default function Comprar(){

    const [produtos, setProdutos] = useState([])

    async function GetProdutos(){

        const endpoint = "https://localhost:7148/produto/produtos"

        const retornoFetchProdutos = await fetch(endpoint, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
            }
        })

        const retornoProdutosJson = await retornoFetchProdutos.json()

        setProdutos(retornoProdutosJson)
    }

    useEffect(() =>{
        GetProdutos()
    },[])

    console.log(produtos)

    return(
        <div className='comprar'>
            <div className='lista-produtos'>
                {produtos.map( produto => (
                    <CardProduto
                        produto={produto}
                    />
                ))}
            </div>
        </div>
    )
} 