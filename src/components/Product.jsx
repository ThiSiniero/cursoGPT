import { Link } from 'react-router-dom';
import "../index.css";
import { ProductContext } from "../context/ProductContext";
import { useContext } from "react";

function Product({ id }){

    const {products} = useContext(ProductContext);
    const produto = products[id];

    console.log(produto);
    
    return (
        <Link to={`/produtos/${id}`} state={{ produto }}  className="border p-4 rounded bg-white shadow hover:shadow-lg transition hover:scale-105">
          <h2 className="font-bold text-xl mb-2"> {produto.name}</h2>
          <p className="text-gray-600 text-sm mb-2 line-clamp-3">{produto.description}</p>
          <div className='flex justify-between'>
            <p className="text-green-600 font-bold">{produto.value}</p>
            <p className='text-red-600 font-bold'>Produtos Vendidos: {products[id].sales|| 0}</p>
          </div>
        </Link>
      );
}

export default Product;