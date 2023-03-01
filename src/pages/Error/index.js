import './error.css'
import {Link} from 'react-router-dom';
export default function Error(){
    return(
    <div className='container-error'>
        <img src="error404.png" alt="Pagina nao encontrada"/>
        <h1> Pagina não encontrada!</h1>
            <Link to="/">
                Voltar para Home
            </Link>

    </div>

    )
}