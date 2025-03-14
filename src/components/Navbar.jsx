import "../index.css";
import { Link } from 'react-router-dom';

function Navbar() {
    return(
        <nav>
            <ul className="flex flex-wrap justify-center py-4 sm:py-6 mb-8 bg-gray-500 text-white font-bold">
                <li><Link className="px-4 sm:px-8" to="/">Home</Link></li>
                <li><Link className="px-4 sm:px-8" to="/produtos">Produtos</Link></li>
                <li><Link className="px-4 sm:px-8" to="/vender">Vender</Link></li>
                <li><Link className="px-4 sm:px-8" to="/teste">Teste</Link></li>
                <li><Link className="px-4 sm:px-8" to="/contato">Contato</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar;