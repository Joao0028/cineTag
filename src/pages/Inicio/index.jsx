import Banner from "../../components/Banner";
import SectionCards from "../../components/SectionCards";
import Titulo from "../../components/Titulo";

export default function Inicio() {
  return (
    <>
      <Banner imagem="home" />
      <Titulo titulo="Um lugar para guardar seus vídeos e filmes!" />
      <SectionCards />
    </>
  );
}
