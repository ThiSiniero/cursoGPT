import "../index.css"
import 'react-toastify/dist/ReactToastify.css';
import { useParams, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";


import Button from "../components/Button";
import { addSale } from "../store/salesSlice";

function ProdInfo() {
    const { id } = useParams();
    const produto = useSelector((state) =>
        state.products.items.find((p) => p.id === Number(id))
      );
    const sales = useSelector((state) => state.sales[id]);
    
    const dispatch = useDispatch();

    const handleSale = () => {
        dispatch(addSale(id));
    }
    
    
    if (!produto) {
        return <p className="text-red-500">Produto não encontrado!</p>;
    }

    return (
        <div className="flex flex-col items-center justify-center pb-12 mb-10">
            <h2 className="p-4 font-bold text-3xl">Detalhes do Produto</h2>
            <h3 className="text-xl font-bold">{produto.title}</h3>
            <img className="w-[15%] rounded-2xl mt-2 mb-6" src={produto.image} alt="" />
            <p className="font-bold mt-6">categoria: </p>
            <p className="mb-6">{produto.category}</p>
            <p className="font-bold">descrição do produto:</p>
            <p className="max-w-[50%] indent-10"> {produto.description}</p>
            <div className="w-full max-w-2xl mx-auto flex justify-between my-6">
                <p className="text-red-600 font-bold text-center flex-1">Produtos Vendidos: {sales || 0}</p>
                <p className="text-yellow-500 font-bold text-center flex-1">Avaliação: {produto.rating.rate} ({produto.rating.count} Avaliadores)</p>
            </div>
            <p className="text-green-700 font-bold">R$ {produto.price}</p>
            <Link to={"/produtos"} className="rounded bg-green-400 font-bold hover:bg-green-600 hover:text-white p-4 mb-4" onClick={handleSale}>
                COMPRAR
            </Link>
            <Button text={"voltar para produtos"} address={"/produtos"} />
        </div>
    );
}

export default ProdInfo;