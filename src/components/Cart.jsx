import { useReducer } from "react";
import { cartReducer } from "../reducer/cartReducer";

function Cart() {
  const [cart, dispatch] = useReducer(cartReducer, []); // Estado inicial é um array vazio

  const addItem = (name) => {
    const newItem = { id: Date.now(), name };
    dispatch({ type: "ADD", payload: newItem });
  };

  const removeItem = (id) => {
    dispatch({ type: "REMOVE", payload: id });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR" });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const name = event.target.elements[0].value; // Pega o valor do primeiro input
    addItem(name);
    event.target.reset(); // Limpa o formulário
  };

  return (
    <div className="p-4 bg-white rounded shadow-lg">
      <h2 className="text-xl font-bold mb-2">Carrinho de Compras</h2>
      <form onSubmit={handleSubmit}>
        <input className="border m-2 p-2" type="text" placeholder="nome do produto" required/>
        <button type="submit" className="bg-gray-400 hover:bg-gray-500 text-white px-4 py-2 rounded">
          Adicionar Produto
        </button>
        <button onClick={clearCart} type="button" className="bg-red-500 text-white px-4 py-2 rounded ml-2">
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
      </form>
    </div>
  );
}

export default Cart;