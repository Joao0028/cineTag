import { BrowserRouter, Route, Routes } from "react-router-dom";
import Favoritos from "./pages/Favoritos";
import Inicio from "./pages/inicio";
import Cabecalho from "./components/Cabecalho";
import Footer from "./components/Footer";
import FavoritosProvider from "./contextos/Favoritos";
import Player from "./components/Player";
import PaginaNaoEncontrada from "./components/PaginaNaoEncontrada";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Cabecalho />
      <FavoritosProvider>
        <Routes>
          <Route path="/" element={<Inicio />} exact />
          <Route path="/favoritos" element={<Favoritos />} />
          <Route path="/:id" element={<Player />} />
          <Route path="*" element={<PaginaNaoEncontrada />}/>
        </Routes>
      </FavoritosProvider>
      <Footer />
    </BrowserRouter>
  );
}
