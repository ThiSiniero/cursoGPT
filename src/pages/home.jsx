import "../index.css";
import { Link } from 'react-router-dom';
import Button from "../components/Button";

function Home() {
    return <>
      <div className="flex justify-center pb-12">
        <div className="text-center">
          <h2 className="p-4 mt-20 pb-20 font-bold text-3xl">Página Inicial</h2>
          <Button text="clique aqui e veja a grande variedade de nossos produtos" address="/produtos"/>
          <p className="mt-20 mb-8 text-lg">Caso você deseje vender algum tipo de produto em nossa loja, clique no botão abaixo e preencha o formulário.</p>
          <Button text="Adicionar Produto" address="/vender"/>
        </div>
      </div>
      <div className="bg-white mt-20 p-4"></div>
    </>
  }

export default Home;