import { Outlet } from 'react-router-dom'
import Banner from '../../Components/Banner'
import './PaginaPadrao.css'

export default function PaginaPadrao(){
    return(
        <main>
            
            <Outlet/>
        </main>

    )
}