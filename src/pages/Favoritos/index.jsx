import Banner from "../../components/Banner";
import Titulo from "../../components/Titulo";
import Card from "../../components/Card";
import { useFavoritoContext } from "../../contextos/Favoritos";
export default function Favoritos() {
  const { favorito } = useFavoritoContext()
  return (
    <>
      <Banner imagem="favoritos" />
      <Titulo titulo="Meus Favoritos" />

      <section className="flex justify-center">
        <div className="container flex gap-4 justify-center flex-wrap">
            {favorito.map((video)=>{
                return(
                    <Card 
                    {...video}
                    key={video.id}
                    />
                )
            })}
        </div>
    </section>
    </>
  );
}
