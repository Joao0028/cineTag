import Cabecalho from "../../components/Cabecalho"
import Footer from "../../components/Footer"
import Banner from "../../components/Banner"
import Titulo from "../../components/Titulo"
import Card from "../../components/Card"
export default function Favoritos(){
    return <>
    <Cabecalho />
    <Footer/>
    <Banner imagem="favoritos"/>
    <Titulo  titulo="Meus Favoritos"/>

    <Card />
  </>
}