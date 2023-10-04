import { BrowserRouter, Route, Routes } from "react-router-dom";
import Favoritos from "./pages/Favoritos";
import Inicio from "./pages/inicio";
import Cabecalho from "./components/Cabecalho";
import Footer from "./components/Footer";
import FavoritosProvider from "./contextos/Favoritos";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Cabecalho />
      <FavoritosProvider>
        <Routes>
          <Route path="/" element={<Inicio />} exact />
          <Route path="/favoritos" element={<Favoritos />} />
        </Routes>
      </FavoritosProvider>
      <Footer />
    </BrowserRouter>
  );
}
