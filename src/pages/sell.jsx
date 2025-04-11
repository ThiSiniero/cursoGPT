import "../index.css";
import { useState } from "react";

function Sell() {

  const [valor, setValor] = useState("");

  const handleChange = (e) => {
    let inputValor = e.target.value;

    // Remove "R$" e espaços para processar apenas números
    inputValor = inputValor.replace(/\D/g, "");
    
    // Converte para número e formata
    const valorNumerico = (Number(inputValor) / 100).toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
    setValor(valorNumerico);
    inputValor == 0 ? setValor("") : null;
  };

  return (
    <div className="p-4 sm:p-6">
        <h1 className="lg:text-3xl text-5xl font-bold mb-6">Vender Produto</h1>
        <h2 className="text-center text-2xl font-semibold mb-6">Preencha este formulario com os dados necessarios para cadastrar seu produto</h2>
        <div className="flex flex-col items-center mb-4">
          <form onSubmit={console.log()} className="text-center flex flex-col items-center py-8 bg-gray-100 rounded-3xl border border-gray-500 shadow-xl lg:w-[60%] w-[90%]">
            <label className="text-lg font-semibold">Nome do produto:</label>
            <input type="text" name="name" id="name" placeholder="Ex: Tênis Masculino VMax Velocity 300xl - Preto" className="border text-center text-lg border-gray-800 bg-gray-200 rounded-lg p-2  mt-2 mb-4 w-[60%]" required/>
            <label className="text-lg font-semibold">Descrição do produto:</label>
            <textarea name="description" id="description" placeholder="Ex: Este tênis masculino preto combina um visual sofisticado com um toque urbano, perfeito para qualquer ocasião. Com linhas limpas e um acabamento impecável, ele é ideal para quem busca um calçado que transite entre o casual e o elegante." className="border border-gray-800 bg-gray-200 rounded-lg p-2 mt-2 mb-4 w-[70%] h-[10em]" required></textarea>
            <label className="text-lg font-semibold" >Categoria do produto:</label>
            <select className="border border-gray-800 bg-gray-200 rounded-lg text-lg p-2 mt-2 mb-4" name="category" id="category" required>
              <option value="men's clothing">Roupas masculinas</option>
              <option value="women's clothing">Roupas femininas</option>
              <option value="jewelery">Joias</option>
              <option value="electronics">Eletronicos</option>
              <option value="outher">Outros</option>
            </select>
            <label className="text-lg font-semibold">Preço do produto:</label>
            <input type="text" name="price" id="price" placeholder="Ex: R$ 129,99" value={valor} onChange={handleChange} className="border text-center border-gray-800 bg-gray-200 rounded-lg p-2 mt-2 mb-4" required/>
            <label className="text-lg font-semibold">Imagem do produto:</label>
            <input type="file" name="image" id="image" className="border border-gray-800 bg-gray-200 rounded-lg p-4 mt-2 mb-4" required/>
            <div className="space-x-8">
              <button type="submit" className="bg-gray-400 text-white p-4 rounded hover:bg-gray-500 mb-4">Enviar</button>
              <button type="button" className="bg-red-400 text-white p-4 rounded hover:bg-red-200 mb-4" onClick={() => {}}>Cancelar</button>
            </div>
          </form>
        </div>
    </div>
  );
}

export default Sell;