import './Banner.css'
import marioimagem from 'assets/mario.jpeg'

export default function Banner(){
    console.log(marioimagem)

    return(
        <main className='main'>
            <div className='conteudo-escritas'>
                <h1 className='escrita-titulo'>
                    Olá, eu sou o Mario
                </h1>
                <p className='escrita-'>
                    Apaixonado pelo desenvolvimento e linguagens de programação. Atualmente, cursando Engenharia de Software no Biopark e buscando constantemente aprimorar minhas habilidades.
                </p>
            </div>
            <div className='conteudo-imagens'>
                <img className='imagem' src={marioimagem}/>
            </div>
        </main>
    )
}