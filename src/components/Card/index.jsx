import { useState } from "react"
import favoritado from "/imagens/favorite.png"
import naoFavoritado from "/imagens/favorite_outline.png"
import { useEffect } from "react"

function Card({titulo, capa, id}){
    const [favorito , setFavorito] = useState(false)

    const verificaEstado = favorito === true? favoritado : naoFavoritado
    const mudaAlt = favorito === true? "favoritado." : "não favoritado."
    
    function mudaEstado(){
        return favorito === true? () => setFavorito(false) : () => setFavorito(true)
    }
    
  

    return <div className="shadow-md bg-cor-cinza font-semibold mb-4 max-w-[282px]
    ">
        <img  src={capa} alt={`Capa de ${titulo}`} />
        <div className="p-4">
            <h2 className="mb-3">{titulo}</h2>
            <button onClick={mudaEstado()}><img src={verificaEstado}  alt={`logo de ${mudaAlt}`} /></button>
        </div>
    </div>
}

export default Card