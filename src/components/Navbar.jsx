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
      <Link to="/login" className={`px-4 py-2 lg:mr-4 rounded ${theme === "dark" ? "bg-gray-700 text-white" : "bg-gray-400 text-black"}`}>
        Login
      </Link>
    ) : ( 
      <>
        <p className={`px-4 py-2 lg:mr-4 rounded text-center ${theme === "dark" ? "bg-gray-700 text-white" : "bg-gray-400 text-black"}`}>
          Olá, {user.username} <br />
          <button className={`px-4 py-1 mt-2 rounded bg-red-500 text-black`} onClick={logout}>Sair</button>
        </p> 
        
      </>
    ) 
  }

  return (
    <nav>

      <div className={`flex flex-col sm:flex-row justify-between items-center py-4 sm:py-6 mb-8 ${theme === "dark" ? "bg-gray-500 text-white" : "bg-gray-300 text-black"} font-bold`}>

        <div className="hidden sm:block lg:pl-6">
          <button
            onClick={toggleTheme}
            className={`px-4 py-2 rounded ${theme === "dark" ? "bg-gray-700 text-white" : "bg-gray-400 text-black"}`}
          >
            Modo {theme === "dark" ? "Escuro" : "Claro"}
          </button>
        </div>

        <div className="sm:hidden w-full flex justify-between items-center px-4">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
          >
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
            
          </button>

          <button
            onClick={toggleTheme}
            className={`px-4 py-2 rounded text-sm md:text-base ${theme === "dark" ? "bg-gray-700 text-white" : "bg-gray-400 text-black"}`}
          >
            Modo {theme === "dark" ? "Escuro" : "Claro"}
          </button>

          <div className="sm:mt-0 text-sm">
          {login()} 
        </div>

        </div>

        <div
          className={`${isOpen ? "block mt-4  " : "hidden"} sm:flex flex-col sm:flex-row sm:space-y-0 sm:space-x-4 lg:pl-20 w-full sm:w-auto px-4 sm:px-0`}
        >
          <Link className="px-4 sm:px-8 py-2 sm:py-0 text-sm md:text-base" to="/">Home</Link>
          <Link className="px-4 sm:px-8 py-2 sm:py-0 text-sm md:text-base" to="/produtos">Produtos</Link>
          <Link className="px-4 sm:px-8 py-2 sm:py-0 text-sm md:text-base" to="/vender">Vender</Link>
          <Link className="px-4 sm:px-8 py-2 sm:py-0 text-sm md:text-base" to="/teste">Teste</Link>
          <Link className="px-4 sm:px-8 py-2 sm:py-0 text-sm md:text-base" to="/contato">Contato</Link>
        </div>

        <div className="hidden sm:block">
          {login()} 
        </div>
        
      </div>
    </nav>
  );
}

export default Navbar;