import './CampoTexto.css'

export default function CampoTexto({children, titulo, tipo}){
    return(
        <div className='caixa_texto'>
            <label htmlFor='text'>{titulo}</label>
            <input type={tipo} placeholder={children}/>
        </div>
    )
}