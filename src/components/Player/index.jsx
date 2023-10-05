import { useParams } from "react-router-dom";
import Banner from "../Banner";
import Titulo from "../Titulo";
import videos from "../../json/db.json";

export default function Player() {
  const parametros = useParams();
  const video = videos.find((video) => {
    return video.id == Number(parametros.id);
  });
  return (
    <>
      <Banner imagem="player" />
      <Titulo titulo="Player" />
      <section className="flex justify-center">
        <div className="container mb-28">
          <iframe
            className="m-auto max-sm:h-[180px] max-md:h-[32vh] max-lg:h-[45vh] lg:h-[50vh] xl:h-[60vh] 2xl:h-[70vh]"
            width="100%"
            src={video.link}
            title={video.titulo}
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </div>
      </section>
    </>
  );
}
