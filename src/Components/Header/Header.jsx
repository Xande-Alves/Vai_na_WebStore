import { Link } from "react-router-dom";
import vnw from "../../assets/vnw.jpg";
import carro from "../../assets/carrinho.webp";
import s from "./header.module.scss";
import { useContext } from "react";
import { AppContext } from "../../Context";

export default function Header() {

  const { carrinho, setCarrinho } = useContext(AppContext);

  return (
    <header className={s.Header}>
      <div>
        <img src={vnw} alt="Logo da Vai na Web" />
        <h1>VAI NA WEBSTORE</h1>
      </div>
      <nav>
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/VestMasc"}>Vestuário Masculino</Link>
          </li>
          <li>
            <Link to={"/VestFem"}>Vestuário Feminino</Link>
          </li>
          <li>
            <Link to={"/Joias"}>Jóias</Link>
          </li>
          <li>
            <Link to={"/Eletronicos"}>Eletrônicos</Link>
          </li>
        </ul>
      </nav>
      <section>
        <Link>
          <img src={carro} alt="Imagem de carrinho de compras." />
          <span>Carrinho: {carrinho} itens</span>
        </Link>
      </section>
    </header>
  );
}
