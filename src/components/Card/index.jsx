import { useState } from "react";
import favoritado from "/imagens/favorite.png";
import naoFavoritado from "/imagens/favorite_outline.png";
import { useEffect } from "react";
import { useFavoritoContext } from "../../contextos/Favoritos";
import { Link } from "react-router-dom";

function Card({ titulo, capa, id }) {
  const { favorito, adicionarFavorito } = useFavoritoContext();

  const ehFavorito = favorito.some((fav) => fav.id === id);
  const icone = ehFavorito ? favoritado : naoFavoritado;

  return (
    <div
      className="shadow-md bg-cor-cinza font-semibold mb-4 max-w-[280px]
    "
    >
      
      <Link to={`/${id}`}>
      <img src={capa} alt={`Capa de ${titulo}`} />
      </Link>
      <div className="p-4 ">
        <Link to={`/${id}`}>
        <h2 className="mb-3">{titulo}</h2>
        </Link>
        
        <img
          src={icone}
          alt={`logo de favoritar`}
          onClick={() => {
            adicionarFavorito({ id, titulo, capa });
          }}
        />
      </div>
    </div>
  );
}

export default Card;
