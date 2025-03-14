import { useState, useEffect } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ProductContext } from './ProductContext';

export function ProductProvider({ children }) {

  const loadSalesFromStorage = () => {
    const savedSales = localStorage.getItem("productSales");
    return savedSales ? JSON.parse(savedSales) : {};
  };

  const [sales, setSales] = useState(loadSalesFromStorage);
  const [products] = useState({
    1: { name: "Capinha S23 FE", description: "A capinha perfeita para seu celular S23 FE, com diversas cores para que você possa escolher, feita de silicone, com uma pegada agradável egostosa, aproveite e compre já a sua.", value: "R$ 49,90"},
    2: { name: "Capinha Iphone 13", description: "A capinha perfeta para o seu Iphone 13, com diversas cores para que você possa escolher, feita de silicone, com uma pegada agradavel e gostosa, aproveite e compre ja a sua.", value:"R$ 64,90"},
    3: { name: "Carregador sem Fio", description: "O carregador perfeito para seu celular, realiza um carregamento rapido e sem a necessidade de fios, tecnologia Wireless.", value: "R$ 109,90"},
    4: { name: "Caixa de Som JBL", description: "A Caixinha mais famosa do Brasil, conhecida pela sua ótima qualidade sonóra e alta durabilidade, não perca a chance de comprar está obra prima feita pela JBL, com o melhor som para que você possa escutar suas musicas como nunca", value: "327,90"}
});

  useEffect(() => {
    localStorage.setItem("productSales", JSON.stringify(sales));
  }, [sales]);

  const addSale = (id) => {
    setSales((prevSales) => ({
      ...prevSales,
      [id]: (prevSales[id] || 0) + 1,
    }));
    toast.success('Compra realizada com sucesso!');
  };

  return (
    <ProductContext.Provider value={{ sales, addSale, products }}>
      {children}
    </ProductContext.Provider>
  );
}
