import CampoTexto from 'Components/CampoTexto';
import './SobreMim.css'
import BotaoEnviar from 'Components/BotaoEnviar';
import { useEffect, useState } from 'react';

const SobreMim = () => {

    const [nome, setNome] = useState('');
    const [cep, setCep] = useState('');
    const [endereco, setEndereco] = useState('');
    const [numero, setNumero] = useState('');
    const [bairro, setBairro] = useState('');
    const [cidade, setCidade] = useState('');

    useEffect(()=>{
        if(cep && cep.length == 7){
            fetch(`https://viacep.com.br/ws/${cep}/json/`, {
                method: "GET",
                mode: "no-cors",
                headers: {
                'content-type': 'application/json;charset=utf-8',
                }
            })
                .then(resposta => resposta.json())
                .then(dados =>{
                    console.log(dados);
                })
        }
    },[])

    return(
        <div className='home'>
            <form className='formulario'>
                <CampoTexto
                    tipo="text"
                    titulo={"Nome"}
                    valor={nome}
                    aoAlterar={valor => setNome(valor)}
                >Digite seu Nome 
                </CampoTexto>

                <CampoTexto
                    tipo="number"
                    titulo={"Cep"}
                    valor={cep}
                    aoAlterar={valor => setCep(valor)}
                >Digite seu CEP
                </CampoTexto>

                <CampoTexto
                    tipo="text"
                    titulo={"Endereco"}
                    valor={endereco}
                    aoAlterar={valor => setEndereco(valor)}
                >Digite o Endereco
                </CampoTexto>

                <CampoTexto
                    tipo="text"
                    titulo={"Numero"}
                    valor={numero}
                    aoAlterar={valor => setNumero(valor)}
                >Digite o Numero
                </CampoTexto>

                <CampoTexto
                    tipo="text"
                    titulo={"Bairro"}
                    valor={bairro}
                    aoAlterar={valor => setBairro(valor)}
                >Digite o Bairro
                </CampoTexto>

                <CampoTexto
                    tipo="text"
                    titulo={"Cidade"}
                    valor={cidade}
                    aoAlterar={valor => setCidade(valor)}
                >Digite o Cidade
                </CampoTexto>

                <BotaoEnviar conteudo="Cadastrar"/>
            </form>
        </div>
    )
}

export default SobreMim;