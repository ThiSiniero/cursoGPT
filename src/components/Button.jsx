import "../index.css";
import { Link } from 'react-router-dom';

function Button({ text, address, onClick }) {
    return <Link to={address} className="rounded bg-gray-400 font-bold hover:bg-gray-600 hover:text-white p-4 " onClick={onClick}>{text}</Link>;
  }
  
export default Button;  