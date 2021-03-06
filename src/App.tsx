import "../src/styles/global.scss";
import { Footer } from "./components/Footer";

import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Cadastrar } from "./pages/Cadastrar";
import { Produto1 } from "./pages/Produto1";

import { Routes, Route } from "react-router-dom";

import "../src/styles/global.scss";

export function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
      <Routes>
        <Route path="/cadastrar" element={<Cadastrar />} />
      </Routes>
      <Routes>
        <Route path="/produto1" element={<Produto1 />} />
      </Routes>

      <Footer />
    </>
  );
}
