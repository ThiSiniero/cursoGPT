import "../index.css"
import 'react-toastify/dist/ReactToastify.css';
import { useParams, Link } from "react-router-dom";
import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";

import Button from "../components/Button";

function ProdInfo() {
    const { id } = useParams();

    const {sales, addSale, products} = useContext(ProductContext);
    
    const produto= products[id];
    
    if (!produto) {
        return <p className="text-red-500">Produto não encontrado!</p>;
    }

    return (
        <div className="flex flex-col items-center justify-center pb-12 mb-10">
            <h2 className="p-4 font-bold text-3xl">Detalhes do Produto</h2>
            <h3 className="text-xl font-bold pb-10">{produto.name}</h3>
            <p>{produto.description}</p>
            <p className="mx-80 px-80 pt-10 indent-10">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos temporibus ut, eius atque fuga deserunt alias mollitia! Ea, maiores vero officiis repellendus, laboriosam dolores exercitationem expedita corrupti cupiditate quas placeat. <br/> lorem Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque necessitatibus nulla libero! Vitae asperiores pariatur deleniti distinctio itaque consequuntur omnis quod rerum, tempora voluptates ratione repudiandae provident a quia explicabo.
            </p>
            <p className="mx-80 px-80 indent-10">
                dipisicing elit. Eos temporibus ut, eius atque fuga deserunt alias mollitia! Ea, maiores vero officiis repellendus, laboriosam dolores exercitationem expedita corrupti cupiditate quas placeat. <br/> lorem Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque necessitatibus nulla libero! Vitae asperiores pariatur deleniti distinctio itaque consequuntur omnis quod rerum, tempora voluptates ratione repudiandae provident a quia explicabo.
            </p>
            <p className="mx-80 px-80 indent-10">
                amet consectetur adipisicing elit. Eos temporibus ut, eius atque fuga deserunt alias mollitia! Ea, maiores vero officiis ,  dolores exercitationem expedita corrupti cupiditate quas placeat. Lorem ipsum dolor sit, amet consectetur adipisicing elit.  necessitatibus nulla libero! Vitae asperiores pariatur deleniti distinctio itaque  omnis quod rerum, tempora voluptates ratione repudiandae provident a quia explicabo.
            </p>
            <p className="text-red-600 font-bold my-4">Produtos Vendidos: {sales[id] || 0}</p>
            <p className="text-green-600 font-bold">{produto.value}</p>
            <Link to={"/produtos"} className="rounded bg-green-400 font-bold hover:bg-green-600 hover:text-white p-4 mb-4" onClick={() => addSale(id)}>
                COMPRAR
            </Link>
            <Button text={"voltar para produtos"} address={"/produtos"} />
        </div>
    );
}

export default ProdInfo;