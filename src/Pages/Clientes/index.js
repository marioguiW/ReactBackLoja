import { useEffect, useState } from "react"
import "./Clientes.css"
import { useSearchParams } from "react-router-dom"
import CardCliente from "Components/CardCliente"

export default function Clientes(){

    const [clientes, setClientes] = useState([])
    
    async function fetchClientes(){
        const endpoint = "https://localhost:7148/cliente/clientes"

        const retorno = await fetch(endpoint, {
            method: "GET",
            headers: {
                'content-type': 'application/json;charset=utf-8',
              }
        })

        const resposta = await retorno.json()

        setClientes([resposta])
    }

    fetchClientes();


    return(
        <div>
            {clientes.map( cliente => {
                <CardCliente
                    nome={cliente.nome}

                />
            })}
        </div>
    )
}