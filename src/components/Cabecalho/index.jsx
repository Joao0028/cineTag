import { Link } from "react-router-dom";
import styles from "./Cabecalho.module.css";
import logo from "./logo.png";

export default function Cabecalho() {
  return (
    <header
      className="bg-cor-preto h-[82px] w-full flex justify-center items-center"
      id={styles.cabecalho}
    >
      <nav className="container max-sm:flex max-sm:items-center max-sm:flex-col sm:flex sm:justify-between">
        <Link to="/">
          <img src={logo} alt="Logo do CineTag" />
        </Link>

        <div className="text-cor-branco flex items-center gap-10">
          <Link to="/">Home</Link>
          <Link to="/favoritos">Favoritos</Link>
        </div>
      </nav>
    </header>
  );
}
