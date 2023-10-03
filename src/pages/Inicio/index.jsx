import Banner from "../../components/Banner";
import Cabecalho from "../../components/Cabecalho";
import Footer from "../../components/Footer";
import Titulo from "../../components/Titulo";


export default function Inicio() {
  return <>
    <Cabecalho />
    <Footer/>
    <Banner imagem="home"/>
    <Titulo titulo="Um lugar para guardar seus vídeos e filmes!"/>
  </>
}
