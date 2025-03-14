import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../index.css";

import Button from "../components/Button"

function Teste() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [message, setMessage] = useState('');
    const [editing, setEditing] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const fetchUsers = async () => {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/users')
            setUsers(response.data);
        } catch (e) {
            console.log(e)
            setError(e.message);
        } finally {
            setLoading(false);
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {

            const response = await axios.post('https://jsonplaceholder.typicode.com/users', {
                name,
                email,
            });
            setMessage(` ${response.data.id}: ${response.data.name} - ${response.data.email}`);
            console.log('Usuario criado:', response.data);
            setTimeout(() => {
                setMessage('')
            }, 10000);

            setName("");
            setEmail("");
            setEditing(false)

        } catch (e) {
            setMessage('Erro ao criar o post.');
            console.error('Erro:', e);
        }
    }

    useEffect(() => {fetchUsers()}, []);

  
    return (
        <div className='flex flex-col items-center bg-gray-200 pb-12'>
            <h1 className='text-3xl p-4 my-10 font-bold'>Usuarios:</h1>
            <ul className='bg-gray-100 mb-12 p-12 rounded-3xl border border-gray-500 shadow-xl'>
                {error && <p className='text-center text-3xl font-bold'>ERRO: {error} </p>}
                {loading && <div className="flex flex-col items-center justify-center">
                                <p className='text-center text-3xl font-bold mb-10'>CARREGANDO ...</p>
                                <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                            </div>}
                {!error && !loading && users.map(user => (
                <li key={user.id}>{user.id}: {user.name} - {user.email}</li>
                ))}
            </ul>
            {!editing && <Button text="Adicionar Usuario" onClick={() => setEditing(true)} >Adicionar</Button>}

            {message && <div className='item-center text-center my-6 bg-gray-100 rounded-lg text-green-600 text-lg p-4'>
                <p>Usuario criado com sucesso! </p>
                <p>{message}</p>
            </div>}

            {editing && <div className="flex flex-col items-center p-4 bg-gray-100 rounded-3xl border border-gray-500 shadow-xl">
                <h1 className="text-2xl font-bold mb-4">Criar Novo Post</h1>
                <form onSubmit={handleSubmit} className="w-full max-w-md">
                    <div className="mb-4">
                    <label className="block text-gray-700">Nome</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded "
                        required
                    />
                    </div>
                    <div className="mb-4">
                    <label className="block text-gray-700">Email</label>
                    <textarea
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded"
                        required
                    />
                    </div>
                    <button
                    type="submit"
                    className="w-full bg-gray-400 text-white p-2 rounded hover:bg-gray-500 mb-4"
                    >Criar Usuario
                    </button>
                    <button
                    type="button"
                    className="w-full bg-red-400 text-white p-2 rounded hover:bg-red-200"
                    onClick={() => setEditing(false)}
                    >Cancelar
                    </button>
                </form>
            </div>}

            <p>lembrar de adicionar a opção de vender q ira usar algo para confirmar se o produto pd ser vendido ou n pelo email</p>
            
      </div>
        
    );
    }

export default Teste;