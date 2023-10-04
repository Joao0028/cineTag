import { createContext, useState } from "react";
import Inicio from "../pages/inicio";
import Favoritos from "../pages/Favoritos";
import Card from "../components/Card";

export const FavoritosContext = createContext()
FavoritosContext.displayName = "Favoritos";

export default function FavoritosProvider({children}){
    const [favorito , setFavorito] = useState([])
    return <>
        <FavoritosContext.Provider value={{ favorito , setFavorito }}>
            {children}
        </FavoritosContext.Provider>
    </>
}

export function useFavoritoContext(){
    const { favorito , setFavorito} = useContext(FavoritosContext)
    
    function adicionarFavorito(novoFavorito){
        const favoritoRepetido = favorito.some(item => item.id === novoFavorito.id)

        let novaLista = [...setFavorito];
        
        if(!favoritoRepetido){
            novaLista.push(novoFavorito)
            return setFavorito(novaLista)
        }

        novaLista.splice(novaLista.indexOf(novoFavorito), 1);
        return setFavorito(novaLista);

    }
    return {
        favorito, 
        setFavorito
    }
}