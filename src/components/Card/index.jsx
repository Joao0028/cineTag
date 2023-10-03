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
    
    useEffect(()=>{
        return console.log(favorito)
    },[favorito])

    return <div>
        <img src={capa} alt={`Capa de ${titulo}`} />
        <div>
            <h1>{titulo}</h1>
            <button onClick={mudaEstado()}><img src={verificaEstado}  alt={`logo de ${mudaAlt}`} /></button>
        </div>
    </div>
}

export default Card