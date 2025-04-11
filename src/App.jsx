import { Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
//import { ProductProvider } from "./context/ProductContext";   //colocar em App() abaixo de ThemeProvider
import { ThemeProvider, ThemeContext } from "./context/ThemeContext";
import { useContext } from "react";

import Navbar from "./components/Navbar";
import Home from "./pages/home";
import Sobre from "./pages/about";
import Produtos from "./pages/products";
import Contato from "./pages/contact";
import Teste from "./pages/test";
import Page404 from "./pages/page404";
//import ProdInfo from "./pages/prodInfo";
import ProdInfoRedux from "./pages/prodInfoRedux";
import Login from "./pages/login";
import Sell from "./pages/sell";
import { PrivateRoute as Pv } from "./components/PrivateRoute";

function AppContent() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className={`${theme === "dark" ? "bg-gray-400" : "bg-gray-300"} flex-1`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/produtos" element={<Produtos />} />
          {/* <Route path="/teste" element={<Teste />} /> */}
          <Route path="*" element={<Page404 />} />
          <Route path="/produtos/:id" element={<ProdInfoRedux />} />
          <Route path="/login" element={<Login />} />
          <Route path="/teste" element={<Teste/>} />
          <Route path="/vender" element={<Pv> <Sell/> </Pv>}/>
        </Routes>
      </div>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>

        <AppContent />
        <ToastContainer />
  
    </ThemeProvider>
  );
}

export default App;