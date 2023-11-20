import CampoTexto from "Components/CampoTexto"
import "./Login.css"
import { useEffect, useState } from "react"
import BotaoEnviar from "Components/BotaoEnviar"
import { Link, useNavigate } from "react-router-dom"

export default function Login({setSucess}){

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [erro, setErro] = useState('')

    const[usuarios, setUsuarios] = useState([])

    const navigate = useNavigate();

    useEffect(() => {
        fetch(`https://localhost:7148/cliente/clientes`, {
          method: "GET",
          headers: {
            'content-type': 'application/json;charset=utf-8',
          }
        })
        .then(resposta => resposta.json())
        .then(dados => {
          console.log(dados)
          const novoUsuario = dados.map( cliente => (
            {
                id: cliente.id,
                nome: cliente.nome,
                email: cliente.email,
                senha: cliente.senha,
                endereco: cliente.enderecoDeEntrega
            }
          ))

          setUsuarios(novoUsuario)
          
        });
      }, []);

        function validaLogin(evento){
            evento.preventDefault()
            const usuarioValidado = usuarios.find( usuario =>
                usuario.email == email && usuario.senha == senha
                
            )

            if(usuarioValidado == undefined){
                setErro("Email ou Senha inválido")
            }else{
                sessionStorage.setItem("login", JSON.stringify(email))

                const what = sessionStorage.getItem("login")
                console.log(what)

                setTimeout(() => {
                    navigate("/pagina-de-sucesso")  
                  }, 2000);
                
            }
        }

    return(
        <div className="login">
            <form onSubmit={evento => validaLogin(evento)} className="formulario-login">
                <CampoTexto
                    titulo="Email"
                    tipo="email
                    "
                    valor={email}
                    aoAlterar={valor => setEmail(valor)}
                >
                    Digite seu email
                </CampoTexto>

                <CampoTexto
                    titulo="Senha"
                    tipo="password"
                    valor={senha}
                    aoAlterar={valor => setSenha(valor)}
                >
                    Digite sua senha
                </CampoTexto>
                <div>
                    <p className="erro">{erro}</p>
                </div>
                <button className="button-login">Entrar</button>
                <p className="registrar">Não tem uma conta? <Link to={"/cadastrarcliente"} className="registrar-link">Registre-se</Link> </p>
            </form>
        </div>
    )
}