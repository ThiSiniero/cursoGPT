import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useLocation } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const location = useLocation();
  const from = location.state?.from || "/";

  const handleSubmit = (e) => {
    e.preventDefault();
    const success = login(username, password);
    if (success) {
      navigate(from, { replace: true });
    } else {
      alert("Credenciais inválidas!");
    }
  };

  return (
    <div className="flex flex-col items-center h-screen">
      <form onSubmit={handleSubmit} className=" text-center border border-gray-400 rounded-lg shadow-lg p-6 bg-gray-300 mt-20">
        <h2 className="text-3xl my-8">Login</h2>
        <input type="text" placeholder="Usuário" value={username} onChange={(e) => setUsername(e.target.value)} className="block border px-6 py-2 border border-gray-400 rounded-xl" />
        <input type="password" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)} className="block my-6 border px-6 py-2 border border-gray-400 rounded-xl" />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded mt-6">Entrar</button>
      </form>

      <div className="mt-4 text-center bg-red-300 rounded rounded-lg shadow-lg p-2 mx-4">
        <p>Como isto é um teste, vá até a seção TESTE e copie um nome e o id de algum dos usuários, o nome servirá como usuário e o id como senha. <br /> Usuário: Chelsey Dietrich - Senha: 5</p>
      </div>
    </div>
  );
}

export default Login;
