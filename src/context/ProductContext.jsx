import { useState, useEffect, createContext } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const ProductContext = createContext();

export function ProductProvider({ children }) {

  const loadProductsFromStorage = () => {
    const savedSales = localStorage.getItem("productSales");
    return savedSales ? JSON.parse(savedSales) : 
    {
      1: { name: "Capinha S23 FE", description: "A capinha perfeita para seu celular S23 FE, com diversas cores para que você possa escolher, feita de silicone, com uma pegada agradável egostosa, aproveite e compre já a sua.", value: "R$ 49,90", sales: 0 },
      2: { name: "Capinha Iphone 13", description: "A capinha perfeta para o seu Iphone 13, com diversas cores para que você possa escolher, feita de silicone, com uma pegada agradavel e gostosa, aproveite e compre ja a sua.", value:"R$ 64,90", sales: 0},
      3: { name: "Carregador sem Fio", description: "O carregador perfeito para seu celular, realiza um carregamento rapido e sem a necessidade de fios, tecnologia Wireless.", value: "R$ 109,90", sales: 0},
      4: { name: "Caixa de Som JBL", description: "A Caixinha mais famosa do Brasil, conhecida pela sua ótima qualidade sonóra e alta durabilidade, não perca a chance de comprar está obra prima feita pela JBL, com o melhor som para que você possa escutar suas musicas como nunca", value: "327,90", sales: 0}
    };
  };

  const [products, setProducts] = useState(loadProductsFromStorage);

  useEffect(() => {
    localStorage.setItem("productSales", JSON.stringify(products));
  }, [products]);

  const addSale = (id) => {
    setProducts((prevProcucts) => ({
      ...prevProcucts,
      [id]: {
        ...prevProcucts[id],
        sales: (prevProcucts[id].sales || 0) + 1,
      },
    }));
    toast.success('Compra realizada com sucesso!', {
      position: "bottom-right",
      className: 'max-w-[60%] sm:max-w-md mt-4 mr-4',
      bodyClassName: 'text-sm',
    });    
  };

  return (
    <ProductContext.Provider value={{ addSale, products }}>
      {children}
    </ProductContext.Provider>
  );
}
