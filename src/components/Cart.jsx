import { useReducer } from "react";
import { cartReducer } from "../reducer/cartReducer";

function Cart() {
  const [cart, dispatch] = useReducer(cartReducer, []); // Estado inicial é um array vazio

  const addItem = () => {
    const newItem = { id: Date.now(), name: "Produto X" }; // Certifique-se que 'name' está presente
    dispatch({ type: "ADD", payload: newItem });
  };
  

  const removeItem = (id) => {
    dispatch({ type: "REMOVE", payload: id });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR" });
  };

  return (
    <div className="p-4 bg-white rounded shadow-lg">
      <h2 className="text-xl font-bold mb-2">Carrinho de Compras</h2>
      <button onClick={addItem} className="bg-blue-500 text-white px-4 py-2 rounded">
        Adicionar Produto
      </button>
      <button onClick={clearCart} className="bg-red-500 text-white px-4 py-2 rounded ml-2">
        Limpar Carrinho
      </button>

      <ul className="mt-4">
        {cart.map((item) => (
          <li key={item.id} className="border p-2 my-2 flex justify-between">
            {item.name}
            <button
              onClick={() => removeItem(item.id)}
              className="bg-red-400 px-2 py-1 text-white rounded"
            >
              Remover
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Cart;
