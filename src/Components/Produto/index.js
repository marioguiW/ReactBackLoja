import './Produto.css'
import { MdDeleteForever } from "react-icons/md";
import { BiEdit } from "react-icons/bi";
import { useSearchParams } from 'react-router-dom';
import { useState } from 'react';
import ModalProduto from 'Components/ModalProduto';


export default function Produto({key,Id, Titulo, Categoria, Preco, Quantidade, UnidadeMedida, Deletar}){

    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [id, setId] = useState(Id)
    const [titulo, setTitulo] = useState(Titulo)
    const [categoria, setCategoria] = useState(Categoria)
    const [preco, setPreco] = useState(Preco)
    const [quantidade, setQuantidade] = useState(Quantidade)
    const [unidadeMedida, setUnidadeMedida] = useState(UnidadeMedida)

    function aoDeletar(id){
        console.log(id)
        Deletar(id)
    }

    function aoEditar(id){
        console.log(id)
    }

    return(
        <tr key={key} className='produto' id={Id}>
            <td>{Id}</td>
            <td  colSpan={2}>{Titulo}</td>
            <td>{Categoria}</td>
            <td>{`R$ ${Preco}`}</td>
            <td>{Quantidade}</td>
            <td>{unidadeMedida}</td>
            <td>
                    <p onClick={() => setModalIsOpen(!modalIsOpen)} className='botao-edit'><BiEdit/></p>
            </td>
            <td>
                    <p onClick={() => aoDeletar(id)} className='botao-delete'><MdDeleteForever/></p>
            </td>
            <ModalProduto
                valorId = {id}
                valorTitulo = {titulo}
                valorCategoria = {categoria}
                valorPreco = {preco}
                valorQuantidade = {quantidade}
                valorUnidadeMedida= {unidadeMedida}

                setId={setId}
                setTitulo= {setTitulo}
                setCategoria={setCategoria}
                setPreco={setPreco}
                setQuantidade={setQuantidade}
                setUnidadeMedida={setUnidadeMedida}

                isOpen={modalIsOpen}
            />
        </tr>
    )
}