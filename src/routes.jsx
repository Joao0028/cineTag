import { BrowserRouter, Route, Routes } from "react-router-dom";
import Favoritos from "./pages/Favoritos";
import Inicio from "./pages/Inicio";


export default function AppRoutes(){
    return <BrowserRouter>
        <Routes>
            <Route path="/" element={<Inicio />} exact/>
            <Route path="/favoritos" element={<Favoritos/>} />
        </Routes>
    </BrowserRouter>
}