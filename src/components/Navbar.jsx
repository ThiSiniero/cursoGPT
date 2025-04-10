import "../index.css";
import { Link } from 'react-router-dom';
import { ThemeContext } from "../context/ThemeContext";
import { useContext, useState } from "react";
import { useAuth } from "../context/AuthContext";

function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useAuth();

  const login = () => {
    return !user ? ( 
      <Link to="/login" className={`lg:px-4 lg:py-2 px-8 py-4 rounded ${theme === "dark" ? "bg-gray-700 text-white" : "bg-gray-400 text-black"}`}>
        Login
      </Link>
    ) : ( 
      <p className={`px-4 py-2 rounded text-center truncate ${theme === "dark" ? "bg-gray-700 text-white" : "bg-gray-400 text-black"}`}>
        Olá, {user.username} <br />
        <button className={`px-4 py-1 mt-2 rounded bg-red-500 text-black`} onClick={logout}>Sair</button>
      </p> 
    ) 
  }

  return (
    <nav>
      <div className={`flex flex-col lg:flex-row justify-between items-center py-4 sm:py-10 mb-8 ${theme === "dark" ? "bg-gray-500 text-white" : "bg-gray-300 text-black"} font-bold`}>

        {/* Botão de tema para desktop (aparece a partir de lg: 1024px) */}
        <div className="hidden lg:block lg:pl-6">
          <button
            onClick={toggleTheme}
            className={`px-4 py-2 rounded ${theme === "dark" ? "bg-gray-700 text-white" : "bg-gray-400 text-black"}`}
          >
            Modo {theme === "dark" ? "Escuro" : "Claro"}
          </button>
        </div>

        {/* Mobile: Menu hamburguer, tema e login (aparece até lg: 1024px) */}
        <div className="lg:hidden w-full flex justify-between items-center px-4">
          <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
            {isOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 sm:h-10 sm:w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 sm:h-12 sm:w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}  
          </button>

          <button onClick={toggleTheme} className={`text-xl px-8 py-4 rounded text-sm ${theme === "dark" ? "bg-gray-700 text-white" : "bg-gray-400 text-black"}`}>
            Modo {theme === "dark" ? "Escuro" : "Claro"}
          </button>

          <div className="lg:text-base text-xl">
            {login()} 
          </div>

        </div>

        <div className={`${isOpen ? "block mt-14  " : "hidden"} lg:flex flex-col lg:flex-row lg:space-y-0 lg:space-x-4 md:space-x-[5%] lg:pl-20 w-full lg:w-auto px-4 lg:px-0 text-center`}>
          <Link className="px-4 lg:px-8 py-2 lg:py-0 lg:text-base text-2xl" to="/">Home</Link>
          <Link className="px-4 lg:px-8 py-2 lg:py-0 lg:text-base text-2xl" to="/produtos">Produtos</Link>
          <Link className="px-4 lg:px-8 py-2 lg:py-0 lg:text-base text-2xl" to="/vender">Vender</Link>
          <Link className="px-4 lg:px-8 py-2 lg:py-0 lg:text-base text-2xl" to="/teste">Teste</Link>
          <Link className="px-4 lg:px-8 py-2 lg:py-0 lg:text-base text-2xl" to="/contato">Contato</Link>
        </div>

        <div className="hidden lg:block lg:mr-6">
          {login()}
        </div>
        
      </div>
    </nav>
  );
}

export default Navbar;