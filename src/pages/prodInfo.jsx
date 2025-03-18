import "../index.css"
import 'react-toastify/dist/ReactToastify.css';
import { useParams, Link } from "react-router-dom";
import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";

import Button from "../components/Button";

function ProdInfo() {
    const { id } = useParams();

    const {addSale, products} = useContext(ProductContext);
    
    const produto= products[id];
    
    if (!produto) {
        return <p className="text-red-500">Produto não encontrado!</p>;
    }

    return (
        <div className="flex flex-col items-center justify-center pb-12 mb-10">
            <h2 className="p-4 font-bold text-3xl">Detalhes do Produto</h2>
            <h3 className="text-xl font-bold pb-10">{produto.name}</h3>
            <p className="font-semibold"> {produto.description}</p>
            <p className="mx-20 px-80 pt-10 indent-20">
                Este produto é fabricado com materiais de alta qualidade, garantindo durabilidade e resistência. Possui design ergonômico, proporcionando conforto durante o uso prolongado. A tecnologia avançada incorporada oferece desempenho superior e eficiência energética. Ideal para uso doméstico e profissional, atende às necessidades dos usuários mais exigentes. <br/> Com garantia de 1 ano, suporte técnico especializado e manual de instruções detalhado, você pode contar com assistência completa. Disponível em diversas cores e tamanhos, permite personalização de acordo com suas preferências. A embalagem é eco-friendly, contribuindo para a preservação do meio ambiente.
            </p>
            <p className="mx-20 px-80 indent-20">
                O produto inclui acessórios exclusivos que ampliam suas funcionalidades, como cabos de conexão, adaptadores e suportes ajustáveis. A instalação é simples e rápida, com passo a passo intuitivo incluso. Compatível com os principais sistemas operacionais, oferece integração perfeita com seus dispositivos. A manutenção é facilitada pelo design modular, que permite a substituição de peças sem complicações. <br/> Além disso, o produto é certificado por órgãos internacionais, garantindo segurança e conformidade com padrões globais. A entrega é realizada em até 5 dias úteis, com opção de rastreamento em tempo real. A satisfação do cliente é nossa prioridade, por isso oferecemos política de devolução sem burocracia.
            </p>
            <p className="mx-20 px-80 indent-20">
                Com tecnologia de ponta, este produto oferece conectividade avançada, incluindo Bluetooth 5.0, Wi-Fi de alta velocidade e portas USB-C. A bateria de longa duração permite uso contínuo por até 24 horas, com recarga rápida em apenas 2 horas. O design moderno e compacto facilita o transporte e o armazenamento. Inclui software exclusivo para personalização de funções e monitoramento em tempo real. <br/> O produto é resistente a água e poeira, com classificação IP68, ideal para uso em diversos ambientes. Acompanha garantia estendida opcional de 2 anos, com cobertura total para defeitos de fabricação. Experimente a excelência e a inovação em um único produto, projetado para superar suas expectativas.
            </p>
            <p className="text-red-600 font-bold my-4">Produtos Vendidos: {products[id].sales || 0}</p>
            <p className="text-green-600 font-bold">{produto.value}</p>
            <Link to={"/produtos"} className="rounded bg-green-400 font-bold hover:bg-green-600 hover:text-white p-4 mb-4" onClick={() => addSale(id)}>
                COMPRAR
            </Link>
            <Button text={"voltar para produtos"} address={"/produtos"} />
        </div>
    );
}

export default ProdInfo;