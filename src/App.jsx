import { Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ProductProvider } from "./context/ProductContext";
import { ThemeProvider, ThemeContext } from "./context/ThemeContext";
import { useContext } from "react";

import Navbar from "./components/Navbar";
import Home from "./pages/home";
import Sobre from "./pages/about";
import Produtos from "./pages/products";
import Contato from "./pages/contact";
import Teste from "./pages/test";
import Page404 from "./pages/page404";
import ProdInfo from "./pages/prodInfo";

function AppContent() {
  const { theme } = useContext(ThemeContext);

  return <>
      <Navbar />
      <div className={`${theme === "dark" ? "bg-gray-400" : "bg-gray-100"}`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/produtos" element={<Produtos />} />
          <Route path="/teste" element={<Teste />} />
          <Route path="*" element={<Page404 />} />
          <Route path="/produtos/:id" element={<ProdInfo />} />
        </Routes>
      </div>
    </>
}

function App() {
  return (
    <ThemeProvider>
      <ProductProvider>
        <AppContent />
        <ToastContainer />
      </ProductProvider>
    </ThemeProvider>
  );
}

export default App;