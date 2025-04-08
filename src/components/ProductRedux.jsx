import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";

function ProductList({id}) {

    const { items, status, error } = useSelector((state) => state.products);
    const produto = items.find((p) => p.id === id);
    const sales = useSelector((state) => state.sales[id]);

    if (status === 'loading') return <p>Carregando...</p>;
    if (status === 'failed') return <p>Erro: {error}</p>;

    return (
      <Link to={`/produtos/${produto.id}`} state={{ produto }} className="flex items-start gap-4 p-4 rounded bg-white shadow hover:shadow-lg transition hover:scale-105">
      <img className='w-24 h-24 object-contain' src={produto.image} alt={produto.title} />
      <div className="flex-1">
        <h2 className="font-bold text-xl mb-2">{produto.title}</h2>
        <p className="text-gray-600 text-sm mb-2 line-clamp-3">{produto.description}</p>
        <div className='flex justify-between'>
          <p className="text-green-600 font-bold">R$ {produto.price}</p>
          <p className='text-red-600 font-semibold text-sm'>Produtos Vendidos: {sales || 0}</p>
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`w-4 h-4 ${i < Math.floor(produto.rating.rate) ? 'text-yellow-400 fill-current' : 'text-gray-300 fill-current'}`}
                viewBox="0 0 20 20"
              >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
            <span className="ml-1 text-gray-600 text-sm">({produto.rating.count})</span>
          </div>
        </div>
      </div>
    </Link>
      );

    
}

export default ProductList;
