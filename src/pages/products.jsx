import "../index.css";
import Product from "../components/ProductRedux";
import { useSelector,useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { fetchProducts } from "../store/productsSlice";

//import { ProductContext } from "../context/ProductContext";
//import { useContext } from "react";

function Produtos() {
  const { items } = useSelector((state) => state.products);
  const [category, setCategory] = useState("all");
  const filtredItems = category == "all" ? items : items.filter((produto) => produto.category === category);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  

  return (
    <div className="p-4 sm:p-6">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-4">
        <h1 className="text-2xl sm:text-3xl font-bold mb-6">Nossos Produtos</h1>
        <select className="p-2 rounded-t-xl" onChange={(e) => setCategory(e.target.value)} value={category}>
          <option value="all">Todas categorias</option>
          <option value="men's clothing">Roupas masculinas</option>
          <option value="women's clothing">Roupas femininas</option>
          <option value="jewelery">Joias</option>
          <option value="electronics">Eletronicos</option>
        </select>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtredItems.map((product) => (
            <Product key={product.id} id={product.id} />
        ))}
      </div>
    </div>
  );
}

export default Produtos;