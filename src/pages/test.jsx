import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
// import axios from 'axios';
import "../index.css";
// import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Button from "../components/Button"
import Cart from '../components/Cart';
import { fetchUsers } from '../store/usersSlice';

function Teste() {
    const { items, status, error } = useSelector((state) => state.users);
    const [editing, setEditing] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch])

  
    return <>
        <div className='flex flex-col items-center pb-12'>
            <p>lembrar de adicionar a opção de vender q ira usar algo para confirmar se o produto pd ser vendido ou n pelo email</p>
            <h1 className='text-3xl p-4 my-10 font-bold'>Usuarios:</h1>
            <ul className='bg-gray-100 mb-12 p-12 rounded-3xl border border-gray-500 shadow-xl'>
                {error && <p className='text-center text-3xl font-bold'>ERRO: {error} </p>}
                {status == "loading" && <div className="flex flex-col items-center justify-center">
                                <p className='text-center text-3xl font-bold mb-10'>CARREGANDO ...</p>
                                <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                            </div>}
                {!error && status == "succeeded" && items.map(user => (
                <li key={user.id} className='lg:text-lg text-2xl'><b>{user.id}:</b> {user.name} - {user.email}</li>
                ))}
            </ul>
            {!editing && <Button text="Adicionar Usuario" onClick={() => setEditing(true)} >Adicionar</Button>}

            {editing && <div className="flex flex-col items-center p-4 bg-gray-100 rounded-3xl border border-gray-500 shadow-xl">
                <h1 className="text-2xl font-bold mb-4">Criar Novo Post</h1>
                <form onSubmit={""} className="w-full max-w-md">
                    <div className="mb-4">
                        <label className="block text-gray-700">Nome</label>
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="w-full p-2 border border-gray-300 rounded " required/>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Email</label>
                        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full p-2 border border-gray-300 rounded" required/>
                    </div>
                    <button type="submit" className="w-full bg-gray-400 text-white p-2 rounded hover:bg-gray-500 mb-4">
                        Criar Usuario
                    </button>
                    <button type="button" className="w-full bg-red-400 text-white p-2 rounded hover:bg-red-200" onClick={() => setEditing(false)}>
                        Cancelar
                    </button>
                </form>
            </div>}

            <div className="bg-white mt-20 p-4 w-[100%]"></div>

            <div className='pt-[100px]'>
                <Cart/>
            </div>
            
        </div>

        <div>
        </div>
    </>
}

export default Teste;