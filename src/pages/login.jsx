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
    <form onSubmit={handleSubmit} className="p-6">
      <h2 className="text-2xl mb-4">Login</h2>
      <input type="text" placeholder="Usuário" value={username} onChange={(e) => setUsername(e.target.value)} className="block mb-2 border p-2" />
      <input type="password" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)} className="block mb-4 border p-2" />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Entrar</button>
    </form>
  );
}

export default Login;
