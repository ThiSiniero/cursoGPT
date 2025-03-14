import { Link } from 'react-router-dom';
import "../index.css";
import Button from '../components/Button';

function Page404(){
    return(
        <div className='flex justify-center p-6 bg-gray-200'>
            <div className='text-center text-lg'>
                <h2 className='font-bold text-3xl pb-10'>Página não encontrada</h2>
                <h3 className='pb-12'>Retorne a pagina anterior ou a pagina inicial para que possa continuar sua navegação</h3>
                <Button address="/" text={"Página Inicial"}/>
            </div>
        </div>
    )
}

export default Page404;