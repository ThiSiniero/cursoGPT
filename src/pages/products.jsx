import "../index.css";
import Product from "../components/ProductRedux";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchProducts } from "../store/productsSlice";
//import { ProductContext } from "../context/ProductContext";
//import { useContext } from "react";

function Produtos() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  // const { products } = useContext(ProductContext);   // com ContextAPI
  // const qtdproducts = Object.keys(products).length;
  
  const { items } = useSelector((state) => state.products);
  const qtdproducts = Object.keys(items).length;
  const ids = Array.from({ length: qtdproducts }, (_, i) => i);

  return (
    <div className="p-4 sm:p-6">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6">Nossos Produtos</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {ids.map((id) => (
            <Product key={id} id={id} />
        ))}
      </div>
    </div>
  );
}

export default Produtos;