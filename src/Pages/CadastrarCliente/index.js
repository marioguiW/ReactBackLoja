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
        if(cep && cep.length > 7){
            fetch(`https://viacep.com.br/ws/${cep}/json/`, {
                method: "GET",
                headers: {
                'content-type': 'application/json;charset=utf-8',
                }
            })
                .then(resposta => resposta.json())
                .then(dados =>{
                    console.log(dados);
                    setBairro(dados.bairro);
                    setCidade(dados.localidade);
                    setEndereco(dados.logradouro);
                })
        }
    },[cep])

    const aoCadastrarCliente = (evento)=>{
        evento.preventDefault();
        fetch("https://localhost:7148/endereco/enderecos", {
            method: 'POST',
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                Cep: cep,
                Logradouro: endereco,
                Numero: numero,
                Bairro: bairro,
                Cidade: cidade,
            })
        })
        .then((response) => {
            if (response.ok) {
              return fetch("https://localhost:7148/endereco/enderecos", {
                method: 'GET',
                headers: {
                  'content-type': 'application/json;charset=utf-8',
                }
              });
            } else {
              throw new Error("Falha no POST");
            }
          })
          .then((resposta) => resposta.json())
          .then((dados) => {
            console.log(dados[dados.length-1]);
            var idEndereco = dados[dados.length-1].id
            console.log(idEndereco);
            fetch("https://localhost:7148/cliente/clientes", {
                method: 'POST',
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({
                    Nome: nome,
                    EnderecoId: idEndereco
                })
            })
          })

          setNome('')
          setCep('')
          setEndereco('')
          setNumero('')
          setBairro('')
          setCidade('')
          alert("Cliente Cadastrado com sucesso!");

    }   

    return(
        <div className='home'>
            <form onSubmit={aoCadastrarCliente} className='formulario'>
                <div className='inputs'>
                    <div className='inputs_3'>
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
                    </div>
                    <div className='inputs_3'>
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
                    </div>
                </div>

                <BotaoEnviar conteudo="Cadastrar"/>
            </form>
        </div>
    )
}

export default SobreMim;