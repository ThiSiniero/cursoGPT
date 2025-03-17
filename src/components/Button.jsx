import "../index.css";
import { Link } from 'react-router-dom';
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function Button({ text, address, onClick }) {

    const { theme } = useContext(ThemeContext);

    return <Link to={address} className={`text-sm md:text-base rounded font-bold border border-gray-400 ${theme === "light" ? "bg-gray-300 hover:bg-gray-500 hover:text-white" : "bg-gray-600 text-white hover:bg-gray-300 hover:text-black" }   p-4 `} onClick={onClick}>{text}</Link>}
  
export default Button;  